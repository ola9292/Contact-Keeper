
import React,{useEffect, useContext, useState} from "react"
import { Context } from "../Context"

function ContactFilter(){
    const{filteredSearch} = useContext(Context)
   
   const [searchTerm, setSearchTerm] = useState('')

    useEffect(()=>{
       
        filteredSearch(searchTerm)
     
    },[searchTerm, filteredSearch])

     

    function onChange(e){
        setSearchTerm(e.target.value)
    }
    
  
    return(
        <form>
            <input type="text" value={searchTerm} placeholder="Filter contacts..." onChange={onChange} />
        
        </form>
    )
}

export default ContactFilter