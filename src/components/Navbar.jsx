import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-left">
        <img src='./public\images (6).png' alt='' />
        <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Favourites</li>
        </ul>
      </div>
      <div className="nav-right">
        <img src='./public\search_icon.svg' alt='' className='icon'/>
          <div className="searchForm">
        <input type="text" placeholder="Search..." />
        </div>
        
        <img src='./download (5).png' alt='' className='icon'/>
        <img src='./profile_img.png' alt='' className='icon'/>
        <p>Sign out</p>

        </div>
    </div>
  )
}

export default Navbar
