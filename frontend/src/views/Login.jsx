import { useEffect } from "react"

export default function Login () {
    useEffect(()=>{
        fetch('http://localhost:3000/api/v1/auth', {
            method: "POST",
            headers: { 
                "Content-type": "application/json"
            },
            body: {
                "email": "mali@devf.mx",
                "password": "gatitos59"
            }
          })
            .then(response => response.json())
            .then(json => {
              return console.log(json)})
    }, []);
    return <>
    Login
    </>
};