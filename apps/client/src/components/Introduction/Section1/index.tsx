import { MouseIcon, ChevronsIcon } from 'assets';
import { IntroductionTitle } from 'components';

import * as S from './style';

const Section1 = () => {
  const introduceTitle = [
    {
      pointsize: '0.8263rem',
      className: 'firstTitle',
      title: '상상과 실력으로',
    },
    {
      pointsize: '0.7063rem',
      className: 'secondTitle',
      title: 'AI 시대를 선도할',
    },
    {
      pointsize: '0.75rem',
      className: 'thirdTitle',
      title: 'SW 마이스터',
    },
  ];

  return (
    <S.Section1Page>
      <S.Section1PageTitleWrap>
        <S.GradationCircle />
        <S.GradationCircle2 />
        <S.GradationCircle3 />
        <S.IntroductionTitleWrap>
          {introduceTitle.map((index) => (
            <IntroductionTitle
              key={index.title}
              pointPosition='bottom'
              pointColor='lime'
              pointSize={index.pointsize}
              className={index.className}
            >
              {index.title}
            </IntroductionTitle>
          ))}
        </S.IntroductionTitleWrap>
        <S.SchoolTitle>GWANGJU SOFTWARE Meister High School</S.SchoolTitle>
      </S.Section1PageTitleWrap>
      <S.ScrollContentsWrap>
        <S.ScrollTitle>scroll</S.ScrollTitle>
        <MouseIcon />
        <ChevronsIcon />
      </S.ScrollContentsWrap>
    </S.Section1Page>
  );
};

export default Section1;
