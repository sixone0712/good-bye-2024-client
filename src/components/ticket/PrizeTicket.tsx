import { Clover, Gift } from 'lucide-react';

type TicketProps = {
  username: string;
  ticketStyle: string;
  ticketNumber: number;
};

export default function PrizeTicket({
  username,
  ticketStyle,
  ticketNumber,
}: TicketProps) {
  return (
    <div
      className={`flex flex-col justify-between rounded-xl p-4 ${ticketStyle}`}
    >
      <div className="font-Paperlogy text-xs">
        <div className="flex justify-between">
          <div>퍼플아이오</div>
          <div>2024 송년회</div>
        </div>
      </div>
      <div className="mt-10 text-center font-AtlantaCollege text-[5rem] tracking-wide">
        <div>{String(ticketNumber).padEnd(3, '0')}</div>
      </div>
      <div className="flex flex-col font-Paperlogy font-bold">
        <div className="flex flex-col items-end">
          <div className="text-[1.5rem] tracking-wider">TICKET</div>
          <div className="text-[0.5rem] font-medium">
            {`Believe in your luck, ${username}`}
          </div>
          <div className="mt-2 flex gap-1">
            <div className="rounded border-[1px] border-white p-0.5">
              <Clover className="h-3 w-3" />
            </div>
            <div className="rounded border-[1px] border-white p-0.5">
              <Gift className="h-3 w-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
