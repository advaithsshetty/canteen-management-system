// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './Components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import OrderHistory from './pages/OrderHistory';
import Feedback from './pages/Feedback';
import AdminDashboard from './pages/AdminDashboard';
import AdminOrderManagement from './pages/AdminManagement';
import AdminSalesReport from './pages/AdminSalesReport';
import ProfileDashboard from './pages/Dashboard';

const App = () => (
  <Router>
    <NavigationBar />
    <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/menu" element={<Menu/>} />
      <Route path="/order-history" element={<OrderHistory/>} />
      <Route path="/feedback" element={<Feedback/>} />
      <Route path="/admin" exact element={<AdminDashboard/>} />
      <Route path="/admin/order-management" element={<AdminOrderManagement/>} />
      <Route path="/admin/sales-reports" element={<AdminSalesReport/>} />
      <Route path="/profile" element={<ProfileDashboard/>} />
    </Routes>
  </Router>
)

export default App;