import Programmer from "./components/Programmer"
import Navbar from "./components/Navbar"
import Footerbar from "./components/Footerbar"
import Company from "./components/Company"
import './assets/App.css'
function App() {
  const lan =  ["JS","Java","Python"]
  return (
    <>
      <Navbar/>
      <div>
        <div className="card-container"> 
          <Company name="HelloKitty" years="2002" employees="80,000" serviceName="animy" servicePrice="88.00" path="https://cdn.shopify.com/s/files/1/0416/8083/0620/files/ecomm-CHGAL-Core2021_367x353px_01-HK_200x.png?v=1614324461"/>
          <Company name="Kuromi" years="2002" employees="100,000" serviceName="animy" servicePrice="10.00" path="https://cdn.shopify.com/s/files/1/0416/8083/0620/files/ecomm-CHGAL-Core2021_367x353px_03-KU_200x.png?v=1614324461"/>
          <Company name="milodi" years="2002" employees="90,000" serviceName="animy" servicePrice="9.00" path="https://cdn.shopify.com/s/files/1/0416/8083/0620/files/ecomm-CHGAL-Core2021_367x353px_02-MM_200x.png?v=1614324461"/>
        </div>
        <div className="card-container">
          <Programmer name="Arwa" company="Kuromi" years="0" languages={lan}/>
          <Programmer name="Samar" company="hellokitty" years="1" languages={["python","Java", "sql"]}/>
          <Programmer name="Rawan" company="milodi" years="2" languages={["JS","php", "swift"]}/>
        </div>
      

        {/* <img src={Flower} alt="Flower" className="round"/> */}
      </div>
      <Footerbar/>
    </>
  )
}

export default App