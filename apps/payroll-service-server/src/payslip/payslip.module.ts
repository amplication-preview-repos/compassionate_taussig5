import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PayslipModuleBase } from "./base/payslip.module.base";
import { PayslipService } from "./payslip.service";
import { PayslipController } from "./payslip.controller";
import { PayslipResolver } from "./payslip.resolver";

@Module({
  imports: [PayslipModuleBase, forwardRef(() => AuthModule)],
  controllers: [PayslipController],
  providers: [PayslipService, PayslipResolver],
  exports: [PayslipService],
})
export class PayslipModule {}
