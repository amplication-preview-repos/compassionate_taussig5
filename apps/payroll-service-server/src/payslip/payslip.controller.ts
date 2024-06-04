import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PayslipService } from "./payslip.service";
import { PayslipControllerBase } from "./base/payslip.controller.base";

@swagger.ApiTags("payslips")
@common.Controller("payslips")
export class PayslipController extends PayslipControllerBase {
  constructor(
    protected readonly service: PayslipService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
