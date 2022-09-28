import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

import { DefaultPage } from './pages/default.page';
import { DelayPage } from './pages/delay.page';
import { ErrorPage } from './pages/error.page';
import { StartPage } from './pages/start.page';
import { TimeoutPage } from './pages/timeout.page';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/default" element={<DefaultPage/>}/>
          <Route path="/delay" element={<DelayPage/>}/>
          <Route path="/timeout" element={<TimeoutPage/>}/>
          <Route path="/error" element={<ErrorPage/>}/>
          <Route exact path="/" element={<StartPage/>}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
