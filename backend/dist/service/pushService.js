import firebaseAdmin from "../config/firebase.js";
export async function sendPushNotification(token, title, body) {
    await firebaseAdmin.messaging().send({
        token,
        notification: {
            title,
            body
        }
    });
}
//# sourceMappingURL=pushService.js.map