import React from "react";
import "./calculator.scss";

type Theme = {
  setTheme: React.Dispatch<React.SetStateAction<number>>;
  theme: number;
};

function Calculator({ setTheme, theme }: Theme) {
  function changeTheme() {
    if (theme === 3) {
      setTheme(1);
    } else {
      setTheme((prevValue) => prevValue + 1);
    }
  }
  return (
    <div className="Calculator">
      <div className="Calculator__HeaderContainer">
        <h2 className="Calculator__title">Calc</h2>
        <div className="Calculator__ThemeSwitcherContainer">
          <h4 className="Calculator__ThemeSwitcherName">THEME</h4>
          <div
            className={`Calculator__ThemeSwitcher Calculator__ThemeSwitcher--${theme}`}
            onClick={changeTheme}
          >
            <div className="Calculator__ThemeNumbers">
              <p>1</p>
              <p>2</p>
              <p>3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
