import {Cars} from "../components/Cars.jsx";

export function  CarsPage(props){
    const {cars} = props

    return(
        <div className="mx-3" >

                <Cars cars={cars} title={"Auto's"} isInitiallyOpen={true}/>
        </div>


    )
}

