function handleClick(event) {
    event.preventDefault();

    var hoverDiv = document.getElementById('navbar');
    var hoverDisplayDiv = document.getElementById('hover-content');
    var showrightitmone = document.getElementById("show-right-itm-one");
    var showrightitmtwo = document.getElementById("show-right-itm-two");
    var showrightitmthree = document.getElementById("show-right-itm-three");
    var showrightitmfour = document.getElementById("show-right-itm-four");
    var showrightitmfive = document.getElementById("show-right-itm-five");
    var showrightitmsix = document.getElementById("show-right-itm-six");
    var othermenu = document.getElementsByClassName("navtwo-menu");

    for (var i = 0; i < othermenu.length; i++) {
        othermenu[i].addEventListener('mouseover', function (event) {
            hoverDisplayDiv.classList.remove('flex-display');
        });
    }

    hoverDiv.addEventListener('mouseover', function (event) {
        hoverDisplayDiv.classList.add('flex-display');
        showrightitmone.style.display = "block";
        showrightitmtwo.style.display = "none";
        showrightitmthree.style.display = "none";
        showrightitmfour.style.display = "none";
        showrightitmfive.style.display = "none";
        showrightitmsix.style.display = "none";
    });

    hoverDiv.addEventListener('mouseout', function (event) {
        if (event.target !== hoverDiv && event.target !== hoverDisplayDiv) {
            hoverDisplayDiv.classList.remove('flex-display');
        }
    });

    hoverDisplayDiv.addEventListener('mouseover', function () {
        hoverDisplayDiv.classList.add('flex-display');
    });

    hoverDisplayDiv.addEventListener('mouseout', function () {
        hoverDisplayDiv.classList.remove('flex-display');
    });
}


function displaycontent(event) {

    var openstpage = document.getElementById("opensoftwarepage");
    var showrightitmone = document.getElementById("show-right-itm-one");
    var icon = document.getElementById("icon");

    openstpage.addEventListener("mouseover", function (event) {
        event.preventDefault();
        showrightitmone.style.display = "block";
        showrightitmtwo.style.display = "none";
        showrightitmthree.style.display = "none";
        showrightitmfour.style.display = "none";
        showrightitmfive.style.display = "none";
        showrightitmsix.style.display = "none";

        security.style.backgroundColor = "initial";
        ML.style.backgroundColor = "initial";
        science.style.backgroundColor = "initial";
        opendigitalmarketing.style.backgroundColor = "initial";
        openstpage.style.backgroundColor = "initial";
        openstpage.style.backgroundColor = "#ffffff";
        openinfra.style.backgroundColor = "initial";

        icon.style.color = "#272566";
        iconone.style.color = "#edf8fa";
        icontwo.style.color = "#edf8fa";
        iconthree.style.color = "#edf8fa";
        iconfour.style.color = "#edf8fa";
        iconfive.style.color = "#edf8fa";
    });


    showrightitmone.addEventListener('mouseover', function () {
        security.style.backgroundColor = "initial";
        ML.style.backgroundColor = "initial";
        science.style.backgroundColor = "initial";
        opendigitalmarketing.style.backgroundColor = "initial";
        openstpage.style.backgroundColor = "initial";
        openstpage.style.backgroundColor = "#ffffff";
        openinfra.style.backgroundColor = "initial";

        icon.style.color = "#272566";
        iconone.style.color = "#edf8fa";
        icontwo.style.color = "#edf8fa";
        iconthree.style.color = "#edf8fa";
        iconfour.style.color = "#edf8fa";
        iconfive.style.color = "#edf8fa";
    });


    var openinfra = document.getElementById("openinfrapage");
    var showrightitmtwo = document.getElementById("show-right-itm-two");
    var iconone = document.getElementById("icon-one")

    openinfra.addEventListener("mouseover", function (event) {
        event.preventDefault();
        showrightitmone.style.display = "none";
        showrightitmtwo.style.display = "block";
        showrightitmthree.style.display = "none";
        showrightitmfour.style.display = "none";
        showrightitmfive.style.display = "none";
        showrightitmsix.style.display = "none";

        security.style.backgroundColor = "initial";
        ML.style.backgroundColor = "initial";
        science.style.backgroundColor = "initial";
        opendigitalmarketing.style.backgroundColor = "initial";
        openstpage.style.backgroundColor = "initial";
        openstpage.style.backgroundColor = "initial";
        openinfra.style.backgroundColor = "#ffffff";

        icon.style.color = "#edf8fa";
        iconone.style.color = "#272566";
        icontwo.style.color = "#edf8fa";
        iconthree.style.color = "#edf8fa";
        iconfour.style.color = "#edf8fa";
        iconfive.style.color = "#edf8fa";

    });

    showrightitmtwo.addEventListener('mouseover', function () {
        security.style.backgroundColor = "initial";
        ML.style.backgroundColor = "initial";
        science.style.backgroundColor = "initial";
        opendigitalmarketing.style.backgroundColor = "initial";
        openstpage.style.backgroundColor = "initial";
        openstpage.style.color = "initial";
        openinfra.style.backgroundColor = "#ffffff";


        icon.style.color = "#edf8fa";
        iconone.style.color = "#272566";
        icontwo.style.color = "#edf8fa";
        iconthree.style.color = "#edf8fa";
        iconfour.style.color = "#edf8fa";
        iconfive.style.color = "#edf8fa";
    });


    var opendigitalmarketing = document.getElementById("opendmpage");
    var showrightitmthree = document.getElementById("show-right-itm-three");
    var icontwo = document.getElementById("icon-two")

    opendigitalmarketing.addEventListener("mouseover", function (event) {
        event.preventDefault();
        showrightitmone.style.display = "none";
        showrightitmtwo.style.display = "none";
        showrightitmthree.style.display = "block";
        showrightitmfour.style.display = "none";
        showrightitmfive.style.display = "none";
        showrightitmsix.style.display = "none";

        security.style.backgroundColor = "initial";
        ML.style.backgroundColor = "initial";
        science.style.backgroundColor = "initial";
        opendigitalmarketing.style.backgroundColor = "#ffffff";
        openstpage.style.backgroundColor = "initial";
        openstpage.style.color = "initial";
        openinfra.style.backgroundColor = "initial";

        icon.style.color = "#edf8fa";
        iconone.style.color = "#edf8fa";
        icontwo.style.color = "#272566";
        iconthree.style.color = "#edf8fa";
        iconfour.style.color = "#edf8fa";
        iconfive.style.color = "#edf8fa";
    });

    showrightitmthree.addEventListener('mouseover', function () {
        security.style.backgroundColor = "initial";
        ML.style.backgroundColor = "initial";
        science.style.backgroundColor = "initial";
        opendigitalmarketing.style.backgroundColor = "#ffffff";
        openstpage.style.backgroundColor = "initial";
        openstpage.style.color = "initial";
        openinfra.style.backgroundColor = "initial";

        icon.style.color = "#edf8fa";
        iconone.style.color = "#edf8fa";
        icontwo.style.color = "#272566";
        iconthree.style.color = "#edf8fa";
        iconfour.style.color = "#edf8fa";
        iconfive.style.color = "#edf8fa";
    });

    var science = document.getElementById("opendspage");
    var showrightitmfour = document.getElementById("show-right-itm-four");
    var iconthree = document.getElementById("icon-three")

    science.addEventListener("mouseover", function (event) {
        showrightitmone.style.display = "none";
        showrightitmtwo.style.display = "none";
        showrightitmthree.style.display = "none";
        showrightitmfour.style.display = "block";
        showrightitmfive.style.display = "none";
        showrightitmsix.style.display = "none";

        security.style.backgroundColor = "initial";
        ML.style.backgroundColor = "initial";
        science.style.backgroundColor = "#ffffff";
        opendigitalmarketing.style.backgroundColor = "initial";
        openstpage.style.backgroundColor = "initial";
        openstpage.style.color = "initial";
        openinfra.style.backgroundColor = "initial";

        icon.style.color = "#edf8fa";
        iconone.style.color = "#edf8fa";
        icontwo.style.color = "#edf8fa";
        iconthree.style.color = "#272566";
        iconfour.style.color = "#edf8fa";
        iconfive.style.color = "#edf8fa";
    });


    showrightitmfour.addEventListener('mouseover', function () {
        security.style.backgroundColor = "initial";
        ML.style.backgroundColor = "initial";
        science.style.backgroundColor = "#ffffff";
        opendigitalmarketing.style.backgroundColor = "initial";
        openstpage.style.backgroundColor = "initial";
        openstpage.style.color = "initial";
        openinfra.style.backgroundColor = "initial";

        icon.style.color = "#edf8fa";
        iconone.style.color = "#edf8fa";
        icontwo.style.color = "#edf8fa";
        iconthree.style.color = "#272566";
        iconfour.style.color = "#edf8fa";
        iconfive.style.color = "#edf8fa";
    });


    var ML = document.getElementById("openmlpage");
    var showrightitmfive = document.getElementById("show-right-itm-five");
    var iconfour = document.getElementById("icon-four")

    ML.addEventListener("mouseover", function (event) {
        event.preventDefault();
        showrightitmone.style.display = "none";
        showrightitmtwo.style.display = "none";
        showrightitmthree.style.display = "none";
        showrightitmfour.style.display = "none";
        showrightitmfive.style.display = "block";
        showrightitmsix.style.display = "none";

        security.style.backgroundColor = "initial";
        ML.style.backgroundColor = "#ffffff";
        science.style.backgroundColor = "initial";
        opendigitalmarketing.style.backgroundColor = "initial";
        openstpage.style.backgroundColor = "initial";
        openstpage.style.color = "initial";
        openinfra.style.backgroundColor = "initial";

        icon.style.color = "#edf8fa";
        iconone.style.color = "#edf8fa";
        icontwo.style.color = "#edf8fa";
        iconthree.style.color = "#edf8fa";
        iconfour.style.color = "#272566";
        iconfive.style.color = "#edf8fa";

    });

    showrightitmfive.addEventListener('mouseover', function () {
        security.style.backgroundColor = "initial";
        ML.style.backgroundColor = "#ffffff";
        science.style.backgroundColor = "initial";
        opendigitalmarketing.style.backgroundColor = "initial";
        openstpage.style.backgroundColor = "initial";
        openstpage.style.color = "initial";
        openinfra.style.backgroundColor = "initial";

        icon.style.color = "#edf8fa";
        iconone.style.color = "#edf8fa";
        icontwo.style.color = "#edf8fa";
        iconthree.style.color = "#edf8fa";
        iconfour.style.color = "#272566";
        iconfive.style.color = "#edf8fa";
    });

    var security = document.getElementById("opencspage");
    var showrightitmsix = document.getElementById("show-right-itm-six");
    var iconfive = document.getElementById("icon-five")

    security.addEventListener("mouseover", function (event) {
        event.preventDefault();
        showrightitmone.style.display = "none";
        showrightitmtwo.style.display = "none";
        showrightitmthree.style.display = "none";
        showrightitmfour.style.display = "none";
        showrightitmfive.style.display = "none";
        showrightitmsix.style.display = "block";

        security.style.backgroundColor = "#ffffff";
        ML.style.backgroundColor = "initial";
        science.style.backgroundColor = "initial";
        opendigitalmarketing.style.backgroundColor = "initial";
        openstpage.style.backgroundColor = "initial";
        openstpage.style.color = "initial";
        openinfra.style.backgroundColor = "initial";

        icon.style.color = "#edf8fa";
        iconone.style.color = "#edf8fa";
        icontwo.style.color = "#edf8fa";
        iconthree.style.color = "#edf8fa";
        iconfour.style.color = "#edf8fa";
        iconfive.style.color = "#272566";
    });

    showrightitmsix.addEventListener('mouseover', function () {
        security.style.backgroundColor = "#ffffff";
        ML.style.backgroundColor = "initial";
        science.style.backgroundColor = "initial";
        opendigitalmarketing.style.backgroundColor = "initial";
        openstpage.style.backgroundColor = "initial";
        openstpage.style.color = "initial";
        openinfra.style.backgroundColor = "initial";

        icon.style.color = "#edf8fa";
        iconone.style.color = "#edf8fa";
        icontwo.style.color = "#edf8fa";
        iconthree.style.color = "#edf8fa";
        iconfour.style.color = "#edf8fa";
        iconfive.style.color = "#272566";
    });

}



// mobile responsive hamburg script

document.addEventListener('DOMContentLoaded', (event) => {
    var hamburgicon = document.getElementById("hamburg-icon");
    var mobilesection = document.getElementById("mobile-view");

    hamburgicon.addEventListener('click', function () {
        mobilesection.style.display = (mobilesection.style.display === "block") ? "none" : "block";
    });
});



function handlecourse(event) {
    event.preventDefault()

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

}


function jobhandle(event) {
    event.preventDefault()

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
}


function blogpage(event) {
    event.preventDefault()

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

}



function mobilenavbar(event) {
    event.preventDefault();

    var allcourses = document.getElementById("allcourses");
    console.log(allcourses, "allcourses");

    var displaymobilecontent = document.getElementById("allcoursescontent");
    console.log(displaymobilecontent, "displaymobilecontent");

    var allcoursesarrow = document.getElementById("allcoursesarrow")

    allcourses.addEventListener('click', function () {
        displaymobilecontent.style.display = "block"
    });

    allcoursesarrow.addEventListener('click', function () {
        displaymobilecontent.style.display = "none"
    });
}