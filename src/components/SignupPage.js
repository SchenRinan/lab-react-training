import { Form, FormGroup, Label, Input, FormFeedback, FormText } from "reactstrap";

const SignupPage = () => {
    return ( 
        <Form>
            <FormGroup>
                <Label for="">
                E-Mail
                </Label>
                <Input valid />
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
                <Input valid type="password" />
                <FormFeedback valid>
                Good Password
                </FormFeedback>
                <FormFeedback invalid>
                Password is weak
                </FormFeedback>
                <FormText>
                Example help text that remains unchanged.
                </FormText>
            </FormGroup>
        </Form>
    );
}
 
export default SignupPage;