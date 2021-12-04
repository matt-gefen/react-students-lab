import logo from './logo.svg';
import './App.css';
import studentsArr from './studentsData';
import Student from './Student'; 

const students = studentsArr.map((element, index) => {
  return (
  <Student 
    name={element.name}
    bio={element.bio}
    scores={element.scores}
    key={index}
  />
  )
})

function App() {
  return (
    <div className="App">
      {students}
    </div>
  );
}

export default App;
