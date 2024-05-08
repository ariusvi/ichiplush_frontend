import { Routes, Route, Navigate} from "react-router-dom"
import { Home } from "../Home/Home"
import { Login } from "../Login/Login"
import { Profile } from "../Profile/Profile"
import { Register } from "../Register/Register"
import { Tos } from "../Tos/Tos"
import { Shipping } from "../Shipping/Shipping"
import { Contact } from "../Contact/Contact"
import { Catalogue } from "../Catalogue/Catalogue"

export const Body = () => {

    return (
    <Routes>
        <Route path="*" element={<Navigate to={"/"} replace/>} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/tos" element={<Tos />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/examples" element={<Catalogue />} />
    </Routes>        
    )
}