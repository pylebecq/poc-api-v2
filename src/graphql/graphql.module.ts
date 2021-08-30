import { Module } from '@nestjs/common';
import { EmployeesModule } from 'src/employees/employees.module';
import { WorkspacesModule } from 'src/workspaces/workspaces.module';
import { AwarenessStatisticsResolver } from './resolvers/awareness-statistics.resolver';
import { EmployeeResolver } from './resolvers/employee.resolver';
import { WorkspaceStatisticsResolver } from './resolvers/workspace-statistics.resolver';
import { WorkspaceResolver } from './resolvers/workspace.resolver';

@Module({
  imports: [WorkspacesModule, EmployeesModule],
  providers: [
    WorkspaceResolver,
    EmployeeResolver,
    WorkspaceStatisticsResolver,
    AwarenessStatisticsResolver,
  ],
})
export class GraphQLModule {}
