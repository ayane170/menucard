import {Section} from "../Section.jsx";
import {SectionCard} from "../SectionCard.jsx";

function City(props){
    const {city} = props;
    return(
        <SectionCard title={city.name}>
            {city.numberOfPersons}
        </SectionCard>
    );
}

export function Cities(props){
    const {cities,title,isInitiallyOpen}= props;
    return(
        <Section title={title} isInitiallyOpen={isInitiallyOpen}>
            {cities.map((c,index) => <City city={c} key={c.name + index}/>)}
        </Section>

);
}