import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PayrollService } from "./payroll.service";
import { PayrollControllerBase } from "./base/payroll.controller.base";

@swagger.ApiTags("payrolls")
@common.Controller("payrolls")
export class PayrollController extends PayrollControllerBase {
  constructor(
    protected readonly service: PayrollService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
