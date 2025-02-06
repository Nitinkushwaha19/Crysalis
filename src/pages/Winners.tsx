import React from 'react';

const Winners = () => {
  return (
    <div className="text-center p-5 mt-24">
      {/* WINNERS Heading with Gradient */}
      <h1 className="text-6xl font-bold bg-clip-text text-transparent text-white mb-32">
        WINNERS
      </h1>

      {/* Tug of War */}
      <div className="my-5 flex flex-wrap justify-center items-center">
        <div className="m-2 flex flex-col items-center lg:flex-row lg:flex-wrap lg:space-x-5 justify-center">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent text-white mt-5 mb-10 lg:mb-10">
            Tug of War
          </h2>
          <div className="flex flex-wrap justify-center gap-5">
            <img
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80"
              alt="Tug of War"
              className="w-full md:w-72 lg:w-[40rem] h-auto object-cover mt-2 rounded-md"
            />
            <img
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80"
              alt="Tug of War"
              className="w-full md:w-72 lg:w-[40rem] h-auto object-cover mt-2 rounded-md"
            />
          </div>
        </div>
      </div>

      {/* BGMI */}
      <div className="my-5 flex flex-wrap justify-center items-center">
        <div className="m-2 flex flex-col items-center">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent text-white mt-20 mb-10">
            BGMI
          </h2>
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80"
            alt="BGMI"
            className="w-full md:w-72 lg:w-[40rem] h-auto object-cover mt-2 rounded-md"
          />
        </div>
      </div>

      {/* Dog and Bone */}
      <div className="my-5 flex flex-wrap justify-center items-center">
        <div className="m-2 flex flex-col items-center">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent text-white mt-20 mb-10">
            Volleyball
          </h2>
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80"
            alt="Dog and Bone"
            className="w-full md:w-72 lg:w-[40rem] h-auto object-cover mt-2 rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Winners;
