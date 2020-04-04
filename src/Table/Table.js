import React, {Component} from 'react'
import './Table.css'
import '../App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom'
export default class Table extends Component  {
    constructor(props) {
        super(props);
        
        this.state = {
            active: false,
          };
      }


      

      addActiveClass = (e) => {
          e.preventDefault();
        const currentState = this.state.active;
        this.setState({ active: !currentState });
    };


      render() {AOS.init({
        once: true,
        duration: 2000,
        offset: -150,
        
    });
    return (<div className='tablestyle'>
        <table className='table  table-dark table-responsive table-hover'>
            <thead className='idtable'>
                <tr>
                    <th className='idtable'>Id</th>
                    <th className='idtable'> Название</th>
                    <th className='idtable'>Дата выпуска</th>
                    <th className='idtable'>Описание</th>
                    <th className='idtable'>Картинка</th>
                </tr>
            </thead>
            <tbody>
                {this.props.golfs.map((item, index) => (<tr>
                    <td>{index + 1}</td>
                    <td>{item.series}</td>
                    <td>{item.engine}</td>
                    <td>{item.description}</td>
                    <td data-aos='zoom-in'><Link to={`/golfseries/${item._id}`}><img className='images' src={item.image} alt=''></img></Link></td>

                </tr>))}
            </tbody>
        </table>
    </div>);
    };
}
