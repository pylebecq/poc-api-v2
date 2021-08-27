import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WorkspacesContext {
  constructor(private readonly prismaService: PrismaService) {}

  public getWorkspace(input: Prisma.WorkspaceWhereUniqueInput) {
    return this.prismaService.workspace.findUnique({ where: input });
  }

  public createWorkspace(data: Prisma.WorkspaceCreateInput) {
    return this.prismaService.workspace.create({
      data,
    });
  }
}
