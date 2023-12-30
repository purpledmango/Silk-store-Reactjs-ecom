import { BsArrowRightShort } from "react-icons/bs";
import { menuItems } from "../../constants/menuinfo";
import coupleBanner from "../../assets/img/couple-banner.jpg";
import fashionBanner from "../../assets/img/fashion-banner-3.jpeg";
import ImageSlider from "../ImageSlider";
import NewArrival from "../NewArrivals";

const Home = () => {
  const newFashion = {
    name: "Cool Blue Jacket",
    price: "Rs 12,000",
    img: fashionBanner,
  };
  return (
    <>
      <div className="w-full bg-bg-accent text-typography-default h-full mt-6">
        <div className="mx-6 flex justify-evenly lg:pt-24 font-semibold text-xs">
          <span>Members get free shipping above Rs.1999</span>
          <span className="hidden md:block">
            Free & flexible 15 days return
          </span>
          <span className="hidden md:block">
            Estimated delivery time: 2-7 days
          </span>
        </div>

        <div className="w-full h-full mt-10 flex flex-col items-center justify-center">
          <div className="mx-5 relative">
            <img
              className="object-cover lg:w-[960px] lg:h-[640px]"
              src={coupleBanner}
              alt="Couple Banner"
            />
            <div className="absolute  bottom-2 top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-2/3 text-center">
              <h2 className="text-xl text-white font-extrabold outline-orange-50">
                The Festive Collection
              </h2>
            </div>

            <div>
              <ul className="my-5">
                {menuItems.map((item, key) => {
                  return (
                    <li
                      key={key}
                      className="font-extrabold w-full flex justify-between items-center hover:bg-gray-200 transition-all px-2 py-3"
                    >
                      {item}
                      <BsArrowRightShort />
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <NewArrival newArrival={newFashion} />
          {/* Image slider */}
          <ImageSlider />
        </div>
      </div>
    </>
  );
};

export default Home;
