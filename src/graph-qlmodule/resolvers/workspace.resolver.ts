import { Query, Resolver } from '@nestjs/graphql';
import { Workspace } from '../types';

@Resolver(Workspace)
export class WorkspaceResolver {
  @Query(() => Workspace, { nullable: true, name: 'workspace' })
  public get(): Promise<Workspace | null> {
    return Promise.resolve(null);
  }
}
