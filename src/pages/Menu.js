import React, { useState } from 'react';
import { Container, Row, Col, ButtonGroup, DropdownButton, Dropdown, Button } from 'react-bootstrap';
import MenuItemCard from '../Components/MenuItemCard';

const initialMenuItems = [
    { id: 1, name: 'Pasta', category: 'Italian, Fast Food', price: '50', time: '30', rating: '4.3', image: '/images/pasta.jpg' },
    { id: 2, name: 'Burger', category: 'Fast Food', price: '80', time: '15', rating: '2.5', image: '/images/burger.jpg' },
    { id: 3, name: 'Pizza', category: 'Italian, Fast Food', price: '100', time: '20', rating: '4.2', image: '/images/pizza.jpg' },
    { id: 4, name: 'Sushi Platter', category: 'Japanese, Seafood', price: '120', time: '25', rating: '4.7', image: '/images/sushi.jpg' },
    { id: 5, name: 'Taco', category: 'Mexican', price: '70', time: '18', rating: '4.0', image: '/images/taco.jpg' },
    { id: 6, name: 'Chicken Shawarma', category: 'Arabian', price: '60', time: '22', rating: '4.4', image: '/images/shawarma.jpg' },
    { id: 7, name: 'Salad Bowl', category: 'Healthy, Salad', price: '45', time: '10', rating: '4.1', image: '/images/salad.jpg' },
    { id: 8, name: 'Pasta', category: 'Italian', price: '85', time: '18', rating: '4.6', image: '/images/pasta.jpg' },
    { id: 9, name: 'Fish and Chips', category: 'Seafood', price: '95', time: '25', rating: '4.3', image: '/images/fish-chips.jpg' },
    { id: 10, name: 'Steak', category: 'American, Steakhouse', price: '150', time: '30', rating: '4.8', image: '/images/steak.jpg' },
    { id: 11, name: 'Fried Rice', category: 'Chinese', price: '65', time: '15', rating: '4.0', image: '/images/fried-rice.jpg' },
    { id: 12, name: 'Chicken Wings', category: 'American, Fast Food', price: '75', time: '20', rating: '4.5', image: '/images/chicken-wings.jpg' },
    { id: 13, name: 'Ice Cream Sundae', category: 'Dessert, Ice Cream', price: '40', time: '10', rating: '4.2', image: '/images/ice-cream.jpg' },
    { id: 14, name: 'Curry and Rice', category: 'Indian', price: '90', time: '25', rating: '4.4', image: '/images/curry-rice.jpg' },
    { id: 15, name: 'Pho', category: 'Vietnamese, Soup', price: '55', time: '20', rating: '4.1', image: '/images/pho.jpg' },
    { id: 16, name: 'Burrito', category: 'Mexican', price: '85', time: '18', rating: '4.3', image: '/images/burrito.jpg' },
    { id: 17, name: 'Dumplings', category: 'Chinese, Dim Sum', price: '60', time: '15', rating: '4.0', image: '/images/dumplings.jpg' },
    { id: 18, name: 'Sandwich', category: 'Fast Food, Sandwiches', price: '45', time: '10', rating: '4.2', image: '/images/sandwich.jpg' },
    { id: 19, name: 'Ramen', category: 'Japanese', price: '80', time: '22', rating: '4.6', image: '/images/ramen.jpg' },
    { id: 20, name: 'Paella', category: 'Spanish, Seafood', price: '110', time: '30', rating: '4.7', image: '/images/paella.jpg' }  
];

const Menu = () => {
    const [menuItems, setMenuItems] = useState(initialMenuItems);
    const [filteredCategory, setFilteredCategory] = useState(null);
  
    const handleFilter = (category) => {
      if (category === filteredCategory) {
        setFilteredCategory(null);
      } else {
        setFilteredCategory(category);
      }
    };
  
    const filteredItems = filteredCategory
      ? menuItems.filter(item => item.category.toLowerCase().includes(filteredCategory.toLowerCase()))
      : menuItems;
  
    return (
      <Container className="mt-5">
        <h2>Menu</h2>
        <Row>
          <Col xs={12} className="mb-3">
            <ButtonGroup className="d-none d-lg-flex">
              <Button variant="outline-primary" onClick={() => handleFilter('Arabian')}>Arabian</Button>
              <Button variant="outline-primary" onClick={() => handleFilter('Fast Food')}>Fast Food</Button>
              <Button variant="outline-primary" onClick={() => handleFilter('Italian')}>Italian</Button>
              <Button variant="outline-primary" onClick={() => handleFilter('Japanese')}>Japanese</Button>
              <Button variant="outline-primary" onClick={() => handleFilter('Mexican')}>Mexican</Button>
              <Button variant="outline-primary" onClick={() => handleFilter('Seafood')}>Seafood</Button>
              <Button variant="outline-primary" onClick={() => handleFilter('Healthy')}>Healthy</Button>
              <Button variant="outline-primary" onClick={() => handleFilter('American')}>American</Button>
              <Button variant="outline-primary" onClick={() => handleFilter('Chinese')}>Chinese</Button>
              <Button variant="outline-primary" onClick={() => handleFilter('Dessert')}>Dessert</Button>
              <Button variant="outline-primary" onClick={() => handleFilter('Indian')}>Indian</Button>
              <Button variant="outline-primary" onClick={() => handleFilter('Vietnamese')}>Vietnamese</Button>
              <Button variant="outline-primary" onClick={() => handleFilter('Dim Sum')}>Dim Sum</Button>
              <Button variant="outline-primary" onClick={() => handleFilter('Sandwiches')}>Sandwiches</Button>
              <Button variant="outline-primary" onClick={() => handleFilter('Spanish')}>Spanish</Button>
            </ButtonGroup>
            <DropdownButton
              className="d-lg-none"
              variant="outline-primary"
              title="Filter"
              id="filter-dropdown"
            >
              <Dropdown.Item onClick={() => handleFilter('Arabian')}>Arabian</Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilter('Fast Food')}>Fast Food</Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilter('Italian')}>Italian</Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilter('Japanese')}>Japanese</Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilter('Mexican')}>Mexican</Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilter('Seafood')}>Seafood</Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilter('Healthy')}>Healthy</Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilter('American')}>American</Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilter('Chinese')}>Chinese</Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilter('Dessert')}>Dessert</Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilter('Indian')}>Indian</Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilter('Vietnamese')}>Vietnamese</Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilter('Dim Sum')}>Dim Sum</Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilter('Sandwiches')}>Sandwiches</Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilter('Spanish')}>Spanish</Dropdown.Item>
            </DropdownButton>
          </Col>
          {filteredItems.map(item => (
            <Col key={item.id} sm="4">
              <MenuItemCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  };
  
  export default Menu;