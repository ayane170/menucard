import {firestoreDB} from "../services/firebase.js";
import {useCollectionData} from "react-firebase-hooks/firestore";
import{collection} from 'firebase/firestore'

const personConverter = {
    toFirestore: undefined, //we will do this later
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return {...data, id: snapshot.id}
    }
};

export function PersonsFromDbPage(){
    const query = collection(firestoreDB,'persons').withConverter(personConverter);
    const [values,loading,error] = useCollectionData(query);
    console.log({values,loading,error});
    return(
        <>
            <div>Persons from db</div>
        </>
    );
}