// [wiki] fundamental react app learning

import Message from './components/Message'  // previously used for tutorial
import ListGroup from './components/ListGroup'
import { useEffect, useState } from 'react';
import Alert from './components/Alert';
import Button from './components/Button';
import './App.css'
import InputProcess from './components/InputProcess';
// various API experiments
import FetchAPI from './components/FetchAPI';
import FetchAPIBetter from './components/FetchAPIBetter';
import FetchAPIReactQuery from './components/FetchAPIReactQuery';


function App() {

  ///////////////////////// [demo] code for ListGroup testing

  let cities = [
    'Haifa',
    'Tel Aviv',
    'Eilat',
    'Natania',
    'Acre'
  ];



  ///////////////////////// using and modyfying alert component
  let [visibleAlert, setVisibleAlert] = useState(false);   // a -1 initially


  ////// API fetching 1
  // let [posts, setPosts] = useState([]);
  // const getPosts = () => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then(response => response.json())
  //     .then(json => setPosts(json))
  // }


  /////// API fetching 2
  let [posts, setPosts] = useState([]);
  const getPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setPosts(json)
      })
  }

  useEffect((getPosts), [])




  return (
    <div>

      {/* <div>
        <h1>API getter</h1>
        <button onClick={getPosts}>FETCH!</button>

        {posts.map(post => {
          return (
            <>
              <table>
                <thead>
                  <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>body</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                  </tr>
                </tbody>

              </table>
              <pre>{JSON.stringify(post)}</pre>

            </>

          )
        })}
      </div> */}


      {/* hiding previous doodles */}
      <div className='hidden'>
        <h1>React Doodles</h1>

        {/* dabbling in fetches */}
        <Button onClick={getPosts}> Get! </Button>
        <pre>
          {posts}
        </pre>


        {/* basic component */}
        <Message />

        {/* mappong component for array members */}
        <ListGroup items={cities} heading={"Cities"} />

        {/* [demo] dispay alert conditionally */}
        <h2>Alert Toggle</h2>
        {visibleAlert &&
          <Alert onClick={() => console.log("Alert Clicked!")} onClose={() => setVisibleAlert(false)}>
            {/* [wip] how to addd quick inline style here? */}
            This is a ReactNode <div>children prop</div>
          </Alert>}

        {/* [demo] onClick must have a function passed */}
        <Button color="danger" onClick={() => setVisibleAlert(true)}>Summon Alert!</Button>

        {/* working with API */}
        {/* <FetchAPI url='https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY' /> */}
        <FetchAPIBetter url='https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY' />
        {/* <FetchAPIReactQuery url='https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY' /> */}

        {/* [demo] input processing */}
        <InputProcess />
      </div>

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
