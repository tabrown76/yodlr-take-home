import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import "../styles/Home.css";

const Home = () => {
    const navigate = useNavigate();

    return (
        <section className="col-md-8">
          <Card className="Home-card">
            <CardBody className="text-center">
              <CardTitle className="CardTitle">
                Yodlr Front-End
              </CardTitle>
              <CardSubtitle className="CardSubtitle">
                All the users in one, convenient place.
              </CardSubtitle>
                <>
                  <Button className="Button" onClick={() => navigate("/signup")}>Signup</Button>
                </>
            </CardBody>
          </Card>
        </section>
    )
}

export default Home;