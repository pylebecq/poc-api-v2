import { Inject, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DateTime } from 'luxon';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaReadOnlyService } from 'src/prisma/services';
import { EmployeeStatus } from './employee-status';

@Injectable()
export class EmployeesContext {
  constructor(
    private readonly prismaService: PrismaService,
    @Inject(PrismaReadOnlyService)
    private readonly prismaReadOnlyService: PrismaService,
  ) {}

  public getEmployee(input: Prisma.EmployeeWhereUniqueInput) {
    return this.prismaReadOnlyService.employee.findUnique({ where: input });
  }

  public createEmployee(args: CreateEmployeeArgs) {
    return this.prismaService.employee.create({
      data: {
        name: args.name,
        status: {
          connect: {
            value: EmployeeStatus.Active,
          },
        },
        workspace: {
          connect: {
            id: args.workspaceId,
          },
        },
      },
    });
  }

  public listEmployeesOfWorkspace(args: ListEmployeesOfWorkspaceArgs) {
    return this.prismaReadOnlyService.employee.findMany({
      where: {
        workspaceId: args.workspaceId,
        status: {
          value: {
            in: args.filters.status,
          },
        },
      },
    });
  }

  public async listEmployeesWhoCompletedACourseAfterDate(
    workspaceId: string,
    date: DateTime,
  ) {
    const employeeIds = await this.prismaReadOnlyService.$queryRaw<
      { id: string }[]
    >`SELECT e.id FROM employees e INNER JOIN enrolments en ON en.employee_id = e.id AND en.created_at >= ${date.toJSDate()} AND e.workspace_id = ${workspaceId}`;

    return this.prismaReadOnlyService.employee.findMany({
      where: {
        id: {
          in: employeeIds.map((row) => row.id),
        },
      },
    });
  }
}

interface CreateEmployeeArgs {
  name: string;
  workspaceId: string;
}

interface ListEmployeesOfWorkspaceArgs {
  workspaceId: string;
  filters: {
    status: EmployeeStatus[];
  };
}
