import '../App.css';
import React, { useState, useEffect } from 'react';
import Form from './Form'
import TeamMember from './TeamMember'

const teamList = [
  { name: 'Jessica', email: 'brown.jessm@icloud.com', role: 'student'}
]

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {
  const [ teamMembers, setTeamMembers ] = useState(teamList);
  const [ formValues, setFormValues ] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue, })
  };

  const submitForm = () => {
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };

      setTeamMembers([newTeamMember, ...teamMembers]);
      setFormValues(initialFormValues);
  };


  return (
    <div className="App">
      <h1>Team Members</h1>

      <Form values={formValues} update={updateForm} submit={submitForm} />

      {
        teamMembers.map(teamMember => {
          return (
            <TeamMember key={teamMember.id} details={teamMember} />
          )
        })
      }
    </div>
  );
}

export default App;
