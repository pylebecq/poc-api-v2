import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule as NestGraphQLModule } from '@nestjs/graphql';
import { GraphQLModule } from './graph-qlmodule/graphql.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    NestGraphQLModule.forRoot({
      autoSchemaFile: `${process.cwd()}/graphql/schema.gql`,
      introspection: true,
      sortSchema: true,
      debug: true,
      include: [GraphQLModule],
    }),
    GraphQLModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
