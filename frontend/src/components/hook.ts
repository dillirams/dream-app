import axios from "axios";
import { useEffect, useState } from "react";


export function useContent(){
    const [content, setContent]=useState([])


    async function getDream() {
        const res= await axios.get('https://dream.dillaxadhi.com/api/user/getDream',{
            withCredentials:true
        })

        setContent(res.data.dream)
    }

    useEffect(()=>{
        getDream();
    },[])

    return content

}