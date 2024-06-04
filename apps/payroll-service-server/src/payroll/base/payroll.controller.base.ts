/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { PayrollService } from "../payroll.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PayrollCreateInput } from "./PayrollCreateInput";
import { Payroll } from "./Payroll";
import { PayrollFindManyArgs } from "./PayrollFindManyArgs";
import { PayrollWhereUniqueInput } from "./PayrollWhereUniqueInput";
import { PayrollUpdateInput } from "./PayrollUpdateInput";
import { PayslipFindManyArgs } from "../../payslip/base/PayslipFindManyArgs";
import { Payslip } from "../../payslip/base/Payslip";
import { PayslipWhereUniqueInput } from "../../payslip/base/PayslipWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PayrollControllerBase {
  constructor(
    protected readonly service: PayrollService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Payroll })
  @nestAccessControl.UseRoles({
    resource: "Payroll",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createPayroll(
    @common.Body() data: PayrollCreateInput
  ): Promise<Payroll> {
    return await this.service.createPayroll({
      data: {
        ...data,

        employee: data.employee
          ? {
              connect: data.employee,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        date: true,

        employee: {
          select: {
            id: true,
          },
        },

        id: true,
        totalAmount: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Payroll] })
  @ApiNestedQuery(PayrollFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Payroll",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async payrolls(@common.Req() request: Request): Promise<Payroll[]> {
    const args = plainToClass(PayrollFindManyArgs, request.query);
    return this.service.payrolls({
      ...args,
      select: {
        createdAt: true,
        date: true,

        employee: {
          select: {
            id: true,
          },
        },

        id: true,
        totalAmount: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Payroll })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Payroll",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async payroll(
    @common.Param() params: PayrollWhereUniqueInput
  ): Promise<Payroll | null> {
    const result = await this.service.payroll({
      where: params,
      select: {
        createdAt: true,
        date: true,

        employee: {
          select: {
            id: true,
          },
        },

        id: true,
        totalAmount: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Payroll })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Payroll",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updatePayroll(
    @common.Param() params: PayrollWhereUniqueInput,
    @common.Body() data: PayrollUpdateInput
  ): Promise<Payroll | null> {
    try {
      return await this.service.updatePayroll({
        where: params,
        data: {
          ...data,

          employee: data.employee
            ? {
                connect: data.employee,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          date: true,

          employee: {
            select: {
              id: true,
            },
          },

          id: true,
          totalAmount: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Payroll })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Payroll",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deletePayroll(
    @common.Param() params: PayrollWhereUniqueInput
  ): Promise<Payroll | null> {
    try {
      return await this.service.deletePayroll({
        where: params,
        select: {
          createdAt: true,
          date: true,

          employee: {
            select: {
              id: true,
            },
          },

          id: true,
          totalAmount: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/payslips")
  @ApiNestedQuery(PayslipFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Payslip",
    action: "read",
    possession: "any",
  })
  async findPayslips(
    @common.Req() request: Request,
    @common.Param() params: PayrollWhereUniqueInput
  ): Promise<Payslip[]> {
    const query = plainToClass(PayslipFindManyArgs, request.query);
    const results = await this.service.findPayslips(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        issueDate: true,

        payroll: {
          select: {
            id: true,
          },
        },

        salary: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/payslips")
  @nestAccessControl.UseRoles({
    resource: "Payroll",
    action: "update",
    possession: "any",
  })
  async connectPayslips(
    @common.Param() params: PayrollWhereUniqueInput,
    @common.Body() body: PayslipWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      payslips: {
        connect: body,
      },
    };
    await this.service.updatePayroll({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/payslips")
  @nestAccessControl.UseRoles({
    resource: "Payroll",
    action: "update",
    possession: "any",
  })
  async updatePayslips(
    @common.Param() params: PayrollWhereUniqueInput,
    @common.Body() body: PayslipWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      payslips: {
        set: body,
      },
    };
    await this.service.updatePayroll({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/payslips")
  @nestAccessControl.UseRoles({
    resource: "Payroll",
    action: "update",
    possession: "any",
  })
  async disconnectPayslips(
    @common.Param() params: PayrollWhereUniqueInput,
    @common.Body() body: PayslipWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      payslips: {
        disconnect: body,
      },
    };
    await this.service.updatePayroll({
      where: params,
      data,
      select: { id: true },
    });
  }
}
