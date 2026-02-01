import {useState} from 'react'

function AddExp(){
    const [companyName, setCompanyName] = useState("");
    const [posTitle, setPosTitle] = useState("");
    const [jobExp, setJobExp] = useState("");
    const [dateRange, setDateRange] = useState("");

    return (
        <div>
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


            <p>Company Name: {companyName}</p>
            <p>Job Title: {posTitle}</p>
            <p>Job Experience: {jobExp}</p>
        </div>
    );
}

export default AddExp;