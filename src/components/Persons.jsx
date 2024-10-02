import {Section} from "./Section.jsx";
import {SectionCard} from "./SectionCard.jsx";

function Person(props){
    const {person} = props;
    return(

            <SectionCard title={person.name}>
                <p>{person.age}</p>
                <p>{person.city}</p>
            </SectionCard>

    );
}


export function Persons(props){
    const {persons,title} = props;
    return(
        <Section title={title}>
            {persons.map(p => <Person key={p.id} person={p}  />)}
        </Section>
    );


}