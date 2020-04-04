import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
import Loader from './Loader/Loader'
import Table from './Table/Table'







export default class GolfSeries extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isLoading: true,

          golfs: []};
      }

    componentDidMount() {
        axios.get('http://localhost:5000/golfseries/')
        .then (response => {
          this.setState({isLoading: false, golfs: response.data})
          console.log(this.state.golfs); 
        })
        .catch((error) => {
          console.log(error);
        })
      }

      /*golfList() {
        console.log('hello')
        
          return this.state.golfs.map(currentgolf => {
          return <Golf golf={currentgolf} key={currentgolf._id} />;
        });
        
      } */

    render() {
      
        return (

          <React.Fragment>
          {this.state.isLoading ? <div className='golfseriescar'><Loader /></div> :
            <div className='golfseriescar'>
                <h1 className='qwe'>Немного истории</h1>

                <h3 style={{fontSize:'15px'}}className='qwe'>Вы можете нажать на картинку, чтобы посмотреть изображение полностью</h3>
                <Table
                
                golfs ={this.state.golfs}/>
                 
                 <div className='space'>
        
        <p>&copy; 2020 Megachel. Все права защищены. </p>
      
      </div>
                                
            </div>

          }
          
          </React.Fragment>
        )
    }
}
