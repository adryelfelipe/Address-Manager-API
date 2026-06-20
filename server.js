import 'dotenv/config'; 
import express from "express"
import authRouter from "./src/web/routes/auth/authRoutes.js"
import addressRouter from "./src/web/routes/address/addressRouter.js"
import sharedRouter from "./src/web/routes/address/sharedRouter.js"
import authMiddleware from './src/modules/auth/application/middleware/AuthMiddleware.js';


const app = express();

app.use(express.json())

app.use("/auth",authRouter)
app.use("/shared", sharedRouter);
app.use("/addresses", authMiddleware.handle, addressRouter);

app.listen(3000, () => {
    console.log("Servidor rodando")
})