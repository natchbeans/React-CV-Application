//Add general information, name, email, phone number
import { useState } from "react";

function GeneralInfo({data, onSave}){
    const [name, setName] = useState(data.name);
    const [email, setEmail] = useState(data.email);
    const [phone, setPhone] = useState(data.phone);

    function handleSubmit(e){
        e.preventDefault(); //prevents page reload
        
        onSave({
            name: name,
            email: email,
            phone: phone,
        });

        console.log('Data sent to App!')
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