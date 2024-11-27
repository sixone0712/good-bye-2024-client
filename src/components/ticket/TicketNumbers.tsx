// Import Swiper React components
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import PrizeTicket from '@/components/ticket/PrizeTicket.tsx';

// import './styles.css';

export default function TicketNumbers() {
  return (
    <div className="rounded-2xl bg-section p-4">
      <div className="flex font-Paperlogy text-xl font-semibold">경품 티켓</div>
      <div className="mt-4 flex items-center justify-center">
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="aspect-[1/1.6] w-44"
        >
          {new Array(10).fill(0).map((_, i) => (
            <SwiperSlide key={i} className="flex items-center justify-center">
              <PrizeTicket
                username="찬호"
                ticketStyle={
                  TICKET_GRADIANT_STYLE[i % TICKET_GRADIANT_STYLE.length]
                }
                ticketNumber={i}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

const TICKET_GRADIANT_STYLE = [
  'bg-gradient-to-r from-red-300 to-red-600',
  'bg-gradient-to-r from-amber-300 to-amber-600',
  'bg-gradient-to-r from-lime-300 to-lime-600',
  'bg-gradient-to-r from-emerald-300 to-emerald-600',
  'bg-gradient-to-r from-cyan-300 to-cyan-600',
  'bg-gradient-to-r from-blue-300 to-blue-600',
  'bg-gradient-to-r from-violet-300 to-violet-600',
  'bg-gradient-to-r from-yellow-300 to-yellow-600',
  'bg-gradient-to-r from-green-300 to-green-600',
  'bg-gradient-to-r from-teal-300 to-teal-600',
  'bg-gradient-to-r from-sky-300 to-sky-600',
  'bg-gradient-to-r from-indigo-300 to-indigo-600',
  'bg-gradient-to-r from-purple-300 to-purple-600',

  // "bg-red-400",
  // "bg-amber-400",
  // "bg-lime-400",
  // "bg-emerald-400",
  // "bg-cyan-400",
  // "bg-blue-400",
  // "bg-violet-400",
  // "bg-yellow-400",
  // "bg-green-400",
  // "bg-teal-400",
  // "bg-sky-400",
  // "bg-indigo-400",
  // "bg-purple-400",
];

// const CARD_BG_COLORS = [
//   "bg-red-400",
//   // "bg-orange-400",
//   "bg-amber-400",
//   // "bg-yellow-400",
//   "bg-lime-400",
//   // "bg-green-400",
//   "bg-emerald-400",
//   // "bg-teal-400",
//   "bg-cyan-400",
//   // "bg-sky-400",
//   "bg-blue-400",
//   // "bg-indigo-400",
//   "bg-violet-400",
//   // "bg-purple-400",
// ];
