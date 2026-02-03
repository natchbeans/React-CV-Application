import {useState} from 'react'

function EducationExp({data, onSave}){

    const [schoolName, setSchoolName] = useState(data.schoolName);
    const [major, setMajor] = useState(data.major);
    const [studyDate, setStudyDate] = useState(data.studyDate);

    function handleSubmit(e){
        e.preventDefault(); //prevents page reload
        
        onSave({
            schoolName: schoolName,
            major: major,
            studyDate: studyDate,
        });
        console.log('Data sent to App!')
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