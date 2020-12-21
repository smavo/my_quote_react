import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const Mensaje = styled.p`
    background-color: #345172;
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
    color: white;
`;

const ResultadoCotizacion = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #3f6fa5;
    background-color: #5991d1;
    margin-top: 1rem;
    position: relative;
`;

const TextoCotizacion = styled.p`
    color: white;
    padding: 1rem;
    text-transform: uppercase;
    font-weight:bold;
    margin: 0;
`;

function Resultado({ cotizacion }) {
    return (
        <Fragment>
            {/*cotizacion === 0 ? <p>Demo</p> : cotizacion */}
            {cotizacion === 0
                ? <Mensaje>Elige marca, año y tipo de seguro</Mensaje>
                : <ResultadoCotizacion>
                    <TransitionGroup
                        component="span"
                        className="resultado"
                    >
                        <CSSTransition
                            classNames="resultado"
                            key={cotizacion}
                            timeout={{ enter: 500, exit: 500 }}
                        >
                            <TextoCotizacion>El total es: $ <span> {cotizacion} </span>  </TextoCotizacion>
                        </CSSTransition>
                    </TransitionGroup>
                </ResultadoCotizacion>
            }
        </Fragment>
    )
}

export default Resultado
