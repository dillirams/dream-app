import { messaging } from "./firrebase";
import { onMessage } from "firebase/messaging";

export function listenNotifications(){

 onMessage(messaging,(payload)=>{

   console.log("Foreground Notification:",payload);

   new Notification(
     payload.notification?.title || "",
     {
       body: payload.notification?.body
     }
   );

 });

}