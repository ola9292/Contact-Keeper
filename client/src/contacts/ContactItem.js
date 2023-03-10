import React,{useContext} from "react";
import { Context } from "../Context";
function ContactItem({item}){

    const {deleteContact, setCurrentContact, clearCurrentContact}=useContext(Context)
    const{name, type, email, phone,id} = item

    function onDelete(){
        deleteContact(id)
        clearCurrentContact()
    }
    return(
        <div className="card bg-light">
            <h3 className="text-primary text-left">
                {name}{' '}
                <span 
                style={{float:'right'}}
                className={'badge '+ (type === 'professional'? 'badge-success':'badge-primary')}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                    </span>
            </h3>
            <ul className="list">
                {email &&(
                    <li>
                        <i className="fa-solid fa-inbox"></i>{' '} {email}
                    </li>
                )}
                {phone &&(
                    <li>
                        <i className="fa-solid fa-phone"></i>{' '} {phone}
                    </li>
                )}
            </ul>
            <p>
                <button className="btn btn-dark btn-sm" onClick={()=>{setCurrentContact(item)}}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button>
            </p>
        </div>
    )
}
export default ContactItem