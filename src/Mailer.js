import React, {Component} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'

const emailRegex = RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)

const formValid = formErrors => {
    let valid = true;
    
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false)
    });

    Object.values(formErrors).forEach(val =>{
        val === null && (valid = false)
    })
        return valid;
    


}

export default class Mailer extends Component {
    constructor(props) {
        super(props);

        this.state = {
                email: '',
                subject: '',
                message: '',
                formErrors: {
                    email: '',
                    subject: '',
                    message: ''
                }
                
        }
    }   
    onSubmit = async (e) => {
        e.preventDefault();
        if (this.state.message === "" || this.state.email === '' || this.state.subject === '') {
            alert("В форме есть пустые строки");
          }
        else if (formValid(this.state.formErrors)) {
            await fetch('http://localhost:5000/gallery/contact/', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify(this.state),
            
        })
        .then(response=> console.log(response),
         this.setState({email: '', subject: '', message: ''}))
        
        .catch((error) => {
            console.log(error);
          })
        } else {
            console.error('form invalid')
        }  
    }

    handleChange = e => {
        e.preventDefault();

        const {name, value} = e.target;
        let formErrors = this.state.formErrors
        
        switch (name) {
            case 'email':
                formErrors.email = emailRegex.test(value) && value.length > 0 
                ? '' 
                : 'Неправильный формат ввода e-mail';
                break;
                case 'subject':
                    formErrors.subject = value.length < 2 && value.length > 0 
                    ? 'Тема меньше 2 символов' 
                    : '';
                    break;
                    case 'message':
                formErrors.message = value.length < 2 && value.length > 0 
                ? 'Сообщение меньше 2 символов' 
                : '';
                break;
                default:
                break;
        }
        this.setState({formErrors, [name] : value}, () => console.log(this.state))
    }


render() {
  const {formErrors} = this.state;
  AOS.init({
    offset: -100,
    duration: 2000,
    
});
    return (
        <div className='mail' data-aos='zoom-in-right' data-aos-once='true'>
            
            <form className='mailform' onSubmit={this.onSubmit}>
                
                
                <h1>Обратная связь</h1>
                <div >
                {(
                <span className='errorMessage'>{formErrors.email}</span>
            )}
            <input className={formErrors.email.length > 0 ? 'error' : 'inputEmail'} type='text' value={this.state.email} name='email' placeholder='Ваш email'  
            onChange={this.handleChange}/>
            
                </div>
                <div >
            {(
                <span className='errorMessage'>{formErrors.subject}</span>
            )}
            <input className='inputSubject' type='text'  value={this.state.subject} name='subject' placeholder='Тема сообщения' 
            onChange={this.handleChange}/>
            
            </div>
            <div >
            {(
                <span className='errorMessage'>{formErrors.message}</span>
            )}
            <textarea rows='4' className='inputMessage' type='text' value={this.state.message} name='message' placeholder='Сообщение'  
            onChange={this.handleChange}/>
            
            </div>
            <button className='mailbutton'>Отправить e-mail</button>
            
            </form>
        </div>
    )
}
}
