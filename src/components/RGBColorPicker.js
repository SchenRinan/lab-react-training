import { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';
import { Form, FormGroup, Label } from 'reactstrap';

const RGBColorPicker = () => {
    const [rValue, setR ] = useState(0);
    const [gValue, setG ] = useState(0);
    const [bValue, setB ] = useState(0);
    return ( 
        <div>
            <SingleColorPicker 
                color="r"
                value={rValue}
                onChange={ (e) => setR(e)  }
            />

            <SingleColorPicker 
                color="g"
                value={gValue}
                onChange={ (e) => setG(e)  }
            />

            <SingleColorPicker 
            color="b"
            value={bValue}
            onChange={ (e) => setB(e)  }
            />
            
            <Form>
                <FormGroup row style={{display:'flex', alignItems: 'center'}}>
                    <Label
                        sm={3}
                        bsSize="lg"
                        style={{display:'flex', alignItems: 'center'}}
                    >
                        <div style={{height: '50px', width: '50px', backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`}}></div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rgb ({rValue}, {gValue}, {bValue})</div>
                    </Label>
                </FormGroup>
            </Form>

        </div>
    );
}
 
export default RGBColorPicker;