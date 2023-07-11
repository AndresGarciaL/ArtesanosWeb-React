import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ currentPage }) => {
  return (
    <nav
      style={{
        background: "lightgray",
        "--bs-breadcrumb-divider":
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E\")",
      }}
      aria-label="breadcrumb"
    >
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li
          className="breadcrumb-item active"
          style={{ fontSize: "medium" }}
          aria-current="page"
        >
          {currentPage}
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;