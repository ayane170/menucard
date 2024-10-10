import {Section} from "../components/Section.jsx";
import {useState} from "react";
import {MyButton} from "../components/MyButton.jsx";

export function StatePage(){
    const [demoValue,setDemoValue] = useState(0);
    return(
        <Section title="state">
            <div>de waarde van demoValue is {demoValue}</div>
            <div>de waarde van demoValue is {demoValue}</div>
            <div>
                <MyButton onClick={() => setDemoValue(0)}>set 0</MyButton>
                <MyButton onClick={() => setDemoValue(77)}>set 77</MyButton>
                <MyButton onClick={() => setDemoValue(184)}>set 184</MyButton>
            </div>
        </Section>
    )
}
