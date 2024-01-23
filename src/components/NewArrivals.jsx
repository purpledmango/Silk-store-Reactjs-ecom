import { BsArrowRightShort } from "react-icons/bs";

const NewArrival = ({ newArrival }) => {
  return (
    <div className="mx-5 relative  h-full">
      <div className="relative">
        <img
          className="object-cover lg:w-[960px] lg:h-[640px] mx-auto"
          src={newArrival.img}
          alt="Fashion Banner"
        />
        <div className="z-10 absolute top-1/2 right-1/2 bg-typography-default text-center text-bg-accent px-5 py-3 hover:underline">
          <span>{newArrival.price}</span>
          <span className="flex items-center">
            {newArrival.name} <BsArrowRightShort />
          </span>
        </div>
      </div>
      <div className="absolute inset-0 bg-accent-color opacity-10"></div>
    </div>
  );
};

export default NewArrival;
