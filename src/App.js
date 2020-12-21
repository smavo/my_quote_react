import React from 'react';
import Header from './Components/Header';
import Form from './Components/Form';

import styled from '@emotion/styled';

const Contenedor = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;
const ContenedorFormulario = styled.div`
  background-color: #FFFFFF;
  padding: 20px;
`

function App() {
  return (
    <Contenedor>
      <Header titulo='Cotizador UIT'/>
      <ContenedorFormulario>
        <Form />
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
