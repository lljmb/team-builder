import React from 'react';

export default function Form(props){
    const { values, update, submit } = props;

    const onChange = evt => {
        const { name, value } = evt.target; 
        update(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
                <label>
                    Name
                    <input name='name' 
                    value={values.name}
                    type='text'
                    onChange={onChange}
                    placeholder='please enter your name'
                    ></input>
                </label>
                <label>
                    Email
                    <input name='email' 
                    value={values.email}
                    type='email'
                    onChange={onChange}
                    placeholder='please enter your email address'
                    ></input>
                </label>
                <label>
                    Role
                <select name='role' 
                    value={values.role}
                    onChange={onChange}
                    >
                    <option value=''>------select role------</option>
                    <option value='designer'>Designer</option>
                    <option value='frontend'>Front End Developer</option>
                    <option value='backend'>Backend Developer</option>
                    <option value='client'>Client</option>
                </select>
                </label>

                <div className='submit'>
                    <button onSubmit={onSubmit}>submit</button>
                </div>
            </div>
        </form>
    )


}