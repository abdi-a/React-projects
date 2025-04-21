



import Joke from "./components/joke-generators/joke";
import SubmissionForm from "./components/submission-form/index"
import './App.css'

function App() {
 

  return (
    <>
     <div className="App">
            <h1>Joke Generator Using React and Joke API</h1>
            <Joke/>
        </div>
<SubmissionForm />


    </>
  )
}

export default App
