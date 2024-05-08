import React, {useEffect} from 'react';
import '../styles/MainContainer.css';
import { Banner } from './Banner';
import { FaUsers } from 'react-icons/fa';
import { AudioList } from './AudioList';

const MainContainer = () => {

  useEffect(()=>{
    const allLi = document
    .querySelector('.mainContainer .menuList ul')
    .querySelectorAll('li');

    function changeMenuActive(){{
      allLi.forEach(n=>{
        n.classList.remove('active')
      })
      this.classList.add('active')
    }}

    allLi.forEach(e=>{
      e.addEventListener('click', changeMenuActive)
    })
  },
  [])

  return (
    <div className='mainContainer'>
      <Banner />
      <div className="menuList">
        <ul>
          <li><a href="#">Popular</a></li>
          <li><a href="#">Albums</a></li>
          <li><a href="#">Songs</a></li>
          <li><a href="#">Fans</a></li>
          <li><a href="#">About</a></li>
        </ul>
        <p><i><FaUsers /></i>12.5M <span>Followers</span></p>
      </div>
      <AudioList />
    </div>
  )
}

export {MainContainer}