import axios from "axios"
import { getFCMToken } from "../firebase/messaging"

export function Notification(){
   
    async function getNotification() {
         const token= await getFCMToken();
         console.log("token", token);
        const res=await axios.post('http://localhost:3000/api/user/notify',{
            token:token
        })
        alert(res.data.message)
        console.log(res.data);
    }
    return <div>
        <button onClick={getNotification} className="px-2 py-1 border ">get notification</button>
    </div>
}