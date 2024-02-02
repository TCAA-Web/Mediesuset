import { useEffect, useState } from "react";

export const useFetch = (url, auth = null, shouldRefetch) => {
  const [data, setData] = useState();

  useEffect(() => {
    let options = {};
    if (auth) {
      options = {
        method: "GET",
        headers: {
          Authorization: "Bearer " + auth,
        },
      };
    }
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, [url, shouldRefetch]);

  return data;
};
