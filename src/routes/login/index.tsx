import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { createFileRoute } from '@tanstack/react-router';
import PartyStar from '@/assets/images/lottie/party-star.lottie';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import PurpleIO from '@/assets/images/svg/purple-io.svg?react';
import { useEffect } from 'react';

export const Route = createFileRoute('/login/')({
  component: LoginPage,
});

function LoginPage() {
  useEffect(() => {
    const testFetch = async () => {
      const response = await fetch(
        'http://ec2-43-203-124-218.ap-northeast-2.compute.amazonaws.com:8002/api/health',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const data = await response.json();
      console.log(data);
    };

    testFetch();
  });

  return (
    <div className="w-100vw flex h-dvh flex-col items-center px-10">
      <div className="mt-14 flex flex-col items-center justify-center">
        <div className="w-65">
          <DotLottieReact src={PartyStar} autoplay loop />
        </div>
        <PurpleIO />
      </div>

      <div className="mt-10" />

      <div className="flex w-full flex-col justify-start font-Paperlogy text-xl font-semibold">
        <span>
          <span>2024년 </span>
          <span className={'text-purple-400'}>퍼플아이오 🐮</span>
        </span>

        <span>
          <span className={'text-yellow-400'}>송년회</span>
          <span>에 오신 걸 환영해요.</span>
        </span>
      </div>

      <div className="mt-5" />

      <div className="flex w-full flex-col gap-4">
        <Input placeholder="이름을 입력해주세요." type="text" width="100%" />
        <Input
          placeholder="휴대전화 뒷번호 4자리를 입력해주세요."
          type="password"
          maxLength={4}
        />
      </div>

      <Button className="mt-10 w-full" size="lg">
        참가하시겠어요?
      </Button>
    </div>
  );
}
