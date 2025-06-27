//Since data is small using useContext
import { createContext } from "react";
import { assets, doctors } from "../assets/assets_frontend/assets";

export const AppContext = createContext() //This will be used by components to consume or provide data.

const AppContextProvider = (props) =>{ // This is a function component that will wrap your app or part of it to provide the context value.


    const value ={
        doctors,
        assets
    }
//AppContext.Provider is the Provider.
//It is the component responsible for providing the context value ({ doctors }) to any child components nested inside it.
//value of AppContext.Provider is whatever is inside {value}
    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )//The AppContext.Provider wraps around props.children, i.e., whatever components are nested inside this provider.
}

export default AppContextProvider