import type { ContentType } from 'api/client';
import { DateComponent } from 'ui';

import * as S from './style';

interface PostCardProps {
  post: ContentType;
}

const PostCard: React.FC<PostCardProps> = ({
  post: { postSeq, postTitle, contentPreview, postWriter, createdAt },
}) => (
  <S.NoticeCard href={`/post/${postSeq}`}>
    <S.TitleWrap>
      <S.Title>{postTitle}</S.Title>
      <S.SubTitle>
        {contentPreview.length === 40 ? `${contentPreview}...` : contentPreview}
      </S.SubTitle>
    </S.TitleWrap>
    <S.WriterDateWrap>
      <S.Writer>{postWriter}</S.Writer>
      <S.Dot />
      <DateComponent createdAt={createdAt} />
    </S.WriterDateWrap>
  </S.NoticeCard>
);

export default PostCard;
