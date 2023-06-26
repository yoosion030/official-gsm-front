import { useState, useEffect } from 'react';

import { css } from '@emotion/react';

import type { ContentType } from 'api/client';

import Banner from './Banner';
import NoticeBannerController from './Controller';
import * as S from './style';

interface NoticeBannerType {
  postList: ContentType[];
}

const NoticeBanner: React.FC<NoticeBannerType> = ({ postList }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
        setCurrentIndex(
          currentIndex === postList.length - 1 ? 0 : currentIndex + 1
        );
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, postList.length]);

  return (
    <S.NoiceBannerWrapper>
      <S.SlideContainer
        css={css`
          right: calc(${currentIndex * 100}vw + ${currentIndex * 77.375}rem);
        `}
      >
        {postList.map((post) => (
          <Banner key={post.postSeq} post={post} />
        ))}
      </S.SlideContainer>
      <NoticeBannerController
        postList={postList}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </S.NoiceBannerWrapper>
  );
};

export default NoticeBanner;
