import { ArrowBackOutlined } from "@material-ui/icons"
import "./watch.scss"
import movie from '../../videos/SPIDER-MAN_ NO WAY HOME - Official Trailer (HD).mp4'

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video src={movie} className="video" autoPlay progress controls ></video>
    </div>
  )
}

export default Watch
