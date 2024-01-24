import logo from './logo.svg';
import { useState, useEffect } from "react";
import HomePage from "./components/HomePage/HomePage";
import useFetchCharacters from "./hooks/useFetchCharacters";
import axios from "axios";
import './App.css';
import useFilterCharacters from "./hooks/useFilterCharacters";
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <HomePage />
      </div>
    </ChakraProvider>
  );
}

export default App;
