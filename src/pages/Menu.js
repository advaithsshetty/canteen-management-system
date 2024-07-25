import React, { useState, useEffect } from 'react';
import { Container, Row, Col, ButtonGroup, DropdownButton, Dropdown, Button } from 'react-bootstrap';
import MenuItemCard from '../Components/MenuItemCard';
import { getMenuItems, getCategories } from '../services'; // Import API calls

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState(null);

  // Fetch menu items from the backend
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const data = await getMenuItems();
        setMenuItems(data);
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    };

    fetchMenuItems();
  }, []);

  // Fetch categories from the backend
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  // Handle category filter
  const handleFilter = (category) => {
    if (category === filteredCategory) {
      setFilteredCategory(null);
    } else {
      setFilteredCategory(category);
    }
  };

  // Filter items based on selected category
  const filteredItems = filteredCategory
    ? menuItems.filter(item => item.category.toLowerCase().includes(filteredCategory.toLowerCase()))
    : menuItems;

  return (
    <Container className="mt-5">
      <h2>Menu</h2>
      <Row>
        <Col xs={12} className="mb-3">
          <ButtonGroup className="d-none d-lg-flex">
            {categories.map(category => (
              <Button
                key={category}
                variant="outline-primary"
                onClick={() => handleFilter(category)}
              >
                {category}
              </Button>
            ))}
          </ButtonGroup>
          <DropdownButton
            className="d-lg-none"
            variant="outline-primary"
            title="Filter"
            id="filter-dropdown"
          >
            {categories.map(category => (
              <Dropdown.Item
                key={category}
                onClick={() => handleFilter(category)}
              >
                {category}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </Col>
        {filteredItems.map(item => (
          <Col key={item._id} sm="4">
            <MenuItemCard item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Menu;
