import React, {Component} from 'react'
import './App.css'
import axios from 'axios';

export default class CreateTable extends Component {
    constructor(props) {
        super(props); 
        this.onChangeSeries = this.onChangeSeries.bind(this);
        this.onChangeEngine = this.onChangeEngine.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            series: '',
            engine: '',
            description: '',
            image: '',
        }
    }



    onChangeSeries(e) {
        this.setState({
            series: e.target.value
        });
    }

    onChangeEngine(e) {
        this.setState({
            engine: e.target.value
        });
    }

    onChangeImage(e) {
        this.setState({
            image: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const golf = {
            series: this.state.series,
            engine: this.state.engine,
            description: this.state.description,
            image: this.state.image
        }

        axios.post('/golfseries/add', golf)
        .then(res => console.log(res.data));
        window.location = '/golfseries';
    }

    render() {
    return (
       <div>
            <form className='formm' onSubmit={this.onSubmit}>
               
                <input placeholder='название' className='' type = 'text'
                required
                value={this.state.series}
                onChange={this.onChangeSeries} />
                
                <input placeholder='дата'className='' type = 'text'
                required
                value={this.state.engine}
                onChange={this.onChangeEngine} />

                <input placeholder='описание'className='description' type = 'textarea'
                required
                value={this.state.description}
                onChange={this.onChangeDescription} />

                <input placeholder='картинка'className='description' type = 'textarea'
                required
                value={this.state.image}
                onChange={this.onChangeImage} />
                <input className='submit' type='submit' value='Отправить' />
                
            </form>
       </div>
     )
    }
} 