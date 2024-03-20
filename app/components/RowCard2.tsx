import React from "react";

import CardNoShadow from "./common/CardNoShadow";
import ImageCard from "@/public/asset/images/homless.jpg";
import ImageCard2 from "@/public/asset/images/landing.jpg";

type Props = {};

export default function RowCard2({}: Props) {
  return (
    <div className="container mx-auto ">
      <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <CardNoShadow
          img={ImageCard}
          caption="Lorem ipsum dolor sit amet consectetur. Tellus pulvinar cras sed posuere duis. Velit euismod quis sed ut quis. Elit sit facilisis viverra facilisi adipiscing. Tortor pellentesque est dictumst pellentesque amet vitae faucibus.Lorem ipsum dolor sit amet consectetur. Tellus pulvinar cras sed posuere duis. Velit euismod quis sed ut quis. Elit sit facilisis viverra facilisi adipiscing. Tortor pellentesque est dictumst pellentesque amet vitae faucibus.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Tellus pulvinar cras sed posuere duis. Velit euismod quis sed ut quis. Elit sit  "
          title="Child-Centric Approach"
        />
        <CardNoShadow
          // img={ImageCard2}
          caption="Lorem ipsum dolor sit amet consectetur. Tellus pulvinar cras sed posuere duis. Velit euismod quis sed ut quis. Elit sit facilisis viverra facilisi adipiscing. Tortor pellentesque est dictumst pellentesque amet vitae faucibus.Lorem ipsum dolor sit amet consectetur. Tellus pulvinar cras sed posuere duis. Velit euismod quis sed ut quis. Elit sit facilisis viverra facilisi adipiscing. Tortor pellentesque est dictumst pellentesque amet vitae faucibus.Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Tellus pulvinar cras sed posuere duis. Velit euismod quis sed ut quis. Elit sit "
          title="Continuous Improvement"
        />
      </div>
    </div>
  );
}
