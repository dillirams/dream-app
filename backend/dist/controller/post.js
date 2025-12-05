import { prisma } from "../lib/prisma.js";
export async function postDream(req, res) {
    const userId = req.id;
    const data = req.body;
    const user = await prisma.user.findUnique({
        where: {
            id: userId
        }
    });
    if (!user) {
        res.status(400).json({
            message: "user not presernt"
        });
        return;
    }
    try {
        const dream = await prisma.postDeam.create({
            data: {
                title: data.title,
                content: data.content,
                authorId: userId
            }
        });
        if (dream) {
            res.status(200).json({
                message: "dream created successfully",
                dream: dream
            });
        }
    }
    catch (e) {
        res.status(400).json({
            message: "something went wrong"
        });
        return;
    }
}
//# sourceMappingURL=post.js.map