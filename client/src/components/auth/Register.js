import React,{useState,useContext} from "react";
import { AlertContext } from "../../AlertContext";
function Register(){

    // const{alert,alertSet} = useContext(AlertContext)
    const[user, setUser] = useState({
        name:'',
        email:'',
        password:'',
        password2:''
    })

    function onChange(e){
        setUser((prevState)=>{
            return{
                ...prevState,
                [e.target.name]:e.target.value
            }
        })
    }

    function onSubmit(e){
        e.preventDefault()
        if (user.name === '' || user.email === '' || user.password === '') {
            alert('Please enter all fields');
          } else if (user.password !== user.password2) {
           console.log('Passwords do not match');
          }else{
            console.log('registered user')
          } 
        
    }
    return(
        <div className="form-container">
            <h1>
                Account <span className="text-primary">Register</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" value={user.name} onChange={onChange} required/>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={user.email} onChange={onChange} required/>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={user.password} onChange={onChange} required/>
                </div>

                <div className="form-group">
                    <label htmlFor="password2">Confirm Password</label>
                    <input type="password" name="password2" value={user.password2} onChange={onChange} required/>
                </div>

                <input type="submit" value="Register" className="btn btn-primary btn-block" />
            </form>
        </div>
    )
}

export default Register