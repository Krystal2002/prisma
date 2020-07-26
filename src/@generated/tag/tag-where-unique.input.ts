import { InputType, Field } from '@nestjs/graphql';

@InputType({})
export class TagWhereUniqueInput {
    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    id?: string | null;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    name?: string | null;
}
