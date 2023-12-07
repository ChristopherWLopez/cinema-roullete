import React, { useState } from 'react'


const Index = () => {

    //define state variables//
    const [state, setState] = useState('');

    //function to  handle submite form
    const handleState=(e)=>{
        setState(e.target.value);
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("form submitted", state);
    };

  return (
    <>
    <div className='header'>

        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={state} onChange={handleState}/>
                <button onClick={handleState}>Submit</button>
            </label>
        </form>
        
        <h2>Welcome, {state}</h2>
        
        </div>
    </>
        )
}

export default Index
