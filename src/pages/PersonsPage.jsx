import {Persons} from "../components/Persons.jsx";
import {Numbers} from "../components/Numbers.jsx";
import {Cities} from "../components/stories/Cities.jsx";


function citiesFromPersonData(persons){
    const uniqueCityNames = [...new Set(persons.map(p => p.city))];
    const cities = uniqueCityNames.map(c => ({
        name: c,
        numberOfPersons: persons.filter(p => p.city === c).length
    }));
    console.log(cities)
    return cities;
}


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
            <Cities cities={citiesFromPersonData(persons)} title="steden van alle personen"/>

        </div>
    );
}