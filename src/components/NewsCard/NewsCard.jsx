import style from "./NewsCard.module.scss";

export const NewsCard = ({ imgSrc, title, text }) => {
  return (
    <div className={style.newsCardStyle}>
      <img src={imgSrc}></img>
      <section>
        <h3>{title}</h3>
        <p>{text}</p>
        <button>Læs mere</button>
      </section>
    </div>
  );
};
