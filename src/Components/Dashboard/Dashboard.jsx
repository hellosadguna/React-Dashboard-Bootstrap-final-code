import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import $ from "jquery";

function Dashboard() {
  useEffect(() => {
    const sidebarToggle = document.querySelector("#sidebar-toggle");
    const sidebar = $("#sidebar");

    $(sidebarToggle).on("click", function () {
      sidebar.toggleClass("collapsed");
    });

    // Remove 'collapsed' class from sidebar when a link is clicked
    $(".sidebar-item").on("click", function (event) {
      const isDropdown = $(this).find(".sidebar-dropdown").length > 0;
      if (!isDropdown && sidebar.hasClass("collapsed")) {
        sidebar.removeClass("collapsed");
      }
      // Stop event propagation to prevent collapsing the menu
      event.stopPropagation();
    });

    // Cleanup function
    return () => {
      $(sidebarToggle).off("click"); // Remove event listener to avoid memory leaks
      $(".sidebar-item").off("click"); // Remove event listener for links
    };
  }, []); // Empty dependency array to run the effect only once

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
                <Link to="/dashboard" className="sidebar-link">
                  <i className="fa-solid fa-list pe-2"></i>
                  Dashboard
                </Link>
              </li>
              <li className="sidebar-item">
                <a
                  href="#"
                  className="sidebar-link collapsed"
                  data-bs-target="#pages"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                >
                  <i className="fa-solid fa-file-lines pe-2"></i>
                  Pages
                </a>
                <ul
                  id="pages"
                  className="sidebar-dropdown list-unstyled collapse"
                  data-bs-parent="#sidebar"
                >
                  <li className="sidebar-item">
                    <Link to="Test" className="sidebar-link">
                      Page 1
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link to="Test" className="sidebar-link">
                      Page 1
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                <Link
                  href="#"
                  className="sidebar-link collapsed"
                  data-bs-target="#posts"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                >
                  <i className="fa-solid fa-sliders pe-2"></i>
                  Posts
                </Link>
                <ul
                  id="posts"
                  className="sidebar-dropdown list-unstyled collapse"
                  data-bs-parent="#sidebar"
                >
                  <li className="sidebar-item">
                    <span className="sidebar-link">Post 1</span>
                  </li>
                  <li className="sidebar-item">
                    <span className="sidebar-link">Post 2</span>
                  </li>
                  <li className="sidebar-item">
                    <span className="sidebar-link">Post 3</span>
                  </li>
                </ul>
              </li>
              <li className="sidebar-item">
                {/* Add other sidebar items here */}
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
