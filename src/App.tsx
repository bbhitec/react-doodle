// [wiki] fundamental react app learning

// import Message from './components/Message'  // previously used for tutorial
// import ListGroup from './components/ListGroup'
import { useState } from 'react';
import Alert from './components/Alert';
import Button from './components/Button';
import axios from 'axios';  // a good HTTP client
import FetchAPI from './components/FetchAPI';


function App() {

  ///////////////////////// [demo] code for ListGroup testing
  /*
  let cities = [
    'Haifa',
    'Tel Aviv',
    'Eilat',
    'Natania',
    'Acre'
  ];

  return (
    <div>
      <ListGroup items={cities} heading={"Cities"} />
    </div>
  )
  */


  ///////////////////////// using and modyfying alert component
  let [visibleAlert, setVisibleAlert] = useState(false);   // a -1 initially

  return (
    <div>
      <h1>React Doodles</h1>
      {/* [demo] dispay alert conditionally */}
      {visibleAlert &&
        <Alert onClick={() => console.log("Alert Clicked!")} onClose={() => setVisibleAlert(false)}>
          {/* [wip] how to addd quick inline style here? */}
          This is a ReactNode <div>children prop</div>
        </Alert>}
      {/* [demo] onClick must have a function passed */}
      <Button color="danger" onClick={() => setVisibleAlert(true)}>Summon Alert!</Button>
      {/* working with API */}
      <FetchAPI url='https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY' />
    </div>
  )

}



///////////////////////// boiler leftovers..

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           countt is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App
