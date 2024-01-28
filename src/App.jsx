// import {useState, useEffect} from 'react';
// import axios from 'axios';
// import { Switch, Route} from 'react-router-dom'

// import { Header } from './components/Header';
// import { Main } from './components/Main';
// import { HomePage } from './pages/HomePage';
// import { NotFound } from './pages/NotFound';
// import { Details } from './pages/Details';

// function App() {
  
//   return (
//     <>
//       <Header />
//       <Main>
//         <Switch>
//           <Route exact path="/">
//             <HomePage /> 
//           </Route>
//           <Route path='/country/:name' component={Details}/>
//           <Route component={NotFound}/>
//         </Switch>
//       </Main>
//     </>
//   )
// }

// export default App




import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Main } from './components/Main';

import { HomePage } from './pages/HomePage';
import { NotFound } from './pages/NotFound';
import { Details } from './pages/Details';
import { ALL_COUNTRIES } from './config';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(()=>{
    console.log(ALL_COUNTRIES)
  },[])

  return (
    <>
      <Header />
      <Main>
        <Routes>
        <Route path='/' element={<HomePage countries={countries} setCountries={setCountries} />} />
          <Route path='/country/:name' element={<Details />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
