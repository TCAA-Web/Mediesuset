import { useContext, useState } from "react";
import { Title } from "../../components/Title/Title";
import style from "./Loginpage.module.scss";
import { UserContext } from "../../context/UserContext";

export function Loginpage() {
  const [message, setMessage] = useState("Indtast login oplysninger");

  const { setUserData, userData } = useContext(UserContext);

  // Sign up function that creates a body from the input values and
  // sends these to the backend server. Then sets the response in the context userData
  async function handleSignUp(event) {
    event.preventDefault();

    let url = "https://api.mediehuset.net/token";

    if (event.target.username.value === "") {
      setMessage("Venligst indtast dit brugernavn");
      return;
    }

    if (event.target.password.value === "") {
      setMessage("Venligst indtast dit password");
      return;
    }

    let body = new URLSearchParams();

    body.append("username", event.target.username.value);
    body.append("password", event.target.password.value);

    let options = {
      method: "POST",
      body: body,
    };

    try {
      let res = await fetch(url, options);
      let data = await res.json();
      if (data?.status === "Ok") {
        setUserData(data);
        setMessage(`Du er nu logget ind som ${data.user.firstname}`);
      } else {
        setMessage("Der opstod en fejl - prøv igen");
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <Title title={"Login"} />

      <form
        className={style.loginFormStyle}
        onSubmit={(event) => handleSignUp(event)}
      >
        {message && <b>{message}</b>}

        <label>
          Username:
          <input type="text" name="username"></input>
        </label>
        <label>
          Password:
          <input type="password" name="password"></input>
        </label>
        <input type="submit" value="Sign up"></input>
      </form>
    </>
  );
}
