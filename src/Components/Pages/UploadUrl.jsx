import React from "react";
import { Link } from "react-router-dom";

export const UploadUrl = () => {
  // const [showPassword, setShowPassword] = useState(false);

  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // };
  return (
    <div>
      <div id="">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* <h>Upload Title & Url</h> */}
              {/* <br /> */}
              <div className="col-md-5">
                <form action="">
                  <div className="form-group">
                    <span className="has-float-label">
                      <input
                        className="form-control"
                        id="title"
                        type="text"
                        placeholder=" "
                      />
                      <label htmlFor="first">Title</label>
                    </span>
                  </div>
                  <div className="form-group">
                    <span className="has-float-label">
                      <input
                        className="form-control"
                        id="URL"
                        type="text"
                        placeholder=" "
                      />
                      <label htmlFor="url">URL</label>
                    </span>
                  </div>
                  {/* Forgot Password  */}

                  <Link className="cmm_btn" to="">
                    Upload
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
