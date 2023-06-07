import styled from '@emotion/styled';

export const TextAreaWrapper = styled.div``;

export const TextAreaBox = styled.textarea<{ borderRadius: string }>`
  width: 100%;
  height: 100%;
  border: 0.0625rem solid #dcdcdc;
  border-radius: ${({ borderRadius }) => borderRadius};
  outline: none;
  background-color: #fff;
  padding: 0.875rem 1.25rem 0.875rem 1.25rem;
  font-size: 0.75rem;
  color: #a4a4a4;
  resize: none;
  transition: ease-in-out 0.3s;

  ::-webkit-scrollbar {
    display: none;
  }

  :hover {
    border: 0.0625rem solid #050505;
  }

  :focus {
    border: 0.0625rem solid #050505;
    color: #505050;
  }

  ::placeholder {
    color: #a4a4a4;
  }
`;
