import { useContext, useEffect, useState } from "react";
import { ProgramSection } from "../../components/ProgramSection/ProgramSection";
import { UserContext } from "../../context/UserContext";
import { removeDublicates } from "../../helpers/removeDublicates";
import { useFetch } from "../../hooks/useFetch";
import style from "./Programpage.module.scss";

export const Programpage = () => {
  const { userData } = useContext(UserContext);

  const [message, setMessage] = useState();
  const [programData, setProgramData] = useState();

  const rawProgramData = useFetch(
    `https://api.mediehuset.net/mediesuset/programme/${userData?.user_id}`,
    userData?.access_token,
    message
  );

  // function to delete a user selected program by its ID
  const deleteProgram = (id) => {
    let url = `https://api.mediehuset.net/mediesuset/programme/${id}`;
    let options = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${userData.access_token}`,
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => setMessage(data))
      .catch((err) => console.log(err));
  };

  // Effect that "cleans" the array of double entries before rendering it out
  useEffect(() => {
    if (rawProgramData && rawProgramData.items) {
      let clean = removeDublicates(rawProgramData?.items, "event_title");
      setProgramData(clean);
    }
  }, [rawProgramData]);

  return (
    <div className={style.programContainer}>
      <section>
        <div className={style.darkHeading}>
          <p>Onsdag:</p>
        </div>
        <ProgramSection
          deleteProgram={deleteProgram}
          programData={programData}
          day={"onsdag"}
        />
      </section>
      <section>
        <div className={style.darkHeading}>
          <p>Torsdag:</p>
        </div>
        <ProgramSection
          deleteProgram={deleteProgram}
          programData={programData}
          day={"torsdag"}
        />
      </section>
      <section>
        <div className={style.darkHeading}>
          <p>Fredag:</p>
        </div>
        <ProgramSection
          deleteProgram={deleteProgram}
          programData={programData}
          day={"fredag"}
        />
      </section>
      <section>
        <div className={style.darkHeading}>
          <p>Lørdag:</p>
        </div>
        <ProgramSection
          deleteProgram={deleteProgram}
          programData={programData}
          day={"lørdag"}
        />
      </section>
      <section>
        <div className={style.darkHeading}>
          <p>Søndag:</p>
        </div>
        <ProgramSection
          deleteProgram={deleteProgram}
          programData={programData}
          day={"søndag"}
        />
      </section>
    </div>
  );
};
