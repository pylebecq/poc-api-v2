import { ResolveField, Resolver } from '@nestjs/graphql';
import { AwarenessStatistics, WorkspaceStatistics } from '../types';

@Resolver(WorkspaceStatistics)
export class WorkspaceStatisticsResolver {
  @ResolveField('awareness', () => AwarenessStatistics)
  public awareness() {
    return {};
  }
}
