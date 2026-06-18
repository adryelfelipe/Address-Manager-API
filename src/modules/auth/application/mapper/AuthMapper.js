import User from "../../../user/domain/models/User.js";
 
class AuthMapper {
  toUser({ name, email, password }) {
    return new User({ name, email, password });
  }
}
 
export default new AuthMapper();
 