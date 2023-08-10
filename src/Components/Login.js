import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebaseConfig from "../firebaseConfig"; // Adjust the path accordingly

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
  
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      // Handle successful login, e.g., redirect to a dashboard page
    } catch (error) {
      // If login fails with 'auth/user-not-found' error, create a new account
      if (error.code === 'auth/user-not-found') {
        try {
          await firebase.auth().createUserWithEmailAndPassword(email, password);
          // Handle successful account creation, e.g., redirect to a welcome page
        } catch (error) {
          // Handle account creation error, e.g., display an error message
          console.error("Error creating account: ", error);
        }
      } else {
        // Handle other login errors
        console.error("Error logging in: ", error);
      }
    }
  }
  

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

        </Form.Group>
        <Link to="Text">
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
        </Link>
      </Form>
    </div>

  );
}