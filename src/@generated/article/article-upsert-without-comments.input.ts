import { Field, InputType } from '@nestjs/graphql';

import { ArticleCreateWithoutCommentsInput } from './article-create-without-comments.input';
import { ArticleUpdateWithoutCommentsInput } from './article-update-without-comments.input';

@InputType()
export class ArticleUpsertWithoutCommentsInput {
    @Field(() => ArticleUpdateWithoutCommentsInput, {
        nullable: true,
    })
    update?: ArticleUpdateWithoutCommentsInput;

    @Field(() => ArticleCreateWithoutCommentsInput, {
        nullable: true,
    })
    create?: ArticleCreateWithoutCommentsInput;
}
