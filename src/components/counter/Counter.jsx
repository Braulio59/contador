import React, { useReducer, useState } from "react";
import {
  counterInitialState,
  counterReducer,
} from "../../reducers/counterReducer";
import { TYPES } from "../../actionTypes/CountActions";

import {
  CounterButtonContainerStyled,
  CounterButtonStyled,
  CounterContainerStyled,
  CounterSpanStyled,
} from "../CounterStyles";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { FiDivideCircle } from "react-icons/fi";
import { RiNumber5 } from "react-icons/ri";
import { FaRegTimesCircle } from "react-icons/fa";
import { BiReset } from "react-icons/bi";

const Counter = () => {
  //   const [count, setCount] = useState(0);

  //   const handleIncrement = () => {
  //     setCount(count + 1);
  //   };

  //   const handleDecrement = () => {
  //     setCount(count - 1);

  //   useReducer

  const [state, dispatch] = useReducer(counterReducer, counterInitialState);

  const handleIncrement = () => dispatch({ type: TYPES.INCREMENT });

  const handleDecrement = () => dispatch({ type: TYPES.DECREMENT });

  const handleIncrement5 = () => dispatch({ type: TYPES.INCREMENT_5 });

  const handleDecrement5 = () => dispatch({ type: TYPES.DECREMENT_5 });

  const handleDivide = () => dispatch({ type: TYPES.DIVIDE });

  const handleMultiply = () => dispatch({ type: TYPES.MULTIPLY });

  const handleReset = () => dispatch({ type: TYPES.RESET });

  return (
    <CounterContainerStyled>
      <CounterButtonContainerStyled>
        {/* Dividir */}
        <CounterButtonStyled left onClick={handleDivide}>
          <FiDivideCircle size="32px" color="white" />
        </CounterButtonStyled>

        {/* -5 */}
        <CounterButtonStyled onClick={handleDecrement5}>
          <p>
            -<RiNumber5 size="32px" color="white" />
          </p>
        </CounterButtonStyled>

        {/* resta */}
        <CounterButtonStyled onClick={handleDecrement}>
          <AiOutlineMinusCircle size="32px" color="white" />
        </CounterButtonStyled>

        <CounterSpanStyled>{state.count}</CounterSpanStyled>

        {/* mas */}
        <CounterButtonStyled onClick={handleIncrement}>
          <AiOutlinePlusCircle size="32px" color="white" />
        </CounterButtonStyled>

        {/* +5 */}
        <CounterButtonStyled onClick={handleIncrement5}>
          <p>
            +<RiNumber5 size="32px" color="white" />
          </p>
        </CounterButtonStyled>

        {/* multiplicar */}
        <CounterButtonStyled right onClick={handleMultiply}>
          <FaRegTimesCircle size="32px" color="white" />
        </CounterButtonStyled>
      </CounterButtonContainerStyled>
      <BiReset
        onClick={handleReset}
        cursor="pointer"
        size="32px"
        color="#f2424c"
      />
    </CounterContainerStyled>
  );
};

export default Counter;
