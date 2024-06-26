"use client";

import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Barbershop } from "@prisma/client";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BarbershopItemsProps {
  barbershop: Barbershop;
}

const BarbershopItems = ({ barbershop }: BarbershopItemsProps) => {
  const router = useRouter();

  const handleBookingClick = () => {
    router.push(`/barbershops/${barbershop.id}`);
  }

  return ( 
    <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
      <CardContent className="px-1 py-0">
        <div className="w-full h-[159px] relative">
          <div className="absolute top-2 left-2 z-50">
            <Badge variant="secondary" className="flex opacity-90 gap-2 items-center">
              <StarIcon className="fill-primary text-primary" size={12}/>
              <span>5,0</span>
            </Badge>
          </div>
          <Image
            className="rounded-2xl"
            src={barbershop.imageUrl} 
            alt={barbershop.name}
            style={{
              objectFit: "cover",
            }}
            fill
          />
        </div>
        <div className="px-3 pb-3">
          <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap">{barbershop.name}</h2>
          <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">{barbershop.address}</p>
          <Button className="w-full mt-3" variant="secondary" onClick={handleBookingClick}>Reservar</Button>
        </div>
      </CardContent>
    </Card>
  );
}
 
export default BarbershopItems;
