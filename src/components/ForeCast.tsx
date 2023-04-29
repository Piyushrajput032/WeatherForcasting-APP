import React from "react";
import { iconUrlFromCode } from "../services/webServices";
interface Props {
  title: string;
  items: any[];
}
const ForeCast: React.FC<Props> = ({ title, items }) => {
   // console.log(items)
  return (
    <div>
      <div className="flex mt-6 items-center justify-start">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-row items-center justify-between text-white">
        {items.map((item, index) => {
          return (
            <div key={index} className="flex flex-col items-center justify-center">
              <p className="font-light text-sm">{item.title}</p>
              <img
                src={iconUrlFromCode(item.icon)}
                alt=""
                className="w-12 my-1"
              />
              <p className="font-medium">{item.temp.toFixed()}°</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ForeCast;
