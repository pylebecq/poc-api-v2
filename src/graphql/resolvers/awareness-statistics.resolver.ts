import { Context, Int, ResolveField, Resolver } from '@nestjs/graphql';
import { DateTime } from 'luxon';
import { EmployeesContext } from 'src/employees/employees.context';
import { AwarenessStatistics } from '../types';

@Resolver(AwarenessStatistics)
export class AwarenessStatisticsResolver {
  constructor(private readonly employeesContext: EmployeesContext) {}

  @ResolveField(() => Int)
  public recentlyEnroledEmployeesCount(
    @Context('workspaceId') workspaceId: string,
  ) {
    return this.employeesContext
      .listEmployeesWhoCompletedACourseAfterDate(
        workspaceId,
        DateTime.utc().minus({ days: 90 }),
      )
      .then((list) => list.length);
  }
}
