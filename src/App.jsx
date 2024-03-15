import Banner from "./components/BANNER/Banner"
import Navigation from "./components/HEADER/Navigation"
import Product from "./components/PRODUCT/Product"

function App() {


  return (
    <>
      <header className="container mx-auto px-4">
        <Navigation />
        <Banner />

        <Product />
      </header>

    </>
  )
}

export default App
