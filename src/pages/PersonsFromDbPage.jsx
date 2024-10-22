import {firestoreDB} from "../services/firebase.js";
import {useCollectionData} from "react-firebase-hooks/firestore";
import{collection} from 'firebase/firestore'



export function PersonsFromDbPage(){
const query = collection(firestoreDB,'persons');
const [values,loading,error] = useCollectionData(query);
console.log({values,loading,error});
return(
    <>
        <div>Persons from db</div>
    </>
);
}