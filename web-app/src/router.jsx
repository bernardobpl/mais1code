import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { CreateUser } from "./pages/CreateUser";
import { Users } from "./pages/Users";
import { Donations } from "./pages/Donations";
import { CreateDonation } from "./components/CreateDonation";
import { UserDetails } from "./pages/UserDetails";

export function Router(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Página inicial</h1>}/>


        <Route path="users">
          <Route index element={<Users />} />
          <Route path="details" element={<UserDetails />}/>
          <Route path="create" element={<CreateUser />}/>
        </Route>

        <Route path="donations">
          <Route index element={<Donations />} />
          <Route path="create" element={<CreateDonation />} />


        </Route>

      </Routes>
    </BrowserRouter>
  )
}