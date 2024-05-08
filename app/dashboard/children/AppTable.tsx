import React, { useState } from "react";
import AppModal from "@/app/components/common/AppModal";
import { ListAnimation } from "@/app/components/common/FramerMotion";
import { constants } from "@/app/constant";
import DisplayChildInfo from "./DisplayChildInfo";
import AppDropDown from "@/app/components/common/AppDropDown";

const op = [
  {
    id: Math.random().toFixed(6).toString(),
    label: "Not Adopted",
    value: "Not Adopted",
  },
  {
    id: Math.random().toFixed(6).toString(),
    label: "Adopted",
    value: "Adopted",
  },
];

const AppTable = () => {
  const [modal, setModal] = useState(false);

  return (
    <ListAnimation index={0}>
      <h1 className="text-2xl font-bold mb-4 text-white">Children</h1>
      <div className="w-full overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr
              className={`text-white border-b-2 bg-[${constants.colors.primary}] text-left h-[4rem]`}
            >
              <th className="py-2 px-4">Child&apos;s Name</th>
              <th className="py-2 px-4">Reference</th>
              <th className="py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-200" : "bg-white"
                } hover:bg-[${
                  constants.colors.primary
                }] hover:text-white h-[60px]`}
              >
                <td className="py-2 px-4 text-sm">{row.name}</td>
                <td className="py-2 px-4 text-sm">{row.ref}</td>
                <td className="py-2 px-4 text-sm flex flex-row items-center justify-between">
                  <AppDropDown options={op} />
                  <AppModal
                    isOpen={modal}
                    form={<DisplayChildInfo />}
                    onClose={() => setModal(false)}
                    component={
                      <button
                        onClick={() => setModal(true)}
                        className={`p-2 rounded-[20px] border-white border-[2px] text-white bg-[${constants.colors.primary}]`}
                      >
                        {row.state}
                      </button>
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ListAnimation>
  );
};

const data = [
  {
    name: "Alfreds Futterkiste",
    ref: "17389dyh36",
    state: "View Details",
  },
  {
    name: "Berglunds snabbköp",
    ref: "16539jdtch",
    state: "View Details",
  },
  {
    name: "Centro comercial Moctezuma",
    ref: "12783jdyc9",
    state: "View Details",
  },
  {
    name: "Alfreds Futterkiste",
    ref: "17389dyh36",
    state: "View Details",
  },
  {
    name: "Berglunds snabbköp",
    ref: "16539jdtch",
    state: "View Details",
  },
  {
    name: "Centro comercial Moctezuma",
    ref: "12783jdyc9",
    state: "View Details",
  },
  {
    name: "Alfreds Futterkiste",
    ref: "17389dyh36",
    state: "View Details",
  },
];

export default AppTable;
