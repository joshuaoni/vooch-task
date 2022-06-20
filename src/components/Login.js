import React, {useState} from 'react';
import login from '../assets/login.PNG';

import { Button, Checkbox, Input } from 'antd';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [popup, setPopup] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const data = {email, password};

        const resp = await fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
        let response = await resp.json();

        if (response.token && response.token === 'QpwL5tke4Pnpja7X4') {
            setLoading(false);
            setPopup('Success!');
            setEmail('');
            setPassword('');
            document.getElementById('popup').style.color = "#023047";
        } else if (response.error) {
            setLoading(false);
            setPopup(response.error);
            document.getElementById('popup').style.color = "red";
        }
    }

    return ( 
        <div className='login'>
            <div className='form-cont'>
                <h2>Welcome Back</h2>
                <p>Enter email and password</p>
                <form onSubmit={handleSubmit}>
                    <Input 
                        placeholder="Email Address *" 
                        className='input'
                        value={email}
                        onChange={(e)=>{
                            setEmail(e.target.value);
                            setPopup('');
                        }}
                        onFocus={()=>{
                            setPopup('');
                        }}
                    />
                    <Input 
                        placeholder="Password *" 
                        className='input'
                        value={password}
                        onChange={(e)=>{
                            setPassword(e.target.value);
                            setPopup('');
                        }}
                        onFocus={()=>{
                            setPopup('');
                        }}
                    />
                    <div id='popup'>
                        <h3>{popup}</h3>
                    </div>
                    {loading ? <Button id='dim' type="primary" loading block>Loading</Button> : <button>Login</button>}
                    <div className='check'>
                        <div>
                            <Checkbox>Remember Password</Checkbox>
                        </div>
                        <p>Forgot Password?</p>
                    </div>
                </form>
            </div>
            <div className='img'>
                <img alt='' src={login} />
            </div>
        </div>
    );
}
 
export default Login;