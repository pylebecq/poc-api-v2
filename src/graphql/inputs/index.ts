import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateWorkspaceInput {
  @Field(() => String)
  name!: string;
}
