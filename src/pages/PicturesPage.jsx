/*
Here I use the data-array directly in the component PicturesPage.
What's the difference with PRODUCTS_DATA???
Note: the PICTURES_DATA array is not exported, so it will never be used in
another file.
The fact that this array is not passed as a prop makes it impossible
to reuse this PicturesPage Component for another array of pictures.
In this case I decided that that's just fine...
(it's a thin line...)
*/
import {PRODUCTS_DATA} from "../data/data.js";

const PICTURES_DATA = [
    {
        id: 1,
        credit:
            "https://unsplash.com/@acharki95?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        author: "Aziz Acharki",
        name: "aziz-acharki-oEibQEiq2cM-unsplash.jpg"
    },
    {
        id: 2,
        credit:
            "https://unsplash.com/@acharki95?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        author: "Aziz Acharki",
        name: "aziz-acharki-U3C79SeHa7k-unsplash.jpg"
    },
    {
        id: 3,
        credit:
            "https://unsplash.com/@yan_slg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        author: "Aziz Acharki",
        name: "aziz-acharki-Z1YBUimpQ_0-unsplash.jpg"
    },
    {
        id: 4,
        credit:
            "https://unsplash.com/@mkaminski?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        author: "Aziz Acharki",
        name: "aziz-acharki-HJe7UwySuWY-unsplash.jpg"
    },
];

export function PicturesPage() {
    return (
        <div>
            <h1>Pictures</h1>
            {PICTURES_DATA.map((picture) => (
                <div key={picture.id}>
                    <img src={`images/${picture.name}`}
                         alt={picture.author}
                         width="100%"
                         style={{margin: "2vw auto 0 auto"}}/>
                    <p>By <a href={picture.credit}>{picture.author}</a></p>
                </div>
            ))}
        </div>
    );
}

