import {Section} from "./Section.jsx";
import {SectionCard} from "./SectionCard.jsx";


export function Numbers(props) {
    const {numbers, title} = props;

    return (
        <Section title={title}>

            {numbers.map((n, i) =>
                <SectionCard key={i}>{n}</SectionCard>)
            }
        </Section>
    );
}


