import { Field, InputType, Int } from '@nestjs/graphql';

@InputType({})
export class IntFilter {
    @Field(() => Int, {
        nullable: true,
        description: undefined,
    })
    equals?: number | null;

    @Field(() => IntFilter, {
        nullable: true,
        description: undefined,
    })
    not?: number | IntFilter | null;

    @Field(() => [Int], {
        nullable: true,
        description: undefined,
    })
    in?: number | number[] | null;

    @Field(() => [Int], {
        nullable: true,
        description: undefined,
    })
    notIn?: number | number[] | null;

    @Field(() => Int, {
        nullable: true,
        description: undefined,
    })
    lt?: number | null;

    @Field(() => Int, {
        nullable: true,
        description: undefined,
    })
    lte?: number | null;

    @Field(() => Int, {
        nullable: true,
        description: undefined,
    })
    gt?: number | null;

    @Field(() => Int, {
        nullable: true,
        description: undefined,
    })
    gte?: number | null;
}
