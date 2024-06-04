import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EmployeeModuleBase } from "./base/employee.module.base";
import { EmployeeService } from "./employee.service";
import { EmployeeController } from "./employee.controller";
import { EmployeeResolver } from "./employee.resolver";

@Module({
  imports: [EmployeeModuleBase, forwardRef(() => AuthModule)],
  controllers: [EmployeeController],
  providers: [EmployeeService, EmployeeResolver],
  exports: [EmployeeService],
})
export class EmployeeModule {}
