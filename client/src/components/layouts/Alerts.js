import React,{useContext} from "react"
import { AlertContext } from "../../AlertContext"
function Alerts(){
const{alert, setAlert} = useContext(AlertContext)

    return(
        <div>
            {alert.length > 0 &&
            alert.map((item)=>{
                <div className="">
                    <i className="fas fa-info-circle" />{alert}
                </div>
            })}
        </div>
    )
}

export default Alerts