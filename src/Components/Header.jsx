import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const ContenedorHeader = styled.header`
    background-color: #242c34;
    padding: 10px;
    font-weight: bold;
    margin-top:30px;
`;

const TextoHeader = styled.h2`
    font-family: 'Andika New Basic', sans-serif;
    font-size: 32px;
    margin:0;
    text-align: center;
    color: white;
    text-transform:uppercase;
    padding: 10px 0  5px 0;
`;

function Header({ titulo }) {
    return (
        <Fragment>
            <ContenedorHeader>
                <TextoHeader>{titulo}</TextoHeader>
            </ContenedorHeader>
        </Fragment>
    )
};

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}

export default Header;
