import { useParams } from "react-router-dom";

function Productdetails (){

    const {type} = useParams();

    return(

        <div>
            <h2>{type.toUpperCase} Details</h2>
            <p>You Selected: {type}</p>
        </div>
    )

}

export default Productdetails