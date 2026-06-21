import { z } from 'zod';

export const createAddressSchema = z.object({
  street: z
    .string({ message: 'Street is required and must be text' })
    .trim()
    .min(1, 'Street must be at least 1 character long')
    .max(255, 'Street must be at most 255 characters long'),

  number: z
    .string({ message: 'Number must be text' })
    .trim()
    .max(20, 'Number must be at most 20 characters long')
    .optional(),

  complement: z
    .string({ message: 'Complement must be text' })
    .trim()
    .max(255, 'Complement must be at most 255 characters long')
    .optional(),

  neighborhood: z
    .string({ message: 'Neighborhood must be text' })
    .trim()
    .max(255, 'Neighborhood must be at most 255 characters long')
    .optional(),

  city: z
    .string({ message: 'City is required and must be text' })
    .trim()
    .min(1, 'City must be at least 1 character long')
    .max(255, 'City must be at most 255 characters long'),

  state: z
    .string({ message: 'State is required and must be text' })
    .trim()
    .length(2, 'State must be exactly 2 characters long'),

  zipCode: z
    .string({ message: 'Zip code is required and must be text' })
    .trim()
    .min(8, 'Zip code must be at least 8 characters long')
    .max(9, 'Zip code must be at most 9 characters long')
    .regex(/^\d{5}-?\d{3}$/, 'Zip code must follow the format 00000-000'),
});

export const addressIdParamSchema = z.object({
  id: z.coerce
    .number({ message: 'Id is required and must be a number' })
    .int('Id must be an integer')
    .positive('Id must be positive'),
});

export const sharedTokenParamSchema = z.object({
  token: z
    .string({ message: 'Token is required and must be text' })
    .min(1, 'Token must be at least 1 character long'),
});

export const findAllAddressQuerySchema = z.object({
  keyword: z
    .string({ message: 'Keyword must be text' })
    .trim()
    .max(255, 'Keyword must be at most 255 characters long')
    .optional(),
});

export const shareAddressSchema = z.object({
  expiresIn: z
    .string({ message: 'ExpiresIn must be text' })
    .trim()
    .min(1, 'ExpiresIn must be at least 1 character long')
    .optional(),
});

export const updateAddressSchema = createAddressSchema;