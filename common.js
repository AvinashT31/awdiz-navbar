function handleClick(event) {
  event.preventDefault();

  var hoverDiv = document.getElementById('navbar');
  var hoverDisplayDiv = document.getElementById('hover-content');
  var showRightItems = document.querySelectorAll("[id^='show-right-itm']");
  var otherMenu = document.getElementsByClassName("navtwo-menu");

  // Using mouseenter and mouseleave
  for (var i = 0; i < otherMenu.length; i++) {
    otherMenu[i].addEventListener('mouseenter', function () {
      hoverDisplayDiv.classList.remove('flex-display');
    });
  }

  hoverDiv.addEventListener('mouseenter', function () {
    hoverDisplayDiv.classList.add('flex-display');
    showRightItems.forEach(item => item.style.display = "none");
    showRightItems[0].style.display = "block";
  });

  hoverDiv.addEventListener('mouseleave', function (event) {
    if (!hoverDiv.contains(event.relatedTarget)) {
      hoverDisplayDiv.classList.remove('flex-display');
    }
  });

  hoverDisplayDiv.addEventListener('mouseenter', function () {
    hoverDisplayDiv.classList.add('flex-display');
  });

  hoverDisplayDiv.addEventListener('mouseleave', function () {
    hoverDisplayDiv.classList.remove('flex-display');
  });
}


// function handleClick(event) {
//   event.preventDefault();

//   var hoverDiv = document.getElementById('navbar');
//   var hoverDisplayDiv = document.getElementById('hover-content');
//   var showRightItems = document.querySelectorAll("[id^='show-right-itm']");
//   var otherMenu = document.getElementsByClassName("navtwo-menu");
//   var hideTimeout;

//   hoverDiv.addEventListener('click', function () {
//     hoverDisplayDiv.classList.add('flex-display');
//     showRightItems.forEach(item => item.style.display = "none");
//     showRightItems[0].style.display = "block";
//   });

//   hoverDisplayDiv.addEventListener('mouseleave', function () {
//     hideTimeout = setTimeout(function () {
//       hoverDisplayDiv.classList.remove('flex-display');
//     }, 5000);
//   });

//   hoverDisplayDiv.addEventListener('mouseenter', function () {
//     clearTimeout(hideTimeout);
//   });

//   document.addEventListener('click', function (event) {
//     if (!hoverDiv.contains(event.target) && !hoverDisplayDiv.contains(event.target)) {
//       hoverDisplayDiv.classList.remove('flex-display');
//       clearTimeout(hideTimeout);
//     }
//   });

//   for (var i = 0; i < otherMenu.length; i++) {
//     otherMenu[i].addEventListener('mouseenter', function () {
//       hoverDisplayDiv.classList.remove('flex-display');
//     });
//   }
// }

// document.addEventListener('DOMContentLoaded', handleClick);


function displaycontent(event) {
  document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseover', function (event) {
      document.querySelectorAll('.menu-item').forEach(menuItem => {
        menuItem.style.backgroundColor = 'initial';
        if (menuItem.querySelector('i')) {
          menuItem.querySelector('i').style.color = '#edf8fa';
        }
      });
      document.querySelectorAll('.content-div').forEach(content => {
        content.style.display = 'none';
      });
      const targetContentId = item.getAttribute('data-target');
      const contentToShow = document.getElementById(targetContentId);
      if (contentToShow) {
        contentToShow.style.display = 'block';
        item.style.backgroundColor = '#ffffff';
        if (item.querySelector('i')) {
          item.querySelector('i').style.color = '#272566';
        }
      }
    });
  });

}

// GlOBAL-SECTIONS

//1.global-header

document.addEventListener("DOMContentLoaded", function () {
  var globalNav = document.getElementById("global-nav");
  globalNav.innerHTML = `  
  <div class="topbar-section">
        <div class="container">
            <div class="topbar-inner">
                <div class="top-bar-left pull-left">
                    <ul>
                        <li><i class="fa fa-phone"></i> &nbsp; Phone: 7678000695 | &nbsp; 8657202255</li>
                        <li><i class="fa fa-envelope"></i> &nbsp; Email: <a
                                href="mailto:contact@awdiz.in">contact@awdiz.in</a></li>
                    </ul>
                </div>
                <div id="top-right" class="top-bar-right pull-right">
                    <ul>
                        <li><a href="https://www.facebook.com/awdiz" target="_blank"><i
                                    class="fa-brands fa-facebook"></i></a></li>
                        <li><a href="https://www.youtube.com/channel/UCib2IAJ7I-42CUKzDoXC6ag" target="_blank"><i
                                    class="fa-brands fa-youtube"></i></a></li>
                        <li><a href="https://www.instagram.com/awesome_studies_awdiz" target="_blank"><i
                                    class="fa-brands fa-instagram"></i></a></li>
                        <li style="padding: 0px 14px 0px;">Mumbai Pune Bangalore</li>
                        <li style="padding-right: 0"><button class="glow-on-hover" type="button"
                                style="width:125px;height:auto;margin: 0;"><a href="https://www.awdiz.in/contact">Enroll
                                    Now</a></button></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="navbar">
        <div class="container">
            <div onmouseover="handleClick(event)" class="navmenu">
                <div class="navone">
                    <div class="navlogo navtwo-menu">
                        <img src="img/awdiz.png" class="img-fluid" alt="">
                    </div>
                </div>
                <div class="navdropdown">
                    <div class="navcourses" id="navbar">
                        <p style="padding: 24px 35px;">All Courses</p>
                    </div>
                    <div onmouseover="displaycontent(event)" class="show-item" id="hover-content">
                        <div class="show-item-left">
                            <h3>Course Categories</h3>
                            <ul>
                                <li class="menu-item" style="background-color: white;" data-target="show-right-itm-one"
                                    id="opensoftwarepage">Software Development <i id="icon"
                                        style="padding-left: 17px; color: #272566;" class="fa-solid fa-angle-right"></i>
                                </li>
                                <li class="menu-item" id="openinfrapage" data-target="show-right-itm-two">Networking
                                    infrastructure <i id="icon-one" style="color: #edf8fa;"
                                        class="fa-solid fa-angle-right arrow"></i></li>
                                <li class="menu-item" id="opendmpage" data-target="show-right-itm-three">Digital
                                    Marketing <i id="icon-two" style="padding-left: 57px; color: #edf8fa;"
                                        class="fa-solid fa-angle-right"></i>
                                </li>
                                <li class="menu-item" id="opendspage" data-target="show-right-itm-four">Data science <i
                                        id="icon-three" style="padding-left: 83px; color: #edf8fa;"
                                        class="fa-solid fa-angle-right"></i>
                                </li>
                                <li class="menu-item" id="openmlpage" data-target="show-right-itm-five">Machine Learning
                                    <i id="icon-four" style="padding-left: 47px; color: #edf8fa;"
                                        class="fa-solid fa-angle-right"></i>
                                </li>
                                <li class="menu-item" id="opencspage" data-target="show-right-itm-six">Cyber security <i
                                        id="icon-five" style="padding-left: 71px; color: #edf8fa;"
                                        class="fa-solid fa-angle-right"></i>
                                </li>
                            </ul>
                        </div>
                        <div class="show-content">
                            <div id="show-right-itm-one" class="content-div">
                                <div class="show-item-right">
                                    <div class="show-item-content">
                                        <div class="show-item-one">
                                            <h3>Individual course</h3>
                                            <ul>
                                                <a href="">Angular 8 - 12 Training</a>
                                                <a href="">Node.js Training</a>
                                                <a href="">React.js Training</a>
                                                <a href="">JavaScript + TypeScript Training</a>
                                                <a href="">FullStack Web Developer Training</a>
                                                <a href="">FullStack Java Developer Training</a>
                                                <a href="">UI UX Development</a>
                                                <a href="">MVC with Dot Net Training</a>
                                            </ul>
                                        </div>
                                        <div class="show-item-two">
                                            <h3>Job guarantee program</h3>
                                            <div class="show-item-two-container">
                                            <a href="">
                                            <div class="show-item-two-container-box">
                                            <img src="/img/job-guarentee.webp" alt="" loading="lazy">
                                            </div>

                                            <p>MERN Master</p>
                                        </a>
                                            </div>
                                            <div class="show-item-two-container">
                                            <a href="">   <div class="show-item-two-container-box">
                                            <img src="/img/job-guarentee.webp" alt="" loading="lazy">
                                                </div>
                                              
                                                    <p>MEAN Master</p>
                                                </a>
                                            </div>
                                            <div class="show-item-two-container">
                                            <a href="">    <div class="show-item-two-container-box">
                                            <img src="/img/job-guarentee.webp" alt="" loading="lazy">
                                                </div>
                                              
                                                    <p>Java Full Stack</p>
                                                </a>
                                            </div>
                                            <div class="show-item-two-container">
                                            <a href="">      <div class="show-item-two-container-box">
                                            <img src="/img/job-guarentee.webp" alt="" loading="lazy">
                                                </div>
                                                    <p>Dot Net Full Stack</p>
                                                </a>
                                            </div>
                                            <div class="show-item-two-container">
                                            <a href="">      <div class="show-item-two-container-box">
                                            <img src="/img/job-guarentee.webp" alt="" loading="lazy">
                                                </div>
                                            
                                                    <p>Blockchain Fullstack</p>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="show-item-three">
                                            <h3>Master's Program</h3>
                                          
                                                <div class="show-item-container">
                                                   <a href="">
                                                    <div class="show-item-container-box">
                                                    <img src="/img/masters weppp.webp" alt="" loading="lazy">
                                                    </div>
                                                    <div class="show-item-container-box-one">
                                                        <p>MERN Stack</p>
                                                        <p class="item">Duration - 6 months</p>
                                                    </div>
                                                   </a> 
                                                </div>
                                            
                                            <div class="show-item-container">
                                               <a href="">
                                                <div class="show-item-container-box">
                                                <img src="/img/masters weppp.webp" alt="" loading="lazy">
                                                </div>
                                                <div class="show-item-container-box-one">
                                                    <p>MEAN Stack</p>
                                                    <p class="item">Duration - 6 months</p>
                                                </div>
                                               </a> 
                                            </div>
                                        </div>
                                    </div>
                                    <div class="show-item-right-button">
                                        <button>EXPLORE THE CATEGORY<i class="fa-solid fa-arrow-right"></i></button>
                                    </div>

                                </div>
                            </div>


                            <div style="display: none;" id="show-right-itm-two" class="content-div">
                                <div class="show-item-right">
                                    <div class="show-item-content">
                                        <div class="show-item-one">
                                            <h3>Individual course</h3>
                                            <ul>
                                                <a href="">CCNA Training</a>
                                                <a href="">CCNP Training</a>
                                                <a href="">Hardware and Networking Course</a>
                                                <a href="">Windows Administrator L1 Training</a>
                                                <a href="">AWS Training</a>
                                                <a href="">Linux Administrator L1 Training</a>
                                                <a href="">Microsoft Azure Devops</a>
                                                <a href="">Job Guaranteed Program</a>

                                            </ul>
                                        </div>
                                        <div class="show-item-two">
                                            <h3>Job guarantee program</h3>
                                            <div class="show-item-two-container">
                                            <a href="">       <div class="show-item-two-container-box">
                                            <img src="/img/job-guarentee.webp" alt="" loading="lazy">
                                                </div>
                                     
                                                    <p>MERN Master</p>
                                                </a>
                                            </div>

                                        </div>
                                        <div class="show-item-three" class="content-div">
                                            <h3>Master's Program</h3>

                                            <div class="show-item-container">
                                                <a href="">
                                                    <div class="show-item-container-box">
                                                    <img src="/img/masters weppp.webp" alt="" loading="lazy">
                                                    </div>
                                                    <div class="show-item-container-box-one">
                                                        <p>L1 Network Engineer</p>
                                                        <p class="item">Duration - 6 months</p>
                                                    </div>
                                                </a>


                                            </div>
                                            <div class="show-item-container">
                                              <a href="">
                                                <div class="show-item-container-box">
                                                <img src="/img/masters weppp.webp" alt="" loading="lazy">
                                                </div>
                                                <div class="show-item-container-box-one">
                                                    <p>L2 Network Engineer</p>
                                                    <p class="item">Duration - 6 months</p>
                                                </div>
                                              </a>  
                                            </div>
                                        </div>
                                    </div>
                                    <div class="show-item-right-button">
                                        <button>EXPLORE THE CATEGORY<i class="fa-solid fa-arrow-right"></i></button>
                                    </div>
                                </div>
                            </div>


                            <div style="display: none;" id="show-right-itm-three" class="content-div">
                                <div class="show-item-right">
                                    <div class="show-item-content">
                                        <div class="show-item-one">
                                            <h3>Individual course</h3>
                                            <ul>
                                                <a href="">SEO Training</a>
                                                <a href="">SMM Training</a>
                                                <a href="">Google WEB Analytics Training</a>
                                                <a href="">Google Adwords & Adsense Training</a>
                                                <a href="">UI UX Designer Training</a>

                                            </ul>
                                        </div>
                                        <div class="show-item-two">
                                            <h3>Job guarantee program</h3>
                                            <div class="show-item-two-container">
                                            <a href="">     <div class="show-item-two-container-box">
                                            <img src="/img/job-guarentee.webp" alt="" loading="lazy">
                                                </div>
                                               <p>MERN Master</p></a> 
                                            </div>

                                        </div>
                                        <div class="show-item-three">
                                            <h3>Master's Program</h3>
                                            <div class="show-item-container">
                                              <a href="">
                                                <div class="show-item-container-box">
                                                <img src="/img/masters weppp.webp" alt="" loading="lazy">
                                                </div>
                                                <div class="show-item-container-box-one">
                                                    <p>Advanced Digital Marketing</p>
                                                    <p class="item">Duration - 6 months</p>
                                                </div>
                                              </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="show-item-right-button">
                                        <button>EXPLORE THE CATEGORY<i class="fa-solid fa-arrow-right"></i></button>
                                    </div>
                                </div>
                            </div>


                            <div style="display: none;" id="show-right-itm-four" class="content-div">
                                <div class="show-item-right">
                                    <div class="show-item-content">
                                        <div class="show-item-one">
                                            <h3>Individual course</h3>
                                            <ul>
                                                <a href="">Data Science with R Training</a>
                                                <a href="">Data Science with Python Training</a>
                                                <a href="">Data Science with SAS Training</a>
                                                <a href="">Data Science with Tableau Training</a>
                                                <a href="">Data Science with Power BI Training</a>
                                                <a href="">Data Analyst Training</a>
                                                <a href="">Natural Language Processing NLP Training</a>

                                            </ul>
                                        </div>
                                        <div class="show-item-two">
                                            <h3>Job guarantee program</h3>
                                            <div class="show-item-two-container">
                                            <a href=""> <div class="show-item-two-container-box">
                                            <img src="/img/job-guarentee.webp" alt="" loading="lazy">
                                                </div>
                                              <p>MERN Master</p></a>  
                                            </div>
                                            <div class="show-item-two-container">
                                            <a href="">   <div class="show-item-two-container-box">
                                            <img src="/img/job-guarentee.webp" alt="" loading="lazy">
                                                </div>
                                              <p>MEAN Master</p></a>  
                                            </div>
                                            <div class="show-item-two-container">
                                            <a href="">   <div class="show-item-two-container-box">
                                            <img src="/img/job-guarentee.webp" alt="" loading="lazy">
                                                </div>
                                               <p>Java Full Stack</p></a> 
                                            </div>

                                        </div>
                                        <div class="show-item-three">
                                            <h3>Master's Program</h3>
                                            <div class="show-item-container">
                                             <a href="">
                                                <div class="show-item-container-box">
                                                <img src="/img/masters weppp.webp" alt="" loading="lazy">
                                                </div>
                                                <div class="show-item-container-box-one">
                                                    <p>AWS & Microsoft Azure Devops</p>
                                                    <p class="item">Duration - 6 months</p>
                                                </div>
                                             </a>  
                                            </div>
                                        </div>
                                    </div>
                                    <div class="show-item-right-button">
                                        <button>EXPLORE THE CATEGORY<i class="fa-solid fa-arrow-right"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div style="display: none;" id="show-right-itm-five" class="content-div">
                                <div class="show-item-right">
                                    <div class="show-item-content">
                                        <div class="show-item-one">
                                            <h3>Individual course</h3>
                                            <ul>
                                                <a href="">Machine Learning & AI</a>
                                                <a href="">Machine Learning & Cloud</a>
                                                <a href="">Machine Learning & Deep Learning</a>
                                                <a href="">Machine Learning & NLP</a>
                                            
                                            </ul>
                                        </div>
                                        <div class="show-item-two">
                                            <h3>Job guarantee program</h3>
                                            <div class="show-item-two-container">
                                            <a href="">   <div class="show-item-two-container-box">
                                            <img src="/img/job-guarentee.webp" alt="" loading="lazy">
                                                </div>
                                               <p>Java Full Stack</p></a> 
                                            </div>
                                            <div class="show-item-two-container">
                                            <a href="">   <div class="show-item-two-container-box">
                                            <img src="/img/job-guarentee.webp" alt="" loading="lazy">
                                                </div>
                                            <p>Dot Net Full Stack</p></a> 
                                            </div>
                                            <div class="show-item-two-container">
                                            <a href="">  <div class="show-item-two-container-box">
                                            <img src="/img/job-guarentee.webp" alt="" loading="lazy">
                                                </div>
                                                <p>Blockchain Fullstack</p></a>
                                            </div>
                                        </div>
                                        <div class="show-item-three">
                                            <h3>Master's Program</h3>
                                            <div class="show-item-container">
                                               <a href="">
                                                <div class="show-item-container-box">
                                                <img src="/img/masters weppp.webp" alt="" loading="lazy">
                                                </div>
                                                <div class="show-item-container-box-one">
                                                    <p>Machine Learning & AI</p>
                                                    <p class="item">Duration - 6 months</p>
                                                </div>
                                               </a> 
                                            </div>
                                        </div>
                                    </div>
                                    <div class="show-item-right-button">
                                        <button>EXPLORE THE CATEGORY<i class="fa-solid fa-arrow-right"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div style="display: none;" id="show-right-itm-six" class="content-div">
                                <div class="show-item-right">
                                    <div class="show-item-content">
                                        <div class="show-item-one">
                                            <h3>Individual course</h3>
                                            <ul>
                                                <a href="">Certified Ethical Hacker CEH v11</a>
                                                <a href="">Mobile Application Security & Mobile Device Pentesting</a>
                                                <a href="">Web Application Hacking & Bug Bounty</a>
                                                <a href="">Web Server Hacking & Network Pentesting</a>

                                            </ul>
                                        </div>
                                        <div class="show-item-two">
                                            <h3>Job guarantee program</h3>
                                            <div class="show-item-two-container">
                                            <a href="">    <div class="show-item-two-container-box">
                                            <img src="/img/job-guarentee.webp" alt="" loading="lazy">
                                                </div>
                                             <p>MERN Master</p></a>  
                                            </div>
                                        </div>
                                        <div class="show-item-three">
                                            <h3>Master's Program</h3>
                                            <div class="show-item-container">
                                               <a href="">
                                                <div class="show-item-container-box">
                                                <img src="/img/masters weppp.webp" alt="" loading="lazy">
                                                </div>
                                                <div class="show-item-container-box-one">
                                                    <p>Advanced Penetration Testing Course</p>
                                                    <p class="item">Duration - 6 months</p>
                                                </div>
                                               </a> 
                                            </div>
                                        </div>
                                    </div>
                                    <div class="show-item-right-button">
                                        <button>EXPLORE THE CATEGORY<i class="fa-solid fa-arrow-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="navtwo navtwo-menu">
                    <ul>
                        <li><a href="" style="margin-left:14px">Women IT jobs</a< /li>
                        <li><a href="" style="margin-left:14px">Career start</a></li>
                        <li><a href="" style="margin-left:14px">Placement</a></li>
                        <li><a href="" style="margin-left:14px">Review</a></li>
                        <li class="navtwo-student"><a style="padding-left:10px">Student Corner</a>
                            <ul class="navtwo-dropdown" style=height:135px>
                                <li><a href="">Internship</a></li>
                                <li><a href="">Internship</a></li>
                                <li><a href="">Internship</a></li>
                            </ul>
                        </li>
                        <li class="navtwo-about"><a style="padding-left:10px">About</a>
                            <ul class="navtwo-dropdown-one" style=height:135px;>
                                <li><a href="">Internship</a></li>
                                <li><a href="">Internship</a></li>
                                <li><a href="">Internship</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
 `
})

document.addEventListener("DOMContentLoaded", function () {
  function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this, args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  var handleScroll = function () {
    var topbar = document.querySelector('.topbar-section');
    var navbar = document.querySelector('.navbar');
    var topright = document.getElementById("top-right");

    if (window.scrollY >= 40) {
      topbar.style.maxHeight = '0';
      navbar.style.top = '0';
      topright.style.display = "none";
    } else {
      topbar.style.maxHeight = '52px';
      navbar.style.top = '52px';
      topright.style.display = "block";
    }
  };

  window.addEventListener('scroll', debounce(handleScroll, 100));
});


//   2.global mobile header

document.addEventListener("DOMContentLoaded", function () {
  var mobile = document.getElementById("mobile-navigation");

  mobile.innerHTML = ` 
  <nav class="mobile-navbar">
    <div class="mobile-nav">
      <div class="moblie-nav-left">
        <img src="img/awdiz.png" class="img-fluid" alt="">
      </div>
      <div class="moblie-nav-right">
        <div id="allcourses" class="mobile-nav-right-one">
          <p style="color: white;">All Courses</p>
        </div>
        <div class="mobile-nav-right-two" id="hamburg-icon">
          <i class="fa-solid fa-bars"></i>
        </div>
      </div>
    </div>
    <div style="display: none;" id="displaymobilecontent" class="displaymobilecontent">
      <main class="allcoursespage">
        <div class="allcourses-heading">
          <div class="allcourses-heading-page">
            <div class="allcourses-heading-left">
              <i class="fa-solid fa-arrow-left"></i>
            </div>
            <div class="allcourses-heading-right">
              <p>All Courses</p>
            </div>
          </div>
        </div>
      </main>
      <section class="allcourses-menu-section">
        <div class="allcourses-menu-list">
          <ul>
            <li id="software">Software Development <span><i class="fa-solid fa-angle-right"></i></span> </li>
            <li id="networks">Networking infrastructure <span id="allcoursespage"><i
                  class="fa-solid fa-angle-right"></i></span></li>
            <li id="digital">Digital Marketing <span id="allcoursespage"><i class="fa-solid fa-angle-right"></i>
            </li>
            <li id="data">Data science <span id="allcoursespage"><i class="fa-solid fa-angle-right"></i></li>
            <li id="machine">Machine Learning <span id="allcoursespage"><i class="fa-solid fa-angle-right"></i></li>
            <li id="cyber">Cyber security <span id="allcoursespage"><i class="fa-solid fa-angle-right"></i></li>
          </ul>
        </div>
      </section>
    </div>
    <div id="software-page" style="display:none" class="software-pages">
      <main class="software">
        <div class="software-heading">
          <div class="software-heading-page">
            <div class="software-heading-left back-arrow">
              <i class="fa-solid fa-arrow-left"></i>
            </div>
            <div class="software-heading-right">
              <p style="padding-left: 10px; ">Software Development</p>
            </div>
          </div>
        </div>
      </main>
      <section class="software-menu-section">
        <div class="software-menu-list">
          <div class="software-menu-courses">
            <h4>Individual Courses</h4>
            <div class="software-menu-submenu-list">
            <a href="">Data Science with R Training</a>
            <a href="">Data Science with Python Training</a>
            <a href="">Data Science with SAS Training</a>
            <a href="">Data Science with Tableau Training</a>
            <a href="">Data Science with TableauTraining</a>
            <a href="">Data Science with Tableau Training</a>
            <a href="">Data Science with Tableau Training</a>
            </div>
          </div>
          <div class="software-menu-job-program">
            <h4>Job guarantee Program</h4>
            <div style="width: 90%; margin: auto; padding-top: 10px;">
              <div class="software-menu-job-submenu">
                <div class="software-menu-submenu">
                  <div class="software-menu-job-submenu-box">

                  </div>
                  <a href=""><p>MERN Master</p></a>
             
                </div>
              </div>
              <div class="software-menu-job-submenu">
                <div class="software-menu-submenu">
                  <div class="software-menu-job-submenu-box">

                  </div>
                  <a href="">
                    <p>MEAN Master</p>
                  </a>
                </div>
              </div>
              <div class="software-menu-job-submenu">
                <div class="software-menu-submenu">
                  <div class="software-menu-job-submenu-box">

                  </div>
                  <a href="">
                    <p>Java FullStack</p>
                  </a>
                </div>
              </div>
            </div>

          </div>
          <div class="software-master-program">
            <h4>Master's program</h4>
            <div style="width: 90%; margin: auto; padding-top: 10px;">
              <div class="software-master-program-submenu">
                <div class="software-master-program-menu">
                  <div class="software-master-program-box">

                  </div>
                  <div class="software-master-program-box-one">
                    <a href="">
                      <p>Advanced Digital Marketing</p>
                    </a>
                    <a href="">
                      <p class="duration">Duration - 6 months</p>
                    </a>
                  </div>
                </div>
              </div>

              <div class="software-master-program-submenu">
                <div class="software-master-program-menu">
                  <div class="software-master-program-box">

                  </div>
                  <div class="software-master-program-box-one">
                    <a href="">
                      <p>Advanced Digital Marketing</p>
                    </a>
                    <a href="">
                      <p class="duration">Duration - 6 months</p>
                    </a>
                  </div>
                </div>
              </div>

              <div class="software-master-program-submenu">
                <div class="software-master-program-menu">
                  <div class="software-master-program-box">

                  </div>
                  <div class="software-master-program-box-one">
                    <a href="">
                      <p>Advanced Digital Marketing</p>
                    </a>
                    <a href="">
                      <p class="duration">Duration - 6 months</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div style="display: none;" id="networking-page" class="networking-page">
      <main class="software">
        <div class="software-heading">
          <div class="software-heading-page">
            <div class="software-heading-left back-arrow">
              <i class="fa-solid fa-arrow-left"></i>
            </div>
            <div class="software-heading-right">
              <p>Networking infrastructure</p>
            </div>
          </div>
        </div>
      </main>
      <section class="software-menu-section">
        <div class="software-menu-list">
          <div class="software-menu-courses">
            <h4>Individual Courses</h4>
            <div class="software-menu-submenu-list">
            <a href="">Data Science with R Training</a>
            <a href="">Data Science with Python Training</a>
            <a href="">Data Science with SAS Training</a>
            <a href="">Data Science with Tableau Training</a>
            <a href="">Data Science with TableauTraining</a>
            <a href="">Data Science with Tableau Training</a>
            <a href="">Data Science with Tableau Training</a>
            </div>
          </div>

          <div class="software-menu-job-program">
            <h4>Job guarantee Program</h4>
            <div style="width: 90%; margin: auto; padding-top: 10px;">
              <div class="software-menu-job-submenu">
                <div class="software-menu-submenu">
                  <div class="software-menu-job-submenu-box">

                  </div>
                  <a href="">
                    <p>MERN Master</p>
                  </a>
                </div>
              </div>
              <div class="software-menu-job-submenu">
                <div class="software-menu-submenu">
                  <div class="software-menu-job-submenu-box">

                  </div>
                  <a href="">
                    <p>MEAN Master</p>
                  </a>
                </div>
              </div>
              <div class="software-menu-job-submenu">
                <div class="software-menu-submenu">
                  <div class="software-menu-job-submenu-box">

                  </div>
                  <a href="">
                    <p>Java FullStack</p>
                  </a>
                </div>
              </div>
            </div>

          </div>

          <div class="software-master-program">
            <h4>Master's program</h4>
            <div style="width: 90%; margin: auto; padding-top: 10px;">
              <div class="software-master-program-submenu">
                <div class="software-master-program-menu">
                  <div class="software-master-program-box">

                  </div>
                  <div class="software-master-program-box-one">
                    <a href="">
                      <p>Advanced Digital Marketing</p>
                    </a>
                    <a href="">
                      <p class="duration">Duration - 6 months</p>
                    </a>
                  </div>
                </div>
              </div>

              <div class="software-master-program-submenu">
                <div class="software-master-program-menu">
                  <div class="software-master-program-box">

                  </div>
                  <div class="software-master-program-box-one">
                    <a href="">
                      <p>Advanced Digital Marketing</p>
                    </a>
                    <a href="">
                      <p class="duration">Duration - 6 months</p>
                    </a>
                  </div>
                </div>
              </div>

              <div class="software-master-program-submenu">
                <div class="software-master-program-menu">
                  <div class="software-master-program-box">

                  </div>
                  <div class="software-master-program-box-one">
                    <a href="">
                      <p>Advanced Digital Marketing</p>
                    </a>
                    <a href="">
                      <p class="duration">Duration - 6 months</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>


    <div style="display: none;" id="digital-page" class="digital-page">
      <main class="software">
        <div class="software-heading">
          <div class="software-heading-page">
            <div class="software-heading-left back-arrow">
              <i class="fa-solid fa-arrow-left"></i>
            </div>
            <div class="software-heading-right">
              <p style="padding-left: 33px;">Digital Marketing</p>
            </div>
          </div>
        </div>
      </main>

      <section class="software-menu-section">
        <div class="software-menu-list">
          <div class="software-menu-courses">
            <h4>Individual Courses</h4>
            <div class="software-menu-submenu-list">
            <a href="">Data Science with R Training</a>
            <a href="">Data Science with Python Training</a>
            <a href="">Data Science with SAS Training</a>
            <a href="">Data Science with Tableau Training</a>
            <a href="">Data Science with TableauTraining</a>
            <a href="">Data Science with Tableau Training</a>
            <a href="">Data Science with Tableau Training</a>
            </div>
          </div>

          <div class="software-menu-job-program">
            <h4>Job guarantee Program</h4>
            <div style="width: 90%; margin: auto; padding-top: 10px;">
              <div class="software-menu-job-submenu">
                <div class="software-menu-submenu">
                  <div class="software-menu-job-submenu-box">

                  </div>
                  <a href="">
                    <p>MERN Master</p>
                  </a>
                </div>
              </div>
              <div class="software-menu-job-submenu">
                <div class="software-menu-submenu">
                  <div class="software-menu-job-submenu-box">

                  </div>
                  <a href="">
                    <p>MEAN Master</p>
                  </a>
                </div>
              </div>
              <div class="software-menu-job-submenu">
                <div class="software-menu-submenu">
                  <div class="software-menu-job-submenu-box">

                  </div>
                  <a href="">
                    <p>Java FullStack</p>
                  </a>
                </div>
              </div>
            </div>

          </div>

          <div class="software-master-program">
            <h4>Master's program</h4>
            <div style="width: 90%; margin: auto; padding-top: 10px;">
              <div class="software-master-program-submenu">
                <div class="software-master-program-menu">
                  <div class="software-master-program-box">

                  </div>
                  <div class="software-master-program-box-one">
                    <a href="">
                      <p>Advanced Digital Marketing</p>
                    </a>
                    <a href="">
                      <p class="duration">Duration - 6 months</p>
                    </a>
                  </div>
                </div>
              </div>

              <div class="software-master-program-submenu">
                <div class="software-master-program-menu">
                  <div class="software-master-program-box">

                  </div>
                  <div class="software-master-program-box-one">
                    <a href="">
                      <p>Advanced Digital Marketing</p>
                    </a>
                    <a href="">
                      <p class="duration">Duration - 6 months</p>
                    </a>
                  </div>
                </div>
              </div>

              <div class="software-master-program-submenu">
                <div class="software-master-program-menu">
                  <div class="software-master-program-box">

                  </div>
                  <div class="software-master-program-box-one">
                    <a href="">
                      <p>Advanced Digital Marketing</p>
                    </a>
                    <a href="">
                      <p class="duration">Duration - 6 months</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="data-page" id="data-page" style="display: none;">
      <main class="software">
        <div class="software-heading">
          <div class="software-heading-page">
            <div class="software-heading-left back-arrow">
              <i class="fa-solid fa-arrow-left"></i>
            </div>
            <div class="software-heading-right">
              <p style="padding-left: 48px;">Data science</p>
            </div>
          </div>
        </div>
      </main>

      <section class="software-menu-section">
        <div class="software-menu-list">
          <div class="software-menu-courses">
            <h4>Individual Courses</h4>
            <div class="software-menu-submenu-list">
            <a href="">Data Science with R Training</a>
            <a href="">Data Science with Python Training</a>
            <a href="">Data Science with SAS Training</a>
            <a href="">Data Science with Tableau Training</a>
            <a href="">Data Science with TableauTraining</a>
            <a href="">Data Science with Tableau Training</a>
            <a href="">Data Science with Tableau Training</a>
            </div>
          </div>

          <div class="software-menu-job-program">
            <h4>Job guarantee Program</h4>
            <div style="width: 90%; margin: auto; padding-top: 10px;">
              <div class="software-menu-job-submenu">
                <div class="software-menu-submenu">
                  <div class="software-menu-job-submenu-box">

                  </div>
                  <a href="">
                    <p>MERN Master</p>
                  </a>
                </div>
              </div>
              <div class="software-menu-job-submenu">
                <div class="software-menu-submenu">
                  <div class="software-menu-job-submenu-box">

                  </div>
                  <a href="">
                    <p>MEAN Master</p>
                  </a>
                </div>
              </div>
              <div class="software-menu-job-submenu">
                <div class="software-menu-submenu">
                  <div class="software-menu-job-submenu-box">

                  </div>
                  <a href="">
                    <p>Java FullStack</p>
                  </a>
                </div>
              </div>
            </div>

          </div>
          <div class="software-master-program">
            <h4>Master's program</h4>
            <div style="width: 90%; margin: auto; padding-top: 10px;">
              <div class="software-master-program-submenu">
                <div class="software-master-program-menu">
                  <div class="software-master-program-box">

                  </div>
                  <div class="software-master-program-box-one">
                    <a href="">
                      <p>Advanced Digital Marketing</p>
                    </a>
                    <a href="">
                      <p class="duration">Duration - 6 months</p>
                    </a>
                  </div>
                </div>
              </div>

              <div class="software-master-program-submenu">
                <div class="software-master-program-menu">
                  <div class="software-master-program-box">

                  </div>
                  <div class="software-master-program-box-one">
                    <a href="">
                      <p>Advanced Digital Marketing</p>
                    </a>
                    <a href="">
                      <p class="duration">Duration - 6 months</p>
                    </a>
                  </div>
                </div>
              </div>

              <div class="software-master-program-submenu">
                <div class="software-master-program-menu">
                  <div class="software-master-program-box">

                  </div>
                  <div class="software-master-program-box-one">
                    <a href="">
                      <p>Advanced Digital Marketing</p>
                    </a>
                    <a href="">
                      <p class="duration">Duration - 6 months</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="learning" id="learning" style="display: none;">
      <main class="software">
        <div class="software-heading">
          <div class="software-heading-page">
            <div class="software-heading-left back-arrow">
              <i class="fa-solid fa-arrow-left"></i>
            </div>
            <div class="software-heading-right">
              <p style="padding-left: 33px;">Machine Learning</p>
            </div>
          </div>
        </div>
      </main>

      <section class="software-menu-section">
        <div class="software-menu-list">
          <div class="software-menu-courses">
            <h4>Individual Courses</h4>
            <div class="software-menu-submenu-list">
            <a href="">Data Science with R Training</a>
            <a href="">Data Science with Python Training</a>
            <a href="">Data Science with SAS Training</a>
            <a href="">Data Science with Tableau Training</a>
            <a href="">Data Science with TableauTraining</a>
            <a href="">Data Science with Tableau Training</a>
            <a href="">Data Science with Tableau Training</a>
            </div>
          </div>

          <div class="software-menu-job-program">
            <h4>Job guarantee Program</h4>
            <div style="width: 90%; margin: auto; padding-top: 10px;">
              <div class="software-menu-job-submenu">
                <div class="software-menu-submenu">
                  <div class="software-menu-job-submenu-box">

                  </div>
                  <a href="">
                    <p>MERN Master</p>
                  </a>
                </div>
              </div>
              <div class="software-menu-job-submenu">
                <div class="software-menu-submenu">
                  <div class="software-menu-job-submenu-box">

                  </div>
                  <a href="">
                    <p>MEAN Master</p>
                  </a>
                </div>
              </div>
              <div class="software-menu-job-submenu">
                <div class="software-menu-submenu">
                  <div class="software-menu-job-submenu-box">

                  </div>
                  <a href="">
                    <p>Java FullStack</p>
                  </a>
                </div>
              </div>
            </div>

          </div>

          <div class="software-master-program">
            <h4>Master's program</h4>
            <div style="width: 90%; margin: auto; padding-top: 10px;">
              <div class="software-master-program-submenu">
                <div class="software-master-program-menu">
                  <div class="software-master-program-box">

                  </div>
                  <div class="software-master-program-box-one">
                    <a href="">
                      <p>Advanced Digital Marketing</p>
                    </a>
                    <a href="">
                      <p class="duration">Duration - 6 months</p>
                    </a>
                  </div>
                </div>
              </div>

              <div class="software-master-program-submenu">
                <div class="software-master-program-menu">
                  <div class="software-master-program-box">

                  </div>
                  <div class="software-master-program-box-one">
                    <a href="">
                      <p>Advanced Digital Marketing</p>
                    </a>
                    <a href="">
                      <p class="duration">Duration - 6 months</p>
                    </a>
                  </div>
                </div>
              </div>

              <div class="software-master-program-submenu">
                <div class="software-master-program-menu">
                  <div class="software-master-program-box">

                  </div>
                  <div class="software-master-program-box-one">
                    <a href="">
                      <p>Advanced Digital Marketing</p>
                    </a>
                    <a href="">
                      <p class="duration">Duration - 6 months</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="cybers" id="cybers" style="display: none;">
      <main class="software">
        <div class="software-heading">
          <div class="software-heading-page">
            <div class="software-heading-left back-arrow">
              <i class="fa-solid fa-arrow-left"></i>
            </div>
            <div class="software-heading-right">
              <p style="padding-left: 48px;">Cyber Security</p>
            </div>
          </div>
        </div>
      </main>
      <section class="software-menu-section">
        <div class="software-menu-list">
          <div class="software-menu-courses">
            <h4>Individual Courses</h4>
            <div class="software-menu-submenu-list">
            <a href="">Data Science with R Training</a>
            <a href="">Data Science with Python Training</a>
            <a href="">Data Science with SAS Training</a>
            <a href="">Data Science with Tableau Training</a>
            <a href="">Data Science with TableauTraining</a>
            <a href="">Data Science with Tableau Training</a>
            <a href="">Data Science with Tableau Training</a>
            </div>
          </div>

          <div class="software-menu-job-program">
            <h4>Job guarantee Program</h4>
            <div style="width: 90%; margin: auto; padding-top: 10px;">
              <div class="software-menu-job-submenu">
                <div class="software-menu-submenu">
                  <div class="software-menu-job-submenu-box">

                  </div>
                  <a href="">
                    <p>MERN Master</p>
                  </a>
                </div>
              </div>
              <div class="software-menu-job-submenu">
                <div class="software-menu-submenu">
                  <div class="software-menu-job-submenu-box">

                  </div>
                  <a href="">
                    <p>MEAN Master</p>
                  </a>
                </div>
              </div>
              <div class="software-menu-job-submenu">
                <div class="software-menu-submenu">
                  <div class="software-menu-job-submenu-box">

                  </div>
                  <a href="">
                    <p>Java FullStack</p>
                  </a>
                </div>
              </div>
            </div>

          </div>

          <div class="software-master-program">
            <h4>Master's program</h4>
            <div style="width: 90%; margin: auto; padding-top: 10px;">
              <div class="software-master-program-submenu">
                <div class="software-master-program-menu">
                  <div class="software-master-program-box">

                  </div>
                  <div class="software-master-program-box-one">
                    <a href="">
                      <p>Advanced Digital Marketing</p>
                    </a>
                    <a href="">
                      <p class="duration">Duration - 6 months</p>
                    </a>
                  </div>
                </div>
              </div>

              <div class="software-master-program-submenu">
                <div class="software-master-program-menu">
                  <div class="software-master-program-box">

                  </div>
                  <div class="software-master-program-box-one">
                    <a href="">
                      <p>Advanced Digital Marketing</p>
                    </a>
                    <a href="">
                      <p class="duration">Duration - 6 months</p>
                    </a>
                  </div>
                </div>
              </div>

              <div class="software-master-program-submenu">
                <div class="software-master-program-menu">
                  <div class="software-master-program-box">

                  </div>
                  <div class="software-master-program-box-one">
                    <a href="">
                      <p>Advanced Digital Marketing</p>
                    </a>
                    <a href="">
                      <p class="duration">Duration - 6 months</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>


    <div class="mobile">
      <div class="mobile-hamburg-click-section" id="mobile-view">
        <div class="mobile-hamburg-click-section-heading">
          <div class="mobile-hamburg-click-section-heading-page">
            <div class="mobile-hamburg-click-section-heading-left">
              <i style="padding-top: 10px;" class="fa-solid fa-arrow-left"></i>
            </div>
            <div class="mobile-hamburg-click-section-heading-right">
              <p style="padding-left: 18px; padding-top: 10px;">MENU</p>
            </div>
          </div>
        </div>
        <div class="mobile-hamburg-menu-list">
          <div class="mobile-hamburg-submenu">
            <ul>
              <li>
                <div style="display: flex; justify-content: space-between;">
                  <p>Women IT job</p>
                  <p id="women"> <i class="fa-solid fa-plus"></i></p>
                  <p id="women-minus" style="display: none;"> <i class="fa-solid fa-minus"></i></p>
                </div>
                <ul style="display: none;" id="women-job">
                  <li style="padding-top: 15px">Content-one</li>
                  <li>Content-two</li>
                </ul>
              </li>
              <li><a href="">Career Restart</a></li>
              <li><a href="">Placement</a></li>
              <li><a href="">Review</a></li>
              <li>
              <div style="display: flex; justify-content: space-between;">
              <p>Student Corner</p>
              <p id="student"> <i class="fa-solid fa-plus"></i></p>
              <p id="student-minus" style="display: none;"> <i class="fa-solid fa-minus"></i></p>
            </div>
            <ul style="display: none;" id="student-job">
              <li style="padding-top: 15px">Internship</li>
              <li>Internship</li>
              <li>Internship</li>
            </ul>
            </li>
            <li>
            <div style="display: flex; justify-content: space-between;">
            <p>About</p>
            <p id="about"> <i class="fa-solid fa-plus"></i></p>
            <p id="about-minus" style="display: none;"> <i class="fa-solid fa-minus"></i></p>
          </div>
          <ul style="display: none;" id="about-job">
            <li style="padding-top: 15px">Internship</li>
            <li>Internship</li>
            <li>Internship</li>
          </ul>
          </li>
              <li><a href="">Blockchain</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
        `;
})

document.addEventListener('DOMContentLoaded', function () {
  function toggleDisplay(elementId, shouldShow) {
    var element = document.getElementById(elementId);
    element.style.display = shouldShow ? 'block' : 'none';

    const pagesThatLockScroll = ['displaymobilecontent', 'software-page', 'networking-page', 'digital-page', 'data-page', 'learning', 'cybers'];
    if (pagesThatLockScroll.includes(elementId)) {
      document.body.style.overflow = shouldShow ? 'hidden' : 'auto';
    }
  }

  function setupCourseNavigation(courseId, pageId) {
    var courseItem = document.getElementById(courseId);
    if (courseItem) {
      courseItem.addEventListener('click', function () {
        toggleDisplay('displaymobilecontent', false);
        toggleDisplay(pageId, true);
      });
    }
  }

  setupCourseNavigation('software', 'software-page');
  setupCourseNavigation('networks', 'networking-page');
  setupCourseNavigation('digital', 'digital-page');
  setupCourseNavigation('data', 'data-page');
  setupCourseNavigation('machine', 'learning');
  setupCourseNavigation('cyber', 'cybers');

  var allCoursesButton = document.getElementById('allcourses');
  if (allCoursesButton) {
    allCoursesButton.addEventListener('click', function () {
      toggleDisplay('displaymobilecontent', true);
    });
  }

  var hamburgIconButton = document.getElementById('hamburg-icon');
  if (hamburgIconButton) {
    hamburgIconButton.addEventListener('click', function () {
      toggleDisplay('mobile-view', true);
    });
  }

  var backArrowAllCourses = document.querySelector('.allcourses-heading-left i');
  if (backArrowAllCourses) {
    backArrowAllCourses.addEventListener('click', function () {
      toggleDisplay('displaymobilecontent', false);
    });
  }

  var backArrowMobileView = document.querySelector('.mobile-hamburg-click-section-heading-left i');
  if (backArrowMobileView) {
    backArrowMobileView.addEventListener('click', function () {
      toggleDisplay('mobile-view', false);
    });
  }

  var courseBackArrows = document.querySelectorAll('.software-pages .back-arrow, .networking-page .back-arrow, .digital-page .back-arrow, .data-page .back-arrow, .learning .back-arrow, .cybers .back-arrow');
  courseBackArrows.forEach(function (arrow) {
    arrow.addEventListener('click', function () {
      var parentPage = this.closest('div[id]');
      toggleDisplay(parentPage.id, false);
      toggleDisplay('displaymobilecontent', true);
    });
  });

  var women = document.getElementById("women");
  var displayWomenJob = document.getElementById("women-job");
  var womenminus = document.getElementById("women-minus");

  women.addEventListener("click", function () {
    displayWomenJob.style.display = "block";
    women.style.display = "none";
    womenminus.style.display = "block";
  });

  womenminus.addEventListener("click", function () {
    displayWomenJob.style.display = "none";
    women.style.display = "block";
    womenminus.style.display = "none";
  });

  var student = document.getElementById("student");
  var displaystudentjob = document.getElementById("student-job");
  var studentminus = document.getElementById("student-minus");

  student.addEventListener("click", function () {
    displaystudentjob.style.display = "block";
    student.style.display = "none";
    studentminus.style.display = "block";
  });

  studentminus.addEventListener("click", function () {
    displaystudentjob.style.display = "none";
    student.style.display = "block";
    studentminus.style.display = "none";
  });

  var about = document.getElementById("about");
  var displayaboutjob = document.getElementById("about-job");
  var aboutminus = document.getElementById("about-minus");

  about.addEventListener("click", function () {
    displayaboutjob.style.display = "block";
    about.style.display = "none";
    aboutminus.style.display = "block";
  });

  aboutminus.addEventListener("click", function () {
    displayaboutjob.style.display = "none";
    about.style.display = "block";
    aboutminus.style.display = "none";
  });

});



//  3.global-footer

document.addEventListener("DOMContentLoaded", function () {
  var globalfooter = document.getElementById("global-footer");
  globalfooter.innerHTML = ` <footer>
      <div class="container">
          <div class="footer-page">
              <div class="footer-box-one">
                  <h2>About Awdiz</h2>
                  <p class="footer-box-one-para">Awdiz is No.1 IT Training Institute in Navi Mumbai For
                      Freshers With 100% Job Guarantee and Pay After
                      Placements Courses. Established in 2014, We Are One
                      of The Premium Training Institute Delivering Job
                      Assured Trainings on Networking, CCNA, Linux
                      Administration, WIndows Administration, Full Stack
                      Development, Full Stack Developer and UI/UX Design
                      Course. Awdiz is headquartered in Mumbai. We are
                      committed to quality education and our 10+ years of
                      experience has made us serve over 45+ IT clients
                      across 13 cities in India for all the freshers off campus
                      placements. Our strength is our guaranteed placement
                      for all our IT courses. We have no other branches.</p>
              </div>
              <div class="footer-box-one">
                  <h2 class="footer-box-one-h2">Popular Courses in India</h2>
                  <p class="footer-box-one-para"><span> <a href="">CCNA Course in Mumbai |</a></span><span> <a
                              href="">Full-Stack Developer Course in Mumbai |</a></span><span> <a href="">Best Digital
                              Marketing Course In Mumbai
                              |</a></span><span> <a href="">UI UX Design Course in Mumbai |</a></span><span> <a
                              href="">Linux classes in Mumbai |</a></span><span> <a href="">Hardware and Networking
                              Course in Mumbai |</a></span><span>
                          <a href="">Windows Administrator Course in Mumbai |</a></span><span> <a href="">AWS Training
                              in Mumbai
                              |</a></span><span> <a href="">Advanced Penetration Testing Course in Mumbai
                              |</a></span><span> <a href="">Cyber Security Course in Mumbai |</a></span><span> <a
                              href="">Advanced Java Developer Certification Course |</a></span><span>
                          <a href="">SEO course in Mumbai |</a></span><span> <a href="">CCNP Enterprise Classes in
                              Mumbai
                              |</a></span><span> <a href="">Artificial Intelligence Course in Mumbai
                              |</a></span><span> <a href="">Machine Learning Course in Mumbai |</a></span> </p>
              </div>
              <div class="footer-box-one">
                  <h2 class="footer-box-one-h2">Trending Careers in India</h2>
                  <ul style="margin-left: 14px;" class="footer-box-one-para">
                      <li> <a href="">Awdiz Placements & Review</a></li>
                      <li> <a href="">Guaranteed Placement Program</a> </li>
                      <li> <a href="">Career Switch Program</a></li>
                      <li> <a href="">Hire Talent from Awdiz</a>  </li>
                      <li> <a href="">Blockchain Training in Mumbai</a></li>
                      <li> <a href="">Work from home Jobs for Female</a></li>
                      <li> <a href="">Fresher Jobs Opening</a></li>
                      <li> <a href="">Internships for College Student</a></li>
                      <li> <a href="">90% Fee off College Trainings Tieu</a></li>
                      <li> <a href="">Blogs | News | Events</a></li>
                  </ul>
              </div>
          </div>
          <br>
          <hr style="color: #99cbc5;">
          <br>
          <div class="footer-social-page">
              <div class="footer-box-one">
                  <h2>Contact Us</h2>
                  <p class="footer-box-page-info">Call : <a href="tel: +917678000695 | 8657202255">+91 7678000695 | 8657202255</a></p>
                  <p class="footer-box-page-info">Vashi Plaza Building 2nd Floor A Wing
                      Offie number 421A Sector 17 Vashi Navi
                      Mumbai Maharashtra 400703</p>
                  <p class="footer-box-page-info">Email: <a href="mailto:contact@awdiz.in">contact@awdiz.in</a> </p>
                  <div class="social-footer-icon">
                      <div class="social-icon-facebook">
                      <a class="facebook" href="https://www.facebook.com/awdiz" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                      </div>
                      <div style="margin-left: 10px;" class="social-icon-twitter">
                      <a class="twitter" href="https://twitter.com/Awdiz_arb" target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
                      </div>
                      <div style="margin-left: 10px;" class="social-icon-youtube">
                      <a class="youtube" href="https://www.youtube.com/channel/UCib2IAJ7I-42CUKzDoXC6ag" target="_blank"><i class="fa-brands fa-youtube"></i></a>
                      </div>
                      <div style="margin-left: 10px;" class="social-icon-insta">
                      <a class="instagram" href="https://www.instagram.com/awesome_studies_awdiz" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                      </div>
                      <div style="margin-left: 10px;" class="social-icon-linkdein">
                      <a class="linkedin" href="https://www.linkedin.com/school/awdiz-institute" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                      </div>
                  </div>
              </div>
              <div class="footer-map">
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8695598070517!2d72.99514087586859!3d19.069471852176072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3c1c6aaaacd%3A0x1660edf108a1e4c4!2sAWDIZ%20%7C%20CCNA%20Linux%20Windows%20Digital%20Marketing%20Data%20Science%20Machine%20Learning%20Full%20Stack!5e0!3m2!1sen!2sin!4v1698900190324!5m2!1sen!2sin"
                      width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div class="footer-map">
                  <img style="width: 100%; height: 100%;" class="image-fluid" src="img/images.jpg" alt="">
              </div>
          </div>
          <br>
          <hr style="color: #99cbc5;">
          <br>
          <div class="footer-social-page" style="margin-bottom:40px">
              <div class="footer-declaimer">
                  <p>Disclaimer</p>
                  <p style="padding-top: 15px;"  class="footer-declaimer-sub-para">We do not claim any logo & some* Images used within the website and
                      are used for representational
                      purposes only. They belong to their respective organizations.</p>
              </div>
              <div class="footer-reserved">
                  <p>© 2013 to 2023 | ARB LLP | All Rights Reserved.</p>
              </div>

          </div>
      </div>
  </footer>`
})


//   4.GLOBAL-SOCIAL-ICON


//   5.GLOBAL-TOP-BAR-SECTION

document.addEventListener("DOMContentLoaded", function () {
  var topbar = document.getElementById("arrow-up");
  console.log(topbar, "topbar");
  topbar.innerHTML = `
    <i class="fa-solid fa-arrow-up"></i>
  `
})

document.addEventListener("DOMContentLoaded", function () {
  const scrollButton = document.getElementById('arrow-up');
  const content = document.getElementById('content');

  window.addEventListener('scroll', () => {
    if (window.scrollY >= 300) {
      scrollButton.style.display = 'block';
    } else {
      scrollButton.style.display = 'none';
    }

    scrollButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
})


//   6.FORMMODAL



// 7.global-cisco-training-section
document.addEventListener('DOMContentLoaded', function () {
  var ciscosection = document.getElementById("cisco-training");

  ciscosection.innerHTML = `
  <div class="cisco-training-page">
  <div class="cisco-training-form">
    <form class="cisco-form">
      <h3>Contact to Plan your Amazing Career Path Journey with Awdiz</h3>
      <label>Full Name</label>
      <br>
      <input type="text" name="name" id="username" placeholder="Please enter your Full Name" required>
      <br>
      <label>Phone</label>
      <br>
      <input type="text" name="phone" id="usernumber" placeholder="Please enter your Phone Number" required>
      <br>
      <label>Email</label>
      <br>
      <input type="text" name="email" id="useremail" placeholder="Please enter your Email" required>
      <br>
      <label>Message</label>
      <br>
      <textarea class="cisco-textarea" id="usermessage" name="message" cols="30" rows="2"
        placeholder="Message for Awdiz Placement Team" required></textarea>
      <br>
      <button type="submit">Submit</button>
    </form>
  </div>
  <div id="mobile-badge" class="badge sticky-contact" style="z-index:100;height:40px; width: 100%;">
    <ul>
      <li>
        <i class="fa-solid fa-phone phone" loading="lazy"></i>
        <span>
          <a href="tel:+918657202255">
            <b style="font-weight: 700;color: #fff">8657202255</b>
          </a>
        </span>
      </li>
      <li>
        <i class="fa-brands fa-whatsapp whatsapp" loading="lazy"></i>
        <span>
          <a href="https://api.whatsapp.com/send?phone=917678000695">
            <b style="font-weight: 700;color: #fff;">7678000695</b>
          </a>
        </span>
      </li>
    </ul>
  </div>

  <div class="cisco-training-info">

    <p20>Placement Guarantee hai to Form Bharne mai Deri kyun?</p20>

    <p class="content-info">India’s No.1 in Cisco Training, renowned for expertise in IT education, offring
      comprehensive courses, hands-on labs, and certifid instructors, empowering
      professionals to become specialists</p>
    <div class="cisco-job">
      <div class="cisco-container cisco-fo">
        <p class="cicso-p">16K+</p>
        <p class="cisco-info">Students Enrolled</p>
      </div>
      <div class="cisco-container ciscos-con cisco-fo">
        <p class="cicso-p">200+</p>
        <p class="cisco-info">Active Courses</p>
      </div>
      <div class="cisco-container  cisco-fo">
        <p class="cicso-p">12+</p>
        <p class="cisco-info">Years of Experience</p>
      </div>
      <div class="cisco-container ciscos-con cisco-fo">
        <p class="cicso-p">16K+</p>
        <p class="cisco-info">Educational Rewards</p>
      </div>
    </div>
  </div>
</div>
<div class="container">
  <div class="cisco-enquiry">
    <div class="badge-one">

    </div>
    <div id="normal-badge" class="badge sticky-contact" style="z-index:100;height:40px">
      <ul>
        <li>
          <i class="fa-solid fa-phone phone" loading="lazy"></i>
          <span>
            <a href="tel:+918657202255">
              <b style="font-weight: 700;color: #fff">8657202255</b>
            </a>
          </span>
        </li>
        <li>
          <i class="fa-brands fa-whatsapp whatsapp" loading="lazy"></i>
          <span>
            <a href="https://api.whatsapp.com/send?phone=917678000695">
              <b style="font-weight: 700;color: #fff;">7678000695</b>
            </a>
          </span>
        </li>
      </ul>
    </div>
  </div>

</div>
  `
  attachFormSubmitListener();
  
})

function attachFormSubmitListener() {
  document.querySelector(".cisco-form").addEventListener("submit", function (e) {
    var fullname = document.getElementById("username").value;
    var number = document.getElementById("usernumber").value;
    var email = document.getElementById("useremail").value;
    var message = document.getElementById("usermessage").value;
    var emailRegex = /\S+@\S+\.\S+/;
    var phoneRegex = /^\d{10}$/;

    if (fullname.length < 1 && number.length < 1 && email.length < 1 && message.length < 1) {
      alert("please fill all input details");
      e.preventDefault();
      return;
    }

    if (!phoneRegex.test(number)) {
      alert("Please enter a valid 10 digit mobile number.");
      e.preventDefault();
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      e.preventDefault();
      isValid = false;
      return;
    }
  });
}










// 8.quick-enquiry-section for mobile

document.addEventListener('DOMContentLoaded', function () {

  var mobilequickenquirysection = document.getElementById("mobile-quick-enquiry-section");
  mobilequickenquirysection.innerHTML = `
  <a href="#cisco-training" id="mobile-enquiry-button">
    <div class="mobile-enquiry-section">
      <div class="mobile-button">
        <p>Quick Enquiry</p>
        <i class="fa-solid fa-hand-pointer"></i>
      </div>
    </div>
  </a>
  `
  var mobileEnquirySection = document.querySelector('.mobile-enquiry-section');
  var ciscoTrainingSection = document.getElementById('cisco-training');
  var mobileEnquiryButton = document.getElementById('mobile-enquiry-button');

  mobileEnquiryButton.addEventListener('click', function () {
    mobileEnquirySection.style.display = 'none';
  });

  window.addEventListener('scroll', function () {
    var sectionPosition = ciscoTrainingSection.getBoundingClientRect();

    if (sectionPosition.top <= window.innerHeight && sectionPosition.bottom >= 0) {
      mobileEnquirySection.style.display = 'none';
    } else {
      mobileEnquirySection.style.display = 'flex';
    }
  });
});


// 9.quick-enquiry-section for desktop

document.addEventListener('DOMContentLoaded', function () {
  var quickEnquirySection = document.getElementById("quick-enquiry-section");
  quickEnquirySection.innerHTML = `
      <a href="#cisco-training"><button id="quick-enquiry" style="display: none;">Quick Enquiry <i class="fa-solid fa-hand-pointer"></i></button></a>
  `;

  var quickEnquiryButton = document.getElementById("quick-enquiry");

  window.addEventListener("scroll", function() {
      if (window.scrollY > 300) {
          quickEnquiryButton.style.display = "flex";
      } else {
          quickEnquiryButton.style.display = "none";
      }
  });
});






// lazyloadscript

document.addEventListener("DOMContentLoaded", function () {
  var lazyMedia = [].slice.call(document.querySelectorAll("img.lazyload, source.lazyload, iframe.lazyload, video.lazyload, .lazy-bg"));

  if ("IntersectionObserver" in window) {
    let observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          let media = entry.target;
          if (media.tagName.toLowerCase() === 'img') {
            media.src = media.dataset.src;
          } else if (media.tagName.toLowerCase() === 'source') {
            media.srcset = media.dataset.srcset;
            // Update parent picture element to refresh sources
            var parentPicture = media.closest('picture');
            if (parentPicture) {
              var img = parentPicture.querySelector('img');
              if (img && img.dataset.src) {
                img.src = img.dataset.src;
              }
            }
          } else if (media.tagName.toLowerCase() === 'iframe') {
            media.src = media.dataset.src;
          } else if (media.tagName.toLowerCase() === 'video') {
            var source = media.querySelector('source');
            source.src = source.dataset.src;
            media.poster = media.dataset.poster;
            media.load();
          } else if (media.classList.contains('lazy-bg')) {
            media.style.backgroundImage = 'url(' + media.dataset.bg + ')';
          }
          media.classList.remove("lazyload");
          observer.unobserve(media);
        }
      });
    });

    lazyMedia.forEach(function (media) {
      observer.observe(media);
    });
  } else {
    // Fallback for browsers without IntersectionObserver support
    lazyMedia.forEach(function (media) {
      if (media.tagName.toLowerCase() === 'img') {
        media.src = media.dataset.src;
      } else if (media.tagName.toLowerCase() === 'source') {
        media.srcset = media.dataset.srcset;
      } else if (media.tagName.toLowerCase() === 'iframe') {
        media.src = media.dataset.src;
      } else if (media.tagName.toLowerCase() === 'video') {
        var source = media.querySelector('source');
        source.src = source.dataset.src;
        media.poster = media.dataset.poster;
        media.load();
      } else if (media.classList.contains('lazy-bg')) {
        media.style.backgroundImage = 'url(' + media.dataset.bg + ')';
      }
    });
  }
});





















