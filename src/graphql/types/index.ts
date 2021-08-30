import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Workspace {
  @Field(() => ID)
  id!: string;

  @Field(() => String)
  name!: string;

  @Field(() => [Employee])
  employees!: Employee[];
}

@ObjectType()
export class AwarenessStatistics {
  @Field(() => Int)
  recentlyEnroledEmployeesCount!: number;
}

@ObjectType()
export class WorkspaceStatistics {
  @Field(() => AwarenessStatistics)
  awareness!: AwarenessStatistics;
}

@ObjectType()
export class Employee {
  @Field(() => ID)
  id!: string;

  @Field(() => String)
  name!: string;
}

@ObjectType()
export class Course {
  @Field(() => ID)
  id!: string;

  @Field(() => String)
  name!: string;
}

@ObjectType()
export class Enrolment {
  @Field(() => ID)
  id!: string;

  @Field(() => Course)
  course!: Course;

  @Field(() => Employee)
  employee!: Employee;
}
