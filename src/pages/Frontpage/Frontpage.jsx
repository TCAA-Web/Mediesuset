import { useEffect, useState } from "react";
import { NewsCard } from "../../components/NewsCard/NewsCard";
import { Title } from "../../components/Title/Title";
import { Modal } from "../../components/Modal/Modal";
import style from "./Frontpage.module.scss";
import { useFetch } from "../../hooks/useFetch";
import { getDayFromDate } from "../../helpers/getDayFromDate";

export const Frontpage = () => {
  // Modal state (open/closed)
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State for selecting ID on news article
  const [selectedID, setSelectedID] = useState(1);

  // Handler func to set selected ID and open/close modal
  const handleModal = (id) => {
    if (id) {
      setSelectedID(id);
    }
    setIsModalOpen(!isModalOpen);
  };

  const news = useFetch(`https://api.mediehuset.net/mediesuset/news`);
  const newsDetails = useFetch(
    `https://api.mediehuset.net/mediesuset/news/${selectedID}`
  );

  return (
    <>
      <Title title="Nyheder" />
      <section className={style.newsCardWrapper}>
        {news?.items?.map((item) => {
          return (
            <NewsCard
              key={item.id}
              title={item.title}
              text={item.teaser}
              imgSrc={item.image}
              handleModal={() => handleModal(item.id)}
            />
          );
        })}
      </section>
      <Modal handleModal={() => handleModal(null)} isModalOpen={isModalOpen}>
        <figure className={style.newsDetailsWrapper}>
          <img src={newsDetails?.item.image} />
          <figcaption>
            <h4>{newsDetails?.item.title}</h4>
            <p>{newsDetails?.item.teaser}</p>
            <p>{newsDetails?.item.author}</p>
          </figcaption>
          <p>
            {getDayFromDate(
              new Date(newsDetails?.item.datetime * 1000).toString()
            )}
            {" d. "}
            {new Date(newsDetails?.item.datetime * 1000).toLocaleDateString()}
          </p>
        </figure>
      </Modal>
    </>
  );
};
