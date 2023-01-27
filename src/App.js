import { useEffect, useState } from "react"
import HireForm from "./pages/PersonProfile/components/HireForm"
import PeopleList from "./pages/Dashboard/components/PeopleList"
import "./styles.css"
import { Routes, Route } from "react-router"
import { Link } from "react-router-dom"
import PersonProfile from "./pages/PersonProfile/index.js"
import Dashboard from "./pages/Dashboard"

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  // useEffect() => (
    
  // )

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <Link to='/'>Dashboard</Link>
            {/* { <li>Dashboard</li> } */}
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Dashboard hiredPeople={hiredPeople} />} />

          <Route path="/view/:id" element={<PersonProfile  hiredPeople={hiredPeople} setHiredPeople = {setHiredPeople} />} />
          
        </Routes>

      </main>
    </>
  )
}
