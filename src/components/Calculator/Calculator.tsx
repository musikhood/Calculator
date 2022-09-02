import React, { useEffect } from "react";
import type { RootState } from "../../reducer/store";
import { useDispatch, useSelector } from "react-redux";
import {
  addNumber,
  reset,
  addAction,
  evaluate,
  del,
} from "../../reducer/calcReducer";
import "./calculator.scss";

type Theme = {
  theme: number;
  changeTheme: () => void;
};

function Calculator({ theme, changeTheme }: Theme) {
  const currValue = useSelector((state: RootState) => state.calc.currValue);
  const prevValue = useSelector((state: RootState) => state.calc.prevValue);
  const dispatch = useDispatch();

  function KeyDown(e: KeyboardEvent) {
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
    const actions = ["+", "-", "*", "/"];
    if (numbers.includes(e.key)) {
      dispatch(addNumber(e.key));
      return;
    }
    if (actions.includes(e.key)) {
      dispatch(addAction(e.key));
      return;
    }
    if (e.key === "Backspace") {
      dispatch(del());
    }
    if (e.key === "Enter") {
      dispatch(evaluate());
    }
    if (e.key === "Delete") {
      dispatch(reset());
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", KeyDown);
  }, []);

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
          <div className="Calculator__prevValue">{prevValue}</div>
          <div
            className={`Calculator__currValue ${
              currValue.length >= 15 && "Calculator__currValue--small"
            }`}
          >
            {currValue}
          </div>
        </div>
        <div className="Calculator__buttonsContainer">
          <div
            className="Calculator__button"
            onClick={() => dispatch(addNumber("7"))}
          >
            7
          </div>
          <div
            className="Calculator__button"
            onClick={() => dispatch(addNumber("8"))}
          >
            8
          </div>
          <div
            className="Calculator__button"
            onClick={() => dispatch(addNumber("9"))}
          >
            9
          </div>
          <div
            className="Calculator__button Calculator__button--altColor"
            onClick={() => dispatch(del())}
          >
            DEL
          </div>
          <div
            className="Calculator__button"
            onClick={() => dispatch(addNumber("4"))}
          >
            4
          </div>
          <div
            className="Calculator__button"
            onClick={() => dispatch(addNumber("5"))}
          >
            5
          </div>
          <div
            className="Calculator__button"
            onClick={() => dispatch(addNumber("6"))}
          >
            6
          </div>
          <div
            className="Calculator__button"
            onClick={() => dispatch(addAction("+"))}
          >
            +
          </div>
          <div
            className="Calculator__button"
            onClick={() => dispatch(addNumber("1"))}
          >
            1
          </div>
          <div
            className="Calculator__button"
            onClick={() => dispatch(addNumber("2"))}
          >
            2
          </div>
          <div
            className="Calculator__button"
            onClick={() => dispatch(addNumber("3"))}
          >
            3
          </div>
          <div
            className="Calculator__button"
            onClick={() => dispatch(addAction("-"))}
          >
            -
          </div>
          <div
            className="Calculator__button"
            onClick={() => dispatch(addNumber("."))}
          >
            .
          </div>
          <div
            className="Calculator__button"
            onClick={() => dispatch(addNumber("0"))}
          >
            0
          </div>
          <div
            className="Calculator__button"
            onClick={() => dispatch(addAction("/"))}
          >
            /
          </div>
          <div
            className="Calculator__button"
            onClick={() => dispatch(addAction("*"))}
          >
            x
          </div>
          <div
            className="Calculator__button Calculator__button--span Calculator__button--altColor"
            onClick={() => dispatch(reset())}
          >
            RESET
          </div>
          <div
            className="Calculator__button Calculator__button--span Calculator__button--altColor2"
            onClick={() => dispatch(evaluate())}
          >
            =
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
