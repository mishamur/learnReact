import React from 'react';
// import Header from './Header';
// import Technologyes from './Technologyes';

import './App.css'; 
const App = () => {
  return (
    <div className ='app-wrapper'>
      <header className = 'header'>
        <img src = 'https://img2.pngindir.com/20180419/kle/kisspng-logo-canon-clip-art-icon-round-logo-design-5ad87fcf006098.6307124815241379350016.jpg' ></img>
      </header>
      <nav className ='nav'>
        <div><a href = "https://vk.com/lelush_lamperuzh">profile</a></div>
        <div><a href = "https://vk.com/lelush_lamperuzh">messages</a></div>
        <div><a href = "https://vk.com/lelush_lamperuzh">news</a></div>
        <div><a href = "https://vk.com/lelush_lamperuzh">music</a></div>
        <div><a href = "https://vk.com/lelush_lamperuzh">setings</a></div>

      </nav>
      <div className = 'content'>
        <img src = 'https://demotivation.ru/wp-content/uploads/2020/01/topoboi.com-40187.jpg'></img>
      </div>
    </div>
  );
}

const Myform = () => {
  return(
    <div>
      <button id = 'angryBut'>angry button</button>
    </div>
  )
}

// window.onload = function() {
//     let angryBut = document.getElementById('angryBut');

//     angryBut.addEventListener('click', function() {
//       alert('go hit your face!');
//     });
// }




export default App;
