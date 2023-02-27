import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './About'
import Cart from './Cart'
import Contact from './Contact'
import ContextApi from './ContextAPI'
import Header from './Header'
import ShoppingList from './ShoppingList'
import "./ShoppingList.css"
import Detail from './Detail'
// import Fixed from './Fixed'

function Home() {

    const [product, setproduct] = useState([])
    const [pro, setpro] = useState(
        localStorage.getItem("item") !== null
        ? JSON.parse(localStorage.getItem("item"))
            : [])

    useEffect(() => {
        async function shoppingdata() {
            const Shoppingdata = await axios.get("https://fakestoreapi.com/products/")
            console.log(Shoppingdata.data)
            setproduct(Shoppingdata.data)
        }
        shoppingdata()
    }, [])


    useEffect(() => {
        
        localStorage.setItem("item", JSON.stringify(pro))
    }, [pro])

    function getproduct(e, index) {
        e.preventDefault()
        setpro([...pro, index])
           console.log(pro)
    }





    return (
        <div>
            <ContextApi.Provider value={{ product, setproduct, pro, setpro, getproduct }}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Header />}>
                            <Route path='/' element={<ShoppingList />}></Route>
                            <Route path='/products/:id' element={<Detail />}></Route>
                            <Route path='/about' element={<About />}></Route>
                            <Route path='/contact' element={<Contact />}></Route>
                            <Route path='/cart' element={<Cart />}></Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ContextApi.Provider>

            {/* <ShoppingList /> */}

        </div>
    )
}

export default Home