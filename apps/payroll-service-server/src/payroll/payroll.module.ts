import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PayrollModuleBase } from "./base/payroll.module.base";
import { PayrollService } from "./payroll.service";
import { PayrollController } from "./payroll.controller";
import { PayrollResolver } from "./payroll.resolver";

@Module({
  imports: [PayrollModuleBase, forwardRef(() => AuthModule)],
  controllers: [PayrollController],
  providers: [PayrollService, PayrollResolver],
  exports: [PayrollService],
})
export class PayrollModule {}
