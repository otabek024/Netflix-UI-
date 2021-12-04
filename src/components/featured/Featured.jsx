import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import './featured.scss'

const Featured = ({type}) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="romance">Romance</option>
            <option value="thriller">Thriller</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="horror">Horror</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src="https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfXcIqTBOGm5dY0aAvM_ZyUR6SMwIEIJ2sreX_dyiNQQCMZavTrkTPXQ5B0FCRJerX8tKne3xh2Z8zNXmBMX5oGBArQ3.jpg?r=e8b" 
        alt="" 
      />
      <div className="info">
        <img 
          src="https://clipart.info/images/ccovers/1559828585Marvel-Spider-Man-Logo-Png.png" 
          alt="" 
        />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Ea, a quos totam dolore ex expedita rerum explicabo. Nesciunt 
          vero repellendus eum quidem, vitae dolores exercitationem 
          veniam odit consectetur quos eveniet et qui corporis beatae.
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Featured
