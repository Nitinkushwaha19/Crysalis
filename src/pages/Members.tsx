import React, { useEffect } from 'react';
import ProfileCard from '../components/MembersCard'; // Assuming you have ProfileCard component in the same directory
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

// Sample data for the team members
const members = [
    { name: 'John Doe', designation: 'Our Lead', imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80' },
    { name: 'Jane Smith', designation: 'Technical Member', imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80' },
    { name: 'Sam Wilson', designation: 'Committee Member', imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80' },
    { name: 'Chris Evans', designation: 'Our Lead', imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80' },
    { name: 'Mark Ruffalo', designation: 'Technical Member', imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80' },
    { name: 'Scarlett Johansson', designation: 'Committee Member', imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80' },
    { name: 'Robert Downey Jr.', designation: 'Our Lead', imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80' },
    { name: 'Tom Hiddleston', designation: 'Technical Member', imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80' },
    { name: 'Tom Holland', designation: 'Committee Member', imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80' },
    { name: 'Chris Evans', designation: 'Our Lead', imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80' },
    { name: 'Mark Ruffalo', designation: 'Technical Member', imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80' },
    { name: 'Scarlett Johansson', designation: 'Committee Member', imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80' },
    { name: 'Robert Downey Jr.', designation: 'Our Lead', imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80' },
    { name: 'Tom Hiddleston', designation: 'Technical Member', imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80' },
    { name: 'Tom Holland', designation: 'Committee Member', imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80' },
    { name: 'Scarlett Johansson', designation: 'Committee Member', imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80' },
    { name: 'Robert Downey Jr.', designation: 'Our Lead', imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80' },
    { name: 'Tom Hiddleston', designation: 'Technical Member', imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80' },
    { name: 'Tom Holland', designation: 'Committee Member', imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80' },
    { name: 'Scarlett Johansson', designation: 'Committee Member', imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80' },
    { name: 'Robert Downey Jr.', designation: 'Our Lead', imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80' },
    { name: 'Tom Hiddleston', designation: 'Technical Member', imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80' },
];

const Members = () => {
    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 1500, // Animation duration
        });
    }, []);

    return (
        <div className="p-6 mt-[5rem]">
            {/* "Our Leads" section with 2 cards per row */}
            <div className="mb-12 pb-8 flex flex-col">
            <h2 className="text-center mt-8 mb-12 font-custom leading-relaxed">
    <span className="bg-clip-text text-transparent bg-gradient-to-r  from-blue-500 via-indigo-500 to-purple-500 font-extrabold text-6xl block">
        OUR <span className="font-extrabold">CREATIVITY</span> {/* Combined and styled */}
    </span><br />
    <span className="text-white text-4xl block"> {/* Second line smaller and not bold */}
        and attention to detail are
    </span><br />
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 font-extrabold text-6xl block">
        TRULY INSPIRING. {/* Third line styled like first */}
    </span>
</h2>
            <h2 className="text-5xl font-extrabold text-center mt-32 mb-12 font-custom"> {/* Added custom font class */}
    <span className="bg-clip-text text-transparent text-white">
        OUR
    </span>
    <span className="bg-clip-text text-transparent text-blue-500 ml-2">
        LEADS
    </span>
</h2>
                <div className="flex flex-wrap justify-center gap-4 pl-6 pr-6">
                    <ProfileCard
                        name={"Jane Smith"}
                        designation={"President"}
                        imageUrl={"https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80"}
                    />
                </div>
            </div>
            <div className="flex justify-center items-center mb-20" data-aos="fade-up">
                <div className="flex flex-wrap justify-evenly gap-28 pl-6 pr-6">
                    <ProfileCard
                        name={"Jane Smith"}
                        designation={"President"}
                        imageUrl={"https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80"}
                    />
                    <ProfileCard
                        name={"Jane Smith"}
                        designation={"President"}
                        imageUrl={"https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80"}
                    />
                </div>
            </div>

            {/* Other members (responsive grid) */}
            <div className="mb-10" data-aos="fade-up">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 justify-center">
                    {members
                        .filter(member => member.designation !== 'Our Lead')
                        .map((member, idx) => (
                            <div key={idx} className="flex flex-wrap justify-center mb-6 sm:mb-8 md:mb-10" data-aos="fade-up" data-aos-delay={idx * 100}>
                                <ProfileCard
                                    name={member.name}
                                    designation={member.designation}
                                    imageUrl={member.imageUrl}
                                />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Members;