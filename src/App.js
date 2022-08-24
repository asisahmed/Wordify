import { useEffect, useState } from "react";


function App() {

  const [solution, setSolution] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/words')
    .then(res => res.json())
    .then(json => {
      const randomSolution = json[Math.floor(Math.random()*json.length)]
      setSolution(randomSolution)
    })
  }, [setSolution])
  
  return (
    <div className="App">
      <h1>Wordify</h1>
      {solution && <div>Solution is: {solution.word}</div>}
    </div>
  );
}

export default App;
