import { useParams } from "react-router-dom";

const Registration = props => {
    let { registration } = useParams();
    return (
        <h3> it is registration</h3>
    );
        
};
export default Registration;