import { useState } from "react";
import AuthContent from "./AuthContent";
import LoginForm from "./LoginForm";
import WelcomeContent from "./WelcomeContent";
import { request } from "../helpers/axios_helper";
import Button from "./Button";

function AppContent() {
  const [componentToShow, setComponentToShow] = useState("welcome");

  const login = () => {
    setComponentToShow("login");
  };

  const logout = () => {
    setComponentToShow("welcome");
  };

  const onLogin = (e, username, password) => {
    e.preventDefault();
    request("POST", "/api/v1/auth/login", {
      login: username,
      password: password,
    })
      .then((res) => {
        setComponentToShow("messages");
      })
      .catch((err) => {
        setComponentToShow("welcome");
      });
  };

  const onRegistration = (e, firstName, lastName, username, password) => {
    e.preventDefault();
    request("POST", "/api/v1/auth/register", {
      firstName: firstName,
      lastName: lastName,
      login: username,
      password: password,
    })
      .then((res) => {
        setComponentToShow("messages");
      })
      .catch((err) => {
        setComponentToShow("welcome");
      });
  };

  return (
    <div>
      <Button login={login} logout={logout} />
      {componentToShow === "welcome" && <WelcomeContent />}
      {componentToShow === "messages" && <AuthContent />}
      {componentToShow === "login" && <LoginForm onLogin={onLogin} onRegistration={onRegistration} />}
    </div>
  );
}

export default AppContent;
