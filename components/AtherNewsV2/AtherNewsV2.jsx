import React, { memo } from "react";
import Styles from "./AtherNewsV2.module.scss";
import { atherNewsV2Data } from "./AtherNewsV2Data";
import PropTypes from "prop-types";
import HTMLReactParser from "html-react-parser";

const AtherNewsV2 = (props) => {
  return (
    <>
      {/* SCSS without BEM Method */}
      <section className={Styles.news}>
        <div className={Styles.title}>News V2</div>
        <div className={Styles.cards}>
          {props.data &&
            props.data.map((item, index) => {
              return (
                <>
                  <ul key={item.id} className={Styles.card}>
                    <li className={Styles.header}>
                      <p>By &nbsp;{HTMLReactParser(`${item.by}`)}</p>
                      <p>{HTMLReactParser(item.date)}</p>
                    </li>
                    <li className={Styles.headline}>
                      {HTMLReactParser(item.headline)}
                    </li>
                    <li className={Styles.desc}>
                      {HTMLReactParser(item.desc)}
                    </li>
                  </ul>
                </>
              );
            })}
        </div>
      </section>
    </>
  );
};

AtherNewsV2.defaultProps = {
  data: atherNewsV2Data,
};

AtherNewsV2.PropTypes = {
  data: PropTypes.array.isRequired,
};

export default memo(AtherNewsV2);
