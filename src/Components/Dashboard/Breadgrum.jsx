// Breadcrumb.js

import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ breadcrumbs }) => {
  return (
    <nav
      style={{
        "--bs-breadcrumb-divider":
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E\")",
      }}
    >
      <ol className="breadcrumb">
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={index}
            className={`breadcrumb-item ${
              index === breadcrumbs.length - 1 ? "active" : ""
            }`}
          >
            {breadcrumb.link ? (
              <Link to={breadcrumb.link}>{breadcrumb.title}</Link>
            ) : (
              breadcrumb.title
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
