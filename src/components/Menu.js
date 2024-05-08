import React, {useEffect} from 'react'

const Menu = ({title, menuObject}) => {

  useEffect(()=>{
    const allLi = document
    .querySelector('.menuContainer ul')
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
    <div className='menuContainer'>
      <p className='title'>{title}</p>
      <ul>
        {
          menuObject?.map((ele)=>{
            return<li key={ele.id}>
              <a href="#">
                <i>
                  {ele.icon}
                </i>
                <span>
                  {ele.name}
                </span>
              </a>
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default Menu