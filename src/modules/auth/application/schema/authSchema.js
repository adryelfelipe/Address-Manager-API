import { z } from 'zod';

export const loginSchema = z.object({
  email: z
    .string({ message: 'Email is required and must be text' })
    .trim()
    .min(1, 'Email must be at least 1 character long')
    .max(255, 'Email must be at most 255 characters long')
    .email('Email must be a valid email address'),

  password: z
    .string({ message: 'Password is required and must be text' })
    .min(6, 'Password must be at least 6 characters long')
    .max(72, 'Password must be at most 72 characters long'),
});

export const registerSchema = z.object({
  name: z
    .string({ message: 'Name is required and must be text' })
    .trim()
    .min(2, 'Name must be at least 2 characters long')
    .max(255, 'Name must be at most 255 characters long'),

  email: z
    .string({ message: 'Email is required and must be text' })
    .trim()
    .min(1, 'Email must be at least 1 character long')
    .max(255, 'Email must be at most 255 characters long')
    .email('Email must be a valid email address'),

  password: z
    .string({ message: 'Password is required and must be text' })
    .min(6, 'Password must be at least 6 characters long')
    .max(72, 'Password must be at most 72 characters long'),
});