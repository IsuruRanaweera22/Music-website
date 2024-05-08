import React, {useState, useRef, useEffect} from 'react';
import '../styles/MusicPlayer.css';
import { FaBackward, FaForward, FaHeart, FaPause, FaPlay, FaRegHeart, FaShareAlt, FaStepBackward, FaStepForward } from 'react-icons/fa';
import {BsDownload} from 'react-icons/bs';

const MusicPlayer = ({songSrc, imgSrc}) => {
  const [love, setLove] = useState(false);
  const [isPlaying, setisPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioPlayer = useRef();
  const progressBar = useRef();
  const animationRef = useRef();

  useEffect(()=>{
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds)
    progressBar.current.max = seconds;
  }, [
    audioPlayer?.current?.loadedmetadata,
    audioPlayer?.current?.readyState
  ]);

  const changeisPlaying = ()=>{
    // const prevVal = isPlaying;
    if(!isPlaying){
      audioPlayer.current.play();
      animationRef.current = window.requestAnimationFrame(whilePlaying)
    }else{
      audioPlayer.current.pause();
      window.cancelAnimationFrame(animationRef.current)
    }
    setisPlaying(!isPlaying)
  }

  const calculateTime = (sec) => {
    const minuts = Math.floor(sec/60)
    const returnMin = minuts<10 ? `0${minuts}` : `${minuts}`;

    const seconds = Math.floor(sec%60)
    const returnSec = seconds<10 ? `0${seconds}` : `${seconds}`;

    return `${returnMin}:${returnSec}`
  }

  const whilePlaying = ()=>{
    progressBar.current.value = audioPlayer.current.currentTime;
    changeCurrentTime()
    animationRef.current = window.requestAnimationFrame(whilePlaying)
  }

  const changeProgress = ()=>{
    audioPlayer.current.currentTime = progressBar.current.value;
    changeCurrentTime()
  }

  const changeCurrentTime = ()=>{
    progressBar.current.style.setProperty('--player-played', `${(progressBar.current.value/duration)*100}%`)
    setCurrentTime(progressBar.current.value)
  }

  const changeLove = ()=>{
    setLove(!love)
  }

  return (
    <div className='musicPlayer'>

      <div className="songImage">
        <img src={imgSrc} alt="bi" />
      </div>
      <div className="songAttributes">
        <audio src={songSrc} preload="metadata" ref={audioPlayer} ></audio>

        <div className="top">
          <div className="left">
            <div className="love" onClick={changeLove}>
              {
                love?
                <i><FaHeart/></i>
                :
                <i><FaRegHeart/></i>
              }
            </div>
            <div className="download">
              <i>
                <BsDownload/>
              </i>
            </div>
          </div>
          <div className="middle">
            <div className="backward">
              <i><FaBackward/></i>
              <i><FaStepBackward/></i>
            </div>
            <div className="playPause" onClick={changeisPlaying}>
              
              {
                isPlaying?
                <i><FaPause/></i>
                :
                <i><FaPlay/></i> 
              }

            </div>
            <div className="foward">
              <i><FaStepForward/></i>
              <i><FaForward/></i>
            </div>
          </div>
          <div className="right">
            <i><FaShareAlt/></i>
          </div>
        </div>
        <div className="bottom">
          <div className="currentTime">{calculateTime(currentTime)}</div>
          <input type="range" className='progressBar' ref={progressBar} onChange={changeProgress}/>
          <div className="duration">{duration && !isNaN(duration) && calculateTime(duration)
          ? calculateTime(duration): "00:00"}
          </div>
        </div>
      </div>

    </div>
  )
}

export default MusicPlayer