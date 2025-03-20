import { work } from "../../Data/Data";
import { Avatar } from "@mantine/core";

const howItWorksDescription =
  "Users browse categories, view job listings, apply directly, and employers manage applications efficiently.";

const Working = () => {
  return (
    <div className="p-5">

      <div className="text-center mb-5 font-semibold text-3xl sm:text-4xl">
        How it<span className="text-red-800"> Works</span>
      </div>
      <div className="text-base sm:text-lg mb-5 text-center w-full sm:w-2/3 mx-auto">
        {howItWorksDescription}
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-8">

        <div className="relative w-full lg:w-[45%] flex justify-center">
          <img
            className="rounded-xl object-cover w-full max-w-md"
            src="/img/profileComp.jpg"
            alt="Profile Completion"
          />
          <div className="flex flex-col absolute top-[10%] lg:top-[15%] left-1/2 transform -translate-x-1/2 border-2 border-black shadow-md w-44 backdrop-blur-sm text-xs rounded-xl bg-white/70 p-3">
            <Avatar className="mx-auto" src="/img/avatar.png" size="lg" />
            <div className="font-semibold text-center mt-2">Complete your Profile</div>
            <div className="text-center text-gray-600">70% Completed</div>
          </div>
        </div>

        {/* Right Section: Steps */}
        <div className="w-full lg:w-[55%]">
          <div className="space-y-4">
            {work.map((item, index) => (
              <div key={index} className="flex gap-4 items-center p-4 rounded-lg border bg-gray-100 shadow-sm">
                <div className="p-2">
                  <img
                    className="h-12 w-12 bg-gray-200 rounded-2xl"
                    src={`/img/${item.name}.png`}
                    alt={item.name}/>
                </div>
                <div>
                  <div className="font-medium text-gray-800">{item.name}</div>
                  <div className="text-sm text-gray-600">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Working;
