import Header from "./comp/Header";
import NotificationButton from "./comp/NotificationButton";
import SalesCard from "./comp/SalesCard";



function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard/>
          </div>
        </section>
      </main>
    </>

  )
}

export default App;
