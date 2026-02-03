import {useState} from 'react'

function AddExp({data, onSave}){
    const [companyName, setCompanyName] = useState(data.companyName); //Create local state from props
    const [posTitle, setPosTitle] = useState(data.posTitle);
    const [jobExp, setJobExp] = useState(data.jobExp);
    const [startDate, setStartDate] = useState(data.startDate);
    const [endDate, setEndDate] = useState(data.endDate);

    function handleSubmit(e){
        e.preventDefault(); //prevents page reload
        
        onSave({ //setJobExp in App, updating state, sends data back up to App
            companyName: companyName,
            posTitle: posTitle,
            jobExp: jobExp,
            startDate: startDate,
            endDate: endDate,
        });
        console.log('Data sent to App!');
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