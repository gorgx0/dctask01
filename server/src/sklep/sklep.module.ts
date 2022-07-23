import { Module } from "@nestjs/common";
import { SklepModuleBase } from "./base/sklep.module.base";
import { SklepService } from "./sklep.service";
import { SklepController } from "./sklep.controller";
import { SklepResolver } from "./sklep.resolver";

@Module({
  imports: [SklepModuleBase],
  controllers: [SklepController],
  providers: [SklepService, SklepResolver],
  exports: [SklepService],
})
export class SklepModule {}
