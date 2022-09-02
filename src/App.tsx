import React, { useState, useEffect, useRef } from "react";
import { Calculator } from "./components";
import "./app.scss";

function App() {
  const appRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme") || "false") || 1
  );

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  useEffect(() => {
    appRef.current?.focus();
  }, []);

  function changeTheme() {
    if (theme === 3) {
      setTheme(1);
    } else {
      setTheme((prevValue: number) => prevValue + 1);
    }
  }
  function changeThemeBack() {
    if (theme === 1) {
      setTheme(3);
    } else {
      setTheme((prevValue: number) => prevValue - 1);
    }
  }
  function keyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === "ArrowRight") {
      changeTheme();
      return;
    }
    if (e.key === "ArrowLeft") {
      changeThemeBack();
      return;
    }
  }
  return (
    <div
      ref={appRef}
      className={`App App--${theme}`}
      tabIndex={0}
      onKeyDown={keyDown}
    >
      <Calculator theme={theme} changeTheme={changeTheme} />
    </div>
  );
}

export default App;
