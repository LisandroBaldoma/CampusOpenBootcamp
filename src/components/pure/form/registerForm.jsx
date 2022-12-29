import React, { useState } from 'react'

export default function registerForm() {
    
    const LoginForm = () => {
    
        const inicialData
         = [
            {
                user:'',
                name:'',
                email:'',
                password:''
            }
        ];
    
        const [data, setData] = useState(inicialData);
  
    return (
    <div>registerForm</div>
  );
}
}
