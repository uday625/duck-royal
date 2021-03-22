import React from 'react';
import { Button, Input, MyLink, Panel, Index } from '../components';

const Register = () => {
    return ( 
        <Panel>
            <Input placeholder="E-mail" name="email" />
            <Input placeholder="User ID" name="uid" />
            <Input placeholder="Password" name="passwd" />
            <Button>Register</Button>
            <MyLink to="/login">Already registered?, Login here!</MyLink>
      </Panel>
     );
}
 
export default Register;