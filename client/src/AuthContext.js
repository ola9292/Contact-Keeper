import React,{useState} from "react"
const AuthContext = React.createContext()

function AuthContextProvider({children}){

const [token, setToken] =useState(localStorage.getItem('token'))
const [isAuthenticated, setIsAuthenticated] = useState(null)
const[loading, setLoading] = useState(true)
const[error, setError]=useState(null)
const[user, setUser]=useState(null)

    return(
        <AuthContext.Provider value={{token,
                                    isAuthenticated,
                                    loading,
                                    error,
                                    user
                                    }}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthContextProvider}