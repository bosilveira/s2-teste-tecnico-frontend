import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import { CalculatorPage } from './pages/calculator.page';

function App() {
  return (
    <ChakraProvider>
      <CalculatorPage/>
    </ChakraProvider>
  );
}

export default App;
