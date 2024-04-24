import React from "react";
// import { Link } from "react-router-dom";

export const Dashboardhome = () => {
  return (
    <div>
      <div id="new">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card">
                <div className="card-content">
                  <div className="card-body">
                    <div className="media d-flex">
                      <div className="media-body text-left">
                        <h3 className="warning">156</h3>
                        <span>New Comments</span>
                      </div>
                      <div className="align-self-center">
                        <i className="icon-bubbles warning font-large-2 float-right"></i>
                      </div>
                    </div>
                    <div className="progress mt-1 mb-0">
                      <div
                        className="progress-bar bg-warning"
                        role="progressbar"
                        aria-valuenow="35"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
