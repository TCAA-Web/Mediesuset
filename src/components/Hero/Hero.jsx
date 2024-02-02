import style from "./Hero.module.scss";
import { useFetch } from "../../hooks/useFetch";
export const Hero = () => {
  const images = useFetch("https://api.mediehuset.net/mediesuset/images");

  return (
    images && (
      <div
        style={{ backgroundImage: `url(${images.items[4]?.image})` }}
        className={style.heroStyle}
      ></div>
    )
  );
};
