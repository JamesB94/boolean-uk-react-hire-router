import { Link } from "react-router-dom"

function PeopleListItem({ person }) {


  const id = person.id.value
  // console.log("here is the id" , id)

  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
      <Link to={`/view/` + id} state={person} >
        view
      </Link>
    </li>
  )
}

export default PeopleListItem
