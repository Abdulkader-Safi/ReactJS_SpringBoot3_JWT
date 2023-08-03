import reactLogo from "./../assets/react.svg";
import "./App.css";
import AppContent from "./AppContent";

import Header from "./Header";

function App() {
  return (
    <div>
      <Header pageTitle="Frontend authenticated with JWT" logoSrc={reactLogo} />
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <AppContent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
