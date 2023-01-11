import React, {useRef} from 'react';
/**
 * Trabajo de EVENTOS DENTRO DEL COMPONENTE
 */

const Child = ({ name, send, update }) => {

    const messageRef = useRef('');
    const nameRef = useRef('')

    function pressButton(){
        const text = messageRef.current.value;
        alert(`Text in Input: ${text} `)
    }

    function pressButtonParams(text){
        alert(`Text: ${text}`)
    }

    function submitName(e){
        e.preventDefault()
        update(nameRef.current.value);
    }

    return (
        <div style={{background: 'cyan', padding:'20px'}}>
            <p onMouseOver={()=> console.log('On Mouse Over')}>Hello, {name}</p>
            <button onClick={() => console.log('Presed Button 1')}> Boton 1</button>
            <button onClick={pressButton}>Buton 2</button>
            <button onClick={ () => pressButtonParams('Hello')}>Boton 3</button>
            <input placeholder = 'Send text your Father' 
            onFocus={() => console.log('Input Focus')}
            onChange={(e) => console.log('Input onChange', e.target.value)}
            onCopy={()=> console.log('Copie text form Input')}
            ref = {messageRef}            
            />
            <button onClick={()=> send(messageRef.current.value)}>Send Message</button>
            <div style={{marginTop:'20px'}}>
            <form onSubmit={submitName}>
                <input placeholder='NewName' ref={nameRef}/>
                <button type='submit'>Update Name</button>
            </form>

            </div>
        </div>
    );
}

export default Child;
