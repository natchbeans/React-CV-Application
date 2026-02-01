//Add general information, name, email, phone number
import { useState } from "react";

function GeneralInfo(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    function handleSubmit(e){
        e.preventDefault(); //prevents page reload
        console.log("Form submitted");
        console.log({name, phone, email});
        //just logging data it goes nowhere yet
    }

    return (
        <form onSubmit={handleSubmit}>
            
            <label>Name: </label>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
            />

            <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />

            <input 
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone"
            />

            <div>
                <h3>Preview:</h3>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
            </div>

            <button type="submit">Save</button>

        </form>
    );
}

export default GeneralInfo;