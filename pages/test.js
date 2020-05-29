import TypeOfPost from "../component/SocialMedia/TypeOfPost";
import ReactAudioPlayer from 'react-audio-player';
//...
function test() {
    return(<div>
        <ReactAudioPlayer
            src={"./static/Audio/audioFile-2020-05-29,5_49_58.mp3"}
            autoPlay
            controls
        />
    </div>)
}
export default test