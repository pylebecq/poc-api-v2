import { Field, ID, InputType, registerEnumType } from '@nestjs/graphql';
import { EmployeeStatus } from 'src/employees/employee-status';

@InputType()
export class CreateWorkspaceInput {
  @Field(() => String)
  name!: string;
}

@InputType()
export class CreateEmployeeInput {
  @Field(() => String)
  name!: string;

  @Field(() => ID)
  workspaceId!: string;
}

registerEnumType(EmployeeStatus, {
  name: 'EmployeeStatus',
});

@InputType()
export class EmployeesFilter {
  @Field(() => [EmployeeStatus])
  status!: EmployeeStatus[];
}
