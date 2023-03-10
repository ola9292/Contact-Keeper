import React,{useState} from "react"
import { v4 as uuidv4 } from 'uuid'
const AlertContext = React.createContext()


function AlertContextProvider({children}){

    const[alert, setAlert] = useState([])

function AlertSet(msg){
    const id = uuidv4()
    return [...alert, id]
}
    return(
        <AlertContext.Provider value={{alert, AlertSet}}>
                {children}
        </AlertContext.Provider>
    )
}

export {AlertContext, AlertContextProvider}