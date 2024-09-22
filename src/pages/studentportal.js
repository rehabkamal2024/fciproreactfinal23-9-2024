
const Studentportal = () => {
  return (

    <>
       
       <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />{" "}
  <title>Fayoum Universty</title>
  <link rel="stylesheet" type="text/css" href="style.css" />
  <script src="js/jquery.min.js"></script>


  

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
    <i className="fa fa-chevron-left menu-icon" />
    <ul className="sidenav">
      <li className="active">
        <i className="fa fa-home" url="studentportal.html">
          <a href="studentportal.html" />
        </i>
        <a className={22} href="studentportal.html">
          {" "}
          بيانات الشخصية
          <span className="span1">
            <i className="fa fa-angle-left" />
          </span>
        </a>
      </li>
      <li>
        <a className={22} href="studentportal.html">
          <i className="fa fa-clone" />
        </a>
        <a href="/studentportalEmail"> ايميل الجامعة</a>
      </li>
      {/* <ul class="dropdown"> onclick="document.getElementById('tb').style.display = 'initial'"
				<li><a href="#"><span class="dot"></span> Analytics</a></li>
				<li><a href="#"><span class="dot"></span> CRM</a></li>
				<li><a href="#"><span class="dot"></span> eCommerce</a></li>
			</ul> */}
      <li>
        <i className="fa fa-shield">
          {" "}
          <a href="studentportalpages/studentportalexpensess.html" />
        </i>
        <a className={22} href="studentportalpages/studentportalexpensess.html">
          {" "}
          المصروفات الدراسية
        </a>
      </li>
      <li>
        <i className="fa fa-calendar" />
        <a href="studentportalpages/studentportalsubschadule.html">
          {" "}
          الجدول الدراسي
        </a>
      </li>
      <li>
        <i className="fa fa-file-text" />
        <a href="studentportalpages/studentportalsubjreg.html">
          {" "}
          تسجيل المقررات الدراسية
        </a>
      </li>
      <li>
        <i className="fa fa-square" />
        <a href="studentportalpages/studentportalreports.html">
          استمارة التسجيل
        </a>
      </li>
      <li>
        <i className="fa fa-square-o" />
        <a href="studentportalpages/studentportalquestion.html">استبيان</a>
      </li>
      <li>
        <i className="fa fa-calendar" />
        <a href="studentportalpages/studentportalexamschadule.html">
          {" "}
          جدول الامتحانات
        </a>
      </li>
      <li>
        <i className="fa fa-square" />
        <a href="studentportalpages/studentportaleltmas.html">
          {" "}
          طلب اعاده رصد درجات(طلب التماس)
        </a>
      </li>
      <li>
        <i className="fa fa-square" />
        <a href="studentportalpages/studentportalCoursesGrades.html">
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
        <a href="index.html">خروج</a>
      </li>
    </ul>
  </div>
  {/* <div class="main" dir="rtl">
	<div class="main-top">
		<input type="text" name="" class="input" placeholder="Search">
		<div class="top-right">
			
			<i class="fa fa-bell-o topicon bell"></i>
			<div class="notification-div">
			<p>Success!Your registration is now complete!</p>
			<p>Here's some information you may find useful!</p>			
		</div>


			<a href="#" class="user1"><img src="image/user.png" class="user">
				<div class="profile-div">
					<p><i class="fa fa-user"></i> &nbsp;&nbsp;Profile</p>
					<p><i class="fa fa-cog"></i> &nbsp;&nbsp;Settings</p>
					<p><i class="fa fa-power-off"></i> &nbsp;&nbsp;Log Out</p>
				</div>
			</a>
		</div>
		<div class="clearfix"></div>
	</div>


	<div class="cong-box">
		<div class="content">
		<p class="head">Congratulations Manoj! 🎉</p><br>
		<p>You have done 82% more sales today. Check your new badge in your profile.</p>
		<button class="btn">View Badges</button>
	</div>
		<img src="image/1.png" >
	</div>

	<div class="com-box">
		<div class="com-inner">
		<i class="fa fa-cubes"></i>
		<p>Orders</p>
		<p>$1,356</p>
		<p><i class="fa fa-long-arrow-down downar"></i> -14.25%</p>
		</div>
	</div>
	<div class="com-box">
		<div class="com-inner">
		<i class="fa fa-desktop"></i>
		<p>Sales</p>
		<p>$4,356</p>
		<p style="color: green;"><i class="fa fa-long-arrow-up upnar"></i> +28.25%</p>
		</div>
	</div>


	<div class="table-box">
		<table>
  
  <thead>
    <tr>
<th scope="col" width="50px">ID</th>
<th scope="col" width="100px">Name</th>
<th scope="col">Date</th>
<th scope="col">Price</th>
<th scope="col">Status</th>
<th scope="col" width="70px">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
<td data-label="Account">#3412</td>
<td data-label="Due Date"><img src="image/user.png" class="tab-img">Manoj</td>
<td data-label="Period">03/01/2022</td>
<td data-label="Due Date">$64.00</td>
<td data-label="Amount" style="position: relative;"><span class="pe"></span>Pending</td>
<td data-label="Period"><i class="fa fa-gear ticon"></i>
&nbsp; 
	<i class="fa fa-angle-down ticon"></i></td>
    </tr>

    <tr class="active-tr">
<td data-label="Account">#3412</td>
<td data-label="Due Date"><img src="image/user.png" class="tab-img">Manoj</td>
<td data-label="Period">03/01/2022</td>
<td data-label="Due Date">$64.00</td>
<td data-label="Amount" style="position: relative;"><span class="de"></span>Dispatch</td>
<td data-label="Period"><i class="fa fa-gear  ticon"></i>
&nbsp; 
	<i class="fa fa-angle-down ticon"></i></td>
    </tr>
   <tr>
<td data-label="Account">#3412</td>
<td data-label="Due Date"><img src="image/user.png" class="tab-img">Manoj</td>
<td data-label="Period">03/01/2022</td>
<td data-label="Due Date">$64.00</td>
<td data-label="Amount" style="position: relative;"><span class="pe"></span>Pending</td>
<td data-label="Period"><i class="fa fa-gear ticon"></i>
&nbsp; 
	<i class="fa fa-angle-down ticon"></i></td>
    </tr>

    <tr>
<td data-label="Account">#3412</td>
<td data-label="Due Date"><img src="image/user.png" class="tab-img">Manoj</td>
<td data-label="Period">03/01/2022</td>
<td data-label="Due Date">$64.00</td>
<td data-label="Amount" style="position: relative;"><span class="pe"></span>Pending</td>
<td data-label="Period"><i class="fa fa-gear ticon"></i>
&nbsp; 
	<i class="fa fa-angle-down ticon"></i></td>
    </tr>
    
    <tr>
<td data-label="Account">#3412</td>
<td data-label="Due Date"><img src="image/user.png" class="tab-img">Manoj</td>
<td data-label="Period">03/01/2022</td>
<td data-label="Due Date">$64.00</td>
<td data-label="Amount" style="position: relative;"><span class="de"></span>Dispatch</td>
<td data-label="Period"><i class="fa fa-gear  ticon"></i>
&nbsp; 
	<i class="fa fa-angle-down ticon"></i></td>
    </tr>

    <tr>
<td data-label="Account">#3412</td>
<td data-label="Due Date"><img src="image/user.png" class="tab-img">Manoj</td>
<td data-label="Period">03/01/2022</td>
<td data-label="Due Date">$64.00</td>
<td data-label="Amount" style="position: relative;"><span class="pe"></span>Pending</td>
<td data-label="Period"><i class="fa fa-gear ticon"></i>
&nbsp; 
	<i class="fa fa-angle-down ticon"></i></td>
    </tr>
    
  </tbody>
</table>
	</div>


	<div class="t-sale">
		
			<div class="content-box-1">
			<br>	
			<p class="head-1">Total Sale </p>

			<div class="circle-wrap">
    <div class="circle">
<div class="mask full">
  <div class="fill"></div>
</div>
<div class="mask half">
  <div class="fill"></div>
</div>
<div class="inside-circle"> 70% </div>
    </div>
  </div>
		</div>
		<div style="text-align: center;"><button class="btn">Veiw All</button></div>
	</div>
	</div> */}
  {/* </div> */}
  
</>
  );
}


export default Studentportal;

