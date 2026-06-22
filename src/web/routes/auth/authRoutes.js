import {Router} from "express"
import authController from "../../../modules/auth/application/controller/AuthController.js"

const router = Router();

router.post("/login", authController.login)
router.post("/user", authController.register)

export default router;