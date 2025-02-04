import Event from "@/components/Event";
import Event3D from "@/components/Event3D";

const events = [
    {
        title: "Inaugral",
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
        title: "Sports",
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
        <>
            {events.map((event) => (
                <div key={event.title}>
                    <Event
                        key={event.title}
                        title={event.title}
                        images={event.images}
                        vertical={event.vertical}
                    />
                </div>
            ))}
            <Event3D logos={events3d} />
        </>
    );
}
