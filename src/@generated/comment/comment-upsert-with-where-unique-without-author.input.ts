import { Field, InputType } from '@nestjs/graphql';

import { CommentCreateWithoutAuthorInput } from './comment-create-without-author.input';
import { CommentUpdateWithoutAuthorInput } from './comment-update-without-author.input';
import { CommentWhereUniqueInput } from './comment-where-unique.input';

@InputType()
export class CommentUpsertWithWhereUniqueWithoutAuthorInput {
    @Field(() => CommentWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: CommentWhereUniqueInput;

    @Field(() => CommentUpdateWithoutAuthorInput, {
        nullable: true,
        description: undefined,
    })
    update?: CommentUpdateWithoutAuthorInput;

    @Field(() => CommentCreateWithoutAuthorInput, {
        nullable: true,
        description: undefined,
    })
    create?: CommentCreateWithoutAuthorInput;
}
