import React, {useEffect, useState} from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { SET_PRODUCTS } from '../reducers/productReducer';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import ProductsList from '../components/ProductList';

const HomeView = () => {

    const [products, setProducts] = useState([]); // Component state for products
    const dispatch = useDispatch

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                var token = localStorage.getItem('token')
                var config = {
                    headers: {
                        token
                    }
                }    
                const response = await axios.get('http://localhost:3000/product', config);
                console.log("DATA PRODUCT  FETCHED")
                console.log(response.data)
                setProducts(response.data); // Update component state
                dispatch({ type: SET_PRODUCTS, payload: response.data });
            } catch (error) {
                console.error('Error fetching products:', error);
            };
        }

        fetchProducts();
    }, []);

    return (
        <div>
        <Navbar bg="light" expand="lg">
            <Container>
            <Navbar.Brand href="/">Simple Shop</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                <Nav.Link >Products</Nav.Link>
                <Nav.Link >Cart</Nav.Link>
                <Nav.Link >Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>

        {/* Your HomeView content goes here */}
        <ProductsList products={products}/>
        
        </div>
    );
};

export default HomeView;
