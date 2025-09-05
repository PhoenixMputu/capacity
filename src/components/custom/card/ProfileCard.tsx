import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ProfileCardProps } from "@/types/card";

export default function ProfileCard({
  image,
  name,
  role,
  handicap,
}: ProfileCardProps) {
  return (
    <Card className="max-w-76 w-77 rounded-xl flex flex-col gap-6 border-none p-6">
      <div className="relative w-full h-44 rounded-xl">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-xl"
          priority
        />
      </div>

      <CardContent className="w-full p-0 flex flex-col items-start justify-start gap-1">
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-base font-medium text-gray-800">{role}</p>
        <p className="text-base text-gray-500">{handicap}</p>
      </CardContent>

      <CardFooter className="w-full p-0">
        <Button className="w-full" variant={"default"}>
          Consulter le profil
        </Button>
      </CardFooter>
    </Card>
  );
}
