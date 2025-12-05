import type { Request, Response } from "express";
import {prisma} from "../lib/prisma.js"

export async function postDream(req:Request, res:Response) {
    const userId=req.id
    const data=req.body
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

        const dream= await prisma.postDeam.create({
            data:{
                title:data.title,
                content:data.content,
                authorId: userId as string
            }
        })

        if(dream){
            res.status(200).json({
                    message:"dream created successfully",
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