import {Section} from "./Section.jsx";
import {SectionCard} from "./SectionCard.jsx";


export function Numbers(props) {
    const {numbers, title,onSelectNumber,isInitiallyOpen} = props;
    return (
        <Section title={title} isInitiallyOpen={isInitiallyOpen}>
            {numbers.map((num, i) => (
                <SectionCard key={i} onSelect={() => onSelectNumber(num)}>{num}</SectionCard>)
            )}
        </Section>
    );
}