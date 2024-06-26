import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';

export const defaultUser: User = {
  id: 1,
  firstName: 'John',
  lastName: 'Doe',
  email: 'johndoe@example.com',
  hashedPassword: '123456',
  createdAt: new Date(),
  updatedAt: null,
};

export const usersServiceMock = {
  create: jest.fn().mockImplementation(async (createUserDto: CreateUserDto) => {
    return {
      firstName: createUserDto.firstName,
      lastName: createUserDto.lastName,
      email: createUserDto.email,
      password: await bcrypt.hash(createUserDto.password, 10),
    };
  }),
  getById: jest.fn().mockImplementation((id: number) => {
    return {
      ...defaultUser,
      id,
    };
  }),
  getByEmail: jest.fn().mockImplementation((email: string) => {
    return {
      ...defaultUser,
      email,
    };
  }),
  update: jest
    .fn()
    .mockImplementation((id: number, updateUserDto: UpdateUserDto) => {
      return {
        ...defaultUser,
        id,
        ...updateUserDto,
      };
    }),
  remove: jest.fn().mockImplementation((id: number) => {
    return {
      ...defaultUser,
      id,
    };
  }),
  updatePassword: jest.fn().mockImplementation(() => {
    return;
  }),
};
