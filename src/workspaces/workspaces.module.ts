import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { WorkspacesContext } from './workspaces.context';

@Module({
  imports: [PrismaModule],
  providers: [WorkspacesContext],
  exports: [WorkspacesContext],
})
export class WorkspacesModule {}
