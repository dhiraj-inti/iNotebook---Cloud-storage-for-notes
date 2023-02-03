import React from 'react'
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

const Signup = (props) => {
    let history = useHistory();
    const [user, setuser] = useState({ name: "", email: "", password: "", cpassword: "" });
    const onChange = (e) =>{
        setuser({...user, [e.target.name]: e.target.value})
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        if (user.password === user.cpassword) {
            const response = await fetch("http://localhost:5000/api/auth/createuser", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name:user.name, email: user.email, password: user.password })
            });
            const json = await response.json()
            if(json.success){
                props.showAlert("User registered successfully",'success')
                localStorage.setItem('token',json.authToken);
                history.push("/");
            }
            else{
                props.showAlert("User already exists",'danger')
            }
        }
        else{
            props.showAlert("Password incorrect",'danger')
        }
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="name" name="name" onChange={onChange} value={user.name}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={onChange} value={user.email}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" onChange={onChange} value={user.password}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" name="cpassword" value={user.cpassword} onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Signup
