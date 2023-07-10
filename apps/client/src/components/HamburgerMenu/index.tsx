import Link from 'next/link';

import { css, useTheme } from '@emotion/react';

import { CloseIcon, FooterGSMLogo } from 'client/assets';

import * as S from './style';

type SegmentType = '' | 'about' | 'list';

interface HamburgerMenuProps {
  segment: SegmentType;
  closeHamburgerMenu: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  segment,
  closeHamburgerMenu,
}) => {
  const theme = useTheme();

  const selectStyle = (href: SegmentType) =>
    segment === href &&
    css`
      color: ${theme.color.primary.navy};
    `;

  return (
    <S.HamburgerMenuContainer>
      <S.CloseButton onClick={closeHamburgerMenu}>
        <CloseIcon />
      </S.CloseButton>
      <S.HamburgerNav>
        <Link css={selectStyle('')} href='/'>
          홈
        </Link>
        <Link css={selectStyle('list')} href='/list/notice'>
          학교소식
        </Link>
        <Link css={selectStyle('about')} href='/about'>
          학교소개
        </Link>
        <a href='https://hellogsm.kr'>입학</a>
      </S.HamburgerNav>
      <FooterGSMLogo />
    </S.HamburgerMenuContainer>
  );
};

export default HamburgerMenu;
