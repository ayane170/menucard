import {Button} from "react-bootstrap";

export function MyButton({onClick,children}) {
    console.log("children",children);
    return (
        <Button variant="primary"
                size="sm"
                width="20px"
                className="m-2 mt-1"
                onClick={onClick}>
            {children}
        </Button>

    );
}