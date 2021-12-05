import React, { useState } from 'react';
import { Button, Alert, Row, Col, Navbar, Nav, NavDropdown, Form, Container, FormControl } from 'react-bootstrap';
import './App';
import Navbar from 
import './App.css';


function App() {
  const [data, setdata] = useState(0);
  function apple()
  {
    setdata(data+1);
  }
  return <>
    <h1 className="text-center" style={heading}> Hello React Developer </h1>
  </>
}


export default App;