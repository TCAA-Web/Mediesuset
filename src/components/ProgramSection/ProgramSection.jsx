import { getDayFromDate } from "../../helpers/getDayFromDate";
import { getEventColor } from "../../helpers/getEventColor";
import style from "./ProgramSection.module.scss";

export const ProgramSection = ({ programData, day }) => {
  console.log(programData);
  return (
    <>
      {programData?.items?.map((program) => {
        if (getDayFromDate(program.datetime).toLowerCase() === day) {
          return (
            <div className={style.programSectionStyle}>
              <p
                style={{
                  backgroundColor: getEventColor(
                    program.stage_name.toLowerCase()
                  ),
                }}
              >
                {program.datetime.substring(11, 16)}
              </p>
              <p>{program.event_title}</p>
            </div>
          );
        }
      })}
    </>
  );
};
