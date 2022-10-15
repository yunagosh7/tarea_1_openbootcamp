import React from 'react';
import { Contacto } from '../models/Contacto.class';
import ContactoComponente from './ContactoComponente';

const ContactosComponentes = () => {
    let yo = new Contacto('Juan Cruz','Vila','yunagosh@gmail.com',true)

    return (
        <div>
            <ContactoComponente contacto={yo} />            
        </div>
    );
};


export default ContactosComponentes;
