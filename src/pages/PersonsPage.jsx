import {Persons} from "../components/Persons.jsx";

export function PersonsPage(props){
    const {persons}= props;
    return(
        <div>
            <Persons persons={persons} title="alle personen"/>
            <Persons persons={persons.toSorted((p1,pr) => pr.age - p1.age)} title="Volgend leeftijd"/>
            <Persons persons={persons.toSorted((p1, p2) => p1.city.localeCompare(p2.city))} title="Volgend stad" />

        </div>
    );
}