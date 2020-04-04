import React, {Component} from 'react'
import './App.css'
import axios from 'axios';

export default class CreateComments extends Component {
    constructor(props) {
        super(props); 
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            description: ''
        }
    }



    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();

        const comment = {
            username: this.state.username,
            description: this.state.description
        }

        axios.post('/comments-backend/add/', comment)
        .then(res => console.log(res.data));
        window.location = '/comments';
    }

    render() {
    return (
       <div>
            <form className='form' onSubmit={this.onSubmit}>
               
                <input placeholder='Введите имя пользователя' className='username' type = 'text'
                required
                value={this.state.username}
                onChange={this.onChangeUsername} />
                
                <input placeholder='Введите ваш комментарий'className='username' type = 'text'
                required
                value={this.state.description}
                onChange={this.onChangeDescription} />
                <input className='submit' type='submit' value='Отправить' />
                
            </form>
       </div>
     )
    }
}