import React from 'react'
import {FaPlus} from 'react-icons/fa'
import {BsMusicNoteList, BsTrash} from 'react-icons/bs'
import {PlayList} from './PlayList';

const MenuPlayList = () => {
  return (
    <div className='playListContainer'>
      <div className="nameContainer">
        <p>PlayLists</p>
        <i><FaPlus /></i>
      </div>
      <div className="playListScroll">
          {
            PlayList?.map((ele)=>(
                <div className="playList" key={ele.id}>
                  <i className='li-icon'>
                  <BsMusicNoteList />
                  </i>
                  <p>
                    {
                      ele.name
                    }
                  </p>
                  <i className='trash'>
                    <BsTrash />
                  </i>
                </div>
                
            ))
          }
      </div>
    </div>
  )
}

export default MenuPlayList