import { TextInput, Avatar } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";

const DreamJob = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className="flex flex-col md:flex-row items-center px-6 md:px-16 py-10  gap-10">
  
      <div className="w-full md:w-[45%] flex flex-col gap-6">
        <div className="text-4xl md:text-6xl font-bold text-gray-800 leading-snug">
          Find Your <span className="text-red-800">Dream Job</span> Today
        </div>
        <div className="text-base md:text-lg text-gray-600">
          Unlock thousands of opportunities from top companies in one place. Let your dream career start here.
        </div>
        <div className="text-sm md:text-md text-gray-500">
          Whether you're looking for remote work, on-site opportunities, or freelance gigs, we've got you covered!
        </div>


        <div className="flex flex-col lg:flex-row py-5 gap-5">
          <div className="flex flex-col lg:flex-row gap-5 w-full">
            <TextInput
              className="font-semibold text-black text-sm [&_input]:rounded-sm w-full lg:w-[45%]"
              label="Job Title"
              placeholder="Software Development"
            />
            <TextInput
              className="font-semibold text-black text-sm [&_input]:rounded-sm w-full lg:w-[45%]"
              label="Job Type"
              placeholder="Full-Time"
            />
          </div>
          <button className="flex justify-center items-center bg-red-800 text-white w-12 h-12 rounded-full hover:bg-red-700">
            <IconSearch size={24} />
          </button>
        </div>
      </div>


      <div className="w-full md:w-[55%] flex justify-center">
        <div className="relative">
 
          <img
            src="/img/Dashboard.png"
            alt="Dream Job"
            className="rounded-lg shadow-lg object-cover w-full max-w-md"
          />

          <div className="absolute flex flex-col items-center border-2 border-stone-800 backdrop-blur-sm bg-white/70 rounded-lg w-36 text-center text-xs top-[60%] right-2 p-3">
            <div className="font-semibold">10k+ got jobs</div>
            <div className="flex justify-center items-center mt-3 gap-2">
              <Avatar.Group>
                <Avatar src="/img/avatar.png" />
                <Avatar src="/img/avatar1.png" />
                <Avatar src="/img/avatar2.png" />
                <Avatar>+5</Avatar>
              </Avatar.Group>
            </div>
          </div>

          <div className="absolute flex items-center border-2 border-stone-800 backdrop-blur-sm bg-white/70 rounded-lg w-52 text-center text-xs top-[10%] left-2 p-3">
            <img src="/img/Avatar.png" className="h-10 w-10 rounded-full mr-3" alt="Avatar" />
            <div className="text-left">
              <div className="text-sm font-semibold">Software Engineer</div>
              <div className="text-gray-600 text-xs">New York</div>
              <div className="text-gray-500 text-xs space-x-3 mt-1">
                <span>1 day ago</span>
                <span>120 applicants</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamJob;
