import { useState, useRef } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { toPng } from 'html-to-image';

function App() {
  const [show, setShow] = useState(false);
  const eleref = useRef(null);
  const [name, setName] = useState(null);
  const htmlToImageConvert = () => {
    toPng(eleref.current, { cacheBust: false })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = `${name}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className='zeus-container'>
        <form className='zeus-form'>
          <input
            type='text'
            className='zeus-input'
            name='name'
            onChange={(e) => setName(e.target.value)}
          />
          <button
            className='zeus-xs'
            onClick={(e) => {
              e.preventDefault();
              setShow(false);
            }}
          >
            drop
          </button>
        </form>
        <div className='' ref={eleref} style={{ 'background-color': 'yellow' }}>
          <i color='pink'>{name}</i>
          <p>
            <i color='black'>Must</i>
          </p>
          <p>
            <i color='black'>shine</i>
          </p>
        </div>
        <button onClick={htmlToImageConvert}>download</button>
      </div>
    </>
  );
}

export default App;
