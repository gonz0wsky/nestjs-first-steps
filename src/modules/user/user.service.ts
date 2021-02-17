import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getUser(where: Prisma.UserWhereUniqueInput) {
    return await this.prisma.user.findUnique({ where });
  }

  async getUsers(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByInput;
  }) {
    const { skip, take, cursor, where, orderBy } = params;
    return await this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createUser(user: User) {
    return await this.prisma.user.create({ data: user });
  }

  async updateUser(user: User) {
    return await this.prisma.user.update({
      where: { id: user.id },
      data: user,
    });
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.delete({ where });
  }
}
