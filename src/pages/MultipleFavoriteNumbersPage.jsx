import {useState} from "react";
import {Numbers} from "../components/Numbers.jsx";


export function MultipleFavoriteNumbersPage(props){
    const {numbers} = props;
    const [favorites, setFavorites] = useState([]);
    function newArrayWithToggledNumber(clickedNumber) {
        return favorites.includes(clickedNumber) ? favorites.filter(n => n !== clickedNumber) : [...favorites, clickedNumber];
    }
    return (
        <div className="mx-3">
            <Numbers numbers={[...new Set(numbers)]}
                     title="alle getallen"
                     isInitiallyOpen={true}
                     markedNumbers={favorites}
                     onSelectNumber={n => setFavorites(newArrayWithToggledNumber(n))}
            />
            <div>Mijn favoriete getallen zijn {favorites?.length ?favorites.join(", ") : "(nog niet gekozen)"}</div>
        </div>
    );
}