import React, { useState } from 'react';
import Header from './Components/Header';
import Form from './Components/Form';
import Resumen from './Components/Resumen';
import Resultado from './Components/Resultado';
import Spinner from './Components/Spinner';

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

  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });

  const [cargando, guardarCargando] = useState(false);

  // extraer datos
  const { cotizacion, datos } = resumen;

  return (
    <Contenedor>
      <Header titulo='Cotizador UIT' />
      <ContenedorFormulario>
        <Form
          guardarResumen={guardarResumen}
          guardarCargando={guardarCargando}
        />

        {cargando ? <Spinner /> : null}

        <Resumen
          datos={datos}
        />

        {!cargando ?
          <Resultado
            cotizacion={cotizacion}
          /> : null
        }

      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
