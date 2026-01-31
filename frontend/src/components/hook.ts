import axios from "axios";
import { useEffect, useState } from "react";
const API=import.meta.env.VITE_API_URL;


export function useContent(){
    const [content, setContent]=useState([])


    async function getDream() {
        const res= await axios.get(`${API}/api/user/getDream`,{
            withCredentials:true
        })

        setContent(res.data.dream)
    }

    useEffect(()=>{
        getDream();
    },[])

    return content

}