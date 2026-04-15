import { createContext, useEffect, useState } from "react";
import { jobsData } from "../assets/assets";
export const AppContext = createContext();

export const AppContextProvider =(props)=>{

    const [searchFilter, setSearchFilter]= useState({
        title:'',
        location:''
    })

    const [isSearched, setIsSearch] = useState(false)

    const [jobs, setJobs]= useState([])

    const [showRecruiterLogin, setShowRecruiterLogin] = useState(false)


    // funtion to fetch jobs
    const fetchJobs = async ()=>{
        setJobs(jobsData)
    }

    useEffect (()=>{
       fetchJobs()
    },[])
    const value = {
        setSearchFilter,searchFilter,
        isSearched, setIsSearch,
        jobs, setJobs,
        showRecruiterLogin,setShowRecruiterLogin,
    }
    return (
        <AppContext.Provider value={value}>
           {props.children}
        </AppContext.Provider>
    )
}