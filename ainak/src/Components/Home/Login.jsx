import { Modal, ModalBody, ModalHeader, ModalFooter, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
const Login = ()=> {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const userCredentials = JSON.parse(localStorage.getItem("user-credentials"));
    if (!userCredentials) {
      setError("No user credentials found in local storage.");
      return;
    }
    if (email === userCredentials.email && password === userCredentials.password) {
      setError("");
      setLoggedIn(true);
      setUserName(userCredentials.name);
      setIsOpen(false);
    } else {
      setError("Invalid email or password.");
    }
  }

  return (
    <div>
      {loggedIn && <p>Welcome, {userName}</p>}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalHeader>Login</ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              mb={4}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              mb={4}
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
            <ModalFooter>
              <Button type="submit">Login</Button>
              <Button onClick={() => setIsOpen(false)}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
}
export default Login