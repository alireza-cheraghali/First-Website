import axios from 'axios'

export function PostAxios(props)
{
    axios.post(`http://localhost:8080/${props.url}`, props.post).then(res => props.res).catch(res => console.log(res))
}

export function GetAxios(props){
    axios.get(`http://localhost:8080/${props.url}`).then(response=>console.log('aliz')).catch(res=>console.log(res))
}