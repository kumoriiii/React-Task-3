import { Link, Outlet } from "react-router-dom";

export default function Shop() {
  return (
    <div style={{ display: "flex" }}>
      <aside style={{ width: "150px", marginRight: "20px" }}>
        <h3>Shop Menu</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>
            <Link to="">All Products</Link>
          </li>
          <li>
            <Link to="mens">Mens</Link>
          </li>
          <li>
            <Link to="womens">Womens</Link>
          </li>
        </ul>
      </aside>

      <main style={{ flex: 1 }}>
        <h2>Shop Page</h2>
        <Outlet />
      </main>
    </div>
  );
}
