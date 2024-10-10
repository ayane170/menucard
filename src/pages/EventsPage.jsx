// import React from "react";
import {Section} from "../components/Section.jsx";
import {Button} from "react-bootstrap";


export function EventDemo(props){
    const {title} = props;
    const handleClick = (event) => {
        event.preventDefault();
        console.log("Button is geklikt!");
    };
    const linkClick = () =>{
        console.log("link is clicked");
    };

    return (
        <>
        <Section title={title}>
            <div className="d-grid gap-2">
                <button  onClick={handleClick} >
                    click me please!
                </button>
                <Button onClick={handleClick} variant="primary" size="lg">
                    click me please!
                </Button>
            </div>
        </Section>
            <Section title="Prevent Default" >
                <div>Dit is een div(een section).</div>
                    <a   href="https://example.com" onClick={linkClick}>
                        dit is een link met een href
                    </a>
            </Section>
        </>
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


