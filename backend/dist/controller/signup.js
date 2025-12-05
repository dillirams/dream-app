import { requestBody } from '../types/type.js';
import { prisma } from '../lib/prisma.js';
import bcrypt from 'bcrypt';
export async function signup(req, res) {
    const inputData = requestBody.safeParse(req.body);
    console.log(inputData);
    if (!inputData.success) {
        res.status(404).json({
            message: "invalid input format"
        });
        return;
    }
    try {
        const hashedPassword = await bcrypt.hash(inputData.data.password, 5);
        const user = await prisma.user.create({
            data: {
                name: inputData.data.name,
                email: inputData.data.email,
                password: hashedPassword
            }
        });
        if (user) {
            res.status(201).json({
                message: "user created successfully",
                user: user
            });
        }
    }
    catch (e) {
        res.status(404).json({
            message: "something went wrong",
        });
        console.log(e);
        return;
    }
}
//# sourceMappingURL=signup.js.map