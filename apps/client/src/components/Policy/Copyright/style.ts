import styled from '@emotion/styled';

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentWrapper = styled(Column)`
  width: 1240px;
  gap: 80px;
  padding: 80px 0 120px;
  margin: 0 auto;
`;

export const Section1 = styled(Column)`
  gap: 48px;
`;

export const Title = styled.h2`
  ${({ theme }) => theme.typo.h2};
  color: ${({ theme }) => theme.color.gray['090']};
  font-weight: 600;
  margin-bottom: 8px;
`;

export const SubContentWrapper = styled(Column)`
  gap: 8px;
`;

export const RegularSubTitle = styled.p`
  ${({ theme }) => theme.typo.h3};
  color: ${({ theme }) => theme.color.gray['090']};
  font-weight: 400;
`;

export const BoldSubTitle = styled(RegularSubTitle)`
  font-weight: 600;
`;

export const Description = styled.p`
  ${({ theme }) => theme.typo.h4};
  color: ${({ theme }) => theme.color.gray['070']};
  font-weight: 400;
`;
