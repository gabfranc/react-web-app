/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line react-refresh/only-export-components
const reactDescriptions = ['REACT', 'Fundamentals', 'Components', 'Props', 'State', 'Lifecycle', 'Hooks', 'Context',]
function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1))
}
function Header(){
  const descriptions = reactDescriptions(getRandomInt(2))
  return (    
  <div>
      <header className="header">
        <h1>Welcome to React!</h1>
        <p>{descriptions} React is Awesome!</p>
      </header>
  </div>)
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>React to coding</h2>
      </main>
    </div>
  )
}

export default App;