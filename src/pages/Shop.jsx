import { Link, Outlet } from "react-router-dom";

export default function Shop() {
  return (
    <div>
      <h2>Shop Page</h2>

      <nav style={{ marginBottom: "15px" }}>
        <Link to="" style={{ marginRight: "10px" }}>
          All Products
        </Link>
        <Link to="mens" style={{ marginRight: "10px" }}>
          Mens
        </Link>
        <Link to="womens">Womens</Link>
      </nav>

      {/* Nested route content goes here */}
      <Outlet />
    </div>
  );
}
