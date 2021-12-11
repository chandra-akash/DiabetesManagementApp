import { createContext, useState } from "react";

 

export const Appcontext = createContext()
 
export const AppcontextProvider = ({ children }) => {
    
const [change,setChange]=useState(true)
const [userl,setUserl] = useState([])

    return <Appcontext.Provider value={{change,setChange,userl,setUserl}}>
        {children}
    </Appcontext.Provider>
}