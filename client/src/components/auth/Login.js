import React,{useState} from "react";

function Login(){
    const[user, setUser] = useState({

        email:'',
        password:'',
       
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
        console.log('login user')
    }
    return(
        <div className="form-container">
            <h1>
                Account <span className="text-primary">Login</span>
            </h1>
            <form onSubmit={onSubmit}>
                

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={user.email} onChange={onChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={user.password} onChange={onChange}/>
                </div>


                <input type="submit" value="Login" className="btn btn-primary btn-block" />
            </form>
        </div>
    )
}

export default Login