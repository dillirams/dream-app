import "dotenv/config";
import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET;
export function middleware(req, res, next) {
    const token = req.cookies.token;
    console.log(token);
    const decodedData = jwt.verify(token, JWT_SECRET);
    if (decodedData) {
        //@ts-ignore
        req.id = decodedData.id;
        console.log(req.id);
        next();
    }
    else {
        res.status(400).json({
            message: "something went wrong"
        });
    }
}
//# sourceMappingURL=middleware.js.map