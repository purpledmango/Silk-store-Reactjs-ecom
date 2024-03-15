
import { useEffect } from "react";
import BrandingPromo from "../BrandingPromo";
import ImageSlider from "../ImageSlider";

const Home = () => {
  useEffect(() => {
    document.title = 'Elegant Fabrics - The Silk Store';
  }, []);

  return (

    <div className="w-full">
      <div className=" my-12">
        <ImageSlider />
      </div>
    </div>

  );
};

export default Home;
