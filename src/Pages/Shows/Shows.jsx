import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import { ContentStyle, Forms } from './style'
import { useState } from 'react'
// import { TextField } from '@material-ui/core'

export default function Shows() {
    const [inputs, setInputs] = useState({name: '', email: '', phone: '', birthday: '', check: false }) 
    const [name] = useState("");
    const [email] = useState("");
    const [phone] = useState("");
    const [birthday] = useState("");
    const [check] = useState();
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
                    <h1>There's a pandemic going on...</h1>
                    <h2>Sign up for our newsletter and receive updates about upcoming shows!</h2>
                    <br />
                    <form onSubmit={handleSubmit} >
                        <label>
                            Full name: <br />
                            <input className='text' type="text" name="name" value={inputs.name} onChange={handleInputChange} />
                        </label>
                        <br />
                        <br />
                        <label>
                            Email address: <br />
                            <input className='text' type="text" name="email" value={inputs.email} onChange={handleInputChange} />
                        </label>
                        <br />
                        <br />
                        <label>
                            Phone number: <br />
                            <input className='text' type="text" name="phone" value={inputs.phone} onChange={handleInputChange} />
                        </label>
                        <br />
                        <br />
                        <label>
                            Birth date: <br />
                            <input className='text' type="text" name="birthday" value={inputs.birthday} onChange={handleInputChange} />
                        </label>
                        <br />
                        <br />
                        <label>
                            <input type="checkbox" name="check" value={inputs.check} onChange={handleInputChange} />
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