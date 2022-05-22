
import React from 'react';
import ReactDom from 'react-dom';


function App() {
  return <div className="wrapper clear">
<header className='d-flex justify-between align-center'>
  <div className= "d-flex align-center">
  <img width={100} height={100} src='img/logo.svg'/>
  <div  className= "headerInfo">
    <h1 className='text-uppercase'> Minimal Style</h1>
    <p>Магазин одежд</p>
  </div>
  </div>
  <ul className='d-flex'>
    <li className='mr-30'>
      <img width={30} height={30} src='img/cart.svg'/>  
          
    <span>0 coм</span>
    </li>
    <li>
    <img width={30} height={30} src='img/user.svg'/>  
    </li>
  </ul>
</header>
<div className='content p-40'>
<h1>Список выборов </h1>
<div className='underwear d-flex'>
    <div className='card'>
  <img width={150} height={170} src='/img/outwear/top1.jpg' alt='outwear'/>
  <p>МУЖСКИЕ РУБАШКИ POLO</p>
      <div className='d-flex justify-between '>
        <div className=' flex-column'>
        <span>Цена:</span>
        <b>4000 сом</b>      
      </div>
      </div>
        
      </div>
    
   
    <div className='card'>
  <img width={150} height={170} src='/img/outwear/top2.jpg' alt='outwear'/>
  <p>МУЖСКИЕ РУБАШКИ POLO</p>
      <div className='d-flex justify-between '>
        <div className=' flex-column'>
        <span>Цена:</span>
        <b>4000 сом</b>      
      </div>
        
      </div>
    </div>
    <div className='card'>
  <img width={150} height={170} src='/img/outwear/top3.jpg' alt='outwear'/>
  <p>МУЖСКИЕ РУБАШКИ POLO</p>
      <div className='d-flex justify-between '>
        <div className=' flex-column'>
        <span>Цена:</span>
        <b>4000 сом</b>      
      </div>
        
      </div>
    </div>
    <div className='card'>
  <img width={150} height={170} src='/img/outwear/top4.jpg' alt='outwear'/>
  <p>МУЖСКИЕ РУБАШКИ POLO</p>
      <div className='d-flex justify-between '>
        <div className=' flex-column'>
        <span>Цена:</span>
        <b>4000 сом</b>      
      </div>    
    </div>
    </div>
        
    </div>
  </div>
</div>

  
     
}

export default App;
