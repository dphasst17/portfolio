import { createContext, useEffect, useState } from "react";

export const StateContext = createContext();
export const StateProvider = ({children}) => {
    const [project,setProject]= useState(null);
    //Nav
    const [showNav,setShowNav] = useState(false)
    //Dark Mode
    const [dark,setDark] = useState(false);
    const darkMode = JSON.parse(localStorage.getItem('darkMode') || null)
    useEffect(() => {
        darkMode === null || darkMode === false ? setDark(false):setDark(true)
    },[darkMode]) 
    useEffect(() => {
        fetch(import.meta.env.VITE_REACT_APP_URL)
        .then(res => res.json())
        .then(res => setProject(res))
    },[])
    return (
        <StateContext.Provider 
            value={{
                project,setProject,
                dark,setDark,
                showNav,setShowNav
            }}
        >
            {children}
        </StateContext.Provider>
    )
}