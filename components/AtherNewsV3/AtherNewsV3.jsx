import React, { memo } from "react";
import { atherNewsV3Data } from "./AtherNewsV3Data";
import PropTypes from "prop-types";
import HTMLReactParser from "html-react-parser";

const AtherNewsV3 = (props) => {
  return (
    <>
      {/* Tailwind css*/}
      <section className="md:p-[192px_24px_140px] p-[44px_24px_36px] bg-white font-normal">
        <div className="md:text-[56px] text-[24px] leading-[28px] md:leading-[68px] text-[#191919] mx-[auto] my-[0] max-w-[939px]">
          News V3
        </div>
        <div className="cardsV3 md:m-[75px_auto_0] m-[44px_auto_0] max-w-[939px] flex flex-wrap justify-between ">
          {props.data &&
            props.data.map((item, index) => {
              return (
                <ul
                  key={item.id}
                  className="cardV3 list-none max-w-[453px] border-b-[1px_solid_#e8e8e8] md:mb-[80px] md:pb-[30px] relative mb-[32px] pb-[32px]"
                >
                  <li className="text-[12px] leading-[16px] md:text-[14px] md:leading-[20px] text-[#7b7b7b] flex gap-[30px]">
                    <p>By &nbsp;{HTMLReactParser(`${item.by}`)}</p>
                    <p>{HTMLReactParser(item.date)}</p>
                  </li>
                  <li className="md:text-[24px] md:leading-[28px] text-[20px] leading-[24px] text-[#191919] md:m-[20px_0_30px] m-[12px_0_16px] max-w-[423px]">
                    {HTMLReactParser(item.headline)}
                  </li>
                  <li className="md:text-[17px] md:leading-[24px] text-[14px] leading-[20px] text-[#9a9c9d]">
                    {HTMLReactParser(item.desc)}
                  </li>
                </ul>
              );
            })}
        </div>
      </section>
    </>
  );
};

AtherNewsV3.defaultProps = {
  data: atherNewsV3Data,
};

AtherNewsV3.PropTypes = {
  data: PropTypes.array.isRequired,
};

export default memo(AtherNewsV3);
