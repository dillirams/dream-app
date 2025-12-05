import { prisma } from "../lib/prisma.js";
export async function getDream(req, res) {
    const userId = req.id;
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
        const dream = await prisma.postDeam.findMany({
            select: {
                title: true,
                content: true
            }
        });
        if (dream) {
            res.status(200).json({
                message: "dream found",
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
//# sourceMappingURL=get.js.map