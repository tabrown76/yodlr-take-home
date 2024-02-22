import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./routes/Home";
import Users from "./routes/Users";
import User from "./routes/User";
import SignupForm from "./routes/SignupForm";
import NotFound from "./routes/NotFound";
import NotAuthorized from "./routes/NotAuthorized";

const YodlrRoutes = () => {

  return (
    <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:userId" element={<User />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/NotAuthorized" element={<NotAuthorized />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
    </main>
  )
}

export default YodlrRoutes;