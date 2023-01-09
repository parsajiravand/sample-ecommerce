import { Route, Routes } from "react-router-dom";
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import { Fragment } from "react";
import Home from "./core/Home";
import Menu from "./core/Menu";

const isLogin = false;

function Router() {
  return (
    <div>
      <Menu />
      <Routes>
        {!isLogin ? (
          <Fragment>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Fragment>
        ) : (
          <Route path="/test" element={<div>test</div>} />
        )}
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default Router;
