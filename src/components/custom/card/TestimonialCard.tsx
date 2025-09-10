import Image from "next/image";
import { Card, CardHeader, CardDescription } from "@/components/ui/card";
import { TestimonialCardProps } from "@/types/card";

const TestimonialCard = ({
  image,
  name,
  role,
  description,
}: TestimonialCardProps) => {
  return (
    <Card className="w-full border-none max-w-[300px] bg-white rounded-2xl shadow-md p-6">
      <CardHeader className="flex flex-row items-center gap-4 p-0">
        <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={image}
            alt={`Photo de ${name}, ${role}`}
            fill
            className="object-cover rounded-full"
            priority
          />
        </div>
        <div className="flex flex-col items-start">
          <h2 className="text-base font-semibold">{name}</h2>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </CardHeader>

      <CardDescription className="text-left">
        <p className="text-base text-gray-700 leading-relaxed">{description}</p>
      </CardDescription>
    </Card>
  );
};

export default TestimonialCard;
