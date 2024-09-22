
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>

          <header>
        <nav
          className="navbar navbar-expand-lg navbar-light"
          dir="rtl"
          style={{
            backgroundImage:
              "linear-gradient(to right,rgba(128, 128, 128, 0.411),rgb(255, 255, 255))",
          }}
        >
          <div className="container-fluid">
            <img
              src="img/finallogo.png"
              alt="منصة الارشاد الاكاديمى"
              width={80}
              height={50}
              className="d-inline-block align-text-top"
            />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav  mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link active fw-bold text-dark"
                    aria-current="page"
                    href="/home"
                  >
                    الصفحة الرئيسية
                  </a>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link  fw-bold text-dark"
                    aria-current="page"
                    to="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    تسجيل دخول
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink
                    className="nav-link dropdown-toggle fw-bold text-dark"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    شرح استخدام الموقع
                  </NavLink>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <NavLink className="dropdown-item" to="#">
                        شرح فيديو
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="#">
                        شرح صور
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div>
              <a
                href="#"
                className="m-2"
                data-mdb-tooltip-init=""
                title="صفحة الخدمات الالكترونية"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={25}
                  height={25}
                  fill="currentColor"
                  className="bi bi-facebook text-light "
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                </svg>
              </a>
              <a
                href="#"
                className="m-2"
                data-mdb-tooltip-init=""
                title="تسجيل دخول"
                aria-current="page"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={30}
                  height={30}
                  fill="currentColor"
                  className="bi bi-box-arrow-in-right text-light"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </nav>
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <img
                  src="img/finallogo.png"
                  alt="منصة الارشاد الاكاديمى"
                  width={80}
                  height={50}
                  className="d-inline-block align-text-top"
                />
                <h5 className="modal-title text-primary" id="exampleModalLabel">
                  تسجيل دخول
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body" dir="rtl">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    defaultValue="option1"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio3">
                    طالب
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    defaultValue="option2"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio2">
                    مرشد اكاديمى
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio3"
                    defaultValue="option3"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio1">
                    وحدة التسجيل
                  </label>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="staticEmail"
                    className="col-sm-2 col-form-label text-primary"
                  >
                    الرقم القومى
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control-plaintext border"
                      id="staticEmail"
                    />
                  </div>
                </div>
                <div className="mb-3 ">
                  <label
                    htmlFor="inputPassword"
                    className="col-sm-2 col-form-label text-primary"
                  >
                    كلمة السر
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword"
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  غلق
                </button>
                <a
                  type="button"
                  className="btn btn-primary"
                  style={{ textDecoration: "none" }}
                  href="/studentportal"
                >
                  تسجيل دخول
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="container  mt-5">
        <div
          style={{
            borderRadius: 20,
            backgroundColor: "rgba(245, 245, 245, 0.829)",
            borderColor: "black",
          }}
        >
          <div
            className="card mb-3 shadow p-3  rounded"
            style={{ maxWidth: "100%" }}
          >
            <div className="row g-0">
              <div className="col-md-4 ">
                <img
                  src="img/finallogo.png"
                  className="img-fluid rounded-start"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <div className="col-md-8 ">
                <div className="card-body ">
                  <h1 className="card-title text-center">
                    منصة الارشاد الاكاديمى
                  </h1>
                  <hr />
                  <p className="card-text " dir="rtl">
                    <strong className="text-right">
                      يهدف نظام التسجيل الالكتروني الى تسهيل عملية تسجيل
                      المقررات الدراسية للطالب/الطالبة وامكانية تعديلها في أى
                      وقت خلال الفترة المسموح بها للتسجيل
                    </strong>
                  </p>
                  <p className="card-text  text-primary" dir="rtl">
                    <strong>تم فتح باب التسجيل في: </strong>
                  </p>
                  <hr />
                  <div
                    className="alert alert-danger d-flex align-items-center"
                    role="alert"
                    dir="rtl"
                  >
                    <svg
                      className="bi flex-shrink-0 me-2"
                      width={24}
                      height={24}
                      role="img"
                      aria-label="Danger:"
                    >
                      <use xlinkHref="#exclamation-triangle-fill" />
                    </svg>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ display: "none" }}
                      >
                        <symbol
                          id="exclamation-triangle-fill"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </symbol>
                      </svg>
                      لا يوجد فصول دراسية مفتوحة حاليا للتسجيل
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="text-center text-lg-start  ">
        {/* Copyright */}
        <div className="text-center  text-light p-3 fw-bold fs-5">
          2024 © جميع الحقوق محفوظة لكلية الحاسبات والذكاء الاصطناعى بجامعة
          الفيوم
        </div>
        {/* Copyright */}
      </footer>
    </div>
  );
}

export default Home;
