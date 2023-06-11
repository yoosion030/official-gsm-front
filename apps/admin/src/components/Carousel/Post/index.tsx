import { useState } from 'react';

import Image from 'next/image';

import { css } from '@emotion/react';

import Controller from 'admin/components/Carousel/Controller';
import * as S from 'admin/components/Carousel/style';

import type { FileInfoType } from 'api/client';

interface CarouselProps {
  fileInfo?: FileInfoType[];
}

const Post: React.FC<CarouselProps> = ({ fileInfo }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <S.PostCarouselWrapper>
      <S.IMGOuterWrapper
        css={css`
          width: 29.75rem;
          height: 43.0625rem;
        `}
      >
        <S.IMGContainer>
          <S.MoveContainer
            css={css`
              right: ${currentIndex * 29.75}rem;
            `}
          >
            {fileInfo?.map((file, i) => (
              <S.IMGWrapper
                key={file.fileName + i}
                css={css`
                  width: 29.75rem;
                  height: 43.0625rem;
                  ${currentIndex === i &&
                  css`
                    transition: opacity 0.3s;
                    z-index: 1;
                    opacity: 1;
                  `}
                `}
              >
                <Image
                  unoptimized
                  alt='content image'
                  src={file.fileUrl}
                  fill
                />
              </S.IMGWrapper>
            ))}
          </S.MoveContainer>
        </S.IMGContainer>
      </S.IMGOuterWrapper>
      <Controller
        setCurrentIndex={setCurrentIndex}
        currentIndex={currentIndex}
        fileInfo={fileInfo}
      />
    </S.PostCarouselWrapper>
  );
};

export default Post;
