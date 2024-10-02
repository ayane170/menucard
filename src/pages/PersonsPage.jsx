import {Persons} from "../components/Persons.jsx";
import {Numbers} from "../components/Numbers.jsx";

export function PersonsPage(props){
    const {persons}= props;
    return(
        <div>
            <Persons persons={persons} title="alle personen"/>
            <Persons persons={persons.toSorted((p1,pr) => pr.age - p1.age)} title="Volgend leeftijd"/>
            <Persons persons={persons.toSorted((p1, p2) => p1.city.localeCompare(p2.city))} title="Volgend stad" />
            <Numbers numbers={persons.map(p => p.age)} title="alle personen"/>
            <Numbers numbers={[...new Set(persons.map(p => p.age))].sort((n1, n2) => n2 - n1)}
                     title="leeftijden gesorteerd en uniek"/>

        </div>
    );
}