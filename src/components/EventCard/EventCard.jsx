import style from "../EventCard/EventCard.module.scss";
import { CiCirclePlus } from "react-icons/ci";

export const EventCard = ({
  image,
  title,
  date,
  stageColor,
  setEventID,
  userID,
  eventID,
  token,
}) => {
  // Function to add new event to the users event list
  const addToUserProgram = () => {
    let url = "https://api.mediehuset.net/mediesuset/programme";
    let body = new URLSearchParams();
    body.append("user_id", userID);
    body.append("event_id", parseInt(eventID));

    let options = {
      body: body,
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => console.error(data))
      .catch((err) => console.error(err));
  };

  return (
    <figure className={style.eventCardStyle}>
      <div onClick={setEventID}>
        <img src={image} />
      </div>
      <figcaption style={{ backgroundColor: stageColor }}>
        <p>{title}</p>
        <p>{date}</p>
        <p onClick={setEventID}>Læs mere</p>
        {userID && (
          <span className={style.plusIcon} onClick={() => addToUserProgram()}>
            <CiCirclePlus />
          </span>
        )}
      </figcaption>
    </figure>
  );
};
