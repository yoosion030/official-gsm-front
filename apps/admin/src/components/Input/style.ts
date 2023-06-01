import styled from '@emotion/styled';

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const InputValueResetBtn = styled.button`
  height: 1rem;
  position: absolute;
  right: 1rem;
  opacity: 0;
  transition: ease-in-out 0.3s;
`;

export const InputBox = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 1.25rem;
  border: 0.0625rem solid #dcdcdc;
  background-color: #fff;
  padding: 0 1.25rem;
  font-size: 0.75rem;
  color: #a4a4a4;
  transition: ease-in-out 0.3s;
  outline: none;

  :hover {
    border: 0.0625rem solid #050505;
  }

  :focus {
    color: #505050;
    border: 0.0625rem solid #050505;
  }

  &:focus + ${InputValueResetBtn} {
    opacity: 1;
    cursor: pointer;
  }

  ::placeholder {
    color: #a4a4a4;
  }
`;
