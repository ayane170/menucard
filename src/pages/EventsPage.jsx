import React from "react";
import {Section} from "../components/Section.jsx";
import {Button} from "react-bootstrap";

export function EventDemo(props){
    const {title} = props;
    const handleClick = () => {
        console.log("Button is geklikt!");
    };

    return (
        <Section title={title}>
            <div className="d-grid gap-2">
                <button  onClick={handleClick} >
                    click me please!
                </button>
                <Button onClick={handleClick} variant="primary" size="lg">
                    click me please!
                </Button>
            </div>
            {/*<button onClick={handleClick}>click me please!</button>*/}
            {/*<button onClick={handleClick}>click me please!</button>*/}

        </Section>
    );
};

// Component EventsPage
export function EventsPage(){
    return (
        <div className="mx-4">
            <EventDemo  title={"events"}/>
        </div>
    );
};


