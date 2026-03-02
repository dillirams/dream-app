import { getToken } from "firebase/messaging";
import { messaging } from "./firrebase";

export async function getFCMToken(){

 const permission=await Notification.requestPermission();

 if(permission!=="granted") return;

 const token=await getToken(messaging,{
  vapidKey:"BBhUalxbuGdppCSZ9F_evQTtF7Z12Et7WvTmPjJXhUPMd0e9ukCOQOVJ8m4l_6jeSaQMXB-XaXW5JmqBRIAFw64"
 });

 return token;

}