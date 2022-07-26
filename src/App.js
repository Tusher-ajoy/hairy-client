import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import HairCuts from "./components/AllService/HairCuts/HairCuts";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Book from "./components/Dashboard/User/Book/Book";
import BookingList from "./components/Dashboard/User/BookingList/BookingList";
import AddReview from "./components/Dashboard/User/AddReview/AddReview";
import OrderList from "./components/Dashboard/Admin/OrderList/OrderList";
import AddService from "./components/Dashboard/Admin/AddService/AddService";
import MakeAdmin from "./components/Dashboard/Admin/MakeAdmin/MakeAdmin";
import ManageService from "./components/Dashboard/Admin/ManageService/ManageService";
import Login from "./components/Login/Login/Login";
import { createContext, useState } from "react";
import Requireauth from "./components/Login/Requireauth/Requireauth";
import BeardTriming from "./components/AllService/BeardTriming/BeardTriming";
import Shaves from "./components/AllService/Shaves/Shaves";
import FaceMasking from "./components/AllService/FaceMasking/FaceMasking";
import AllServices from "./components/AllService/Allservices/AllServices";

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  // console.log(loggedInUser)
  // console.log(sessionStorage.getItem('userName'),sessionStorage.getItem('userEmail'))
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="allServices">
            <Route path="" element={<AllServices />} />
            <Route path="haircuts" element={<HairCuts />} />
            <Route path="beard-triming" element={<BeardTriming />} />
            <Route path="shaves" element={<Shaves />} />
            <Route path="face-masking" element={<FaceMasking />} />
          </Route>
          <Route path="dashboard" element={<Requireauth><Dashboard /></Requireauth>} >
            <Route path="" element={<BookingList />} />
            <Route path="book" element={<Book />} />
            <Route path="booking-list" element={<BookingList />} />
            <Route path="add-review" element={<AddReview />} />

            <Route path="order-list" element={<OrderList />} />
            <Route path="add-service" element={<AddService />} />
            <Route path="make-admin" element={<MakeAdmin />} />
            <Route path="manage-service" element={<ManageService />} />
          </Route>
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
