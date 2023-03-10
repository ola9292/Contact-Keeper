import React,{useContext,Fragment} from "react";
import ContactItem from "./ContactItem";
import { Context } from "../Context";

function Contacts(){
    const{contactList, filtered} = useContext(Context)
    return(
        <Fragment>
            {filtered.length > 0 
                ? filtered.map((item)=>{
                return <ContactItem key={item.id} item={item}/>
            })
            : contactList.map((item)=>{
                return <ContactItem key={item.id} item={item}/>
            })}
          
        </Fragment>
    )
}

export default Contacts