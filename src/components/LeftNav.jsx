import { Link } from 'react-router-dom'
import React from 'react'
const leftNavStyle = {
    /* border: 2px solid white; */
    width: "200px",
    height: '100vh',
   borderRight:'1px dotted #FC1503',
    marginTop:'30px',
    marginLeft:'10px'
}
const navlinksStyle = {
    color:'white'
}
const LeftNav = () => {
  return (
    <div style={leftNavStyle} >
          <button className='category-btn' style={{
                background: true&& '#FC1503',color:'white', marginRight:'20px'
            }}
          >
                <span style={{
                    opacity: true ? '1' : '0.8'
                }}> <Link to="/likedvideos" style={navlinksStyle}>Liked Videos 👍</Link> </span>
            </button>
        <button className='category-btn' style={{
                background: true&& '#FC1503',color:'white', marginRight:'20px'
            }}
          >
                <span style={{
                    opacity: true ? '1' : '0.7'
                }}><Link to="/watchlater" style={navlinksStyle}> Watch Later ⏲️</Link></span>
            </button>
      
        <button className='category-btn' style={{
                background: true&& '#FC1503',color:'white', marginRight:'20px'
            }}
          >
                <span style={{
                    opacity: true ? '1' : '0.8'
                }}><Link to="history" style={navlinksStyle}>History</Link> </span>
            </button>
        <button className='category-btn' style={{
                background: true&& '#FC1503',color:'white', marginRight:'20px'
            }}
          >
                <span style={{
                    opacity: true ? '1' : '0.8'
                }}>Playlists 🖆 </span>
            </button>
    </div>
  )
}

export default LeftNav