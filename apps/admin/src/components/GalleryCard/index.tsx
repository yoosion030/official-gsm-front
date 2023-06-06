import React from 'react';

import Image from 'next/image';

import { WriterAndDate } from 'admin/components';

import * as S from './style';

import { ContentPropsType } from 'api/client';

const GalleryCard: React.FC<ContentPropsType> = ({
  post: { thumbnailUrl, postWriter, postTitle, createdAt },
  description,
}) => (
  <S.CardWrapper>
    <S.IMGWrapper>
      <Image fill src={thumbnailUrl ?? ''} alt='ContentIMG' />
    </S.IMGWrapper>
    <S.Title>{postTitle}</S.Title>
    <S.Description>{description}</S.Description>
    <WriterAndDate createdAt={createdAt} postWriter={postWriter} />
  </S.CardWrapper>
);

export default GalleryCard;
