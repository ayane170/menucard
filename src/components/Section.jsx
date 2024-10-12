// import {Container, Row} from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// export function Section(props) {
//     const {title, children} = props;
//     return (
//         <div className="mt-3 rounded shadow-sm" style={{backgroundColor: "lavender"}}>
//             <h2 className="text-center">{title}</h2>
//             <Container>
//                 <Button onClick={} variant="outline-primary">Klick</Button>{' '}
//                 <Row>
//                     {children}
//                 </Row>
//             </Container>
//         </div>
//     );
// }

import {Button, Container, Row} from "react-bootstrap";
import {useState} from "react";

export function Section(props) {
    const {title, children} = props;
    const [isOpen,setIsOpen]=useState(false); // il a une relation avec la function de la ligne 25

    const toggleSection = () => {
        setIsOpen(!isOpen);
        console.log(`Section ${title} is clicked`)
    }

    // const handleClick = () => {
    //     console.log(`Section ${title} is clicked`)
    // }

    return (
        <div className="mt-3 rounded shadow-sm" style={{backgroundColor: "lavender"}}>
            <div className="d-flex justify-content-center align-items-center px-3 mb-3" style={{gap: '10px'}}>
                <h2 className="mb-0">{title}</h2>
                {/*<Button onClick={handleClick}>Click!</Button>*/}
                <Button onClick={toggleSection}>
                    {isOpen ? "-" : "+"}
                </Button>
            </div>
            {isOpen && (
                <Container>
                    <Row>
                        {children}
                    </Row>
                </Container>
            )}
        </div>
    );
}