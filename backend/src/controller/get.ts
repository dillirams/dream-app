import type { Request, Response } from "express";
import {prisma} from "../lib/prisma.js"

export async function getDream(req:Request, res:Response) {
    const userId = (req as any).id
    const user= await prisma.user.findUnique({
        where:{
            id:userId as string
        }
    })

    if(!user){
        res.status(400).json({
            message:"user not presernt"
        })
        return
    }

    try{

        const dream= await prisma.postDeam.findMany({
            select:{
                title: true,
                content: true
            }
        })
        if(dream){
            res.status(200).json({
                    message:"dream found",
                    dream: dream
            })
         }

    }catch(e){
         res.status(400).json({
                    message:"something went wrong"
            })
            return
    }

}