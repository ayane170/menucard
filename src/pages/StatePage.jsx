import {Section} from "../components/Section.jsx";
import {useState} from "react";
import {Button} from "react-bootstrap";

export function StatePage(){
    const [demoValue,setDemoValue] = useState(0);


    return(
        <Section title="state">
            <div>de waarde van demoValue is {demoValue}</div>
            <div>de waarde van demoValue is {demoValue}</div>
            <div>
                <Button variant="primary"
                        size="sm"
                        width="20px"
                        className="m-2 mt-1"
                        onClick={() => setDemoValue(0)}>
                    set 0
                </Button>
                <Button variant="primary"
                        size="sm"
                        width="20px"
                        className="m-2 mt-1"
                        onClick={() => setDemoValue(77)}>
                    set 77
                </Button>
                <Button variant="primary"
                        size="sm"
                        width="20px"
                        className="m-2 mt-1"
                        onClick={() => setDemoValue(184)}>
                    set 184
                </Button>
            </div>
        </Section>
    )
}