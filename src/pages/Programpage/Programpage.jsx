import { useContext, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { UserContext } from "../../context/UserContext";
import { ProgramSection } from "../../components/ProgramSection/ProgramSection";
import style from "./Programpage.module.scss";

export const Programpage = () => {
  const { userData } = useContext(UserContext);
  const programData = useFetch(
    `https://api.mediehuset.net/mediesuset/programme/${userData.user_id}`,
    userData.access_token
  );

  return (
    <div className={style.programContainer}>
      <section>
        <div className={style.darkHeading}>
          <p>Onsdag:</p>
        </div>
        <ProgramSection programData={programData} day={"onsdag"} />
      </section>
      <section>
        <div className={style.darkHeading}>
          <p>Torsdag:</p>
        </div>
        <ProgramSection programData={programData} day={"torsdag"} />
      </section>
      <section>
        <div className={style.darkHeading}>
          <p>Fredag:</p>
        </div>
        <ProgramSection programData={programData} day={"fredag"} />
      </section>
      <section>
        <div className={style.darkHeading}>
          <p>Lørdag:</p>
        </div>
        <ProgramSection programData={programData} day={"lørdag"} />
      </section>
      <section>
        <div className={style.darkHeading}>
          <p>Søndag:</p>
        </div>
        <ProgramSection programData={programData} day={"søndag"} />
      </section>
    </div>
  );
};
