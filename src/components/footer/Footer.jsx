import Image from "next/image";
import React from "react";
import footerLogo from "../../assets/footerLogo.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-[50px] flex flex-col gap-5 mt-[80px]">
      <span className="w-full container max-w-[1440px] mx-auto  h-[2px] bg-white"></span>
      <div className="footer container max-w-[1440px] mx-auto py-10 flex flex-col md:flex-row justify-between items-start gap-10">
        <ul className="footer__logo flex flex-col gap-5">
          <Image src={footerLogo} width={250} height={100} alt="Footer Logo" />
          <p>Your natural candle made for your home and for your wellness.</p>
        </ul>
        <ul className="flex flex-col gap-5">
          <h3 className="text-green-500">Discovery</h3>
          <p>New season</p>
          <p>Most searched</p>
          <p>Most selled</p>
        </ul>
        <ul className="flex flex-col gap-5">
          <h3 className="text-green-500">About</h3>
          <p>Help</p>
          <p>Shipping</p>
          <p>Affiliate</p>
        </ul>
        <ul className="flex flex-col gap-5">
          <h3 className="text-green-500">Info</h3>
          <p>Contact us</p>
          <p>Privacy Policies</p>
          <p>Terms & Conditions</p>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
