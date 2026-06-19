import bcrypt from 'bcrypt';
import authMapper from '../mapper/AuthMapper.js';
import UserRepository from '../../../user/domain/repository/UserRepository.js';
import prismaUserRepository from '../../../user/infrastructure/repository/UserRepository.js'
import EmailAlreadyUsedException from '../exceptions/EmailAlreadyUsedException.js';

/** @type {UserRepository} */
const userRepository = prismaUserRepository;

const SALT_ROUNDS = 10;

class AuthService {
  async register(registerRequest) {
    const existingUser = await userRepository.findByEmail(registerRequest.email);

    if (existingUser) {
      throw new EmailAlreadyUsedException(registerRequest.email);
    }

    const user = authMapper.toUser(registerRequest);

    user.password = await bcrypt.hash(user.password, SALT_ROUNDS);

    const id = await userRepository.create(user);

    return id;
  }

  async login(loginRequest) {
    const user = await userRepository.findByEmail(loginRequest.email);

    // falta: se não existir, lançar erro de credenciais inválidas
    // falta: comparar senha informada com o hash salvo (bcrypt.compare)
    // falta: gerar token JWT com o id do usuário
    // falta: retornar o token gerado
  }
}

export default new AuthService();