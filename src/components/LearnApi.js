import React, { useEffect, useState } from "react";
import "../stylesheets/LearnApi.css";
import axios from "axios";

const LearnApi = () => {
  const [userData, setdata] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response);
      setdata(response.data);
    });
  }, []);

  return (
    <>
      <div className="learnapiBox">
        {userData.map((data) => {
          return <div>{data.name}</div>;
        })}
      </div>
    </>
  );
};

export default LearnApi;
