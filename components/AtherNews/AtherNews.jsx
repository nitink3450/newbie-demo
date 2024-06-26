import React, { memo } from "react";
import Styles from "./AtherNews.module.scss";
import { atherNewsData } from "./AtherNewsData";
import PropTypes from "prop-types";
import HTMLReactParser from "html-react-parser"; //HTMLReactParser WILL PARSE ANY HTML

const AtherNews = (props) => {
  return (
    <>
      {/* SCSS with BEM Method */}
      <section className={Styles.news}>
        <div className={Styles.news_title}>News</div>

        <div className={Styles.news_cards}>
          {props.data &&
            props.data.map((item, index) => {
              return (
                <>
                  <ul key={item.id} className={Styles.news_cards_card}>
                    <li className={Styles.news_cards_card_header}>
                      <p>By &nbsp;{HTMLReactParser(`${item.by}`)}</p>
                      <p>{HTMLReactParser(item.date)}</p>
                    </li>
                    <li className={Styles.news_cards_card_headline}>
                      {HTMLReactParser(item.headline)}
                    </li>
                    <li className={Styles.news_cards_card_desc}>
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

AtherNews.defaultProps = {
  data: atherNewsData, //IF WE DONT PASS PROPS DATA THEN BYDEFAULT IT WILL TAKE FROM HERE
};

AtherNews.PropTypes = {
  data: PropTypes.array.isRequired, //ONLY ARRAY CAN ACCEPT
};

export default memo(AtherNews); //MEMO HOOK WILL OPTIMIZE PAGE LOADING
