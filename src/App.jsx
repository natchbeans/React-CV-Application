import GeneralInfo from './components/GeneralInfo.jsx'
import EducationExp from './components/EducationExp.jsx'
import AddExp from './components/AddExp.jsx'
import { useState } from 'react';

export default function App(){

  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "", 
  });

  const [educationExp, setEducationExp] = useState({
    schoolName: "",
    major: "",
    studyDate: "",
  });

  const [jobInfo, setJobInfo] = useState({
    companyName: "",
    posTitle: "",
    jobExp: "",
    startDate: "",
    endDate: "",
  }); 

  

  function saveCompleteCV(){
      console.log("Complete CV:", {
      generalInfo,
      educationExp,
      jobInfo
    });

    alert("CV Saved!");
  }


  return (
    <div>
      <GeneralInfo data={generalInfo} onSave={setGeneralInfo}/>
      <EducationExp data={educationExp} onSave={setEducationExp}/>
      <AddExp data={jobInfo} onSave={setJobInfo}/>

      <button onClick={saveCompleteCV}>Save Complete CV</button>
    </div>
    
  );
}
