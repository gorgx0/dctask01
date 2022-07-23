import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { SklepServiceBase } from "./base/sklep.service.base";

@Injectable()
export class SklepService extends SklepServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
