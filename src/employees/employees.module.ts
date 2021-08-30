import { Module } from '@nestjs/common';
import { EmployeesContext } from './employees.context';

@Module({
  providers: [EmployeesContext],
  exports: [EmployeesContext],
})
export class EmployeesModule {}
