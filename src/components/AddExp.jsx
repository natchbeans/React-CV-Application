import {useState} from 'react'

function AddExp(){
    const [companyName, setCompanyName] = useState("");
    const [posTitle, setPosTitle] = useState("");
    const [jobExp, setJobExp] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    function handleSubmit(e){
        e.preventDefault(); //prevents page reload
        console.log("Form submitted");
        console.log({companyName, posTitle, jobExp, startDate, endDate});
        //just logging data it goes nowhere yet
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder='Enter Company Name'
            />

            <input 
                type='text'
                value={posTitle}
                onChange={(e) => setPosTitle(e.target.value)}
                placeholder='Add Job Title'
            />

            <label for="jobExp">Enter Job Experience</label>
            <textarea id='jobExp' name='jobExp' rows="5" cols="30" value={jobExp} onChange={(e) => setJobExp(e.target.value)} placeholder='Enter Job Experience...'>

            </textarea>

            <input 
                type='date'
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
            />

            <input 
                type='date'
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
            />


            <p>Company Name: {companyName}</p>
            <p>Job Title: {posTitle}</p>
            <p>Job Experience: {jobExp}</p>
            <p>Date Range: {startDate} to {endDate}</p>

            <button type="submit">Save</button>
            
        </form>
    );
}

export default AddExp;