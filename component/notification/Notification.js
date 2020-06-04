import ReactNotification from 'react-notifications-component'
import { store } from 'react-notifications-component';
import PropTypes from 'prop-types'
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
            onScreen: true,
            showIcon:true,
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
            pauseOnHover:true,
            showIcon:true,
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
            pauseOnHover:true,
            showIcon:true,
        }
    })}
function Notification(){
    return(
        <div>
            <ReactNotification/>

        </div>
    )
}
Notification.propTypes={
    message:PropTypes.string
}
export default Notification