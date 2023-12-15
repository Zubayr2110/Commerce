import { Route, Routes } from "react-router";
import Home from "../pages/Home/Home.jsx";
import Single from "../pages/Single/Single.jsx";
import SignIn from "../pages/SignIn/SignIn.jsx";
import AddPizza from "../pages/AddPizza/AddPizza.jsx";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin/user" element={<SignIn />} />
      <Route path="/single/:id" element={<Single />} />
      <Route path="/addpizza" element={<AddPizza />} />
    </Routes>
  );
}
