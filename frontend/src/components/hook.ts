import axios from "axios";
import { useEffect, useState } from "react";


interface contentType{
    title:string,
    content:string
}

export function useContent(){
    const [content, setContent]=useState([])


    async function getDream() {
        const res= await axios.get('http://localhost:3000/user/getDream',{
            withCredentials:true
        })

        setContent(res.data.dream)
    }

    useEffect(()=>{
        getDream();
    },[])

    return content

}