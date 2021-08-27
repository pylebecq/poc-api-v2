import { Module } from '@nestjs/common';
import { WorkspacesModule } from 'src/workspaces/workspaces.module';
import { WorkspaceResolver } from './resolvers/workspace.resolver';

@Module({
  imports: [WorkspacesModule],
  providers: [WorkspaceResolver],
})
export class GraphQLModule {}
