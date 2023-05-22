"use client";

import styled from "@emotion/styled";
import {
  AuthTitle,
  AuthModel,
  ToBackButton,
  AuthDescription,
} from "components";
import { useRouter } from "next/navigation";
import { Button } from "ui";

// TODO : react-query refetchInterval 사용하여 지속적으로 pending 여부 확인

export default function PendingPage() {
  const { replace } = useRouter();

  return (
    <>
      <ToBackButton onClick={() => replace("/auth/signin")} />
      <AuthTitle textAlign="center">
        관리자에게 요청을 보냈어요.
        <br />
        요청이 승인될 때 까지 기다려주세요.
      </AuthTitle>
      <AuthDescription>상황에 따라 시간이 걸릴 수 있어요.</AuthDescription>
      <AuthModel modelUrl="/models/pending.webm" marginTopREM={2.5} />
      <Button position="absolute" bottomREM={1.5} disabled={true}>
        대기중
      </Button>
    </>
  );
}
