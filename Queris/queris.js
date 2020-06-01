import axios from 'axios'

export const GetTextPost=()=>{
    axios.get('http://localhost:8080/getTextPost')
}