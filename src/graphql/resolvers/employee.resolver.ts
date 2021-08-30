import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { EmployeesContext } from 'src/employees/employees.context';
import { CreateEmployeeInput } from '../inputs';
import { Employee } from '../types';

@Resolver(Employee)
export class EmployeeResolver {
  constructor(private readonly employeesContext: EmployeesContext) {}

  @Query(() => Employee, { nullable: true, name: 'employee' })
  public get(@Args('id') id: string) {
    return this.employeesContext.getEmployee({
      id,
    });
  }

  @Mutation(() => Employee, { name: 'createEmployee' })
  public create(@Args('input') input: CreateEmployeeInput) {
    return this.employeesContext.createEmployee(input);
  }
}
