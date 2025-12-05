import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { appRouter } from './route/route.js';
const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use('/user', appRouter);
app.listen(3000, () => {
    console.log("the app is listeninig to port 3000");
});
//# sourceMappingURL=index.js.map