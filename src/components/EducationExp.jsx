import {useState} from 'react'

function EducationExp(){

    const [schoolName, setSchoolName] = useState("");
    const [major, setMajor] = useState("");
    const [studyDate, setStudyDate] = useState("");

    function handleSubmit(e){
        e.preventDefault(); //prevents page reload
        console.log("Form submitted");
        console.log({schoolName, major, studyDate});
        //just logging data it goes nowhere yet
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                list="schools"
                value={schoolName} //expects schoolName state
                onChange={(e) => setSchoolName(e.target.value)} //input contains M, setSchoolName is M, React re-renders with schoolName = M
                placeholder="School"
            />

            <datalist id="schools">
                <option value="University of Minnesota"></option>
                <option value="UCLA"></option>
                <option value="St. Thomas"></option>
                <option value="Harvard"></option>
                <option value="Yale"></option>
                <option value="University of Oxford"></option>
                <option value="Princeton University"></option>
                <option value="MIT"></option>
            </datalist>

            <input 
                type='text'
                value={major}
                onChange={(e) => setMajor(e.target.value)}
                placeholder='Major'
            />

            <input 
                type='date'
                value={studyDate}
                onChange={(e) => setStudyDate(e.target.value)}
                placeholder='Study Date'
            />

            <div>
                <p>School: {schoolName}</p>
                <p>Major: {major}</p>
                <p>Study Date: {studyDate}</p>
            </div>

            <button type="submit">Save</button>

        </form>
    );

}

export default EducationExp;