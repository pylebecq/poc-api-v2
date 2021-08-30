import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule as NestGraphQLModule } from '@nestjs/graphql';
import { EmployeesModule } from './employees/employees.module';
import { GraphQLModule } from './graphql/graphql.module';
import { PrismaModule } from './prisma/prisma.module';
import { WorkspacesModule } from './workspaces/workspaces.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    NestGraphQLModule.forRoot({
      autoSchemaFile: `${process.cwd()}/graphql/schema.gql`,
      introspection: true,
      sortSchema: true,
      debug: true,
      include: [GraphQLModule],
    }),
    GraphQLModule,
    WorkspacesModule,
    EmployeesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
