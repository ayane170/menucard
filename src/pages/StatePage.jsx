import {Section} from "../components/Section.jsx";
import {useState} from "react";
import {MyButton} from "../components/MyButton.jsx";


const cadreStyle ={
    div:{
        border:" 1px solid",
    }
}
function Counter({value,onValueChange}){
return(
        <div className="m-2 mt-1" style={cadreStyle.div}>
            <div>
                De waarde van de counter is:{value}
                <MyButton onClick={() => onValueChange(value + 1)}>+</MyButton>
                <MyButton onClick={() => onValueChange(0)}>clear</MyButton>
                <MyButton onClick={() => onValueChange(value - 1)}>-</MyButton>
            </div>
        </div>
);
}
function OnOffDemo(){
    const [isOn,setIsOn]=useState(false);
    return(
        <div className="m-2 mt-1" style={cadreStyle.div}>
            huidige waarde van isOn is: {isOn ? "on" :"off"}
            <MyButton onClick={() => setIsOn(false)}>off</MyButton>
            <MyButton onClick={() => setIsOn(true)}>on</MyButton>
            <MyButton onClick={() => setIsOn(!isOn)}>toggle</MyButton>
        </div>
    );
}
function DemoValue({value,onValueChange}){
    return (
        <>
            <div>de waarde van demoValue is {value}</div>
            <div>de waarde van demoValue is {value}</div>
            <div>
                <MyButton onClick={() => onValueChange(0)}>set 0</MyButton>
                <MyButton onClick={() => onValueChange(77)}>set 77</MyButton>
                <MyButton onClick={() => onValueChange(184)}>set 184</MyButton>
            </div>

        </>
    )
}
function  DemoValueReadonly({value}){
    return(
        <>
            <div>de waarde van demoValue is {value}</div>
        </>
    );
}

    function  DemoValueIncrement({value,onValueChange}){
return(

        <MyButton onClick={() => onValueChange(value + 1)}>demoValue+</MyButton>

);
}
export function StatePage() {
    const [demoValue, setDemoValue] = useState(0);
    const [counter,setCounter]=useState(0);

    return (
        <>
            <Section title="state" isInitiallyOpen={true}>
                <DemoValue value={demoValue} onValueChange={setDemoValue} />
        </Section>
            <Section title="my counter">
                <Counter  value={counter} onValueChange={setCounter}/>
                <Counter value={counter} onValueChange={setCounter} />
            </Section>
            <Section title="on off demo">
                <OnOffDemo/>
            </Section>
            <Section>
                <DemoValueReadonly value={demoValue}/>

            </Section>
            <Section>
                <div>
                    <DemoValueIncrement  value={counter} onValueChange={setCounter}/>
                </div>
            </Section>
            </>
    )
}
