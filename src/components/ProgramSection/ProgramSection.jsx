import { useContext } from "react";
import { getDayFromDate } from "../../helpers/getDayFromDate";
import { getEventColor } from "../../helpers/getEventColor";
import style from "./ProgramSection.module.scss";
import { IoClose } from "react-icons/io5";

export const ProgramSection = ({ programData, day, deleteProgram }) => {
  return (
    <>
      {programData?.map((program) => {
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
              <IoClose
                onClick={() => {
                  deleteProgram(program.id);
                }}
              />
            </div>
          );
        }
      })}
    </>
  );
};
