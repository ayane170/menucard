 import {Cities} from "./Cities.jsx";


const testArray=[
 {name: "Antwerpen", numberOfPersons: 500},
 {name: "Brussel", numberOfPersons: 700},
];

 const meta = {
     component: Cities,
     tags: ['autodocs'],
     args: {
         cities: testArray,
         title: "test title"
     },
 }
 export default meta;
 export const Default = {};
