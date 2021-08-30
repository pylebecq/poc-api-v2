import {
  Args,
  Context,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { EmployeesContext } from 'src/employees/employees.context';
import { WorkspacesContext } from 'src/workspaces/workspaces.context';
import { CreateWorkspaceInput, EmployeesFilter } from '../inputs';
import { Employee, Workspace, WorkspaceStatistics } from '../types';

@Resolver(Workspace)
export class WorkspaceResolver {
  constructor(
    private readonly workspacesContext: WorkspacesContext,
    private readonly employeesContext: EmployeesContext,
  ) {}

  @Query(() => Workspace, { nullable: true, name: 'workspace' })
  public get(@Args('id') id: string, @Context() context: any) {
    context['workspaceId'] = id;

    return this.workspacesContext.getWorkspace({
      id,
    });
  }

  @Mutation(() => Workspace, { name: 'createWorkspace' })
  public create(@Args('input') input: CreateWorkspaceInput) {
    return this.workspacesContext.createWorkspace(input);
  }

  @ResolveField('employees', () => [Employee])
  public employees(
    @Args('filterBy') filterBy: EmployeesFilter,
    @Parent() workspace: Workspace,
  ) {
    return this.employeesContext.listEmployeesOfWorkspace({
      workspaceId: workspace.id,
      filters: filterBy,
    });
  }

  @ResolveField('statistics', () => WorkspaceStatistics)
  public statistics() {
    return {};
  }
}
