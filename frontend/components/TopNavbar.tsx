import Image from "next/image";
import img from "../app/assets/User.png";

const TopNavbar = () => {
  return (
    <div className="flex justify-end items-center gap-5 mr-8 h-fit">
      <span className="flex items-center gap-2">
        <p>Pranam.hospitals@gmail.com</p>
        <i className="fa-angle-down fa-solid"></i>
      </span>
      <div className="border-2 p-2 border-black rounded-full">
        <Image src={img} alt="User"></Image>
      </div>
    </div>
  );
};

export default TopNavbar;
