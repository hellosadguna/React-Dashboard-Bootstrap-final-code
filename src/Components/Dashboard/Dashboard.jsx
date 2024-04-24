import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import $ from "jquery";
import user from "../../assets/images/user.png";

function Dashboard() {
  // Get current location
  const location = useLocation();
  // State to manage active link
  const [activeLink, setActiveLink] = useState("");
  // Function to store name in localStorage
  const Hellocode = (e) => {
    localStorage.setItem("getname", e);
  };
  // State to store name from localStorage
  const [getname, setgetname] = useState("");

  useEffect(() => {
    const sidebarToggle = document.querySelector("#sidebar-toggle");
    const sidebar = $("#sidebar");
    const getallnames = localStorage.getItem("getname");

    // Set name from localStorage
    if (getallnames) {
      setgetname(getallnames);
    }

    // Toggle sidebar
    $(sidebarToggle).on("click", function () {
      sidebar.toggleClass("collapsed");
    });

    // Handle sidebar link clicks
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

  // Handle submenu click
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
              <Link to="/dashboard/homepage">CodzSword</Link>
            </div>
            <ul className="sidebar-nav">
              {/* <li className="sidebar-header">Admin Elements</li> */}
              <li className="sidebar-item">
                <Link
                  onClick={() => Hellocode("dashboard")}
                  to="/dashboard/homepage"
                  className={`sidebar-link ${
                    activeLink === "/dashboard/homepage" ? "active" : ""
                  }`}
                >
                  Dashboard
                </Link>
              </li>
              {/* Dropdown */}
              <li className="">
                <span
                  data-bs-target="#pages"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  onClick={handleSubmenuClick}
                  style={{
                    display: "block",
                    width: "100%",
                    color: "#fff",
                    marginLeft: "25px",
                  }}
                >
                  {/* <i className="fa-solid fa-file-lines pe-2"></i> */}
                  Url's &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <i className="fa fa-angle-down" aria-hidden="true"></i>
                </span>
                <ul
                  id="pages"
                  className="sidebar-dropdown list-unstyled collapse"
                  data-bs-parent="#sidebar"
                  style={{
                    marginLeft: "5px",
                  }}
                >
                  <li className="sidebar-item">
                    <Link
                      onClick={() => Hellocode("uploadurl")}
                      to="/dashboard/uploadurl"
                      className={`sidebar-link ${
                        activeLink === "/dashboard/uploadurl" ? "active" : ""
                      }`}
                    >
                      Upload Url
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      onClick={() => Hellocode("GetUrls")}
                      to="/dashboard/getUrls"
                      className={`sidebar-link ${
                        activeLink === "/dashboard/getUrls" ? "active" : ""
                      }`}
                    >
                      Get Urls
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Dropdown */}
              <li className="">
                <span
                  data-bs-target="#upload"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  onClick={handleSubmenuClick}
                  style={{
                    display: "block",
                    width: "100%",
                    color: "#fff",
                    marginLeft: "25px",
                  }}
                >
                  {/* <i className="fa-solid fa-file-lines pe-2"></i> */}
                  Upload Files &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <i className="fa fa-angle-down" aria-hidden="true"></i>
                </span>
                <ul
                  id="upload"
                  className="sidebar-dropdown list-unstyled collapse"
                  data-bs-parent="#sidebar"
                  style={{
                    marginLeft: "5px",
                  }}
                >
                  <li className="sidebar-item">
                    <Link
                      onClick={() => Hellocode("uploadurl")}
                      to="/dashboard/uploadurl"
                      className={`sidebar-link ${
                        activeLink === "/dashboard/uploadurl" ? "active" : ""
                      }`}
                    >
                      Upload Files
                    </Link>
                  </li>
                  <li className="sidebar-item">
                    <Link
                      onClick={() => Hellocode("GetUrls")}
                      to="/dashboard/getUrls"
                      className={`sidebar-link ${
                        activeLink === "/dashboard/getUrls" ? "active" : ""
                      }`}
                    >
                      View Files
                    </Link>
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
                  <Link
                    to="#"
                    data-bs-toggle="dropdown"
                    className="nav-icon pe-md-0"
                  >
                    <img
                      src={user}
                      className="avatar img-fluid rounded"
                      alt=""
                    />
                  </Link>
                  <div className="dropdown-menu dropdown-menu-end">
                    <Link to="#" className="dropdown-item">
                      Profile
                    </Link>
                    <Link to="#" className="dropdown-item">
                      Setting
                    </Link>
                    <Link to="/" className="dropdown-item">
                      Logout
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          <main className="content px-3 py-2">
            {/* Breadgrums */}
            <nav
              style={{
                "--bs-breadcrumb-divider":
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E\")",
              }}
            >
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link
                    to="/dashboard/homepage"
                    onClick={() => Hellocode("dashboard")}
                  >
                    Dashboard
                  </Link>
                </li>
                {getname !== "dashboard" && (
                  <li className="breadcrumb-item active" aria-current="page">
                    {getname}
                  </li>
                )}
              </ol>
            </nav>
            <Outlet />
            {/* <Dashboardhome /> */}
          </main>
          {/* <Link to="#" className="theme-toggle">
            <i className="fa-regular fa-moon"></i>
            <i className="fa-regular fa-sun"></i>
          </Link> */}
          <footer className="footer">
            <div className="container-fluid">
              <div className="row text-muted">
                <div className="col-6 text-start">
                  <p className="mb-0">
                    <Link
                      to="/dashboard"
                      className="text-muted"
                      onClick={() => Hellocode("dashboard")}
                    >
                      <strong>CodzSword</strong>
                    </Link>
                  </p>
                </div>
                <div className="col-6 text-end">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <Link to="#" className="text-muted">
                        Contact
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="#" className="text-muted">
                        About Us
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="#" className="text-muted">
                        Terms
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to="#" className="text-muted">
                        Booking
                      </Link>
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
