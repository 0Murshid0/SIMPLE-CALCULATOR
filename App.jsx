import * as React from 'react';
import './style.css';

export default function App() {
  const [counter, setCounter] = React.useState();
  const [inputvalue, setInputvalue] = React.useState();
  const [inputvalue2, setInputvalue2] = React.useState();

  const HandleAdd = () => {
    setCounter(Number(inputvalue) + Number(inputvalue2));
  };
  const HandleSUB = () => {
    setCounter(Number(inputvalue) - Number(inputvalue2)); //Number is used to convert string into number its js feature when handle add grt value from inputvalue its string we don't work on string so we use number to convert it in numaric
  };
  const HandleMultiple = () => {
    setCounter(Number(inputvalue) * Number(inputvalue2));
  };
  const HandleDivide = () => {
    setCounter(Number(inputvalue) / Number(inputvalue2));
  };
  const HandleMod = () => {
    setCounter(Number(inputvalue) % Number(inputvalue2));
  };
  const HandleClear = () => {
    setCounter('');
    setInputvalue('');
    setInputvalue2('');
  };
  return (
    <>
      <input
        value={inputvalue}
        onChange={(e) => setInputvalue(e.target.value)}
        placeholder="Enter first value"
      ></input>
      <br />
      <br />
      <input
        value={inputvalue2}
        onChange={(e) => setInputvalue2(e.target.value)}
        placeholder="Enter second value"
      ></input>
      <br />
      <br />
      <div>
        <td>
          {' '}
          <button type="button" onClick={HandleAdd}>
            +
          </button>{' '}
        </td>
        <td>
          {' '}
          <button type="button" onClick={HandleSUB}>
            -
          </button>{' '}
        </td>
        <td>
          {' '}
          <button type="button" onClick={HandleMultiple}>
            *
          </button>{' '}
        </td>
        <td>
          
          <button type="button" onClick={HandleDivide}>
            /
          </button>
        </td>
        <td>
        <button type="button" onClick={HandleMod}>
            MOD
          </button>{' '}
        </td>
        <td>
          <button type="button" onClick={HandleClear}>
            Clear
          </button>  {' '}
        </td>
        <br />
        <br />
        <span>
          {' '}
          <input value={counter} placeholder=" Your Answer"></input>
        </span>
      </div>
    </>
  );
}
