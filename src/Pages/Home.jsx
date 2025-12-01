import React from "react";

function Home() {
  return (
    <>
      <div>
        <div className="dev">
          <img src="./images/Developer.jpg" alt="Developer.jpg" />
        </div>
        {/* about section */}
        <div className="about max-width">
          <div className="about-content">
            <h1>About Me</h1>
            <p>
              I, m a designer &amp; developer with a passion for web design. I
              enjoy developing simple, clean and slick websites that provide
              real value to the end user.
            </p>
            <div className="info ">
              <div className="info-content d-flex">
                <p className="fs-4" style={{ color: "gray" }}>
                  Name:{" "}
                </p>{" "}
                <p className="text-dark fs-4">&nbsp; Jigar Chauhan</p>
              </div>

              <div className="info-content d-flex">
                <p className="fs-4" style={{ color: "gray" }}>
                  Email:{" "}
                </p>{" "}
                <p className="text-dark fs-4">
                  &nbsp;{" "}
                  <a href="#" className="text-decoration-none text-dark">
                    jigarchauhan9958@gmail.com
                  </a>
                </p>
              </div>

              <div className="info-content d-flex">
                <p className="fs-4" style={{ color: "gray" }}>
                  Phone:{" "}
                </p>{" "}
                <p className="text-dark fs-4">&nbsp; 9825735293</p>
              </div>

              <div className="info-content d-flex">
                <p className="fs-4" style={{ color: "gray" }}>
                  DOB:{" "}
                </p>{" "}
                <p className="text-dark fs-4">&nbsp; 28 April 2005</p>
              </div>

              <div className="info-content d-flex">
                <p className="fs-4" style={{ color: "gray" }}>
                  From:{" "}
                </p>{" "}
                <p className="text-dark fs-4">&nbsp; Gujrat, India</p>
              </div>
            </div>
          </div>
        </div>
        {/* Project section */}
        <div className="banner mt-5 pb-5">
          <div className="p-5">
            <h1 className="text-center">Featured Projects</h1>
          </div>

          {/* Project 1 */}
          <div className="project-content max-width">
            <div className="row d-flex justify-content-evenly">
              <div className="col-lg-6 col-md-12 mt-5">
                <div className="project ">
                  <a
                    href="https://todayprimenews.onrender.com/"
                    target="_blank"
                  >
                    <img
                      src="./images/Project1.png"
                      className="w-100 shadow-lg"
                      alt="Project"
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 my-3">
                <div className="project">
                  <div className="project-detail mt-4">
                    <h3>Today Prime News</h3>
                    <p style={{ color: "gray" }}>
                      Stay informed with real-time breaking news updates powered
                      by fast APIs and a smooth React interface designed for
                      seamless, reliable user experiences.
                    </p>
                    <hr />
                    <div className="d-flex justify-content-between">
                      <p>Year </p>
                      <p>2025</p>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between">
                      <p>Role </p>
                      <p>React-Project</p>
                    </div>
                    <div className="d-flex justify-content-end gap-5">
                      {/* <h6>Year</h6>
                      <h6>2025</h6> */}
                      <a
                        href="https://todayprimenews.onrender.com/"
                        target="_blank"
                        className="text-decoration-none"
                        style={{ color: "#fd6e0a" }}
                      >
                        VIEW PROJECT{" "}
                        <span className="fa fa-location-arrow fs-5"></span>
                      </a>
                      <a
                        href="https://github.com/samirchauhan9825-sys/NewsToday"
                        target="_blank"
                        className="text-decoration-none"
                        style={{ color: "#fd6e0a" }}
                      >
                        SEE ON GITHUB{" "}
                        <span className="fa fa-github fs-5"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-content max-width ">
            <div className="row">
              <div className="p2-content order-2 order-lg-1 col-lg-6 col-md-12 my-3 ">
                <div className="project">
                  <div className="project-detail mt-3">
                    <h3>Daily Exercise Stream</h3>
                    <p style={{ color: "gray" }}>
                      Get real-time exercise routines updated instantly through
                      powerful APIs and displayed on a smooth, responsive React
                      interface designed to support your daily fitness goals
                      effectively.
                    </p>
                    <hr />
                    <div className="d-flex justify-content-between">
                      <p>Year </p>
                      <p>2025</p>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between">
                      <p>Role </p>
                      <p>React-Project</p>
                    </div>
                    <div className="d-flex justify-content-end gap-4">
                      <a
                        href="https://stayfitdaily.onrender.com/"
                        target="_blank"
                        className="text-decoration-none"
                        style={{ color: "#fd6e0a" }}
                      >
                        VIEW PROJECT{" "}
                        <span className="fa fa-location-arrow fs-5"></span>
                      </a>
                      <a
                        href="https://github.com/samirchauhan9825-sys/StayFitDaily"
                        target="_blank"
                        className="text-decoration-none "
                        style={{ color: "#fd6e0a" }}
                      >
                        SEE ON GITHUB{" "}
                        <span className="fa fa-github fs-5"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p2-img order-1 order-lg-2 col-lg-6 col-md-12 mt-5 ">
                <div className="project shadow-lg">
                  <a href="https://stayfitdaily.onrender.com/" target="_blank">
                    <img
                      src="./images/Project2.png"
                      className="w-100"
                      alt="Project"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-content max-width">
            <div className="row d-flex justify-content-evenly">
              <div className="col-lg-6 col-md-12 mt-5">
                <div className="project ">
                  <a href="https://anime-rqv8.onrender.com/" target="_blank">
                    <img
                      src="./images/Project3.png"
                      className="w-100 shadow-lg"
                      alt="Project"
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 my-3">
                <div className="project">
                  <div className="project-detail mt-4">
                    <h3>Sakura Anime Hub</h3>
                    <p style={{ color: "gray" }}>
                      Discover amazing anime instantly with real-time updates
                      powered by advanced APIs and a smooth React interface
                      delivering fast, engaging content always.
                    </p>
                    <hr />
                    <div className="d-flex justify-content-between">
                      <p>Year </p>
                      <p>2025</p>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between">
                      <p>Role </p>
                      <p>React-Project</p>
                    </div>
                    <div className="d-flex justify-content-end gap-4">
                      {/* <h6>Year</h6>
                      <h6>2025</h6> */}
                      <a
                        href="https://anime-rqv8.onrender.com/"
                        target="_blank"
                        className="text-decoration-none"
                        style={{ color: "#fd6e0a" }}
                      >
                        VIEW PROJECT{" "}
                        <span className="fa fa-location-arrow fs-5"></span>
                      </a>
                      <a
                        href="https://github.com/samirchauhan9825-sys/Anime"
                        target="_blank"
                        className="text-decoration-none "
                        style={{ color: "#fd6e0a" }}
                      >
                        SEE ON GITHUB{" "}
                        <span className="fa fa-github fs-5"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="project-content max-width ">
            <div className="row">
              <div className="order-2 order-lg-1 col-lg-6 col-md-12 my-3">
                <div className="project">
                  <div className="project-detail mt-4">
                    <h3>The Daily Dish</h3>
                    <p style={{ color: "gray" }}>
                      Discover delicious recipes instantly with real-time API
                      updates displayed through a smooth React interface
                      designed to deliver fresh cooking ideas every single day.
                    </p>
                    <hr />
                    <div className="d-flex justify-content-between">
                      <p>Year </p>
                      <p>2025</p>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between">
                      <p>Role </p>
                      <p>React-Project</p>
                    </div>
                    <div className="d-flex justify-content-end gap-4">
                      {/* <h6>Year</h6>
                      <h6>2025</h6> */}
                      <a
                        href="https://recipe-hdjn.onrender.com/"
                        target="_blank"
                        className="text-decoration-none"
                        style={{ color: "#fd6e0a" }}
                      >
                        VIEW PROJECT{" "}
                        <span className="fa fa-location-arrow fs-5"></span>
                      </a>
                      <a
                        href="https://github.com/samirchauhan9825-sys/Recipe"
                        target="_blank"
                        className="text-decoration-none "
                        style={{ color: "#fd6e0a" }}
                      >
                        SEE ON GITHUB{" "}
                        <span className="fa fa-github fs-5"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 order-lg-2 col-lg-6 col-md-12 mt-5">
                <div className="project shadow-lg">
                  <a href="https://recipe-hdjn.onrender.com/" target="_blank">
                    <img
                      src="./images/Project4.png"
                      className="w-100"
                      alt="Project"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dev">
          <img src="./images/Developer.jpg" alt="Developer.jpg" />
        </div>

        <div className="work max-width">
          <h1>FULL STACK SKILL</h1>
          <div className="blog d-flex">
            <div className="blog-sec">
              <span
                className="fa fa-code fs-2 mt-3"
                style={{ color: "gray" }}
              ></span>
              <br />
              <h3 className="mt-3">Frontend</h3>
              <p>
                Responsive UI using HTML, CSS, JavaScript, Bootstrap & React.
              </p>
            </div>
            <div className="blog-sec">
              <span
                className="fa fa-server fs-2 mt-3"
                style={{ color: "gray" }}
              ></span>
              <br />
              <h3 className="mt-3">Backend</h3>
              <p>Secure backend using Node.js & REST APIs.</p>
            </div>
            <div className="blog-sec">
              <span
                className="fa fa-database fs-2 mt-3"
                style={{ color: "gray" }}
              ></span>
              <br />
              <h3 className="mt-3">Database</h3>
              <p> MongoDB and optimized database architecture.</p>
            </div>
          </div>
        </div>
        <div className="work max-width">
          <div className="summery max-width">
            <h1>A summary of My Resume</h1>
            <h2 className="mt-3">My Education</h2>
            <div className="edu d-flex">
              <div className="right">
                <h3>Bachlor of Copmuter Application</h3>
                <h4>PICA / 2022-2025</h4>
              </div>

              <div className="left">
                <h3>Master of Copmuter Application</h3>
                <h4>BAOU / 2025-2027</h4>
              </div>
            </div>
          </div>
          <button className="btn1 p-3 fs-5 mt-4">
            <span className="fa fa-download" /> Download CV
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
