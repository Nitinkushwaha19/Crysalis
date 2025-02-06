import Event from "@/components/Event";
import Event3D from "@/components/Event3D";

const events = [
    {
        title: "INAUGRAL",
        images: [
            "/assets/event1.jpeg",
            "/assets/event2.jpeg",
            "/assets/event3.jpeg",
            "/assets/event4.jpg",
            "/assets/event5.jpg",
            "/assets/event6.jpg",
            "/assets/event7.jpg",
            "/assets/event8.jpg",
        ],
        vertical: false,
    },
    {
        title: "SPORTS",
        images: [
            "/assets/event1.jpeg",
            "/assets/event2.jpeg",
            "/assets/event3.jpeg",
            "/assets/event4.jpg",
            "/assets/event5.jpg",
            "/assets/event6.jpg",
            "/assets/event7.jpg",
            "/assets/event8.jpg",
        ],
        vertical: true,
    },
];
const events3d = [
    {
        name: "Microsoft",
        img: "/assets/event1.jpeg",
    },
    {
        name: "Apple",
        img: "/assets/event2.jpeg",
    },
    {
        name: "Google",
        img: "/assets/event3.jpeg",
    },
    {
        name: "Facebook",
        img: "/assets/event4.jpg",
    },
    {
        name: "LinkedIn",
        img: "/assets/event5.jpg",
    },
    {
        name: "Twitter",
        img: "/assets/event6.jpg",
    },
];
export default function EventsPage() {
    return (
        <div className="bg-black">
            {events.map((event) => (
                <div className="min-h-screen" key={event.title}>
                    <Event
                        key={event.title}
                        title={event.title}
                        images={event.images}
                        vertical={event.vertical}
                    />
                </div>
            ))}
            <div className="flex flex-col-reverse justify-center items-center md:flex-row">
                <Event3D logos={events3d} />
                <h1
                    className="text-4xl mb-5 text-white md:text-6xl lg:mr-36"
                    style={{ fontFamily: "Bodoni Moda" }}
                >
                    CULTURAL
                </h1>
            </div>
        </div>
    );
}
