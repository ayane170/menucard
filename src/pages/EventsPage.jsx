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

    const handleDivClick = () => {
        console.log("div is clicked"); // Message pour la div
    };
    // Gestionnaire de clic pour le bouton
    const handleButtonClick = (event) => {
        event.stopPropagation(); // Empêche la propagation de l'événement vers la div parente
        handleClick(event); // Appelle la fonction de clic du bouton
    };
    const myStyle ={
        div:{
            background:"#33ffec",
        }
    }

    return (
        <>
        <Section title={title} isInitiallyOpen={true}>
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
            <Section title="stop propagation">
                <div  style={myStyle.div} onClick={handleDivClick}>
                    dit is een div.
                    <Button onClick={handleButtonClick} variant="primary">
                        dit is een button
                    </Button>
                </div>
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


