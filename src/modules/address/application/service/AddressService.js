import addressMapper from '../mapper/AddressMapper.js';
import prismaAddressRepository from "../../infrastructure/repository/PrismaAddressRepository.js"
import AddressNotFoundException from "../exceptions/AddressNotFoundException.js"
import jwt from 'jsonwebtoken';

 
class AddressService {
  async create(createAddressRequest, userId) {
    const address = addressMapper.toAddress(createAddressRequest, userId);

    const id = prismaAddressRepository.create(address)

    return id;
  }
 
  async findAll(userId, keyword) {
    const addresses = await prismaAddressRepository.findAllByUserId(userId, keyword);
 
    return addressMapper.toResponseList(addresses);
  }
 
  async update(id, updateAddressRequest, userId) {
    const existingAddress = await prismaAddressRepository.findById(Number(id));
 
    if (!existingAddress || existingAddress.user_id !== userId) {
      throw new AddressNotFoundException();
    }
 
    const address = addressMapper.toAddress(updateAddressRequest, userId);
 
    const updated = await prismaAddressRepository.update(Number(id), address);
 
    // falta: registrar log da alteração (dados modificados + id do usuário)
 
    return addressMapper.toResponse(updated);
  }
 
 async delete(id, userId) {
    const address = await prismaAddressRepository.findById(Number(id));
 
    if (!address || address.user_id !== userId) {
      throw new AddressNotFoundException();
    }
 
    await prismaAddressRepository.delete(Number(id));
 
    // falta: registrar log da exclusão (dados removidos + id do usuário)
  }
 
  async share(id, userId, expiresIn) {
    const address = await prismaAddressRepository.findById(Number(id));
 
    if (!address || address.user_id !== userId) {
      throw new AddressNotFoundException();
    }
 
    const token = jwt.sign(
      { addressId: address.id },
      process.env.JWT_SECRET,
      { expiresIn: expiresIn || '1h' }
    );
 
    const url = `${process.env.BASE_URL}/shared/${token}`;
 
    return { url };
  }
 
 async getShared(token) {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
 
    const address = await prismaAddressRepository.findById(decoded.addressId);
 
    if (!address) {
      throw new AddressNotFoundException();
    }
 
    return addressMapper.toResponse(address);
  }
}
 
export default new AddressService();