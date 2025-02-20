import React from 'react';
import '../styles/LeftMenu.css';
import { FaSpotify } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import {BiSearchAlt} from "react-icons/bi";
import Menu from './Menu';
import { MenuList } from './MenuList';
import MenuPlayList  from './MenuPlayList';
import { TrackList } from './TrackList';

const LeftMenu = () => {
  return (
    <div className='leftMenu'>

      <div className="logoContainer">
        <i><FaSpotify /></i>
        <h2>Musiczz</h2>
        <i><BsThreeDots /></i>  
      </div>

      <div className="searchBox">
        <input type="text" placeholder='Search...' />
        <i className='searchIcon'>
          <BiSearchAlt />
        </i>
      </div>
      <Menu title='Menu' menuObject={MenuList}/>
      <MenuPlayList />
      <TrackList />

    </div>
  )
}

export {LeftMenu}