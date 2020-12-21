import React, { useState } from 'react'
import styled from '@emotion/styled';
import { obtenerDiferenciaYear, calcularMarca, obtenerPlan } from '../helper';

const Seccion = styled.div`
    display: grid;
    grid-column-gap: 20px;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        grid-row-gap: 2px;
    }
`;

const Campo = styled.div`
    display: block; /*flex*/
    /*margin-bottom: 1rem;*/
    align-items: center;
    margin-bottom:10px;
`;

const Label = styled.label`
    text-transform:uppercase;
    margin: 0 0 0 5px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 10px 5px;
    border: 2px solid #e1e1e1;
    -webkit-appearance: none;
    margin: 10px 0;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Boton = styled.button`
    background-color: #295688;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin: 10px 0;
    border-radius:10px;
    outline: none;

    &:hover {
        background-color: #345172;
        cursor: pointer;
    }
`;

const Error = styled.div`
    background-color: #ff2e63;
    color: white;
    padding: 10px;
    text-align: center;
    margin: 20px 0 10px 0;
    border-radius: 10px;
`;

function Form({guardarResumen,guardarCargando}) {
    const [ datos, guardarDatos ] = useState({
        marca: '',
        year: '',
        plan: ''
    });

    const [error, guardarError] = useState(false);

    // extraer los valores del state
    const { marca, year, plan } = datos;

    // Leer los datos del formulario y colocarlos en el state
    const obtenerInformacion = e => {
        guardarDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    // cuando el usuario presiona submit
    const cotizarSeguro = (e) => {
        e.preventDefault();

        if(marca.trim() === '' || year.trim() === '' || plan.trim() === '') {
            guardarError(true);
            return;
        }

        guardarError(false);

        // Una base de 2000
        let resultado = 2000;
        //console.log(resultado);

        // obtener la diferencia de años
        const diferencia = obtenerDiferenciaYear(year);
        //console.log(diferencia);

        // por cada año hay que restar el 3%
        resultado -= (( diferencia * 3 ) * resultado) / 100;
        //console.log(resultado);

        // Americano 15
        // Asiatico 5%
        // Europeo 30%
        resultado = calcularMarca(marca) * resultado;
        //console.log(resultado);

        // Basíco aumenta 20%
        // Completo 50%
        const incrementoPlan = obtenerPlan(plan);
        resultado = parseFloat( incrementoPlan * resultado ).toFixed(2);
        //console.log(resultado);

        guardarCargando(true);

        setTimeout(() => {

            // Elimina el spinner
            guardarCargando(false);

            // pasa la información al componente principal
            guardarResumen({
                cotizacion: Number(resultado),
                datos
            });
        }, 3000);
    }


    return (
        <form onSubmit={cotizarSeguro}>
            <Seccion>
                <Campo>
                    <Label>Marca</Label>
                    <Select
                        name="marca"
                        value={marca}
                        onChange={obtenerInformacion}
                    >
                        <option value="">Seleccione...</option>
                        <option value="americano">Americano</option>
                        <option value="europeo">Europeo</option>
                        <option value="asiatico">Asiatico</option>
                    </Select>
                </Campo>

                <Campo>
                <Label>Año</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={obtenerInformacion}
                >
                    <option value="">Seleccione...</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                </Select>
            </Campo>
            </Seccion>

            <Campo>
                <Label>Plan</Label>
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="basico"
                    checked={plan === "basico"}
                    onChange={obtenerInformacion}
                /> Básico

                <InputRadio 
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={plan === "completo"}
                    onChange={obtenerInformacion}
                /> Completo
            </Campo>

            { error ? <Error>Todos los campos son obligatorios</Error> : null}

            <Boton type="submit">Cotizar</Boton>
        </form>
    )
}

export default Form;
