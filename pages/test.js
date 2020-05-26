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
function test() {
    return(<div>
        <ReactNotification/>
        <button onClick={()=>Succes({title:'hello',message:'asas'})}>AS</button>
    </div>)
}
export default test