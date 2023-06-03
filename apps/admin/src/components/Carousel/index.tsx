import * as S from './style';
import Image from 'next/image';
import { css } from '@emotion/react';
import { CarouselIcon } from 'admin/assets';

interface CarouselProps {
  thumbnailUrl: string | null;
  isGallery: boolean;
}

const Carousel: React.FC<CarouselProps> = ({ thumbnailUrl, isGallery }) => {
  return (
    <>
      <S.IMGWrapper
        css={css`
          width: ${isGallery ? '650' : '476'}px;
          height: ${isGallery ? '400' : '689'}px;
        `}
      >
        <Image alt='content image' src={thumbnailUrl ?? ''} fill />
      </S.IMGWrapper>
      <S.CarouselBar>
        <CarouselIcon isTurn={false} />
        <S.DotWrapper>
          <S.Dot />
          <S.Dot />
          <S.Dot />
          <S.Dot />
        </S.DotWrapper>
        <CarouselIcon isTurn={true} />
      </S.CarouselBar>
    </>
  );
};

export default Carousel;
