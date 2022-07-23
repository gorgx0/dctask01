import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { SklepResolverBase } from "./base/sklep.resolver.base";
import { Sklep } from "./base/Sklep";
import { SklepService } from "./sklep.service";

@graphql.Resolver(() => Sklep)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SklepResolver extends SklepResolverBase {
  constructor(
    protected readonly service: SklepService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
