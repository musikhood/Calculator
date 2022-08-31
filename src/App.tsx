import React, { useState } from "react";
import { Calculator } from "./components";
import "./app.scss";

function App() {
  const [theme, setTheme] = useState(1);
  return (
    <div className={`App App--${theme}`}>
      <Calculator setTheme={setTheme} theme={theme} />
    </div>
  );
}

export default App;
