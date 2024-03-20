import { LogosTwitter } from "@/app/icons/LogosTwitter";
import { MdiInstagram } from "@/app/icons/MdiInstagram";
import { UilFacebook } from "@/app/icons/UilFacebook";
import styles from "../common/style.module.css";
import React from "react";

type Props = {};

export default function FooterSection({}: Props) {
  return (
    <footer className="w-full items-center h-72 bg-[#2c3e50] flex flex-col relative ">
      <div className="w-full h-fit flex flex-row items-center justify-center gap-3  absolute bottom-0 mb-10">
        <SocialIcon icon={<UilFacebook />} />
        <SocialIcon icon={<LogosTwitter />} />
        <SocialIcon icon={<MdiInstagram />} />
      </div>
      <label className=" text-white absolute bottom-0 pb-2 font-[Jost]">
        &copy; {` ${new Date().getFullYear()}`}
      </label>
    </footer>
  );
}

const SocialIcon = ({ icon }: any) => (
  <div
    className={`w-12 cursor-pointer h-12 bg-white rounded-full flex items-center justify-center ${styles.socialIcon}`}
  >
    {icon}
  </div>
);
