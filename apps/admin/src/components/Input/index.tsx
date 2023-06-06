import type { DetailedHTMLProps, InputHTMLAttributes} from 'react';
import { forwardRef } from 'react';

import { css } from '@emotion/react';

import { InputValueResetBtnIcon } from 'admin/assets';
import { useForwardRef } from 'admin/hooks';

import * as S from './style';

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  width?: string;
  height?: string;
  resetBtn?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ width, height, resetBtn = false, ...attributes }, ref) => {
    const inputRef = useForwardRef<HTMLInputElement>(ref);

    const resetButtonClick = () => {
      if (inputRef) {
        inputRef.current.value = '';
        inputRef.current.focus();
      }
    };

    return (
      <S.InputWrapper
        css={css`
          width: ${width};
          height: ${height};
        `}
      >
        <S.InputBox
          {...attributes}
          ref={inputRef}
          css={css`
            border-radius: ${width === "36.125rem" ? "0.625rem" : "1.25rem"};
          `}
        />
        {resetBtn && (
          <S.InputValueResetBtn onClick={() => resetButtonClick()}>
            <InputValueResetBtnIcon />
          </S.InputValueResetBtn>
        )}
      </S.InputWrapper>
    );
  }
);

Input.displayName = 'Input';

export default Input;
