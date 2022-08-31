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
        <h2 className="Calculator__title">calc</h2>
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
      <div className="Calculator__body">
        <div className="Calculator__screen">
          <h1>123</h1>
        </div>
        <div className="Calculator__buttonsContainer">
          <div className="Calculator__button">7</div>
          <div className="Calculator__button">8</div>
          <div className="Calculator__button">9</div>
          <div className="Calculator__button">DEL</div>
          <div className="Calculator__button">4</div>
          <div className="Calculator__button">5</div>
          <div className="Calculator__button">6</div>
          <div className="Calculator__button">+</div>
          <div className="Calculator__button">1</div>
          <div className="Calculator__button">2</div>
          <div className="Calculator__button">3</div>
          <div className="Calculator__button">-</div>
          <div className="Calculator__button">.</div>
          <div className="Calculator__button">0</div>
          <div className="Calculator__button">/</div>
          <div className="Calculator__button">x</div>
          <div className="Calculator__button Calculator__button--span">
            RESET
          </div>
          <div className="Calculator__button Calculator__button--span">=</div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
