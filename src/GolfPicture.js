import React, {Component} from 'react'
import axios from 'axios'
import './App.css'
import {Link} from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loader from './Loader/Loader'

class GolfPicture extends Component{
constructor(props){
    super(props)

    this.state = {
        isLoading: true,
        exactGolf: ''
        
          
    }
}

componentDidMount() {
    axios.get(`/golfseries/${this.props.match.params.id}`)
    .then (response => {
      this.setState({isLoading: false, exactGolf : response.data.image})
      console.log(this.state.exactGolf); 
    })
    .catch((error) => {
      console.log(error);
    })
  }


        render()  {
            AOS.init({
                offset: 350,
                duration: 2000,
                
            });
    return(
                <React.Fragment>
        { this.state.isLoading ? <div className='golfseriescar'><Loader /></div> :
        <div className='golfseriescar'>   
                <h1 className='qwe'>Нажмите на картинку, чтобы вернуться к таблице</h1>
                <div data-aos='zoom-in' className='imagecontainer'>
               <Link to='/golfseries'><div><div><img className='image-new' src={this.state.exactGolf} alt='' /></div></div></Link>
               </div>
        </div>
    }</React.Fragment>
    )
        }
}

export default GolfPicture
