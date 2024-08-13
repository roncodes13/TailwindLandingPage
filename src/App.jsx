import Header from "./Components/header"
import Footer from "./Components/footer"
import Body from "./Components/body"

function App() {
  

  return (
    <>
      <div className="bg-amber-50 min-h-screen px-6 py-3 flex flex-col gap-16">
        <Header/>
        <Footer/>
        <Body/>
      </div>
    </>
  )
}

export default App
