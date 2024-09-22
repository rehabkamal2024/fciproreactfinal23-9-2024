
const StudentportalEmail = () => {
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
        <a href="/home">خروج</a>
      </li>
    </ul>
  </div>
</>

      
    
  );
}

export default StudentportalEmail;
