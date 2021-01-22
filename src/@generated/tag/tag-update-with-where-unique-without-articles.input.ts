import { Field, InputType } from '@nestjs/graphql';

import { TagUncheckedUpdateWithoutArticlesInput } from './tag-unchecked-update-without-articles.input';
import { TagUpdateWithoutArticlesInput } from './tag-update-without-articles.input';
import { TagWhereUniqueInput } from './tag-where-unique.input';

@InputType()
export class TagUpdateWithWhereUniqueWithoutArticlesInput {
    @Field(() => TagWhereUniqueInput, {
        nullable: false,
    })
    where!: TagWhereUniqueInput;

    @Field(() => TagUpdateWithoutArticlesInput, {
        nullable: false,
    })
    data!: TagUpdateWithoutArticlesInput | TagUncheckedUpdateWithoutArticlesInput;
}
