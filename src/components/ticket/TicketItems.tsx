import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

export default function TicketItems() {
  return (
    <div className="rounded-2xl bg-section p-4">
      <div className="font-Paperlogy text-xl font-semibold">아이템</div>
      <Carousel
        className="m-4"
        opts={{
          align: 'start',
        }}
        // className="w-full max-w-sm"
      >
        <CarouselContent>
          {ITEMS.map((_, index) => (
            <CarouselItem key={index} className="basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-1 font-Paperlogy">
                    <span className="text-sm font-semibold">짝수만</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

const ITEMS = ['아이템1', '아이템2', '아이템3', '아이템4', '아이템5'];
