import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";


export default function Contacts() {
    const [contacts, setContacts] = useState([]);
    const navigate = useNavigate();

    const getContacts = () => {
        fetch('http://localhost:3000/api/v1/contacts', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${window.sessionStorage.getItem('token')}`,
            }
        })
            .then(response => {
                if( response.status === 401 ) navigate('/login');
                return response.json();
            })
            .then(json => {
                setContacts(json.contacts);
            })
    };
    useEffect(() => {
        getContacts();
    }, []);
    return <section>
        <h1>Contactos</h1>
        <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Teléfono</th>
                        </tr>
                    </thead>
            <tbody>
                {
                    contacts.map(c =>
                        <tr key={c._id}>
                            <th scope="row">{c.name}</th>
                            <td >{c.description}</td>
                            <td>{c.phone}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </section>
};