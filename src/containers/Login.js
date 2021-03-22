import React from 'react';
import { Button, Input, MyLink, Panel } from '../components';

const Login = () => {
    return ( 
        <Panel>
            <Input placeholder="User ID" name="uid" />
            <Input placeholder="Password" name="passwd" />
            <Button>Login</Button>
            <MyLink to="/register">Register Here</MyLink>
        </Panel>
    );
}
 
export default Login;