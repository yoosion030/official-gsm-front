'use client';

import { useRouter } from 'next/navigation';

import styled from '@emotion/styled';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { z } from 'zod';

import { ToBackButton, Input, AuthTitle } from 'admin/components';
import { usePreventHistoryPop } from 'admin/hooks';

import { useGetUserInfo, usePatchUserName } from 'api/admin';

import { Button } from 'ui';

const schema = z.object({
  name: z
    .string()
    .min(2, { message: '성함을 2글자 이상 입력해주세요.' })
    .max(5, { message: '성함을 5글자 이하로 입력해주세요.' })
    .regex(/^[가-힣]+$/, { message: '성함은 한글로만 입력해주세요.' }),
});

type FormType = z.infer<typeof schema>;

export default function SignupPage() {
  const { replace } = useRouter();

  const { mutate, isSuccess, isLoading } = usePatchUserName();
  const { data: userInfo } = useGetUserInfo();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormType> = ({ name }) => {
    mutate(name);
  };

  if (userInfo?.userName || isSuccess) {
    replace('/auth/signup/pending');
  }

  usePreventHistoryPop();

  return (
    <>
      <ToBackButton onClick={() => replace('/auth/signin')} />
      <AuthTitle>
        우리 학교 선생님인지
        <br />
        확인하기 위해 성함을 입력해주세요.
      </AuthTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder={'성함을 입력해주세요.'}
          marginTop='1.5rem'
          isError={errors.name ? true : false}
          resetBtn={true}
          {...register('name')}
        />
        {errors.name && (
          <ErrorMessage>{`* ${errors.name.message}`}</ErrorMessage>
        )}
        <Button
          type='submit'
          position='absolute'
          bottom='1.5rem'
          isLoading={isLoading}
        >
          확인
        </Button>
      </form>
    </>
  );
}

const ErrorMessage = styled.p`
  font-weight: 400;
  font-size: 0.75rem;
  margin-top: 1rem;
  color: #f93535;
`;
