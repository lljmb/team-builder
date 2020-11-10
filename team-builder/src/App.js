import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import Member from './Form'
import MemberForm from './MemberForm'

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {
  const [teamMembers, setTeamMembers] = useState([])

  const [formValues, setFormValues] = useState(initialFormValues)
  
  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    });
  }

  const submitForm = (evt) => {
  
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    };

    if (!newTeamMember.name || !newTeamMember.email | !newTeamMember.role) return;

    setTeamMembers([...teamMembers, newTeamMember])

    setFormValues(initialFormValues)
  }


    return (
    <div className='container'>
      <h1>Form App</h1>

      <MemberForm
        // 🔥 STEP 2 - The form component needs its props.
        //  Check implementation of FriendForm
        //  to see what props it expects.
        values={formValues} update={updateForm} submit={submitForm}
      />

      {
        teamMembers.map(teamMember => {
          return (
            <Member key={teamMember.id} details={teamMember} />
          )
        })
      }


    </div>
  )
}

export default App;
