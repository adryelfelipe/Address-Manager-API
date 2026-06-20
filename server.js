import express from "express"
import authRouter from "./src/web/routes/auth/authRoutes.js"
import addressRouter from "./src/web/routes/address/addressRouter.js"
import sharedRouter from "./src/web/routes/address/sharedRouter.js"
import 'dotenv/config'; 

const app = express();

app.use(express.json())

app.use("/auth",authRouter)
app.use("/addresses", addressRouter);
app.use("/shared", sharedRouter);

app.listen(3000, () => {
    console.log("Servidor rodando")
})