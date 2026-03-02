import firebaseAdmin from "../config/firebase.js";

export async function sendPushNotification(token:string,title:string,body:string){

 await firebaseAdmin.messaging().send({

  token,

  notification:{
   title,
   body
  }

 });

}