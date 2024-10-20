import {Section} from "./Section.jsx";
import {SectionCard} from "./SectionCard.jsx";


export function Numbers(props) {
    const {numbers, title,favorite,onSelectNumber,isInitiallyOpen} = props;
    return (
        <Section title={title} isInitiallyOpen={isInitiallyOpen}>
            {numbers.map((num, i) => (
                <SectionCard
                    key={i}
                    onClick={() => onSelectNumber(num)}
                    style={{ color: num === favorite ? 'orange' : 'black' }}
                >
                    {num}
                </SectionCard>
            ))}
        </Section>
    );
}