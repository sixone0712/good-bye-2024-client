import TicketItems from '@/components/ticket/TicketItems';
import TicketNumbers from '@/components/ticket/TicketNumbers';
import TicketUser from '@/components/ticket/TicketUser';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/ticket/')({
  component: TicketPage,
});

function TicketPage() {
  return (
    <div className="w-100vw flex h-dvh flex-col px-4">
      <TicketUser />

      <TicketItems />

      <div className="mt-4" />

      <TicketNumbers />
    </div>
  );
}
