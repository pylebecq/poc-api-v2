import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { WorkspacesContext } from 'src/workspaces/workspaces.context';
import { CreateWorkspaceInput } from '../inputs';
import { Workspace } from '../types';

@Resolver(Workspace)
export class WorkspaceResolver {
  constructor(private readonly workspacesContext: WorkspacesContext) {}

  @Query(() => Workspace, { nullable: true, name: 'workspace' })
  public get(@Args('id') id: string) {
    return this.workspacesContext.getWorkspace({
      id,
    });
  }

  @Mutation(() => Workspace, { name: 'createWorkspace' })
  public create(@Args('input') input: CreateWorkspaceInput) {
    return this.workspacesContext.createWorkspace(input);
  }
}
