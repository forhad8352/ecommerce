import RootLayout from "./components/Layot/RootLayout";
import Home from "./Pages/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import ListShop from "./Pages/ListShop";
import Faq from "./Pages/Faq";
import Demo from "./Pages/Demo";
import Contact from "./Pages/Contact";
import AboutUs from "./Pages/AboutUs";
import Blog from "./Pages/Blog";
import SingleBlog from "./Pages/SingleBlog";
import ListGrid from "./Pages/ListGrid";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import Note404 from "./Pages/Note404";
import OrderComplete from "./Pages/OrderComplete";
import MyAccount from "./Pages/MyAccount";

function App() {
  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="/ListShop" element={<ListShop />}></Route>
        <Route path="/Faq" element={<Faq />}></Route>
        <Route path="/Demo" element={<Demo />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/AboutUs" element={<AboutUs />}></Route>
        <Route path="/Blog" element={<Blog />}></Route>
        <Route path="/SingleBlog" element={<SingleBlog />}></Route>
        <Route path="/ListGrid" element={<ListGrid />}></Route>
        <Route path="/ListGrid/:id" element={<ProductDetails />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/Note404" element={<Note404 />}></Route>
        <Route path="/OrderCompleted" element={<OrderComplete />}></Route>
        <Route path="/Myaccount" element={<MyAccount />}></Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
