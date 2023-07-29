import { Form, FormGroup, Input, Col, Label } from "reactstrap";


const SingleColorPicker  = (props) => {
    const color = (item) =>{
        if(item === 'r'){
            return 'red'
        }
        if(item === 'g'){
            return 'green'
        }
        if(item === 'b'){
            return 'blue'
        }
        else{ return 'white' }
    }
    return ( 
        <Form>
            <FormGroup row style={{display:'flex', alignItems: 'center'}}>
                <Label
                    sm={2}
                    bsSize="lg"
                    style={{display:'flex', alignItems: 'center'}}
                >
                    <div style={{height: '50px', width: '50px', backgroundColor: color(props.color)}}></div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.color.toUpperCase()} : </div>
                </Label>
                <Col sm={2}>
                    <Input
                        name="number"
                        type="number"
                        min='0'
                        max='255'
                        onChange={e=>props.onChange(e.target.value)}
                    />
                </Col>
            </FormGroup>
        </Form>
        // <div style={{display: 'flex'}}>
        //     <div style={{backgroundColor: 'red', height: '50px', width: '50px'}}></div>{props.color.toUpperCase()}: <input type="number" min={0} max={255}/>
        // </div>
    );
}
 
export default SingleColorPicker ;