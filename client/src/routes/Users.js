import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardText, CardTitle, Spinner } from "reactstrap";
import YodlrApi from "../Api";
import "../styles/Users.css";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const allUsers = await YodlrApi.getAllUsers();
            
            setUsers(allUsers);
            setIsLoading(false);
        }

        fetchData();
    }, []);

    if(isLoading){
        return ( 
          <div className="Spinner" > 
            <Spinner className="Spinner-inner" /> 
          </div> 
        ); 
    }
    
    return (
        <>
            <div className="Users">
                {users.map(u => 
                    <section className="col-md-8" key={u.id}>
                        <Link className="ListLink" to={`/users/${u.id}`}>
                            <Card>
                                <CardBody className="text-center">
                                    <CardTitle>
                                        {`${u.firstName} ${u.lastName}`}
                                    </CardTitle>
                                    <CardText>
                                        {u.email}
                                    </CardText>                     
                                </CardBody>
                            </Card>
                        </Link>
                    </section>
                )}
            </div>
        </>
    )
}

export default Users;