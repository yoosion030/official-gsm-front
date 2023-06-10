import styled from '@emotion/styled';

export const CarouselBar = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5625rem 0;
  justify-content: center;
  position: relative;
`;

export const DotWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 2.3125rem;
`;

export const Dot = styled.div`
  width: 0.3125rem;
  height: 0.3125rem;
  background: #9e9e9e;
  border-radius: 0.25rem;
  margin: 0 0.1875rem;

  transition: all 0.3s;
`;

export const CursorWrapper = styled.div`
  cursor: pointer;
`;
