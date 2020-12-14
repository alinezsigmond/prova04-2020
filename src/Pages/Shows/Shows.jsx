import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import { ContentStyle, Forms } from './style'
import { useState } from 'react'
// import { TextField } from '@material-ui/core'

export default function Shows() {
    const [inputs, setInputs] = useState({ }) 
    const [name] = useState("");
    const [email] = useState("");
    const [phone] = useState("");
    const [birthday] = useState("");
    const [check] = useState(false);
    const handleSubmit = (event) => {
        const registration = {
            name: name,
            email: email,
            phone: phone,
            birthday: birthday,
            check: check,
        }
        console.log(inputs);
        event.preventDefault();
    }
    const handleInputChange = (event) => {
        const name = event.target.name; 
        const value = event.target.value; 
        setInputs({...inputs, [name]:value}) 
    }
    return (
        <>
            <Header />
            <ContentStyle>
                <Forms>
                    {/* <form noValidate autoComplete="off">
                        <TextField id="outlined-basic" color='primary' label="Nome" variant="outlined" />
                    </form> */}
                    <h1>There's a pandemic going on...</h1>
                    <h2>Sign up for our newsletter and receive updates about upcoming shows!</h2>
                    <br />
                    <form onSubmit={handleSubmit} >
                        <label>
                            Full name: <br />
                            <input className='text' value={inputs.name} onChange={handleInputChange} type="text"/>
                        </label>
                        <br />
                        <br />
                        <label>
                            Email address: <br />
                            <input className='text' value={inputs.email} onChange={handleInputChange} type="text" />
                        </label>
                        <br />
                        <br />
                        <label>
                            Phone number: <br />
                            <input className='text' value={inputs.phone} onChange={handleInputChange} type="text" />
                        </label>
                        <br />
                        <br />
                        <label>
                            Birth date: <br />
                            <input className='text' value={inputs.birthday} onChange={handleInputChange} type="text" />
                        </label>
                        <br />
                        <br />
                        <label>
                            <input type="checkbox" value={inputs.check} onChange={handleInputChange} />
                               I agree to receive news on my email    
                        </label>
                        <br />
                        <br />
                        <input type="submit" value="Subscribe" />
                    </form>
                </Forms>
            </ContentStyle>
            <Footer />
        </>
    )
}