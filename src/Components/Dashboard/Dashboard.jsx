import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import $ from "jquery";

function Dashboard() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const sidebarToggle = document.querySelector("#sidebar-toggle");
    const sidebar = $("#sidebar");

    $(sidebarToggle).on("click", function () {
      sidebar.toggleClass("collapsed");
    });

    $(".sidebar-link").on("click", function () {
      sidebar.removeClass("collapsed");
      setActiveLink($(this).attr("href"));
      $(this)
        .addClass("active")
        .parent()
        .siblings()
        .find(".sidebar-link")
        .removeClass("active");
    });

    // Set active link based on current location
    setActiveLink(location.pathname);

    // Cleanup function
    return () => {
      $(sidebarToggle).off("click");
      $(".sidebar-link").off("click");
    };
  }, [location.pathname]);

  const handleSubmenuClick = (e) => {
    e.preventDefault(); // Prevent default navigation behavior
    e.stopPropagation(); // Prevent event propagation
  };

  return (
    <div className="App">
      <div className="wrapper">
        <aside id="sidebar" className="js-sidebar">
          <div className="h-100">
            <div className="sidebar-logo">
              <a href="#">CodzSword</a>
            </div>
            <ul className="sidebar-nav">
              <li className="sidebar-header">Admin Elements</li>
              <li className="sidebar-item">
                <Link
                  to="/dashboard"
                  className={`sidebar-link ${
                    activeLink === "/dashboard" ? "active" : ""
                  }`}
                >
                  <i className="fa-solid fa-list pe-2"></i>
                  Dashboard
                </Link>
              </li>
              <li className="">
                <span
                  data-bs-target="#pages"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  onClick={handleSubmenuClick}
                  style={{ display: "block", width: "100%", color: "#fff" }}
                >
                  <i className="fa-solid fa-file-lines pe-2"></i>
                  Pages
                </span>
                <ul
                  id="pages"
                  className="sidebar-dropdown list-unstyled collapse"
                  data-bs-parent="#sidebar"
                >
                  <li className="sidebar-item">
                    <Link
                      to="Test"
                      className={`sidebar-link ${
                        activeLink === "/Test" ? "active" : ""
                      }`}
                    >
                      Page 1
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    {/* Replace anchor tag with span */}
                    <span className="sidebar-link">Page 2</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </aside>
        <div className="main">
          <nav className="navbar navbar-expand px-3 border-bottom">
            <button className="btn" id="sidebar-toggle" type="button">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse navbar">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    href="#"
                    data-bs-toggle="dropdown"
                    className="nav-icon pe-md-0"
                  >
                    <img
                      src="image/profile.jpg"
                      className="avatar img-fluid rounded"
                      alt=""
                    />
                  </a>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a href="#" className="dropdown-item">
                      Profile
                    </a>
                    <a href="#" className="dropdown-item">
                      Setting
                    </a>
                    <Link to="/" className="dropdown-item">
                      Logout
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          <main className="content px-3 py-2">
            <Outlet />
          </main>
          <a href="#" className="theme-toggle">
            <i className="fa-regular fa-moon"></i>
            <i className="fa-regular fa-sun"></i>
          </a>
          <footer className="footer">
            <div className="container-fluid">
              <div className="row text-muted">
                <div className="col-6 text-start">
                  <p className="mb-0">
                    <a href="#" className="text-muted">
                      <strong>CodzSword</strong>
                    </a>
                  </p>
                </div>
                <div className="col-6 text-end">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a href="#" className="text-muted">
                        Contact
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="text-muted">
                        About Us
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="text-muted">
                        Terms
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="text-muted">
                        Booking
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
