import { useEffect, useState } from "react";
import { request, setAuthHeader } from "../helpers/axios_helper";

function AuthContent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    request("GET", "/api/v1/messages", {})
      .then((response) => {
        setData([]);
        setData(response.data);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          setAuthHeader(null);
        } else {
          setData([]);
          setData(error.response.code);
        }
      });
  }, []);

  return (
    <div className="row justify-content-md-center">
      <div className="col-4">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Backend response</h5>
            <p className="card-text">Content:</p>
            <ul>{data && data.map((line) => <li key={line}>{line}</li>)}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthContent;
