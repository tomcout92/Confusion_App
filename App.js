import React from 'react';
import Routes from './src/routes';
import { PacientProvider } from './src/Context/pacient'

export default function App() {
  return (
    <PacientProvider>
      <Routes />
    </PacientProvider>
  );
}
