import { Module } from '@nestjs/common';
import { EmployeesModule } from 'src/employees/employees.module';
import { WorkspacesModule } from 'src/workspaces/workspaces.module';
import { EmployeeResolver } from './resolvers/employee.resolver';
import { WorkspaceResolver } from './resolvers/workspace.resolver';

@Module({
  imports: [WorkspacesModule, EmployeesModule],
  providers: [WorkspaceResolver, EmployeeResolver],
})
export class GraphQLModule {}
