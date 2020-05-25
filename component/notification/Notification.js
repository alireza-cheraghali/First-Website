import ReactNotification from 'react-notifications-component'
import { store } from 'react-notifications-component';
export const Succes=(props)=>{
    store.addNotification({
        title: props.title,
        message: props.message,
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
            duration: 5000,
            onScreen: true
        }
    })}
export const Warning=(props)=>{
    store.addNotification({
        title: "Error",
        message: props.message,
        type: "warning",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
            duration: 5000,
            onScreen: true,
            pauseOnHover:true
        }
    })}
export const Error=(props)=>{
    store.addNotification({
        title: "Error",
        message: props.message,
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "fadeIn"],
        animationOut: ["animated", "fadeOut"],
        dismiss: {
            duration: 5000,
            onScreen: true,
            pauseOnHover:true
        }
    })}
function Notification(){
    return(
        <div>
            <ReactNotification/>

        </div>
    )
}
export default Notification