import { sendPushNotification } from "../service/pushService.js";
export async function testNotification(req, res) {
    const { token } = req.body;
    console.log(token);
    await sendPushNotification(token, "Hello", "Production notification working");
    res.status(200).json({
        message: "notification sent"
    });
}
//# sourceMappingURL=notification.js.map