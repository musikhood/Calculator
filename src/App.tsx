import React, { useState, useEffect } from "react";
import { Calculator } from "./components";
import "./app.scss";

function App() {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme") || "false") || 1
  );

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);
  return (
    <div className={`App App--${theme}`}>
      <Calculator setTheme={setTheme} theme={theme} />
    </div>
  );
}

export default App;
