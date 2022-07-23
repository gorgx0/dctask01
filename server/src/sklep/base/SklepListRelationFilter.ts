/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SklepWhereInput } from "./SklepWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class SklepListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => SklepWhereInput,
  })
  @ValidateNested()
  @Type(() => SklepWhereInput)
  @IsOptional()
  @Field(() => SklepWhereInput, {
    nullable: true,
  })
  every?: SklepWhereInput;

  @ApiProperty({
    required: false,
    type: () => SklepWhereInput,
  })
  @ValidateNested()
  @Type(() => SklepWhereInput)
  @IsOptional()
  @Field(() => SklepWhereInput, {
    nullable: true,
  })
  some?: SklepWhereInput;

  @ApiProperty({
    required: false,
    type: () => SklepWhereInput,
  })
  @ValidateNested()
  @Type(() => SklepWhereInput)
  @IsOptional()
  @Field(() => SklepWhereInput, {
    nullable: true,
  })
  none?: SklepWhereInput;
}
export { SklepListRelationFilter };