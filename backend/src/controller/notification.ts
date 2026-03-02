import type { Request,Response } from "express";
import { sendPushNotification } from "../service/pushService.js";

export async function testNotification(req:Request, res:Response) {
    const {token}=req.body;
    console.log(token);
    await sendPushNotification(
        token,
        "Hello",
        "Production notification working"
    )
    res.status(200).json({
        message:"notification sent"
    })
}