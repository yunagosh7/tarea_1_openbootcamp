import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../models/Contacto.class';

const ContactoComponente = ({contacto}) => {
    return (
        <div>
            <ul>
                <li>Nombre: {contacto.nombre} </li>
                <li>Apellido: {contacto.apellido} </li>
                <li>Email: {contacto.email} </li>
                <li>{contacto.conectado ? 'Contacto en línea' : 'Contacto no disponible'}</li>
            </ul>
        </div>
    );
};


ContactoComponente.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ContactoComponente;
