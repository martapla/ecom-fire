import './index.css'
import useFireBaseFetch from './hook/useFireBaseFetch'
import { BrowserRouter,Routes,Route } from 'react-router'
import ProductList from './components/ProductList'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'
import Layout from './components/Layout'

function App() {

  const {data,loading,error} = useFireBaseFetch()
 
  if (loading) return <h3 className='loading'>Loading...</h3>;
  if (error) return <h3>Error: {error}</h3>;

  return (
    <>
     {/* <h2>Ecommerce  🔥 Firebase</h2> */}

     <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<ProductList products={data} />} />
                <Route path="product/:id" element={<ProductDetails />} />
                <Route path="cart" element={<Cart />} />
            </Route>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
