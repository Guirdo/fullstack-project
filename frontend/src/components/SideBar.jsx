import { Link } from "react-router-dom";


export default function SideBar () {
    return <div>
        <Link to={`login`}>Login</Link>
        <Link to={`contacts/1`}>Ver Contacto</Link>
        <Link to={`contacts`}>Contactos</Link>
    </div>
};