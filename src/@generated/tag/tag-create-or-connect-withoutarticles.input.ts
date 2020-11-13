import { Field, InputType } from '@nestjs/graphql';

import { TagCreateWithoutArticlesInput } from './tag-create-without-articles.input';
import { TagWhereUniqueInput } from './tag-where-unique.input';

@InputType()
export class TagCreateOrConnectWithoutarticlesInput {
    @Field(() => TagWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: TagWhereUniqueInput;

    @Field(() => TagCreateWithoutArticlesInput, {
        nullable: true,
        description: undefined,
    })
    create?: TagCreateWithoutArticlesInput;
}
