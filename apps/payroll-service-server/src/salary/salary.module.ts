import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SalaryModuleBase } from "./base/salary.module.base";
import { SalaryService } from "./salary.service";
import { SalaryController } from "./salary.controller";
import { SalaryResolver } from "./salary.resolver";

@Module({
  imports: [SalaryModuleBase, forwardRef(() => AuthModule)],
  controllers: [SalaryController],
  providers: [SalaryService, SalaryResolver],
  exports: [SalaryService],
})
export class SalaryModule {}
