import GeneralInfo from './components/GeneralInfo.jsx'
import EducationExp from './components/EducationExp.jsx'
import AddExp from './components/AddExp.jsx'
import { useState } from 'react';

export default function App(){

  const [currentPage, setCurrentPage] = useState(1);

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

  function goNextPage(){
    setCurrentPage(currentPage + 1); //So 1 goes to 2, and 2 goes to 3...
  }

  function goPreviousPage(){
    setCurrentPage(currentPage - 1); //3 -> 2, 2 -> 1
  }

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

      {/* Curly braces in JSX are used to embed JS, if currentPage is 1,2,3 then render HTML */}
      {currentPage === 1 && (
        <div>
          <GeneralInfo data={generalInfo} onSave={setGeneralInfo}/>
          <button onClick={goNextPage}>Next Page</button>
        </div>
      )}

      {currentPage === 2 && (
        <div>
          <EducationExp data={educationExp} onSave={setEducationExp}/>
          <button onClick={goPreviousPage}>Back</button>
          <button onClick={goNextPage}>Next Page</button>
        </div>
      )}
      
      {currentPage === 3 && (
        <div>
          <AddExp data={jobInfo} onSave={setJobInfo}/>
          <button onClick={goPreviousPage}>Back</button>
          <button onClick={saveCompleteCV}>Save Complete CV</button>
        </div>
      )}
      
      
    </div>
    
  );
}
