import { createContext, useContext, useState} from "react";

 const ThemeSwitchContext = createContext()



 export const ThemeContextProvider = ({children})=>{
    const [darkMode, setDarkMode] = useState(false)

    function handleToggle() {
        setDarkMode((prev)=>!prev)
       
    }

    return ( 
        <ThemeSwitchContext.Provider value={{darkMode,handleToggle}}>
            {children}
        </ThemeSwitchContext.Provider>
    )
 }

 export const ThemeToggler = () => useContext(ThemeSwitchContext)