import CreateAddressRequest from "../dto/CreateAddressRequest.js";
import UpdateAddressRequest from "../dto/UpdateAddressRequest.js";
import addressService from "../service/AddressService.js";
import { ZodError } from "zod";
import {
  createAddressSchema,
  updateAddressSchema,
  addressIdParamSchema,
  sharedTokenParamSchema,
  findAllAddressQuerySchema,
  shareAddressSchema,
} from "../schema/addressSchema.js"

class AddressController {
  async create(req, res) {
    try {
      const data = createAddressSchema.parse(req.body);
      const createAddressRequest = new CreateAddressRequest(data);

      const id = await addressService.create(createAddressRequest, req.userId);

      res.status(201).location(`/addresses/${id}`).json({ id });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ errors: error.issues });
      }
      res.status(500).send();
    }
  }

  async findAll(req, res) {
    try {
      const { keyword } = findAllAddressQuerySchema.parse(req.query);

      const addresses = await addressService.findAll(req.userId, keyword);
      res.status(200).json(addresses);
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ errors: error.issues });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  }

  async update(req, res) {
    try {
      const { id } = addressIdParamSchema.parse(req.params);
      const data = updateAddressSchema.parse(req.body);
      const updateAddressRequest = new UpdateAddressRequest(data);

      const address = await addressService.update(id, updateAddressRequest, req.userId);

      res.status(200).json(address);
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ errors: error.issues });
      }
      if (error.name === "AddressNotFoundException") {
        return res.status(404).json({ message: error.message });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  }

  async delete(req, res) {
    try {
      const { id } = addressIdParamSchema.parse(req.params);

      await addressService.delete(id, req.userId);

      res.status(204).send();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ errors: error.issues });
      }
      if (error.name === "AddressNotFoundException") {
        return res.status(404).json({ message: error.message });
      }
      console.log(error.message);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  async share(req, res) {
    try {
      const { id } = addressIdParamSchema.parse(req.params);
      const { expiresIn } = shareAddressSchema.parse(req.body);

      const sharedUrl = await addressService.share(id, req.userId, expiresIn);

      res.status(200).json(sharedUrl);
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ errors: error.issues });
      }
      if (error.name === "AddressNotFoundException") {
        return res.status(404).json({ message: error.message });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  }

  async getShared(req, res) {
    try {
      const { token } = sharedTokenParamSchema.parse(req.params);

      const address = await addressService.getShared(token);

      res.status(200).json(address);
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ errors: error.issues });
      }
      if (error.name === "TokenExpiredError") {
        return res.status(401).json({ message: "Shared link expired" });
      }
      if (error.name === "JsonWebTokenError") {
        return res.status(401).json({ message: "Invalid shared link" });
      }
      if (error.name === "AddressNotFoundException") {
        return res.status(404).json({ message: error.message });
      }
      res.status(500).json({ message: "Internal server error" });
    }
  }
}

export default new AddressController();