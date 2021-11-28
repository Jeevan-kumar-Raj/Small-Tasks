import React, { useEffect, useState } from "react";
import axios from "axios";

function AxiosInterceptors() {
  const [data, setData] = useState(null);
  const [val, setVal] = useState("");
  const [fetchData, setFetch] = useState(false);

  useEffect(() => {
    if (fetchData) {
      const payload = {
        method: "POST",
        body: JSON.stringify({ title: val }),
      };
      axios
        .post("https://jsonplaceholder.typicode.com/posts", payload)
        .then((res) => setData(res.data.id));
    }
  }, [fetchData]);

  return (
    <div>
      {data && <h1>Your data is saved with Id: {data}</h1>}
      <input
        placeholder="Title of Post"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <button onClick={() => setFetch(true)}>Save Data</button>
    </div>
  );
}

export default AxiosInterceptors;
