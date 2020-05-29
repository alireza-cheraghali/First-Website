import TypeOfPost from "../component/SocialMedia/TypeOfPost";
import Videojs from '../component/video'
import {Fragment} from 'react'
import Head from "next/head";
function test(props) {
    const videoJsOptions = {
        autoplay: false,
        playbackRates: [0.5, 1, 1.25, 1.5, 2],
        width: 720,
        height: 300,
        controls: true,
        poster:props.poster,
        sources: [
            {
                src: './static/Video/JavaScriptCreateClass.mp4',
                type: 'video/mp4',
            },
        ],
    };
    return(
        <Fragment>
        <Head>
            <link href="//vjs.zencdn.net/6.1.0/video-js.css" rel="stylesheet"/>
        </Head>
        <Videojs {...videoJsOptions} poster={'./static/login.png'}/>
        </Fragment>
    )
}
export default test