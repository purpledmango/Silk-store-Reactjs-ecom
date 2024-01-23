
import { useEffect } from "react";
import BrandingPromo from "../BrandingPromo";
const Home = () => {
  useEffect(() => {
    document.title = 'Elegant Fabrics - The Silk Store';
  }, []);

  return (
    <>
      <BrandingPromo />
    </>
  );
};

export default Home;
