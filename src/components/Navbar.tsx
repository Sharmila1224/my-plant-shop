import { useState } from "react";

function Navbar() {

  const [searchText, setSearchText] = useState<string>("");
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  const handleSearch = () => {
    if (searchText.trim() === "") return;

    setSearchHistory((prev) => [...prev, searchText]);
    setSearchText("");
  };

  return (
    <>
      <nav className="navbar navbar-light bg-white">
        <div className="container-fluid">

          <a className="navbar-brand" href="#">
            <i className="fa fa-pagelines fa-2x text-success p-2"></i>
            <span className="text-success fs-3 fw-bold">Plant-Shop</span>
          </a>

          <form className="d-flex">
            <input
              type="search"
              className="form-control border-success me-2"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search"
              style={{ width: "700px", height: "40px" }}
            />

            <button
              type="button"
              className="btn btn-success"
              onClick={handleSearch}
            >
              Search
            </button>
          </form>

          <ul
            className="list-group position-absolute w-100"
            style={{ top: "80px", zIndex: 10 }}
          >
            {searchHistory.map((item, index) => (
              <li key={index} className="list-group-item">
                {item}
              </li>
            ))}
          </ul>

        </div>
      </nav>
    </>
  );
}

export default Navbar;
