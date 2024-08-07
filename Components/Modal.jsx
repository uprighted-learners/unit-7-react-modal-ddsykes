import React from "react";
import App from "../src/App.css";

const Modal = (props) =>{
    if(!props.ModalState){
        return <div style ={{display:"none"}}></div>
    }
return(
    <main id="modal-background">
<section id="modal-content">
<p> I am a modal.</p>
<button onClick={props.handleClick}>CLose Modal</button>
<button onClick={props.handleClick}>Open Modal</button>
</section>
    </main>
)

}
export default Modal;