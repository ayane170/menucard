import {useState} from "react";
import {Numbers} from "../components/Numbers.jsx";


export function MultipleFavoriteNumbersPage(props){
    const {numbers} = props;
    const [favorites, setFavorites] = useState();
    return (
        <div className="mx-3">
            <Numbers numbers={[...new Set(numbers)]}
                     title="alle getallen"
                     isInitiallyOpen={true}
            />
            <div>Mijn favoriete getallen zijn {favorites?.length ?favorites.join(", ") : "(nog niet gekozen)"}</div>
        </div>
    );
}