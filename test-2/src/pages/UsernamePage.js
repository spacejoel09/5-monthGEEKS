import React from 'react';
import {useState, useEffect} from 'react'


const UsernamePage = () => {
    const [username, setUsername] = useState('');

    const [password, setPassword] = React.useState('');
    const [repeatPassword, setRepeatPassword] = React.useState('');
    const [error, setError] = React.useState('');
    const [success, setSuccess] = React.useState('');
    // const [user, setUser] = React.useState({
    //     name: '',
    //     username: '',
    //     email:''
    // });





    const formValue = (event) => {
       event.preventDefault();
        const Users = JSON.parse(localStorage.getItem('users')) || [];

        const usersIf = Users.some((user) => user.username === username);


        if(usersIf){
            setError("Username already exists");
            setSuccess("")
            return;
        }



        if (password !== repeatPassword) {
            setError('Password doesnt match!');
            setSuccess('');
            return;
        }
        const newUser = {username, password}
        localStorage.setItem('users', JSON.stringify([...Users, newUser]));

        setError('');
        setSuccess('Good!');
        setUsername('');
        setPassword('');
        setRepeatPassword('');

    }
    //
    // const addUser = async (event) =>



    return (
        <div>
            <form action="" onSubmit={formValue}>


                <input type="text" placeholder={"User"} required onChange={(e) => setUsername(e.target.value)} />
                <input type="password" id={setPassword} placeholder={"Password"} value={password} required onChange={(e) => setPassword(e.target.value)} />
                <input type="password" id={setPassword} placeholder={"Repeat Password"} onChange={(e) => setRepeatPassword(e.target.value)} required/>
                <button>Submit</button>
            </form>
            {error && <label htmlFor="{setPassword}" style={{color: 'red'}}>{error}</label>}
            {success && <label htmlFor="{setPassword}" style={{color: 'green'}}>{success}</label>}
        </div>
    );
};

export default UsernamePage;