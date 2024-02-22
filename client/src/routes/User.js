import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardBody, CardText, CardTitle, Button, Spinner } from "reactstrap";
import YodlrApi from "../Api";

const User = () => {
    const {userId} = useParams();
    const navigate = useNavigate();
    const [userData, setUserData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchUserData() {
          try{
              const data = await YodlrApi.getUser(userId);
    
              setUserData(data);
              setIsLoading(false);
          } catch(e){
              console.error(`Error fetching job: ${e}`);
              navigate('/NotFound');
          }
        }
  
        fetchUserData();
    }, [userId, navigate]);

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
                <Card className="Card">
                    <CardBody className="text-center CardBody">
                        <CardTitle className="CardTitle">
                            {`${userData.firstName} ${userData.lastName}`}
                        </CardTitle>
                        <CardText className="CardText">
                            <span style={{display: 'block'}}>{userData.email}</span>
                        </CardText>                                      
                        <Button 
                            className="Button" 
                            onClick={() => navigate(`/users`)}>
                                Back
                        </Button>                                      
                    </CardBody>
                </Card>
            </div>
        </>
    )
}

export default User;