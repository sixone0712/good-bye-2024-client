import { Ticket, WandSparkles } from 'lucide-react';
import { cloneElement, JSX, PropsWithChildren, ReactNode } from 'react';

export default function TicketUser() {
  return (
    <div>
      <div className="my-4 flex w-full items-center justify-between rounded-2xl bg-gray-50 p-4 font-Paperlogy text-black">
        <div>
          <div>Hi, 박찬호님</div>
        </div>
        <div>
          <div className="flex gap-3 font-Pretendard">
            <StatusIcon icon={<Ticket />} count={13} />
            <StatusIcon icon={<WandSparkles />} count={3} />
            {/*<div className="relative flex">*/}
            {/*  <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-gray-200">*/}
            {/*    <Ticket className="h-5 w-5 rotate-90" />*/}
            {/*  </div>*/}
            {/*  <div className="absolute -right-1 -top-1 w-3 text-center text-[0.5rem] font-bold">*/}
            {/*    13*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*<div className="relative flex">*/}
            {/*  <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-gray-200">*/}
            {/*    <WandSparkles className="h-5 w-5" />*/}
            {/*  </div>*/}
            {/*  <div className="absolute -right-1 -top-1 w-3 text-center text-[0.5rem] font-bold">*/}
            {/*    3*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </div>
  );
}

const StatusIcon = ({ icon, count }: { icon: JSX.Element; count: number }) => {
  return (
    <div className="relative flex gap-1">
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-200">
        {cloneElement(icon, { className: 'h-5 w-5 rotate-90' })}
      </div>
      <div className="absolute -right-1 -top-1 w-3 text-center text-[0.5rem] font-bold">
        {count}
      </div>
    </div>
  );
};
