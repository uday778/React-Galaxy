import { useState } from "react";
import { createContext } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";


// step 1
export const AppContext=createContext();

export default function  AppContextProvider({children}){
    const [loading,setloading]=useState(false);
    const[posts,setposts]=useState([]);
    const [page,setpage]=useState(1);
    const [totalPages,setTotalPages]=useState(null);
    const navigate=useNavigate()

    // data filling from api
    async function fetchBlogPosts(page=1,tag=null,category){
        setloading(true);
        let url=`${baseUrl}?page=${page}`;
        if(tag){
            url +=`&tag=${tag}`
        }
        if (category) {
            url +=`&category=${category}`
        }
        try {
            const results=await fetch(url);
            const data=await results.json();
            console.log(data);
            setpage(data.page);
            setTotalPages(data.totalPages);
            setposts(data.posts);
        } catch (error) {
            console.log("Error in fetching data");
            setpage(1);
            setposts([]);
            setTotalPages(null); 
        }
        setloading(false)
    }

    function handlePageChange(page){
        navigate({search:`?page=${page}`})
        setpage(page);
        
    }

    const value={
        posts,
        setposts,
        loading,
        setloading,
        totalPages,
        setTotalPages,
        page,
        setpage,
        handlePageChange,
        fetchBlogPosts,
    };

    //step 2
    return <AppContext.Provider value={value}>
    {children}
    </AppContext.Provider>
}
