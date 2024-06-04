import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SalaryServiceBase } from "./base/salary.service.base";

@Injectable()
export class SalaryService extends SalaryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
