import styled from '@emotion/styled';

export const ScrollContentsWrap = styled.div<{ isWhite: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  align-items: center;
  animation: motion 0.7s linear 0s infinite alternate;
  position: absolute;
  bottom: 2.625rem;
  left: 50%;
  path {
    stroke: ${({ isWhite }) => (isWhite ? '#ffffff' : '')};
    fill: ${({ isWhite }) => (isWhite ? '#ffffff' : '')};
  }

  @keyframes motion {
    0% {
      transform: translate(-50%, 0.625rem);
    } /* 처음 위치 */
    100% {
      transform: translate(-50%, 0);
    } /* 마지막 위치 */
  }
`;

export const ScrollTitle = styled.p`
  color: ${({ theme }) => theme.color.gray['080']};
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.1875rem;
  color: white;
`;
