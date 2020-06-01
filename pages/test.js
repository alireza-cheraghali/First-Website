import TypeOfPost from "../component/SocialMedia/TypeOfPost";
import Videojs from '../component/video'
import {Fragment, useEffect} from 'react'
import Head from "next/head";
import {GetTextPost} from "../Queris/queris";
import axios from 'axios'
function test(props) {
    const videoJsOptions = {
        autoplay: false,
        playbackRates: [0.5, 1, 1.25, 1.5, 2],
        width: 720,
        height: 300,
        controls: true,
        poster:props.poster,
        src:'./static/Video/JavaScriptCreateClass.mp4',
    };
    useEffect(()=>{
        console.log(Math.floor(Math.random()*1000000))
        axios.get('http://localhost:8080/getTextPost').then(res=>console.log(res))
    },[])
    return(
        <Fragment>
        <Head>
            <link href="//vjs.zencdn.net/6.1.0/video-js.css" rel="stylesheet"/>
        </Head>
        <Videojs {...videoJsOptions} poster={'./static/login.png'} src={'./static/Video/JavaScriptCreateClass.mp4'}/>
        </Fragment>
    )
}
export default test