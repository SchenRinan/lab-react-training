import { useState } from "react";
import { Form, FormGroup, Label, Input, FormFeedback, Button, Card, ListGroupItem } from "reactstrap";

const SignupPage = () => {
    const [emailValue, setEvalue] = useState('');
    const [passwordValue, setPvalue] = useState('');
    const [natValue, setNvalue] = useState('en');
    const [validEmail, setEmail] = useState(false);
    const [strongPassword, setPassword] = useState(false);
    const [buttonRes, setButton] = useState(false);

    const emailValidity = item =>{
        let re = /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;
        
        setEvalue(item.target.value)
        if ( re.test(emailValue) ) {
            setEmail(true);
        }
        else {
            setEmail(false);
        }
    }
    const passwordStrenght = item =>{
        setPvalue(item.target.value)
        if ( passwordValue.length >= 5 ) {
            setPassword(true);
        }
        else {
            setEmail(false);
        }
    }
    const onSignup = e =>{
        e.preventDefault();
        setButton(true)
    }

    return ( 
        <div>
            <Form>
                <FormGroup>
                    <Label for="">
                    E-Mail
                    </Label>
                    <Input
                        type="email"
                        onChange={e=>emailValidity(e)}
                        valid={validEmail ? 'true':''}
                        invalid={validEmail ? '':'true'}
                    />
                    <FormFeedback valid>
                    You typed a valid email
                    </FormFeedback>
                    <FormFeedback invalid>
                    Invalid Email
                    </FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="">
                    Password
                    </Label>
                    <Input
                        type="password"
                        onChange={e=>passwordStrenght(e)}
                        valid={strongPassword ? 'true':''}
                        invalid={strongPassword ? '':'true'}
                    />
                    <FormFeedback valid>
                    Password is Good
                    </FormFeedback>
                    <FormFeedback invalid>
                    Password is weak
                    </FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Label for="">
                    Nationality
                    </Label>
                    <Input
                        type="select"
                        onChange={e=>setNvalue(e.target.value)}
                        >
                        <option value='en'>
                            English
                        </option>
                        <option value='de'>
                            German
                        </option>
                        <option value='fr'>
                            French
                        </option>
                    </Input>
                </FormGroup>
                <Button onClick={e=>onSignup(e)}>Sign Up</Button>
            </Form>
            {buttonRes ? 
            <Card>
                <ListGroupItem>
                {natValue === 'en' && 'Hello'}
                {natValue === 'de' && 'Hallo'}
                {natValue === 'fr' && 'Bonjour'}
                </ListGroupItem>
                <ListGroupItem>
                Your Email Address is: {emailValue}
                </ListGroupItem>
                <ListGroupItem>
                Your Password is {strongPassword ? 'Strong': 'Weak'}
                </ListGroupItem>
            </Card>
            :''}
        </div>
    );
}
 
export default SignupPage;