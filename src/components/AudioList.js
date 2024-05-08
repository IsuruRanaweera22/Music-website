import React, { useState, useEffect } from 'react';
import { FaHeadphones, FaHeart, FaRegClock, FaRegHeart } from 'react-icons/fa';
import {Songs} from '../components/Songs';
import MusicPlayer from '../components/MusicPlayer';

const AudioList = () => {

  const [songs, setSongs] = useState(Songs);
  const [song, setSong] = useState(songs[0].song);
  const [img, setImage] = useState(songs[0].imgSrc);

  useEffect(()=>{
    const allsongs = document.querySelectorAll('.songs');
    function changeActive(){
      allsongs.forEach(n=>n.classList.remove('active'))
      this.classList.add('active')
    }

    allsongs.forEach(n=>n.addEventListener('click', changeActive))
  },[])

  const changeFavourite = (id) => {
    Songs.forEach((song) => {
      if (song.id == id) {
        song.favourite = !song.favourite;
      }
    });
    setSongs([...songs]);
  };

  const setMainSong = (songSrc, imgSrc)=>{
    setSong(songSrc)
    setImage(imgSrc)
  }

  return (
    <div className='audioList'>
      <h2 className="title">
        The list <span>
          {`${Songs.length} Songs`} 
        </span>
      </h2>
               
      <div className="songContainer">

        {songs &&
          songs?.map((song, index)=>(
            <div className="songs" key={song?.id} 
            onClick={()=>{
              setMainSong(song?.song, song?.imgSrc)
            }}>
              <div className="count">{`#${index + 1}`}</div>
              <div className="song">
                <div className="imageBox">
                  <img src={song?.imgSrc} alt="bi" />
                </div>
                <div className="section">
                  <p className="songName">{song?.songName}
                    <span className="spanArtist">{song?.artist}</span>
                  </p>
                  <div className="hits">
                    <p className="hit">
                      <i><FaHeadphones /></i>
                      100,000,000
                    </p>
                    <p className="duration">
                      <i><FaRegClock /></i>
                      03:04
                    </p>
                    <div className="favourites"
                    onClick={() => changeFavourite(song?.id)}>
                    {
                    song?.favourite?(
                    <i>
                      <FaHeart />
                    </i>
                    ):(
                    <i>
                      <FaRegHeart />
                    </i>
                    )
                    }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))} 
      </div>
      <MusicPlayer songSrc={song} imgSrc={img} />
    </div>
  )
}

export {AudioList}