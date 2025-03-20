import { Avatar, Rating } from "@mantine/core";
import { testimonial } from "../../Data/Data";

const Testimonial = () => {
  return (
    <div className="m-5">
      <div className="text-center mb-5 font-semibold text-3xl sm:text-4xl">
        What <span className="text-red-800">Users</span> Say About Us?
      </div>
      <div className="flex flex-wrap justify-center gap-5">
        {testimonial.map((data, index) => (
          <div
            key={index}
            className="flex flex-col w-full sm:w-[48%] lg:w-[30%] xl:w-[20%] border-2 rounded-xl bg-gray-200 p-5 shadow-md"
          >
            <div className="flex gap-3 items-center">
              <Avatar src={`img/avatar.png`} />
              <div className="flex flex-col">
                <div className="text-sm font-semibold text-center">{data.name}</div>
                <Rating value={data.rate} fractions={2} readOnly />
              </div>
            </div>
            <div className="text-xs mt-3 text-justify">{data.feedback}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
