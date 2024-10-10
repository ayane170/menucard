import {Section} from "../components/Section.jsx";
import {useState} from "react";
import {MyButton} from "../components/MyButton.jsx";


const cadreStyle ={
    div:{
        border:" 1px solid",
    }
}

function Counter(){
    const [counter,setCounter]=useState(0);
return(
        <div className="m-2 mt-1" style={cadreStyle.div}>
            <div>
                De waarde van de counter is:{counter}
                <MyButton onClick={() => setCounter(counter + 1)}>+</MyButton>
                <MyButton onClick={() => setCounter(0)}>clear</MyButton>
                <MyButton onClick={() => setCounter(counter - 1)}>-</MyButton>
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
        </div>

    );

}


export function StatePage() {
    const [demoValue, setDemoValue] = useState(0);
    return (
        <>
            <Section title="state">
                <div>de waarde van demoValue is {demoValue}</div>
                <div>de waarde van demoValue is {demoValue}</div>
                <div>
                    <MyButton onClick={() => setDemoValue(0)}>set 0</MyButton>
                    <MyButton onClick={() => setDemoValue(77)}>set 77</MyButton>
                <MyButton onClick={() => setDemoValue(184)}>set 184</MyButton>
            </div>
        </Section>
            <Section title="my counter">
                <Counter />
                <Counter/>
            </Section>
            <Section title="on off demo">
                <OnOffDemo/>
            </Section>
            </>
    )
}
