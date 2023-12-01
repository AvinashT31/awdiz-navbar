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

document.addEventListener("DOMContentLoaded", function () {
  var software = document.getElementById("software-courses");
  var softwarecourse = document.getElementById("software-courese-page");

  software.addEventListener("click", function () {
    software.style.backgroundColor = "#007d6f";
    software.style.color = "#ffffff";
    softwarecourse.style.display = "flex";

    networking.style.display = "none";
    network.style.backgroundColor = "#edf8fa";
    network.style.color = "black";

    dmmarketing.style.display = "none";
    digital.style.backgroundColor = "#edf8fa";
    digital.style.color = "black";

    datascience.style.display = "none";
    dscience.style.backgroundColor = "#edf8fa";
    dscience.style.color = "black";

    machineleaning.style.display = "none";
    machine.style.backgroundColor = "#edf8fa";
    machine.style.color = "black";

    cybersecurity.style.display = "none";
    security.style.backgroundColor = "#edf8fa";
    security.style.color = "black";
  })


  var network = document.getElementById("networking-courses");
  var networking = document.getElementById("networking-courese-page");

  network.addEventListener("click", function () {
    networking.style.display = "flex";
    network.style.backgroundColor = "#007d6f";
    network.style.color = "#ffffff";

    software.style.backgroundColor = "initial";
    software.style.color = "initial";
    softwarecourse.style.display = "none";

    dmmarketing.style.display = "none";
    digital.style.backgroundColor = "#edf8fa";
    digital.style.color = "black";

    datascience.style.display = "none";
    dscience.style.backgroundColor = "#edf8fa";
    dscience.style.color = "black";

    machineleaning.style.display = "none";
    machine.style.backgroundColor = "#edf8fa";
    machine.style.color = "black";

    cybersecurity.style.display = "none";
    security.style.backgroundColor = "#edf8fa";
    security.style.color = "black";
  })


  var digital = document.getElementById("dm-courses");
  var dmmarketing = document.getElementById("dm-courese-page");

  digital.addEventListener("click", function () {
    dmmarketing.style.display = "flex";
    digital.style.backgroundColor = "#007d6f";
    digital.style.color = "#ffffff";

    networking.style.display = "none";
    network.style.backgroundColor = "#edf8fa";
    network.style.color = "black";

    software.style.backgroundColor = "initial";
    software.style.color = "initial";
    softwarecourse.style.display = "none";

    datascience.style.display = "none";
    dscience.style.backgroundColor = "#edf8fa";
    dscience.style.color = "black";

    machineleaning.style.display = "none";
    machine.style.backgroundColor = "#edf8fa";
    machine.style.color = "black";

    cybersecurity.style.display = "none";
    security.style.backgroundColor = "#edf8fa";
    security.style.color = "black";

  })

  var dscience = document.getElementById("ds-courses");
  var datascience = document.getElementById("dt-courese-page");

  dscience.addEventListener("click", function () {
    datascience.style.display = "flex";
    dscience.style.backgroundColor = "#007d6f";
    dscience.style.color = "#ffffff";

    dmmarketing.style.display = "none";
    digital.style.backgroundColor = "#edf8fa";
    digital.style.color = "black";

    networking.style.display = "none";
    network.style.backgroundColor = "#edf8fa";
    network.style.color = "black";

    software.style.backgroundColor = "initial";
    software.style.color = "initial";
    softwarecourse.style.display = "none";

    machineleaning.style.display = "none";
    machine.style.backgroundColor = "#edf8fa";
    machine.style.color = "black";

    cybersecurity.style.display = "none";
    security.style.backgroundColor = "#edf8fa";
    security.style.color = "black";
  })

  var machine = document.getElementById("ml-courses");
  var machineleaning = document.getElementById("ml-courese-page");

  machine.addEventListener("click", function () {
    machineleaning.style.display = "flex";
    machine.style.backgroundColor = "#007d6f";
    machine.style.color = "#ffffff";

    dmmarketing.style.display = "none";
    digital.style.backgroundColor = "#edf8fa";
    digital.style.color = "black";

    networking.style.display = "none";
    network.style.backgroundColor = "#edf8fa";
    network.style.color = "black";

    software.style.backgroundColor = "initial";
    software.style.color = "initial";
    softwarecourse.style.display = "none";

    datascience.style.display = "none";
    dscience.style.backgroundColor = "#edf8fa";
    dscience.style.color = "black";

    cybersecurity.style.display = "none";
    security.style.backgroundColor = "#edf8fa";
    security.style.color = "black";
  })

  var security = document.getElementById("cs-courses");
  var cybersecurity = document.getElementById("cs-courese-page");

  security.addEventListener("click", function () {
    cybersecurity.style.display = "flex";
    security.style.backgroundColor = "#007d6f";
    security.style.color = "#ffffff";

    software.style.backgroundColor = "initial";
    software.style.color = "initial";
    softwarecourse.style.display = "none";

    networking.style.display = "none";
    network.style.backgroundColor = "#edf8fa";
    network.style.color = "black";

    dmmarketing.style.display = "none";
    digital.style.backgroundColor = "#edf8fa";
    digital.style.color = "black";

    datascience.style.display = "none";
    dscience.style.backgroundColor = "#edf8fa";
    dscience.style.color = "black";

    machineleaning.style.display = "none";
    machine.style.backgroundColor = "#edf8fa";
    machine.style.color = "black";
  })

  // job-guarantee-program

  var jobsoftware = document.getElementById("guarentee-software");
  var displaysoftware = document.getElementById("job-software");

  jobsoftware.addEventListener("click", function () {
    jobsoftware.style.backgroundColor = "#007d6f";
    jobsoftware.style.color = "#ffffff";
    displaysoftware.style.display = "flex";

    displaynetworking.style.display = "none";
    jobnetwork.style.backgroundColor = "#edf8fa";
    jobnetwork.style.color = "black";

    displaydmmarketing.style.display = "none";
    jobdigital.style.backgroundColor = "#edf8fa";
    jobdigital.style.color = "black";

    displaydatascience.style.display = "none";
    jobdscience.style.backgroundColor = "#edf8fa";
    jobdscience.style.color = "black";

    displaymachineleaning.style.display = "none";
    jobmachine.style.backgroundColor = "#edf8fa";
    jobmachine.style.color = "black";

    displaycybersecurity.style.display = "none";
    jobsecurity.style.backgroundColor = "#edf8fa";
    jobsecurity.style.color = "black";

  })

  var jobnetwork = document.getElementById("guarentee-Networking");
  var displaynetworking = document.getElementById("job-networking");

  jobnetwork.addEventListener("click", function () {
    displaynetworking.style.display = "flex";
    jobnetwork.style.backgroundColor = "#007d6f";
    jobnetwork.style.color = "#ffffff";

    displaysoftware.style.display = "none";
    jobsoftware.style.backgroundColor = "#edf8fa";
    jobsoftware.style.color = "black";

    displaydmmarketing.style.display = "none";
    jobdigital.style.backgroundColor = "#edf8fa";
    jobdigital.style.color = "black";

    displaydatascience.style.display = "none";
    jobdscience.style.backgroundColor = "#edf8fa";
    jobdscience.style.color = "black";

    displaymachineleaning.style.display = "none";
    jobmachine.style.backgroundColor = "#edf8fa";
    jobmachine.style.color = "black";

    displaycybersecurity.style.display = "none";
    jobsecurity.style.backgroundColor = "#edf8fa";
    jobsecurity.style.color = "black";
  })


  var jobdigital = document.getElementById("guarentee-dm");
  var displaydmmarketing = document.getElementById("job-dm");

  jobdigital.addEventListener("click", function () {
    displaydmmarketing.style.display = "flex";
    jobdigital.style.backgroundColor = "#007d6f";
    jobdigital.style.color = "#ffffff";

    displaysoftware.style.display = "none";
    jobsoftware.style.backgroundColor = "#edf8fa";
    jobsoftware.style.color = "black";

    displaynetworking.style.display = "none";
    jobnetwork.style.backgroundColor = "#edf8fa";
    jobnetwork.style.color = "black";

    displaydatascience.style.display = "none";
    jobdscience.style.backgroundColor = "#edf8fa";
    jobdscience.style.color = "black";

    displaymachineleaning.style.display = "none";
    jobmachine.style.backgroundColor = "#edf8fa";
    jobmachine.style.color = "black";

    displaycybersecurity.style.display = "none";
    jobsecurity.style.backgroundColor = "#edf8fa";
    jobsecurity.style.color = "black";

  })

  var jobdscience = document.getElementById("guarentee-ds");
  var displaydatascience = document.getElementById("job-ds");

  jobdscience.addEventListener("click", function () {
    displaydatascience.style.display = "flex";
    jobdscience.style.backgroundColor = "#007d6f";
    jobdscience.style.color = "#ffffff";

    displaydmmarketing.style.display = "none";
    jobdigital.style.backgroundColor = "#edf8fa";
    jobdigital.style.color = "black";

    displaysoftware.style.display = "none";
    jobsoftware.style.backgroundColor = "#edf8fa";
    jobsoftware.style.color = "black";

    displaynetworking.style.display = "none";
    jobnetwork.style.backgroundColor = "#edf8fa";
    jobnetwork.style.color = "black";

    displaymachineleaning.style.display = "none";
    jobmachine.style.backgroundColor = "#edf8fa";
    jobmachine.style.color = "black";

    displaycybersecurity.style.display = "none";
    jobsecurity.style.backgroundColor = "#edf8fa";
    jobsecurity.style.color = "black";
  })

  var jobmachine = document.getElementById("guarentee-ml");
  var displaymachineleaning = document.getElementById("job-ml");

  jobmachine.addEventListener("click", function () {
    displaymachineleaning.style.display = "flex";
    jobmachine.style.backgroundColor = "#007d6f";
    jobmachine.style.color = "#ffffff";

    displaydatascience.style.display = "none";
    jobdscience.style.backgroundColor = "#edf8fa";
    jobdscience.style.color = "black";

    displaydmmarketing.style.display = "none";
    jobdigital.style.backgroundColor = "#edf8fa";
    jobdigital.style.color = "black";

    displaysoftware.style.display = "none";
    jobsoftware.style.backgroundColor = "#edf8fa";
    jobsoftware.style.color = "black";

    displaynetworking.style.display = "none";
    jobnetwork.style.backgroundColor = "#edf8fa";
    jobnetwork.style.color = "black";

    displaycybersecurity.style.display = "none";
    jobsecurity.style.backgroundColor = "#edf8fa";
    jobsecurity.style.color = "black";

  })

  var jobsecurity = document.getElementById("guarentee-cs");
  var displaycybersecurity = document.getElementById("job-cs");

  jobsecurity.addEventListener("click", function () {
    displaycybersecurity.style.display = "flex";
    jobsecurity.style.backgroundColor = "#007d6f";
    jobsecurity.style.color = "#ffffff";

    displaymachineleaning.style.display = "none";
    jobmachine.style.backgroundColor = "#edf8fa";
    jobmachine.style.color = "black";

    displaydatascience.style.display = "none";
    jobdscience.style.backgroundColor = "#edf8fa";
    jobdscience.style.color = "black";

    displaydmmarketing.style.display = "none";
    jobdigital.style.backgroundColor = "#edf8fa";
    jobdigital.style.color = "black";

    displaysoftware.style.display = "none";
    jobsoftware.style.backgroundColor = "#edf8fa";
    jobsoftware.style.color = "black";

    displaynetworking.style.display = "none";
    jobnetwork.style.backgroundColor = "#edf8fa";
    jobnetwork.style.color = "black";

  })


  // Blog-page

  var blogsoftware = document.getElementById("blog-software");
  var blogsoftwarepage = document.getElementById("blog-software-page");

  blogsoftware.addEventListener("click", function () {
    blogsoftwarepage.style.display = "flex";
    blogsoftware.style.backgroundColor = "#007d6f";
    blogsoftware.style.color = "#ffffff";

    blognetworkingpage.style.display = "none";
    blognetwork.style.backgroundColor = "#edf8fA";
    blognetwork.style.color = "black";

    blogdmpage.style.display = "none";
    blogdigital.style.backgroundColor = "#edf8fA";
    blogdigital.style.color = "black";

    blogdspage.style.display = "none";
    blogdscience.style.backgroundColor = "#edf8fA";
    blogdscience.style.color = "black";

    blogmlpage.style.display = "none";
    blogmachine.style.backgroundColor = "#edf8fA";
    blogmachine.style.color = "black";

    blogcspage.style.display = "none";
    blogsecurity.style.backgroundColor = "#edf8fA";
    blogsecurity.style.color = "black";
  })


  var blognetwork = document.getElementById("blog-network");
  var blognetworkingpage = document.getElementById("blog-networking-page");

  blognetwork.addEventListener("click", function () {
    blognetworkingpage.style.display = "flex";
    blognetwork.style.backgroundColor = "#007d6f";
    blognetwork.style.color = "#ffffff";

    blogsoftwarepage.style.display = "none";
    blogsoftware.style.backgroundColor = "#edf8fA";
    blogsoftware.style.color = "black";

    blogdmpage.style.display = "none";
    blogdigital.style.backgroundColor = "#edf8fA";
    blogdigital.style.color = "black";

    blogdspage.style.display = "none";
    blogdscience.style.backgroundColor = "#edf8fA";
    blogdscience.style.color = "black";

    blogmlpage.style.display = "none";
    blogmachine.style.backgroundColor = "#edf8fA";
    blogmachine.style.color = "black";

    blogcspage.style.display = "none";
    blogsecurity.style.backgroundColor = "#edf8fA";
    blogsecurity.style.color = "black";
  })


  var blogdigital = document.getElementById("blog-dm");
  var blogdmpage = document.getElementById("blog-dm-page");

  blogdigital.addEventListener("click", function () {
    blogdmpage.style.display = "flex";
    blogdigital.style.backgroundColor = "#007d6f";
    blogdigital.style.color = "#ffffff";

    blognetworkingpage.style.display = "none";
    blognetwork.style.backgroundColor = "#edf8fA";
    blognetwork.style.color = "black";

    blogsoftwarepage.style.display = "none";
    blogsoftware.style.backgroundColor = "#edf8fA";
    blogsoftware.style.color = "black";

    blogdspage.style.display = "none";
    blogdscience.style.backgroundColor = "#edf8fA";
    blogdscience.style.color = "black";

    blogmlpage.style.display = "none";
    blogmachine.style.backgroundColor = "#edf8fA";
    blogmachine.style.color = "black";

    blogcspage.style.display = "none";
    blogsecurity.style.backgroundColor = "#edf8fA";
    blogsecurity.style.color = "black";

  })

  var blogdscience = document.getElementById("blog-ds");
  var blogdspage = document.getElementById("blog-ds-page");

  blogdscience.addEventListener("click", function () {
    blogdspage.style.display = "flex";
    blogdscience.style.backgroundColor = "#007d6f";
    blogdscience.style.color = "#ffffff";

    blogdmpage.style.display = "none";
    blogdigital.style.backgroundColor = "#edf8fA";
    blogdigital.style.color = "black";

    blognetworkingpage.style.display = "none";
    blognetwork.style.backgroundColor = "#edf8fA";
    blognetwork.style.color = "black";

    blogsoftwarepage.style.display = "none";
    blogsoftware.style.backgroundColor = "#edf8fA";
    blogsoftware.style.color = "black";

    blogmlpage.style.display = "none";
    blogmachine.style.backgroundColor = "#edf8fA";
    blogmachine.style.color = "black";

    blogcspage.style.display = "none";
    blogsecurity.style.backgroundColor = "#edf8fA";
    blogsecurity.style.color = "black";
  })

  var blogmachine = document.getElementById("blog-ml");
  var blogmlpage = document.getElementById("blog-ml-page");

  blogmachine.addEventListener("click", function () {
    blogmlpage.style.display = "flex";
    blogmachine.style.backgroundColor = "#007d6f";
    blogmachine.style.color = "#ffffff";

    blogdspage.style.display = "none";
    blogdscience.style.backgroundColor = "#edf8fA";
    blogdscience.style.color = "black";

    blogdmpage.style.display = "none";
    blogdigital.style.backgroundColor = "#edf8fA";
    blogdigital.style.color = "black";

    blognetworkingpage.style.display = "none";
    blognetwork.style.backgroundColor = "#edf8fA";
    blognetwork.style.color = "black";

    blogsoftwarepage.style.display = "none";
    blogsoftware.style.backgroundColor = "#edf8fA";
    blogsoftware.style.color = "black";

    blogcspage.style.display = "none";
    blogsecurity.style.backgroundColor = "#edf8fA";
    blogsecurity.style.color = "black";
  })

  var blogsecurity = document.getElementById("blog-cs");
  var blogcspage = document.getElementById("blog-cs-page");

  blogsecurity.addEventListener("click", function () {
    blogcspage.style.display = "flex";
    blogsecurity.style.backgroundColor = "#007d6f";
    blogsecurity.style.color = "#ffffff";

    blogmlpage.style.display = "none";
    blogmachine.style.backgroundColor = "#edf8fA";
    blogmachine.style.color = "black";

    blogdspage.style.display = "none";
    blogdscience.style.backgroundColor = "#edf8fA";
    blogdscience.style.color = "black";

    blogdmpage.style.display = "none";
    blogdigital.style.backgroundColor = "#edf8fA";
    blogdigital.style.color = "black";

    blognetworkingpage.style.display = "none";
    blognetwork.style.backgroundColor = "#edf8fA";
    blognetwork.style.color = "black";

    blogsoftwarepage.style.display = "none";
    blogsoftware.style.backgroundColor = "#edf8fA";
    blogsoftware.style.color = "black";

  })

})


// GlOBAL-SECTIONS

//1.global-header

document.addEventListener("DOMContentLoaded", function () {
  var globalNav = document.getElementById("global-nav");
  globalNav.innerHTML = `  <div id="topbar-section" class="topbar-section" >
      <div class="container"><div class="topbar-inner">
        <div class="top-bar-left pull-left"><ul><li><i class="fa fa-phone"></i> &nbsp; Phone:  7678000695 | &nbsp; 8657202255</li><li><i class="fa fa-envelope"></i> &nbsp; Email: <a href="mailto:contact@awdiz.in">contact@awdiz.in</a></li></ul></div>
        <div id="top-right" class="top-bar-right pull-right"><ul><li><a href="https://www.facebook.com/awdiz" target="_blank"><i class="fa-brands fa-facebook"></i></a></li><li><a href="https://www.youtube.com/channel/UCib2IAJ7I-42CUKzDoXC6ag" target="_blank"><i class="fa-brands fa-youtube"></i></a></li><li><a href="https://www.instagram.com/awesome_studies_awdiz" target="_blank"><i class="fa-brands fa-instagram"></i></a></li><li style="padding: 0px 14px 0px;">Mumbai Pune Bangalore</li><li><button class="glow-on-hover" type="button" style="width:125px;height:auto"><a href="https://www.awdiz.in/contact">Enroll Now</a></button></li></ul></div></div></div></div>

  <div id="navbar" class="navbar">
      <div class="container">
          <div onmouseover="handleClick(event)" class="navmenu">
              <div class="navone">
                  <div class="navlogo navtwo-menu">
                      <img src="img/awdiz.png" class="img-fluid" alt="">
                  </div>
              </div>
              <div class="navdropdown">
                  <div class="navcourses" id="navbar">
                  <p style="padding: 28px 35px;">All Courses</p>
                  </div>
                  <div onmouseover="displaycontent(event)" class="show-item" id="hover-content">
                      <div class="show-item-left">
                          <h3>Course Categories</h3>
                          <ul>
                              <li class="menu-item" style="background-color: white;" data-target="show-right-itm-one" id="opensoftwarepage">Software Development <i
                                      id="icon" style="padding-left: 17px; color: #272566;"
                                      class="fa-solid fa-angle-right"></i></li>
                              <li class="menu-item" id="openinfrapage" data-target="show-right-itm-two">Networking infrastructure <i id="icon-one"
                                      style="color: #edf8fa;" class="fa-solid fa-angle-right arrow"></i></li>
                              <li class="menu-item" id="opendmpage" data-target="show-right-itm-three">Digital Marketing <i id="icon-two"
                                      style="padding-left: 57px; color: #edf8fa;" class="fa-solid fa-angle-right"></i>
                              </li>
                              <li class="menu-item" id="opendspage" data-target="show-right-itm-four">Data science <i id="icon-three"
                                      style="padding-left: 83px; color: #edf8fa;" class="fa-solid fa-angle-right"></i>
                              </li>
                              <li class="menu-item" id="openmlpage" data-target="show-right-itm-five">Machine Learning <i id="icon-four"
                                      style="padding-left: 47px; color: #edf8fa;" class="fa-solid fa-angle-right"></i>
                              </li>
                              <li class="menu-item" id="opencspage" data-target="show-right-itm-six">Cyber security <i id="icon-five"
                                      style="padding-left: 71px; color: #edf8fa;" class="fa-solid fa-angle-right"></i>
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
                                              <li>Angular 8 - 12 Training</li>
                                              <li>Node.js Training</li>
                                              <li>React.js Training</li>
                                              <li>JavaScript + TypeScript Training</li>
                                              <li>FullStack Web Developer Training</li>
                                              <li>FullStack Java Developer Training</li>
                                              <li>UI UX Development</li>
                                              <li>MVC with Dot Net Training</li>
                                          </ul>
                                      </div>
                                      <div class="show-item-two">
                                          <h3>Job guarantee program</h3>
                                          <div class="show-item-two-container">
                                              <div class="show-item-two-container-box">

                                              </div>
                                              <p>MERN Master</p>
                                          </div>
                                          <div class="show-item-two-container">
                                              <div class="show-item-two-container-box">

                                              </div>
                                              <p>MEAN Master</p>
                                          </div>
                                          <div class="show-item-two-container">
                                              <div class="show-item-two-container-box">

                                              </div>
                                              <p>Java Full Stack</p>
                                          </div>
                                          <div class="show-item-two-container">
                                              <div class="show-item-two-container-box">

                                              </div>
                                              <p>Dot Net Full Stack</p>
                                          </div>
                                          <div class="show-item-two-container">
                                              <div class="show-item-two-container-box">

                                              </div>
                                              <p>Blockchain Fullstack</p>
                                          </div>
                                      </div>
                                      <div class="show-item-three">
                                          <h3>Master's Program</h3>
                                          <div class="show-item-container">
                                              <div class="show-item-container-box">

                                              </div>
                                              <div class="show-item-container-box-one">
                                                  <p>MERN Stack</p>
                                                  <p class="item">Duration - 6 months</p>
                                              </div>
                                          </div>
                                          <div class="show-item-container">
                                              <div class="show-item-container-box">

                                              </div>
                                              <div class="show-item-container-box-one">
                                                  <p>MEAN Stack</p>
                                                  <p class="item">Duration - 6 months</p>
                                              </div>
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
                                              <li>CCNA Training</li>
                                              <li>CCNP Training</li>
                                              <li>Hardware and Networking Course</li>
                                              <li>AWS Training</li>
                                              <li>Windows Administrator L1 Training</li>
                                              <li>Linux Administrator L1 Training</li>
                                              <li>Microsoft Azure Devops</li>
                                              <li>Job Guaranteed Program</li>
                                          </ul>
                                      </div>
                                      <div class="show-item-two">
                                          <h3>Job guarantee program</h3>
                                          <div class="show-item-two-container">
                                              <div class="show-item-two-container-box">

                                              </div>
                                              <p>MERN Master</p>
                                          </div>
                                          <!-- <div class="show-item-two-container">
                                                  <div class="show-item-two-container-box">
                      
                                                  </div>
                                                  <p>MEAN Master</p>
                                              </div>
                                              <div class="show-item-two-container">
                                                  <div class="show-item-two-container-box">
                      
                                                  </div>
                                                  <p>Java Full Stack</p>
                                              </div>
                                              <div class="show-item-two-container">
                                                  <div class="show-item-two-container-box">
                      
                                                  </div>
                                                  <p>Dot Net Full Stack</p>
                                              </div>
                                              <div class="show-item-two-container">
                                                  <div class="show-item-two-container-box">
                      
                                                  </div>
                                                  <p>Blockchain Fullstack</p>
                                              </div> -->
                                      </div>
                                      <div class="show-item-three" class="content-div">
                                          <h3>Master's Program</h3>
                                          <div class="show-item-container">
                                              <div class="show-item-container-box">

                                              </div>
                                              <div class="show-item-container-box-one">
                                                  <p>L1 Network Engineer</p>
                                                  <p class="item">Duration - 6 months</p>
                                              </div>
                                          </div>
                                          <div class="show-item-container">
                                              <div class="show-item-container-box">

                                              </div>
                                              <div class="show-item-container-box-one">
                                                  <p>L2 Network Engineer</p>
                                                  <p class="item">Duration - 6 months</p>
                                              </div>
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
                                              <li>SEO Training</li>
                                              <li>SMM Training</li>
                                              <li>Google WEB Analytics Training</li>
                                              <li>Google Adwords & Adsense Training</li>
                                              <li>UI UX Designer Training</li>
                                          </ul>
                                      </div>
                                      <div class="show-item-two">
                                          <h3>Job guarantee program</h3>
                                          <div class="show-item-two-container">
                                              <div class="show-item-two-container-box">

                                              </div>
                                              <p>MERN Master</p>
                                          </div>
                                          <!-- <div class="show-item-two-container">
                                                  <div class="show-item-two-container-box">
                      
                                                  </div>
                                                  <p>MEAN Master</p>
                                              </div>
                                              <div class="show-item-two-container">
                                                  <div class="show-item-two-container-box">
                      
                                                  </div>
                                                  <p>Java Full Stack</p>
                                              </div>
                                              <div class="show-item-two-container">
                                                  <div class="show-item-two-container-box">
                      
                                                  </div>
                                                  <p>Dot Net Full Stack</p>
                                              </div>
                                              <div class="show-item-two-container">
                                                  <div class="show-item-two-container-box">
                      
                                                  </div>
                                                  <p>Blockchain Fullstack</p>
                                              </div> -->
                                      </div>
                                      <div class="show-item-three">
                                          <h3>Master's Program</h3>
                                          <div class="show-item-container">
                                              <div class="show-item-container-box">

                                              </div>
                                              <div class="show-item-container-box-one">
                                                  <p>Advanced Digital Marketing</p>
                                                  <p class="item">Duration - 6 months</p>
                                              </div>
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
                                              <li>Data Science with R Training</li>
                                              <li>Data Science with Python Training</li>
                                              <li>Data Science with SAS Training</li>
                                              <li>Data Science with Tableau Training</li>
                                              <li>Data Science with Power BI Training</li>
                                              <li>Data Analyst Training</li>
                                              <li>Natural Language Processing NLP Training</li>
                                          </ul>
                                      </div>
                                      <div class="show-item-two">
                                          <h3>Job guarantee program</h3>
                                          <div class="show-item-two-container">
                                              <div class="show-item-two-container-box">

                                              </div>
                                              <p>MERN Master</p>
                                          </div>
                                          <div class="show-item-two-container">
                                              <div class="show-item-two-container-box">

                                              </div>
                                              <p>MEAN Master</p>
                                          </div>
                                          <div class="show-item-two-container">
                                              <div class="show-item-two-container-box">

                                              </div>
                                              <p>Java Full Stack</p>
                                          </div>
                                          <!-- <div class="show-item-two-container">
                                                  <div class="show-item-two-container-box">
                      
                                                  </div>
                                                  <p>Dot Net Full Stack</p>
                                              </div>
                                              <div class="show-item-two-container">
                                                  <div class="show-item-two-container-box">
                      
                                                  </div>
                                                  <p>Blockchain Fullstack</p>
                                              </div> -->
                                      </div>
                                      <div class="show-item-three">
                                          <h3>Master's Program</h3>
                                          <div class="show-item-container">
                                              <div class="show-item-container-box">

                                              </div>
                                              <div class="show-item-container-box-one">
                                                  <p>AWS & Microsoft Azure Devops</p>
                                                  <p class="item">Duration - 6 months</p>
                                              </div>
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
                                              <li>Machine Learning & AI</li>
                                              <li>Machine Learning & Cloud</li>
                                              <li>Machine Learning & Deep Learning</li>
                                              <li>Machine Learning & NLP</li>
                                          </ul>
                                      </div>
                                      <div class="show-item-two">
                                          <h3>Job guarantee program</h3>
                                          <!-- <div class="show-item-two-container">
                                                  <div class="show-item-two-container-box">
                      
                                                  </div>
                                                  <p>MERN Master</p>
                                              </div>
                                              <div class="show-item-two-container">
                                                  <div class="show-item-two-container-box">
                      
                                                  </div>
                                                  <p>MEAN Master</p>
                                              </div> -->
                                          <div class="show-item-two-container">
                                              <div class="show-item-two-container-box">

                                              </div>
                                              <p>Java Full Stack</p>
                                          </div>
                                          <div class="show-item-two-container">
                                              <div class="show-item-two-container-box">

                                              </div>
                                              <p>Dot Net Full Stack</p>
                                          </div>
                                          <div class="show-item-two-container">
                                              <div class="show-item-two-container-box">

                                              </div>
                                              <p>Blockchain Fullstack</p>
                                          </div>
                                      </div>
                                      <div class="show-item-three">
                                          <h3>Master's Program</h3>
                                          <div class="show-item-container">
                                              <div class="show-item-container-box">

                                              </div>
                                              <div class="show-item-container-box-one">
                                                  <p>Machine Learning & AI</p>
                                                  <p class="item">Duration - 6 months</p>
                                              </div>
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
                                              <li>Certified Ethical Hacker CEH v11</li>
                                              <li>Mobile Application Security & Mobile Device Pentesting</li>
                                              <li>Web Application Hacking & Bug Bounty</li>
                                              <li>Web Server Hacking & Network Pentesting</li>
                                          </ul>
                                      </div>
                                      <div class="show-item-two">
                                          <h3>Job guarantee program</h3>
                                          <div class="show-item-two-container">
                                              <div class="show-item-two-container-box">

                                              </div>
                                              <p>MERN Master</p>
                                          </div>
                                          <!-- <div class="show-item-two-container">
                                                  <div class="show-item-two-container-box">
                      
                                                  </div>
                                                  <p>MEAN Master</p>
                                              </div>
                                              <div class="show-item-two-container">
                                                  <div class="show-item-two-container-box">
                      
                                                  </div>
                                                  <p>Java Full Stack</p>
                                              </div>
                                              <div class="show-item-two-container">
                                                  <div class="show-item-two-container-box">
                      
                                                  </div>
                                                  <p>Dot Net Full Stack</p>
                                              </div>
                                              <div class="show-item-two-container">
                                                  <div class="show-item-two-container-box">
                      
                                                  </div>
                                                  <p>Blockchain Fullstack</p>
                                              </div> -->
                                      </div>
                                      <div class="show-item-three">
                                          <h3>Master's Program</h3>
                                          <div class="show-item-container">
                                              <div class="show-item-container-box">

                                              </div>
                                              <div class="show-item-container-box-one">
                                                  <p>Advanced Penetration Testing Course</p>
                                                  <p class="item">Duration - 6 months</p>
                                              </div>
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
                      <li>Women IT jobs</li>
                      <li>Career Restart</li>
                      <li>Placement</li>
                      <li>Review</li>
                      <li>Student Corner</li>
                      <li>About</li>
                      <!-- <li>About</li>
                          <li> Blockchain</li> -->
                  </ul>
              </div>
          </div>
      </div>
  </div>`
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
            <div class="software-menu-submenu">
              <ul>
                <li><a href="">Data Science with R Training</a></li>
                <li><a href="">Data Science with Python Training</a></li>
                <li><a href="">Data Science with SAS Training</a></li>
                <li><a href="">Data Science with Tableau Training</a></li>
                <li><a href="">Data Science with Tableau Training</a></li>
                <li><a href="">Data Science with Tableau Training</a></li>
                <li><a href="">Data Science with Tableau Training</a></li>
              </ul>
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
            <div class="software-menu-submenu">
              <ul>
                <li><a href="">Data Science with R Training</a></li>
                <li><a href="">Data Science with Python Training</a></li>
                <li><a href="">Data Science with SAS Training</a></li>
                <li><a href="">Data Science with Tableau Training</a></li>
                <li><a href="">Data Science with Tableau Training</a></li>
                <li><a href="">Data Science with Tableau Training</a></li>
                <li><a href="">Data Science with Tableau Training</a></li>
              </ul>
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
            <div class="software-menu-submenu">
              <ul>
                <li><a href="">Data Science with R Training</a></li>
                <li><a href="">Data Science with Python Training</a></li>
                <li><a href="">Data Science with SAS Training</a></li>
                <li><a href="">Data Science with Tableau Training</a></li>
                <li><a href="">Data Science with Tableau Training</a></li>
                <li><a href="">Data Science with Tableau Training</a></li>
                <li><a href="">Data Science with Tableau Training</a></li>
              </ul>
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
            <div class="software-menu-submenu">
              <ul>
                <li><a href="">Data Science with R Training</a></li>
                <li><a href="">Data Science with Python Training</a></li>
                <li><a href="">Data Science with SAS Training</a></li>
                <li><a href="">Data Science with Tableau Training</a></li>
                <li><a href="">Data Science with Tableau Training</a></li>
                <li><a href="">Data Science with Tableau Training</a></li>
                <li><a href="">Data Science with Tableau Training</a></li>
              </ul>
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
            <div class="software-menu-submenu">
              <ul>
                <li><a href="">Data Science with R Training</a></li>
                <li><a href="">Data Science with Python Training</a></li>
                <li><a href="">Data Science with SAS Training</a></li>
                <li><a href="">Data Science with Tableau Training</a></li>
                <li><a href="">Data Science with Tableau Training</a></li>
                <li><a href="">Data Science with Tableau Training</a></li>
                <li><a href="">Data Science with Tableau Training</a></li>
              </ul>
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
            <div class="software-menu-submenu">
              <ul>
                <li><a href="">Data Science with R Training</a></li>
                <li><a href="">Data Science with Python Training</a></li>
                <li><a href="">Data Science with SAS Training</a></li>
                <li><a href="">Data Science with Tableau Training</a></li>
                <li><a href="">Data Science with Tableau Training</a></li>
                <li><a href="">Data Science with Tableau Training</a></li>
                <li><a href="">Data Science with Tableau Training</a></li>
              </ul>
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
                </div>
                <ul style="display: none;" id="women-job">
                  <li style="padding-top: 15px">Content-one</li>
                  <li>Content-two</li>
                </ul>
              </li>
              <li><a href="">Career Restart</a></li>
              <li><a href="">Placement</a></li>
              <li><a href="">Review</a></li>
              <li><a href="">Student Corner</a></li>
              <li><a href="">About</a></li>
              <li><a href="">About</a></li>
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
  var isVisible = false;

  women.addEventListener("click", function () {
    if (isVisible) {
      displayWomenJob.style.display = "none";
    } else {
      displayWomenJob.style.display = "block";
    }
    isVisible = !isVisible;
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
                  <h2>Popular Courses in India</h2>
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
                  <h2>Trending Careers in India</h2>
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
                      <div class="social-icon">
                          <img style="width: 100%; height: 100%;" class="image-fluid" src="img/star.svg" alt="">
                      </div>
                      <div style="margin-left: 10px;" class="social-icon">
                          <img style="width: 100%; height: 100%;" class="image-fluid" src="img/star.svg" alt="">
                      </div>
                      <div style="margin-left: 10px;" class="social-icon">
                          <img style="width: 100%; height: 100%;" class="image-fluid" src="img/star.svg" alt="">
                      </div>
                      <div style="margin-left: 10px;" class="social-icon">
                          <img style="width: 100%; height: 100%;" class="image-fluid" src="img/star.svg" alt="">
                      </div>
                      <div style="margin-left: 10px;" class="social-icon">
                          <img style="width: 100%; height: 100%;" class="image-fluid" src="img/star.svg" alt="">
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
          <div class="footer-social-page">
              <div class="footer-declaimer">
                  <p>Disclaimer</p>
                  <p style="padding-top: 15px;">We do not claim any logo & some* Images used within the website and
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

document.addEventListener("DOMContentLoaded", function () {
  var sharebutton = document.getElementById("share-buttons");

  sharebutton.innerHTML = `
    <div class="share-buttons">
      <div class="share-button" onclick="shareOnTwitter()">
        <div class="share-button-secondary">
          <div class="share-button-secondary-content">Share on Twitter</div>
        </div>
        <div class="share-button-primary">
          <i class="share-button-icon fa-brands fa-twitter"></i>
        </div>
      </div>
      <div class="share-button" onclick="shareOnFacebook()">
        <div class="share-button-secondary">
          <div class="share-button-secondary-content">Share on Facebook</div>
        </div>
        <div class="share-button-primary">
          <i class="share-button-icon fa-brands fa-facebook"></i>
        </div>
      </div>
      <div class="share-button" onclick="shareOnLinkedIn()">
        <div class="share-button-secondary">
          <div class="share-button-secondary-content">Share on LinkedIn</div>
        </div>
        <div class="share-button-primary">
          <i class="share-button-icon fa-brands fa-linkedin"></i>
        </div>
      </div>
      <div class="share-button" onclick="shareOnWhatsApp()">
        <div class="share-button-secondary">
          <div class="share-button-secondary-content">Share on Whatsapp</div>
        </div>
        <div class="share-button-primary">
          <i class="share-button-icon fa-brands fa-whatsapp"></i>
        </div>
      </div>
    </div>
    `
})

function shareOnTwitter() {
  var n = "https://twitter.com/intent/tweet?url=" + encodeURIComponent(document.location); window.open(n)
}
function shareOnFacebook() {
  var n = "https://www.facebook.com/sharer.php?u=" + encodeURIComponent(document.location); window.open(n)
}
function shareOnLinkedIn() {
  var n = "https://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(document.location); window.open(n)
}
function shareOnWhatsApp() {
  var n = "https://wa.me/?text=" + encodeURIComponent(document.location); window.open(n)
}


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

document.addEventListener("DOMContentLoaded", function () {
  var formmodal = document.getElementById("form-modal");
  console.log(formmodal, "formmodal");

  formmodal.innerHTML = `
        
    <section class="form-modal">
    <div class="overlay" onclick="toggleForm()"></div>
    <div class="sticky-form">
      <form action="/submit-form" method="post">
        <div class="form-row">
          <input type="text" id="full-name" name="full_name" placeholder="Full Name" required>
          <input type="tel" id="phone-number" name="phone_number" placeholder="Phone Number" required>
          <input type="email" id="email" name="email" placeholder="Email" required>
          <input type="text" id="message" name="message" placeholder="Message" required>
          <button type="submit">Request on Call</button>
        </div>
      </form>
    </div>
    <div class="message-icon" onclick="toggleForm()"><i class="fa-regular fa-message"></i></div>
  </section>
    `;
});

function toggleForm() {
  var form = document.querySelector('.sticky-form');
  var overlay = document.querySelector('.overlay');
  var isFormVisible = form.style.display === 'flex';

  form.style.display = isFormVisible ? 'none' : 'flex';
  overlay.style.display = isFormVisible ? 'none' : 'block';
}


// 7.phonemeu

document.addEventListener("DOMContentLoaded", function () {
  var globalphonemenu = document.getElementById("phonemenu");

  globalphonemenu.innerHTML = `
  <div class="phonemenu">
    <div class="phonemenu-one">
      <ul>
        <li><a href=""><i class="fa-solid fa-phone phone"></i><span class="span-number">+91 8657202255</span></a></li>
      </ul>
    </div>
    <div class="phonemenu-one">
      <ul>
        <li><a href=""><i class="fa-brands fa-whatsapp whatsapp"></i><span class="span-number">+91 8657202255</span></a></li>
      </ul>
    </div>
  </div>
  `
})



// FULLSTACKPAGE

document.addEventListener("DOMContentLoaded", function () {

  var detailsawdiz = document.getElementById("detailsawdiz");
  var displaydetailsawdiz = document.getElementById("displaydetailsawdiz")

  detailsawdiz.addEventListener('click', function () {
    displaydetailsawdiz.style.display = "block"
    detailsawdiz.style.backgroundColor = "#007d6f";
    detailsawdiz.style.color = "white";

    displaycertificationawdiz.style.display = "none"
    certificationawdiz.style.backgroundColor = "#edf8fA";
    certificationawdiz.style.color = "black";

    displaytrainingawdiz.style.display = "none"
    trainingawdiz.style.backgroundColor = "#edf8fA";
    trainingawdiz.style.color = "black";

    displaysyallbus.style.display = "none"
    syallbus.style.backgroundColor = "#edf8fA";
    syallbus.style.color = "black";
  });



  var certificationawdiz = document.getElementById("certificationawdiz")
  var displaycertificationawdiz = document.getElementById("displaycertificationawdiz")

  certificationawdiz.addEventListener('click', function () {
    displaycertificationawdiz.style.display = "block"
    certificationawdiz.style.backgroundColor = "#007d6f";
    certificationawdiz.style.color = "white";

    displaytrainingawdiz.style.display = "none"
    trainingawdiz.style.backgroundColor = "#edf8fA";
    trainingawdiz.style.color = "black";

    displaysyallbus.style.display = "none"
    syallbus.style.backgroundColor = "#edf8fA";
    syallbus.style.color = "black";

    displaydetailsawdiz.style.display = "none"
    detailsawdiz.style.backgroundColor = "#edf8fA";
    detailsawdiz.style.color = "black";
  });

  var trainingawdiz = document.getElementById("trainingawdiz")
  var displaytrainingawdiz = document.getElementById("displaytrainingawdiz")

  trainingawdiz.addEventListener('click', function () {
    displaytrainingawdiz.style.display = "block"
    trainingawdiz.style.backgroundColor = "#007d6f";
    trainingawdiz.style.color = "white";

    displaycertificationawdiz.style.display = "none"
    certificationawdiz.style.backgroundColor = "#edf8fA";
    certificationawdiz.style.color = "black";

    displaysyallbus.style.display = "none"
    syallbus.style.backgroundColor = "#edf8fA";
    syallbus.style.color = "black";

    displaydetailsawdiz.style.display = "none"
    detailsawdiz.style.backgroundColor = "#edf8fA";
    detailsawdiz.style.color = "black";

  });

  var syallbus = document.getElementById("syallbus")
  var displaysyallbus = document.getElementById("displaysyallbus")

  syallbus.addEventListener('click', function () {
    displaysyallbus.style.display = "block"
    syallbus.style.backgroundColor = "#007d6f";
    syallbus.style.color = "white";

    displaytrainingawdiz.style.display = "none"
    trainingawdiz.style.backgroundColor = "#edf8fA";
    trainingawdiz.style.color = "black";

    displaycertificationawdiz.style.display = "none"
    certificationawdiz.style.backgroundColor = "#edf8fA";
    certificationawdiz.style.color = "black";

    displaydetailsawdiz.style.display = "none"
    detailsawdiz.style.backgroundColor = "#edf8fA";
    detailsawdiz.style.color = "black";
  });



  var coveredtask = document.getElementById("covered-task")
  var displaycoveredtask = document.getElementById("display-covered-task")

  coveredtask.addEventListener('click', function () {
    displaycoveredtask.style.display = "block"
    coveredtask.style.backgroundColor = "#007d6f";
    coveredtask.style.color = "white";

    displaycoveredcommerece.style.display = "none"
    coveredcommerece.style.backgroundColor = "white";
    coveredcommerece.style.color = "black";

    displaycoveredsocial.style.display = "none"
    coveredsocial.style.backgroundColor = "white";
    coveredsocial.style.color = "black";

    displaycoveredonline.style.display = "none"
    coveredonline.style.backgroundColor = "white";
    coveredonline.style.color = "black";

    displaycoveredreal.style.display = "none"
    coveredreal.style.backgroundColor = "white";
    coveredreal.style.color = "black";


  });


  var coveredcommerece = document.getElementById("covered-commerece")
  var displaycoveredcommerece = document.getElementById("display-covered-commerece")

  coveredcommerece.addEventListener('click', function () {
    displaycoveredcommerece.style.display = "block"
    coveredcommerece.style.backgroundColor = "#007d6f";
    coveredcommerece.style.color = "white";

    displaycoveredsocial.style.display = "none"
    coveredsocial.style.backgroundColor = "white";
    coveredsocial.style.color = "black";

    displaycoveredonline.style.display = "none"
    coveredonline.style.backgroundColor = "white";
    coveredonline.style.color = "black";

    displaycoveredreal.style.display = "none"
    coveredreal.style.backgroundColor = "white";
    coveredreal.style.color = "black";

    displaycoveredtask.style.display = "none"
    coveredtask.style.backgroundColor = "white";
    coveredtask.style.color = "black";

  });



  var coveredsocial = document.getElementById("covered-social")
  var displaycoveredsocial = document.getElementById("display-covered-social")

  coveredsocial.addEventListener('click', function () {
    displaycoveredsocial.style.display = "block"
    coveredsocial.style.backgroundColor = "#007d6f";
    coveredsocial.style.color = "white";

    displaycoveredonline.style.display = "none"
    coveredonline.style.backgroundColor = "white";
    coveredonline.style.color = "black";

    displaycoveredreal.style.display = "none"
    coveredreal.style.backgroundColor = "white";
    coveredreal.style.color = "black";

    displaycoveredtask.style.display = "none"
    coveredtask.style.backgroundColor = "white";
    coveredtask.style.color = "black";

    displaycoveredcommerece.style.display = "none"
    coveredcommerece.style.backgroundColor = "white";
    coveredcommerece.style.color = "black";

  });


  var coveredonline = document.getElementById("covered-online")
  var displaycoveredonline = document.getElementById("display-covered-online")

  coveredonline.addEventListener('click', function () {
    displaycoveredonline.style.display = "block"
    coveredonline.style.backgroundColor = "#007d6f";
    coveredonline.style.color = "white";

    displaycoveredtask.style.display = "none"
    coveredtask.style.backgroundColor = "white";
    coveredtask.style.color = "black";

    displaycoveredcommerece.style.display = "none"
    coveredcommerece.style.backgroundColor = "white";
    coveredcommerece.style.color = "black";

    displaycoveredsocial.style.display = "none"
    coveredsocial.style.backgroundColor = "white";
    coveredsocial.style.color = "black";

    displaycoveredreal.style.display = "none"
    coveredreal.style.backgroundColor = "white";
    coveredreal.style.color = "black";

  });


  var coveredreal = document.getElementById("covered-real")
  var displaycoveredreal = document.getElementById("display-covered-real")

  coveredreal.addEventListener('click', function () {
    displaycoveredreal.style.display = "block"
    coveredreal.style.backgroundColor = "#007d6f";
    coveredreal.style.color = "white";

    displaycoveredonline.style.display = "none"
    coveredonline.style.backgroundColor = "white";
    coveredonline.style.color = "black";

    displaycoveredtask.style.display = "none"
    coveredtask.style.backgroundColor = "white";
    coveredtask.style.color = "black";

    displaycoveredcommerece.style.display = "none"
    coveredcommerece.style.backgroundColor = "white";
    coveredcommerece.style.color = "black";

    displaycoveredsocial.style.display = "none"
    coveredsocial.style.backgroundColor = "white";
    coveredsocial.style.color = "black";

  });

  //QUESTION ANSWER

  var plus = document.getElementById("plus");
  var xmark = document.getElementById("x-mark");
  var ans = document.getElementById("ans");

  plus.addEventListener("click", function () {
    ans.style.display = "block";
    xmark.style.display = "block"
    plus.style.display = "none"
  })

  xmark.addEventListener("click", function () {
    ans.style.display = "none";
    xmark.style.display = "none"
    plus.style.display = "block"
  })

  var plusone = document.getElementById("plusone");
  var xmarkone = document.getElementById("x-markone");
  var ansone = document.getElementById("ansone");

  plusone.addEventListener("click", function () {
    ansone.style.display = "block";
    xmarkone.style.display = "block"
    plusone.style.display = "none"
  })

  xmarkone.addEventListener("click", function () {
    ansone.style.display = "none";
    xmarkone.style.display = "none"
    plusone.style.display = "block"
  })

  var plustwo = document.getElementById("plustwo");
  var xmarktwo = document.getElementById("x-marktwo");
  var anstwo = document.getElementById("anstwo");

  plustwo.addEventListener("click", function () {
    anstwo.style.display = "block";
    xmarktwo.style.display = "block"
    plustwo.style.display = "none"
  })

  xmarktwo.addEventListener("click", function () {
    anstwo.style.display = "none";
    xmarktwo.style.display = "none"
    plustwo.style.display = "block"
  })

  var plusthree = document.getElementById("plusthree");
  var xmarkthree = document.getElementById("x-markthree");
  var ansthree = document.getElementById("ansthree");

  plusthree.addEventListener("click", function () {
    ansthree.style.display = "block";
    xmarkthree.style.display = "block"
    plusthree.style.display = "none"
  })

  xmarkthree.addEventListener("click", function () {
    ansthree.style.display = "none";
    xmarkthree.style.display = "none"
    plusthree.style.display = "block"
  })


})


// UI UX page

document.addEventListener("DOMContentLoaded", function () {

  var uxdetailsawdiz = document.getElementById("uxdetailsawdiz");
  var uxdisplaydetailsawdiz = document.getElementById("uxdisplaydetailsawdiz")

  uxdetailsawdiz.addEventListener('click', function () {
    uxdisplaydetailsawdiz.style.display = "block"
    uxdetailsawdiz.style.backgroundColor = "#007d6f";
    uxdetailsawdiz.style.color = "white";

    uxdisplaycertificationawdiz.style.display = "none"
    uxcertificationawdiz.style.backgroundColor = "#edf8fA";
    uxcertificationawdiz.style.color = "black";

    uxdisplaytrainingawdiz.style.display = "none"
    uxtrainingawdiz.style.backgroundColor = "#edf8fA";
    uxtrainingawdiz.style.color = "black";

    uxdisplaysyallbus.style.display = "none"
    uxsyallbus.style.backgroundColor = "#edf8fA";
    uxsyallbus.style.color = "black";
  });



  var uxcertificationawdiz = document.getElementById("uxcertificationawdiz")
  var uxdisplaycertificationawdiz = document.getElementById("uxdisplaycertificationawdiz")

  uxcertificationawdiz.addEventListener('click', function () {
    uxdisplaycertificationawdiz.style.display = "block"
    uxcertificationawdiz.style.backgroundColor = "#007d6f";
    uxcertificationawdiz.style.color = "white";

    uxdisplaydetailsawdiz.style.display = "none"
    uxdetailsawdiz.style.backgroundColor = "#edf8fA";
    uxdetailsawdiz.style.color = "black";

    uxdisplaytrainingawdiz.style.display = "none"
    uxtrainingawdiz.style.backgroundColor = "#edf8fA";
    uxtrainingawdiz.style.color = "black";

    uxdisplaysyallbus.style.display = "none"
    uxsyallbus.style.backgroundColor = "#edf8fA";
    uxsyallbus.style.color = "black";

  });

  var uxtrainingawdiz = document.getElementById("uxtrainingawdiz")
  var uxdisplaytrainingawdiz = document.getElementById("uxdisplaytrainingawdiz")

  uxtrainingawdiz.addEventListener('click', function () {
    uxdisplaytrainingawdiz.style.display = "block"
    uxtrainingawdiz.style.backgroundColor = "#007d6f";
    uxtrainingawdiz.style.color = "white";

    uxdisplaycertificationawdiz.style.display = "none"
    uxcertificationawdiz.style.backgroundColor = "#edf8fA";
    uxcertificationawdiz.style.color = "black";

    uxdisplaydetailsawdiz.style.display = "none"
    uxdetailsawdiz.style.backgroundColor = "#edf8fA";
    uxdetailsawdiz.style.color = "black";

    uxdisplaysyallbus.style.display = "none"
    uxsyallbus.style.backgroundColor = "#edf8fA";
    uxsyallbus.style.color = "black";


  });

  var uxsyallbus = document.getElementById("uxsyallbus")
  var uxdisplaysyallbus = document.getElementById("uxdisplaysyallbus")

  uxsyallbus.addEventListener('click', function () {
    uxdisplaysyallbus.style.display = "block"
    uxsyallbus.style.backgroundColor = "#007d6f";
    uxsyallbus.style.color = "white";

    uxdisplaytrainingawdiz.style.display = "none"
    uxtrainingawdiz.style.backgroundColor = "#edf8fA";
    uxtrainingawdiz.style.color = "black";

    uxdisplaycertificationawdiz.style.display = "none"
    uxcertificationawdiz.style.backgroundColor = "#edf8fA";
    uxcertificationawdiz.style.color = "black";

    uxdisplaydetailsawdiz.style.display = "none"
    uxdetailsawdiz.style.backgroundColor = "#edf8fA";
    uxdetailsawdiz.style.color = "black";
  });

})


// PAGE5

document.addEventListener("DOMContentLoaded", function () {
  var developementmentor = document.getElementById("developement-mentor");
  var displaydevelopmentmentor = document.getElementById("display-development-mentor")

  developementmentor.addEventListener('click', function () {
    displaydevelopmentmentor.style.display = "flex";
    developementmentor.style.backgroundColor = "#007d6f";
    developementmentor.style.borderTopRightRadius = "50px";
    developementmentor.style.borderBottomRightRadius = "50px";
    developementmentor.style.color = "white"

    displaydevelopmentinterview.style.display = "none";
    developementinterview.style.backgroundColor = "white";
    developementinterview.style.borderTopRightRadius = "initital";
    developementinterview.style.borderBottomRightRadius = "initital";
    developementinterview.style.color = "black"

    displaydevelopmentnetwork.style.display = "none";
    developementnetwork.style.backgroundColor = "white";
    developementnetwork.style.borderTopRightRadius = "initital";
    developementnetwork.style.borderBottomRightRadius = "initital";
    developementnetwork.style.color = "black"

    displaydevelopmenthackathon.style.display = "none";
    developementhackathon.style.backgroundColor = "white";
    developementhackathon.style.borderTopRightRadius = "initital";
    developementhackathon.style.borderBottomRightRadius = "initital";
    developementhackathon.style.color = "black"

    displaydevelopmentindustry.style.display = "none";
    developementindustry.style.backgroundColor = "white";
    developementindustry.style.borderTopRightRadius = "initital";
    developementindustry.style.borderBottomRightRadius = "initital";
    developementindustry.style.color = "black"

    displayindustry.style.display = "none";
    industry.style.backgroundColor = "white";
    industry.style.borderTopRightRadius = "initital";
    industry.style.borderBottomRightRadius = "initital";
    industry.style.color = "black";
  })



  var developementinterview = document.getElementById("developement-interview");
  var displaydevelopmentinterview = document.getElementById("display-development-interview")

  developementinterview.addEventListener('click', function () {
    displaydevelopmentinterview.style.display = "flex";
    developementinterview.style.backgroundColor = "#007d6f";
    developementinterview.style.borderTopRightRadius = "50px";
    developementinterview.style.borderBottomRightRadius = "50px";
    developementinterview.style.color = "white"


    displaydevelopmentmentor.style.display = "none";
    developementmentor.style.backgroundColor = "white";
    developementmentor.style.borderTopRightRadius = "initital";
    developementmentor.style.borderBottomRightRadius = "initital";
    developementmentor.style.color = "black";

    displaydevelopmentnetwork.style.display = "none";
    developementnetwork.style.backgroundColor = "white";
    developementnetwork.style.borderTopRightRadius = "initital";
    developementnetwork.style.borderBottomRightRadius = "initital";
    developementnetwork.style.color = "black";

    displaydevelopmenthackathon.style.display = "none";
    developementhackathon.style.backgroundColor = "white";
    developementhackathon.style.borderTopRightRadius = "initital";
    developementhackathon.style.borderBottomRightRadius = "initital";
    developementhackathon.style.color = "black";

    displaydevelopmentindustry.style.display = "none";
    developementindustry.style.backgroundColor = "white";
    developementindustry.style.borderTopRightRadius = "initital";
    developementindustry.style.borderBottomRightRadius = "initital";
    developementindustry.style.color = "black";

    displayindustry.style.display = "none";
    industry.style.backgroundColor = "white";
    industry.style.borderTopRightRadius = "initital";
    industry.style.borderBottomRightRadius = "initital";
    industry.style.color = "black";
  })



  var developementnetwork = document.getElementById("developement-network");
  var displaydevelopmentnetwork = document.getElementById("display-development-network")

  developementnetwork.addEventListener('click', function () {
    displaydevelopmentnetwork.style.display = "flex";
    developementnetwork.style.backgroundColor = "#007d6f";
    developementnetwork.style.borderTopRightRadius = "50px";
    developementnetwork.style.borderBottomRightRadius = "50px";
    developementnetwork.style.color = "white"

    displaydevelopmentinterview.style.display = "none";
    developementinterview.style.backgroundColor = "white";
    developementinterview.style.borderTopRightRadius = "initital";
    developementinterview.style.borderBottomRightRadius = "initital";
    developementinterview.style.color = "black";

    displaydevelopmentmentor.style.display = "none";
    developementmentor.style.backgroundColor = "white";
    developementmentor.style.borderTopRightRadius = "initital";
    developementmentor.style.borderBottomRightRadius = "initital";
    developementmentor.style.color = "black";

    displaydevelopmenthackathon.style.display = "none";
    developementhackathon.style.backgroundColor = "white";
    developementhackathon.style.borderTopRightRadius = "initital";
    developementhackathon.style.borderBottomRightRadius = "initital";
    developementhackathon.style.color = "black";

    displaydevelopmentindustry.style.display = "none";
    developementindustry.style.backgroundColor = "white";
    developementindustry.style.borderTopRightRadius = "initital";
    developementindustry.style.borderBottomRightRadius = "initital";
    developementindustry.style.color = "black";

    displayindustry.style.display = "none";
    industry.style.backgroundColor = "white";
    industry.style.borderTopRightRadius = "initital";
    industry.style.borderBottomRightRadius = "initital";
    industry.style.color = "black";
  })



  var developementhackathon = document.getElementById("developement-hackathon");
  var displaydevelopmenthackathon = document.getElementById("display-development-hackathon")

  developementhackathon.addEventListener('click', function () {
    displaydevelopmenthackathon.style.display = "flex";
    developementhackathon.style.backgroundColor = "#007d6f";
    developementhackathon.style.borderTopRightRadius = "50px";
    developementhackathon.style.borderBottomRightRadius = "50px";
    developementhackathon.style.color = "white"

    displaydevelopmentnetwork.style.display = "none";
    developementnetwork.style.backgroundColor = "white";
    developementnetwork.style.borderTopRightRadius = "initital";
    developementnetwork.style.borderBottomRightRadius = "initital";
    developementnetwork.style.color = "black";

    displaydevelopmentinterview.style.display = "none";
    developementinterview.style.backgroundColor = "white";
    developementinterview.style.borderTopRightRadius = "initital";
    developementinterview.style.borderBottomRightRadius = "initital";
    developementinterview.style.color = "black";

    displaydevelopmentmentor.style.display = "none";
    developementmentor.style.backgroundColor = "white";
    developementmentor.style.borderTopRightRadius = "initital";
    developementmentor.style.borderBottomRightRadius = "initital";
    developementmentor.style.color = "black";

    displaydevelopmentindustry.style.display = "none";
    developementindustry.style.backgroundColor = "white";
    developementindustry.style.borderTopRightRadius = "initital";
    developementindustry.style.borderBottomRightRadius = "initital";
    developementindustry.style.color = "black";

    displayindustry.style.display = "none";
    industry.style.backgroundColor = "white";
    industry.style.borderTopRightRadius = "initital";
    industry.style.borderBottomRightRadius = "initital";
    industry.style.color = "black";
  })



  var developementindustry = document.getElementById("developement-industry");
  var displaydevelopmentindustry = document.getElementById("display-development-industry")

  developementindustry.addEventListener('click', function () {
    displaydevelopmentindustry.style.display = "flex";
    developementindustry.style.backgroundColor = "#007d6f";
    developementindustry.style.borderTopRightRadius = "50px";
    developementindustry.style.borderBottomRightRadius = "50px";
    developementindustry.style.color = "white"

    displaydevelopmenthackathon.style.display = "none";
    developementhackathon.style.backgroundColor = "white";
    developementhackathon.style.borderTopRightRadius = "initital";
    developementhackathon.style.borderBottomRightRadius = "initital";
    developementhackathon.style.color = "black";

    displaydevelopmentnetwork.style.display = "none";
    developementnetwork.style.backgroundColor = "white";
    developementnetwork.style.borderTopRightRadius = "initital";
    developementnetwork.style.borderBottomRightRadius = "initital";
    developementnetwork.style.color = "black";

    displaydevelopmentinterview.style.display = "none";
    developementinterview.style.backgroundColor = "white";
    developementinterview.style.borderTopRightRadius = "initital";
    developementinterview.style.borderBottomRightRadius = "initital";
    developementinterview.style.color = "black";

    displaydevelopmentmentor.style.display = "none";
    developementmentor.style.backgroundColor = "white";
    developementmentor.style.borderTopRightRadius = "initital";
    developementmentor.style.borderBottomRightRadius = "initital";
    developementmentor.style.color = "black";

    displayindustry.style.display = "none";
    industry.style.backgroundColor = "white";
    industry.style.borderTopRightRadius = "initital";
    industry.style.borderBottomRightRadius = "initital";
    industry.style.color = "black";
  })

  var industry = document.getElementById("industry");
  var displayindustry = document.getElementById("display-industry")

  industry.addEventListener('click', function () {
    displayindustry.style.display = "flex";
    industry.style.backgroundColor = "#007d6f";
    industry.style.borderTopRightRadius = "50px";
    industry.style.borderBottomRightRadius = "50px";
    industry.style.color = "white"

    displaydevelopmentindustry.style.display = "none";
    developementindustry.style.backgroundColor = "white";
    developementindustry.style.borderTopRightRadius = "initital";
    developementindustry.style.borderBottomRightRadius = "initital";
    developementindustry.style.color = "black";

    displaydevelopmenthackathon.style.display = "none";
    developementhackathon.style.backgroundColor = "white";
    developementhackathon.style.borderTopRightRadius = "initital";
    developementhackathon.style.borderBottomRightRadius = "initital";
    developementhackathon.style.color = "black";

    displaydevelopmentnetwork.style.display = "none";
    developementnetwork.style.backgroundColor = "white";
    developementnetwork.style.borderTopRightRadius = "initital";
    developementnetwork.style.borderBottomRightRadius = "initital";
    developementnetwork.style.color = "black";

    displaydevelopmentinterview.style.display = "none";
    developementinterview.style.backgroundColor = "white";
    developementinterview.style.borderTopRightRadius = "initital";
    developementinterview.style.borderBottomRightRadius = "initital";
    developementinterview.style.color = "black";

    displaydevelopmentmentor.style.display = "none";
    developementmentor.style.backgroundColor = "white";
    developementmentor.style.borderTopRightRadius = "initital";
    developementmentor.style.borderBottomRightRadius = "initital";
    developementmentor.style.color = "black";
  })

  var nonit = document.getElementById("non-it");
  var displaynonit = document.getElementById("display-non-it");

  nonit.addEventListener('click', function () {
    displaynonit.style.display = "block";
    nonit.style.backgroundColor = "white";

    displaynonengineering.style.display = "none";
    nonEngineering.style.backgroundColor = "#edf8fa";

    displaycareergap.style.display = "none";
    careergap.style.backgroundColor = "#edf8fa";

    displaymncs.style.display = "none";
    MNC.style.backgroundColor = "#edf8fa";

    displayallsenior.style.display = "none";
    allsenior.style.backgroundColor = "#edf8fa";
  })

  var nonEngineering = document.getElementById("non-Engineering");
  var displaynonengineering = document.getElementById("display-non-engineering");

  nonEngineering.addEventListener('click', function () {
    displaynonengineering.style.display = "block";
    nonEngineering.style.backgroundColor = "white";

    displaynonit.style.display = "none";
    nonit.style.backgroundColor = "#edf8fa";

    displaycareergap.style.display = "none";
    careergap.style.backgroundColor = "#edf8fa";

    displaymncs.style.display = "none";
    MNC.style.backgroundColor = "#edf8fa";

    displayallsenior.style.display = "none";
    allsenior.style.backgroundColor = "#edf8fa";
  })

  var careergap = document.getElementById("career-gap");
  var displaycareergap = document.getElementById("display-career-gap");

  careergap.addEventListener('click', function () {
    displaycareergap.style.display = "block";
    careergap.style.backgroundColor = "white";

    displaynonit.style.display = "none";
    nonit.style.backgroundColor = "#edf8fa";

    displaynonengineering.style.display = "none";
    nonEngineering.style.backgroundColor = "#edf8fa";

    displaymncs.style.display = "none";
    MNC.style.backgroundColor = "#edf8fa";

    displayallsenior.style.display = "none";
    allsenior.style.backgroundColor = "#edf8fa";
  })

  var MNC = document.getElementById("M-N-C");
  var displaymncs = document.getElementById("display-mncs");

  MNC.addEventListener('click', function () {
    displaymncs.style.display = "block";
    MNC.style.backgroundColor = "white";

    displaycareergap.style.display = "none";
    careergap.style.backgroundColor = "#edf8fa";

    displaynonit.style.display = "none";
    nonit.style.backgroundColor = "#edf8fa";

    displaynonengineering.style.display = "none";
    nonEngineering.style.backgroundColor = "#edf8fa";

    displayallsenior.style.display = "none";
    allsenior.style.backgroundColor = "#edf8fa";
  })

  var allsenior = document.getElementById("all-senior");
  var displayallsenior = document.getElementById("display-all-senior");

  allsenior.addEventListener('click', function () {
    displayallsenior.style.display = "block";
    allsenior.style.backgroundColor = "white";

    displaycareergap.style.display = "none";
    careergap.style.backgroundColor = "#edf8fa";

    displaynonit.style.display = "none";
    nonit.style.backgroundColor = "#edf8fa";

    displaynonengineering.style.display = "none";
    nonEngineering.style.backgroundColor = "#edf8fa";

    displaymncs.style.display = "none";
    MNC.style.backgroundColor = "#edf8fa";
  })
})




