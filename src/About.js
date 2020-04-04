import React from 'react'
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Mailer from './Mailer'

export default function About() {

   
    AOS.init({
        offset: 350,
        duration: 2000,
        
    });
    return (
        <div> 
            <div className='main' >
                <div className='text' data-aos='zoom-in' >
            <h2 className='name'>Das Auto</h2>
            <h2 className='best'>Volkswagen Golf — автомобиль немецкой компании Volkswagen.</h2>
           

            </div>
        </div> 
        <section className='golfos'>
                <div className='container'>
                    <div className='title-heading' data-aos='fade-up'>
                    <h3>Дамы и господа...</h3>
                <h1>VOLKSWAGEN GOLF</h1>
                <p>Сайт создан, чтобы нести в массы культуру автомобиля VW Golf!</p>
                    </div>

                 <div className='golf-grid' data-aos='fade-right'>
                     <div className='golf-grid-item golf5' >
                     <h1>Комфорт</h1>
                    <p>Удобство за приемлемые деньги</p>
                     </div>
                     <div className='golf-grid-item golf6'>
                     <h1>Качество</h1>
                    <p>Страна производитель говорит за себя</p>
                     </div>
                     <div className='golf-grid-item golf7'>
                     <h1>Стиль</h1>
                    <p>Можете просто посмотреть сами!</p>
                     </div>
                 </div>
                </div> 
            </section>
            
            <section className='created'>
              <div className='mailer'> </div> 
            <div className='createdby'>
                <div  data-aos='flip-up' data-aos-offset='50' data-aos-once='true' className='text-creator'>
                    <h1> ... </h1>
                    <p>Приветствую на сайте, have fun! </p>
                </div>
                <div data-aos='zoom-in' data-aos-offset='50'  data-aos-once='true' className='creator-img'>
                    <div className='creator'></div>
                    <h1>Gleb Megachel</h1> 
                   
                </div>
           <Mailer />
            </div>
            
            </section>
           
            
            <div className='space'>
        
        <p>&copy; 2020 Megachel. Все права защищены. </p>
      </div>
            </div>
    )
}
