import {Persons} from "../components/Persons.jsx";

export function PersonsPage(props){
    const {persons}= props;
    return(
        <div>
            <Persons persons={persons} title="alle personen"/>
        </div>
    );
}