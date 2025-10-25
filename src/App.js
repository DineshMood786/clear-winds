import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import SearchBar from "./components/SearchBar";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterd, setFiltered] = useState([]);

  const toggleFavorite = (id) => {
    console.log(favourites);
    setFavourites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };
  const [favourites, setFavourites] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) {
          throw new Error("failed to fetch products");
        }
        return res.json();
      })
      .then((data) => {
        const sortedData = data.sort((a, b) => a.title.localeCompare(b.title));

        setProducts(sortedData);
        setLoading(false);
        setFiltered(sortedData);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    const lower = searchTerm?.toLowerCase();

    const result = products.filter(
      (p) =>
        !searchTerm ||
        p.title.toLowerCase().includes(lower) ||
        p.body.toLowerCase().includes(lower)
    );

    setFiltered(result);
    setLoading(false);
  }, [searchTerm, products]);

  if (loading) {
    return <Loader />;
  }

  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="App">
      <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <ProductList
        products={filterd}
        favourites={favourites}
        onToggleFavourite={toggleFavorite}
      />
    </div>
  );
}

export default App;
