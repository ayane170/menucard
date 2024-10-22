import {firestoreDB} from "../services/firebase.js";
import {useCollectionData} from "react-firebase-hooks/firestore";
import{collection} from 'firebase/firestore'
import {Persons} from "../components/Persons.jsx";
import {Form} from "react-bootstrap";
import {useState} from "react";

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
    const [search, setSearch] = useState("");
    console.log({values,loading,error});
    return(
        <>
            <div className="mx-3">
                <Form>
                    <Form.Label>search</Form.Label>
                    <Form.Control
                        value={search}
                        onChange={e => setSearch(e.target.value)}/>
                </Form>
                <Persons title="Personen uit database" persons={values?.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))} isInitiallyOpen={true}/>
            </div>
        </>
    );
}