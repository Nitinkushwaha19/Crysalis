import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

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

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, id }: { img: string; id: number }) => {
    return (
        <figure
            className={cn(
                "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img alt={`event-${id}`} src={img} />
            </div>
        </figure>
    );
};
// [
//     'Inaugral',
//     'Sports',
//     'Traditional',
//     'Cultural'
// ]
export function Events() {
    return (
        <div className="relative flex h-[800px] w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl">
            <h1>Inaugral</h1>
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.id} {...review} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((review) => (
                    <ReviewCard key={review.id} {...review} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-gray-900 dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-gray-900 dark:from-background"></div>
        </div>
    );
}
