import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PayslipServiceBase } from "./base/payslip.service.base";

@Injectable()
export class PayslipService extends PayslipServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
