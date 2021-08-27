import { Module } from '@nestjs/common';
import { WorkspaceResolver } from './resolvers/workspace.resolver';

@Module({
  providers: [WorkspaceResolver],
})
export class GraphQLModule {}
