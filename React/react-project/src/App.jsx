import Home from "./Home"
import './App.css'

function Players(props){
  console.log(props);
  console.log(props.data);

  return (
    <>
      <h2>List of Players</h2>
      {
        props.data.map((player, value)=>{
          return(
            <div className="player" key={value}>
              <h3>Player Name: {player.name}</h3>
              <h3>Team: {player.Team}</h3>
            </div>
          )
        })
      }
    </>
  )
}

function Data(prop){
  return(
    <>
      <h2>Data Component</h2>
      <h2>College Name: {prop.obj}</h2>
    </>
  )
}

function App(){
  let players_data=[
    {
      name:"kohli",
      Team:"India"
    },
    {
      name:"Dhoni",
      Team:"India"
    },
    {
      name:"Sachin",
      Team:"India"
    }
  ]

  return (
    <div>
      <h1>This is App component</h1>
      <h2>js file</h2>
      <Home/>
      <Data obj="SECE College" />
      <Players data={players_data}/>
    </div>
  )
}

export default App