import { useState } from "react";
import Login from "./components/Login";
import ProductList from "./components/ProductList";
import CreateProduct from "./components/CreateProduct";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  return (
    <div className="p-6">
      {!loggedIn ? (
        <Login setLoggedIn={setLoggedIn} setUsername={setUsername} />
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-4">Welcome, {username} 👋</h1>

          <CreateProduct />
          <ProductList />
        </>
      )}
    </div>
  );
}

export default App;
