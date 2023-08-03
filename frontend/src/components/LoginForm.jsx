import classNames from "classnames";
import { useState } from "react";

function LoginForm(props) {
  const [active, setActive] = useState("login");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitLogin = (e) => {
    props.onLogin(e, login, password);
  };

  const onSubmitRegister = (e) => {
    props.onRegistration(e, firstName, lastName, login, password);
  };

  return (
    <div className="row justify-content-center">
      <div className="col-4">
        <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className={classNames("nav-link", active === "login" ? "active" : "")}
              id="tab-login"
              onClick={() => setActive("login")}
            >
              Login
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={classNames("nav-link", active === "register" ? "active" : "")}
              id="tab-register"
              onClick={() => setActive("register")}
            >
              Register
            </button>
          </li>
        </ul>

        <div className="tab-content">
          <div className={classNames("tab-pane", "fade", active === "login" ? "show active" : "")} id="pills-login">
            <form action="">
              <div className="form-outline mb-4">
                <input
                  type="login"
                  id="loginName"
                  name="login"
                  className="form-control"
                  onChange={(e) => {
                    setLogin(e.target.value);
                  }}
                  value={login}
                />
                <label htmlFor="loginName" className="form-label">
                  Username
                </label>
              </div>
              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="loginPassword"
                  name="password"
                  className="form-control"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                />
                <label htmlFor="loginPassword" className="form-label">
                  Password
                </label>
              </div>
              <button type="submit" className="btn btn-primary btn-block mb-4" onClick={onSubmitLogin}>
                Sign in
              </button>
            </form>
          </div>

          <div
            className={classNames("tab-pane", "fade", active === "register" ? "show active" : "")}
            id="pills-register"
          >
            <form action="">
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="firstName "
                  name="firstName"
                  className="form-control"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  value={firstName}
                />
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
              </div>
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="lastName "
                  name="lastName"
                  className="form-control"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  value={lastName}
                />
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
              </div>
              <div className="form-outline mb-4">
                <input
                  type="login"
                  id="loginName"
                  name="login"
                  className="form-control"
                  onChange={(e) => {
                    setLogin(e.target.value);
                  }}
                  value={login}
                />
                <label htmlFor="loginName" className="form-label">
                  Username
                </label>
              </div>
              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="Password"
                  name="password"
                  className="form-control"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                />
                <label htmlFor="Password" className="form-label">
                  Password
                </label>
              </div>
              <button type="submit" className="btn btn-primary btn-block mb-4" onClick={onSubmitRegister}>
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
