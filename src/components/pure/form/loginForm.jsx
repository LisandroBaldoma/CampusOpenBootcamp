/**
 * Componente que va  a contener un formulario para autentificacion de usau
 */

import React, {useState}from 'react';

const LoginForm = () => {
    
    const initialCredential = [
        {
            user:'',
            password:'',
        }
    ];

    const [credentials, setCredentials] = useState(initialCredential);
    
    return (
        <div>
            
        </div>
    );
}

export default LoginForm;
