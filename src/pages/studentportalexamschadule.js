

const Studentportalexamschadule = () => {
  return (
    
      <>
  <main />
  <title>Fayoum Universty</title>
  <link rel="stylesheet" type="text/css" href="style.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <div className="sidebar" dir="rtl">
    <img
      src="img/finallogo.png"
      alt="منصة الارشاد الاكاديمى"
      width={50}
      height={40}
      className="d-inline-block align-text-top"
    />{" "}
    <span className="logo">
      جامعة الفيوم <br />
      <span>الحاسبات والذكاء الاصطناعي </span>
    </span>
    <hr />
    <div className="showstudnameanddep">
      <h4 className="studname">
        {" "}
        اهلا بك/<span> name</span>{" "}
      </h4>
      <h4 className="department">
        برنامج /<span> dep</span>
      </h4>
    </div>
    <hr />
    {/* <i class="fa fa-chevron-left menu-icon"></i> */}
    <ul className="sidenav">
      <li>
        <i className="fa fa-home" />
        <a href="../studentportal.html" style={{ textDecoration: "none" }}>
          {" "}
          بيانات الشخصية
        </a>
      </li>
      <a href="../studentportal.html" style={{ textDecoration: "none" }}></a>
      <li>
        <a href="../studentportal.html" style={{ textDecoration: "none" }}>
          <i className="fa fa-clone" />
        </a>
        <a href="studentportalEmail.html"> ايميل الجامعة</a>
      </li>
      {/* <ul class="dropdown"> onclick="document.getElementById('tb').style.display = 'initial'"
				<li><a href="#"><span class="dot"></span> Analytics</a></li>
				<li><a href="#"><span class="dot"></span> CRM</a></li>
				<li><a href="#"><span class="dot"></span> eCommerce</a></li>
			</ul> */}
      <li className="active">
        <i className="fa fa-home" />
        <a href="studentportalexpensess.html">
          المصروفات الدراسية
          <span className="span1">
            <i className="fa fa-angle-left" />
          </span>
        </a>
      </li>
      <li>
        <a href="studentportalexpensess.html">
          <i className="fa fa-calendar" />
        </a>
        <a href="studentportalsubschadule.html"> الجدول الدراسي</a>
      </li>
      <li>
        <i className="fa fa-file-text" />
        <a href="studentportalsubjreg.html"> تسجيل المقررات الدراسية</a>
      </li>
      <li>
        <i className="fa fa-square" />
        <a href="studentportalreports.html">استمارة التسجيل</a>
      </li>
      <li>
        <i className="fa fa-square-o" />
        <a href="studentportalquestion.html">استبيان</a>
      </li>
      <li>
        <i className="fa fa-calendar" />
        <a href="studentportalexamschadule.html"> جدول الامتحانات</a>
      </li>
      <li>
        <i className="fa fa-square" />
        <a href="studentportaleltmas.html"> طلب اعاده رصد درجات(طلب التماس)</a>
      </li>
      <li>
        <i className="fa fa-square" />
        <a href="studentportalCoursesGrades.html">
          تقديرات المقررات (بيان حاله دراسي)
        </a>
      </li>
      <li>
        <i className="fa fa-square" />
        <a href="#">اعلان النتيجه</a>
      </li>
      <li>
        <i className="fa fa-square" />
        <a href="#">الانذار الاكاديمي</a>
      </li>
      <li>
        <i className="fa fa-square" />
        <a href="#"> طلب طباعة وثيقة</a>
      </li>
      {/* <p class="app">App Ans Pages</p> */}
      <li>
        <i className="fa fa-user" />
        <a href="#"> تغيير كلمة المرور</a>
      </li>
      <li>
        <i className="fa fa-file" />
        <a href="../index.html">خروج</a>
      </li>
    </ul>
  </div>
  <div className="main" dir="rtl">
    <div className="main-top">
      <input type="text" name="" className="input" placeholder="Search" />
      <div className="top-right">
        <i className="fa fa-bell-o topicon bell" />
        <div className="notification-div">
          <p>Success!Your registration is now complete!</p>
          <p>Here's some information you may find useful!</p>
        </div>
        <a href="#" className="user1">
          <img src="image/user.png" className="user" />
          <div className="profile-div">
            <p>
              <i className="fa fa-user" /> &nbsp;&nbsp;Profile
            </p>
            <p>
              <i className="fa fa-cog" /> &nbsp;&nbsp;Settings
            </p>
            <p>
              <i className="fa fa-power-off" /> &nbsp;&nbsp;Log Out
            </p>
          </div>
        </a>
      </div>
      <div className="clearfix" />
    </div>
    <div className="cong-box">
      <div className="content">
        <p className="head">Congratulations Manoj! 🎉</p>
        <br />
        <p>
          You have done 82% more sales today. Check your new badge in your
          profile.
        </p>
        <button className="btn">View Badges</button>
      </div>
      <img src="image/1.png" />
    </div>
    <div className="com-box">
      <div className="com-inner">
        <i className="fa fa-cubes" />
        <p>Orders</p>
        <p>$1,356</p>
        <p>
          <i className="fa fa-long-arrow-down downar" /> -14.25%
        </p>
      </div>
    </div>
    <div className="com-box">
      <div className="com-inner">
        <i className="fa fa-desktop" />
        <p>Sales</p>
        <p>$4,356</p>
        <p style={{ color: "green" }}>
          <i className="fa fa-long-arrow-up upnar" /> +28.25%
        </p>
      </div>
    </div>
    <div className="table-box">
      <table>
        <thead>
          <tr>
            <th scope="col" width="50px">
              ID
            </th>
            <th scope="col" width="100px">
              Name
            </th>
            <th scope="col">Date</th>
            <th scope="col">Price</th>
            <th scope="col">Status</th>
            <th scope="col" width="70px">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Account">#3412</td>
            <td data-label="Due Date">
              <img src="image/user.png" className="tab-img" />
              Manoj
            </td>
            <td data-label="Period">03/01/2022</td>
            <td data-label="Due Date">$64.00</td>
            <td data-label="Amount" style={{ position: "relative" }}>
              <span className="pe" />
              Pending
            </td>
            <td data-label="Period">
              <i className="fa fa-gear ticon" />
              &nbsp;
              <i className="fa fa-angle-down ticon" />
            </td>
          </tr>
          <tr className="active-tr">
            <td data-label="Account">#3412</td>
            <td data-label="Due Date">
              <img src="image/user.png" className="tab-img" />
              Manoj
            </td>
            <td data-label="Period">03/01/2022</td>
            <td data-label="Due Date">$64.00</td>
            <td data-label="Amount" style={{ position: "relative" }}>
              <span className="de" />
              Dispatch
            </td>
            <td data-label="Period">
              <i className="fa fa-gear  ticon" />
              &nbsp;
              <i className="fa fa-angle-down ticon" />
            </td>
          </tr>
          <tr>
            <td data-label="Account">#3412</td>
            <td data-label="Due Date">
              <img src="image/user.png" className="tab-img" />
              Manoj
            </td>
            <td data-label="Period">03/01/2022</td>
            <td data-label="Due Date">$64.00</td>
            <td data-label="Amount" style={{ position: "relative" }}>
              <span className="pe" />
              Pending
            </td>
            <td data-label="Period">
              <i className="fa fa-gear ticon" />
              &nbsp;
              <i className="fa fa-angle-down ticon" />
            </td>
          </tr>
          <tr>
            <td data-label="Account">#3412</td>
            <td data-label="Due Date">
              <img src="image/user.png" className="tab-img" />
              Manoj
            </td>
            <td data-label="Period">03/01/2022</td>
            <td data-label="Due Date">$64.00</td>
            <td data-label="Amount" style={{ position: "relative" }}>
              <span className="pe" />
              Pending
            </td>
            <td data-label="Period">
              <i className="fa fa-gear ticon" />
              &nbsp;
              <i className="fa fa-angle-down ticon" />
            </td>
          </tr>
          <tr>
            <td data-label="Account">#3412</td>
            <td data-label="Due Date">
              <img src="image/user.png" className="tab-img" />
              Manoj
            </td>
            <td data-label="Period">03/01/2022</td>
            <td data-label="Due Date">$64.00</td>
            <td data-label="Amount" style={{ position: "relative" }}>
              <span className="de" />
              Dispatch
            </td>
            <td data-label="Period">
              <i className="fa fa-gear  ticon" />
              &nbsp;
              <i className="fa fa-angle-down ticon" />
            </td>
          </tr>
          <tr>
            <td data-label="Account">#3412</td>
            <td data-label="Due Date">
              <img src="image/user.png" className="tab-img" />
              Manoj
            </td>
            <td data-label="Period">03/01/2022</td>
            <td data-label="Due Date">$64.00</td>
            <td data-label="Amount" style={{ position: "relative" }}>
              <span className="pe" />
              Pending
            </td>
            <td data-label="Period">
              <i className="fa fa-gear ticon" />
              &nbsp;
              <i className="fa fa-angle-down ticon" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="t-sale">
      <div className="content-box-1">
        <br />
        <p className="head-1">Total Sale </p>
        <div className="circle-wrap">
          <div className="circle">
            <div className="mask full">
              <div className="fill" />
            </div>
            <div className="mask half">
              <div className="fill" />
            </div>
            <div className="inside-circle"> 70% </div>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <button className="btn">Veiw All</button>
      </div>
    </div>
  </div>
</>

    
  );
}

const styles = StyleSheet.create({})

export default Studentportalexamschadule;
