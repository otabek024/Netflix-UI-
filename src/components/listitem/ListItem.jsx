import { useState } from 'react';
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpOutlined } from '@material-ui/icons'
import './listitem.scss'
import movie from '../../videos/SPIDER-MAN_ NO WAY HOME - Official Trailer (HD).mp4'

const ListItem = ({index}) => {

  const [isHovered, setIsHovered] = useState(false);
  const trailer = movie

  return (
    <div className="listItem"
      style={{left: isHovered && index * 225 -50 + index * 2.5}} 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRQcIUyrD_q1Lm_ybOISg0HR6lM6OFgCGX6RipErPOsKw-YkqchJyAjnLv-B8kHVcHkYpqOhRaljU0CKJz6Pw4DAB3BEijE9OuX27f-kDPBLw-bgSxdEOmR7EbBM.jpg?r=2ba" 
        alt="" 
      />
      {isHovered && (
    <>
      <video src={movie} autoPlay={true} loop></video>
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow  className="icon"/>
          <Add  className="icon"/>
          <ThumbUpOutlined  className="icon"/>
          <ThumbDownAltOutlined  className="icon"/>
        </div>
        <div className="itemInfoTop">
          <span>1 hour 14 mins</span>
          <span className="limit">+16</span>
          <span>1999</span>
        </div>
        <div className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eius optio ab explicabo, vitae qui, provident expedita 
          quas odit nesciunt sunt dolor blanditiis. 
        </div>
        <div className="genre">Action</div>
      </div>
    </>
      )}
    </div>
  )
}

export default ListItem
