import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import { useEffect } from "react";

const reviews = [
    {
        id: 1,
        img: "/assets/event1.jpeg",
    },
    {
        id: 2,
        img: "/assets/event2.jpeg",
    },
    {
        id: 3,
        img: "/assets/event3.jpeg",
    },
    {
        id: 4,
        img: "/assets/event4.jpg",
    },
    {
        id: 5,
        img: "/assets/event5.jpg",
    },
    {
        id: 6,
        img: "/assets/event6.jpg",
    },
    {
        id: 7,
        img: "/assets/event7.jpg",
    },
    {
        id: 8,
        img: "/assets/event8.jpg",
    },
];

type EventProps = {
    title: string;
    images: string[];
};

const ReviewCard = ({ img, alt }: { img: string; alt: number }) => {
    return (
        <figure
            className={cn(
                "z-10 relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img alt={`event-${alt}`} src={img} />
            </div>
        </figure>
    );
};

export default function Event({ title, images }: EventProps) {
    const firstRow = images.slice(0, images.length / 2);
    const secondRow = images.slice(images.length / 2);
    return (
        <div className="relative flex h-[800px] w-11/12 mx-auto flex-col items-center justify-center bg-gray-950 overflow-hidden rounded-lg md:shadow-xl">
            <h1
                className="text-6xl font-bold text-white pb-10 mt-32"
                style={{ fontFamily: "Bodoni Moda" }}
            >
                {title}
            </h1>
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((img, index) => (
                    <ReviewCard key={`${index}-first`} alt={index} img={img} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((img, index) => (
                    <ReviewCard key={`${index}-second`} alt={index} img={img} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black via-gray-950 dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black via-gray-950 dark:from-background"></div>
        </div>
    );
}
