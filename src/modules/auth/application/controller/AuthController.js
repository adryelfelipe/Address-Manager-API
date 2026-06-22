import { loginSchema, registerSchema } from "../schema/authSchema.js";
import LoginRequest from "../dto/LoginRequest.js";
import RegisterRequest from "../dto/RegisterRequest.js";
import authService from "../service/AuthService.js";


class AuthController {
  async login(req, res, next) {
    try {
      const data = loginSchema.parse(req.body);
      const loginRequest = new LoginRequest(data);

      const token = await authService.login(loginRequest);
      res.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  }

  async register(req, res, next) {
    try {
      const data = registerSchema.parse(req.body);
      const registerRequest = new RegisterRequest(data);

      const id = await authService.register(registerRequest);
      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  }
}

export default new AuthController();