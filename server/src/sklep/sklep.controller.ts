import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SklepService } from "./sklep.service";
import { SklepControllerBase } from "./base/sklep.controller.base";

@swagger.ApiTags("skleps")
@common.Controller("skleps")
export class SklepController extends SklepControllerBase {
  constructor(
    protected readonly service: SklepService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
