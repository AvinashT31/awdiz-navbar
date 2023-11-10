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
    var displaymobilecontent = document.getElementById("allcoursescontent");
    var allcoursesarrow = document.getElementById("allcoursesarrow")

    allcourses.addEventListener('click', function () {
        displaymobilecontent.style.display = "block"
    });

    allcoursesarrow.addEventListener('click', function () {
        displaymobilecontent.style.display = "none"
    });


    //mobile hamburg icon

    var hamburgicon = document.getElementById("hamburg-icon");
    var mobilesection = document.getElementById("mobile-view");

    hamburgicon.addEventListener('click', function () {
        mobilesection.style.display = (mobilesection.style.display === "block") ? "none" : "block";
    });
}


function displayevent(event) {
    event.preventDefault()

    var software = document.getElementById("software");
    var displaysoftwares = document.getElementById("software-page");
    var allcoursespage = document.getElementById("allcoursespage");
    console.log(allcoursespage, "allcoursespage")
    var displaymobilecontent = document.getElementById("allcoursescontent");
    console.log(displaymobilecontent, "displaymobilecontent")

    software.addEventListener('click', function () {
        displaysoftwares.style.display = "block"
        displaymobilecontent.style.display = "none"
    });

    allcoursespage.addEventListener('click', function () {
        displaysoftwares.style.display = "none"
        displaymobilecontent.style.display = "block"
    });


    var networks = document.getElementById("networks");
    var displaynetworks = document.getElementById("networking-page");

    networks.addEventListener("click", function () {
        displaynetworks.style.display = "block"
    })

    var digital = document.getElementById("digital");
    var displaydigital = document.getElementById("digital-page")

    digital.addEventListener("click", function () {
        displaydigital.style.display = "block"
    })


    var data = document.getElementById("data");
    var displaydata = document.getElementById("data-page")

    data.addEventListener("click", function () {
        displaydata.style.display = "block"
    })


    var machine = document.getElementById("machine");
    var displaylearning = document.getElementById("learning")

    machine.addEventListener("click", function () {
        displaylearning.style.display = "block"
    })

    var cyber = document.getElementById("cyber");
    var displaycybers = document.getElementById("cybers")

    cyber.addEventListener("click", function () {
        displaycybers.style.display = "block"
    })

}


//global-header

document.addEventListener("DOMContentLoaded", function () {
    var globalNav = document.getElementById("global-nav");

    globalNav.innerHTML = `  <div class="topbar-section" >
      <div class="container"><div class="topbar-inner">
        <div class="top-bar-left pull-left"><ul><li><i class="fa fa-phone"></i> &nbsp; Phone:  7678000695 | &nbsp; 8657202255</li><li><i class="fa fa-envelope"></i> &nbsp; Email: <a href="mailto:contact@awdiz.in">contact@awdiz.in</a></li></ul></div><div class="top-bar-right pull-right"><ul><li><a href="https://www.facebook.com/awdiz" target="_blank"><i class="fa-brands fa-facebook"></i></a></li><li><a href="https://www.youtube.com/channel/UCib2IAJ7I-42CUKzDoXC6ag" target="_blank"><i class="fa-brands fa-youtube"></i></a></li><li><a href="https://www.instagram.com/awesome_studies_awdiz" target="_blank"><i class="fa-brands fa-instagram"></i></a></li><li style="padding: 0px 14px 0px;">Mumbai Pune Bangalore</li><li><button class="glow-on-hover" type="button" style="width:125px;height:auto"><a href="https://www.awdiz.in/contact">Enroll Now</a></button></li></ul></div></div></div></div>

  <div class="navbar">
      <div class="nav">
          <div onmouseover="handleClick(event)" class="navmenu">
              <div class="navone">
                  <div class="navlogo navtwo-menu">
                      <img src="img/awdiz.png" class="img-fluid" alt="">
                  </div>
              </div>
              <div class="navdropdown">
                  <div class="navcourses" id="navbar">
                      <p>All Courses</p>
                  </div>
                  <div onmouseover="displaycontent(event)" class="show-item" id="hover-content">
                      <div class="show-item-left">
                          <h3>Course Categories</h3>
                          <ul>
                              <li style="background-color: white;" id="opensoftwarepage">Software Development <i
                                      id="icon" style="padding-left: 17px; color: #272566;"
                                      class="fa-solid fa-angle-right"></i></li>
                              <li id="openinfrapage">Networking infrastructure <i id="icon-one"
                                      style="color: #edf8fa;" class="fa-solid fa-angle-right arrow"></i></li>
                              <li id="opendmpage">Digital Marketing <i id="icon-two"
                                      style="padding-left: 57px; color: #edf8fa;" class="fa-solid fa-angle-right"></i>
                              </li>
                              <li id="opendspage">Data science <i id="icon-three"
                                      style="padding-left: 83px; color: #edf8fa;" class="fa-solid fa-angle-right"></i>
                              </li>
                              <li id="openmlpage">Machine Learning <i id="icon-four"
                                      style="padding-left: 47px; color: #edf8fa;" class="fa-solid fa-angle-right"></i>
                              </li>
                              <li id="opencspage">Cyber security <i id="icon-five"
                                      style="padding-left: 71px; color: #edf8fa;" class="fa-solid fa-angle-right"></i>
                              </li>
                          </ul>
                      </div>
                      <div class="show-content">
                          <div id="show-right-itm-one">
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


                          <div style="display: none;" id="show-right-itm-two">
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
                                      <div class="show-item-three">
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


                          <div style="display: none;" id="show-right-itm-three">
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


                          <div style="display: none;" id="show-right-itm-four">
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
                          <div style="display: none;" id="show-right-itm-five">
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
                          <div style="display: none;" id="show-right-itm-six">
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


//   global mobile header

// document.addEventListener("DOMContentLoaded", function () {
//     var mobile = document.getElementById("mobile-navigation");

//     mobile.innerHTML = ` <nav class="mobile-navbar">
//       <div class="mobile-nav">
//           <div class="moblie-nav-left">
//               <img src="img/awdiz.png" class="img-fluid" alt="">
//           </div>
//           <div onclick="mobilenavbar(event)" class="moblie-nav-right">
//               <div id="allcourses" class="mobile-nav-right-one">
//                   <p style="color: white;">All Courses</p>
//               </div>
//               <div class="mobile-nav-right-two" id="hamburg-icon">
//                   <i class="fa-solid fa-bars"></i>
//               </div>
//           </div>
//       </div>

//       <div onclick="displayevent(event)" style="display: none;" id="allcoursescontent" class="allcoursescontent">
//           <div class="displaymobilecontent">
//               <main class="allcoursespage">
//                   <div class="allcourses-heading">
//                       <div class="allcourses-heading-page">
//                           <div id="allcoursesarrow" class="allcourses-heading-left">
//                               <i class="fa-solid fa-arrow-left"></i>
//                           </div>
//                           <div class="allcourses-heading-right">
//                               <p>All Courses</p>
//                           </div>
//                       </div>
//                   </div>
//               </main>
//               <section class="allcourses-menu-section">
//                   <div class="allcourses-menu-list">
//                       <ul>
//                           <a href="#">
//                               <li id="software">Software Development <span ><i class="fa-solid fa-angle-right"></i></span> </li>
//                           </a>
//                           <a href="#">
//                               <li id="networks">Networking infrastructure <span id="allcoursespage"><i class="fa-solid fa-angle-right"></i></span></li>
//                           </a>
//                           <a href="#">
//                               <li id="digital">Digital Marketing <span id="allcoursespage"><i class="fa-solid fa-angle-right"></i></li>
//                           </a>
//                           <a href="#">
//                               <li id="data">Data science <span id="allcoursespage"><i class="fa-solid fa-angle-right"></i></li>
//                           </a>
//                           <a href="#">
//                               <li id="machine">Machine Learning <span id="allcoursespage"><i class="fa-solid fa-angle-right"></i></li>
//                           </a>
//                           <a href="#">
//                               <li id="cyber">Cyber security <span id="allcoursespage"><i class="fa-solid fa-angle-right"></i></li>
//                           </a>
//                       </ul>
//                   </div>
//               </section>
//           </div>
//       </div>

//     <div id="software-page" style="display:none" class="software-pages">
//       <main class="software">
//           <div class="software-heading">
//               <div class="software-heading-page">
//                   <div id="allcoursespage" class="software-heading-left">
//                       <a href="index.html"> <i class="fa-solid fa-arrow-left"></i></a>
//                   </div>
//                   <div class="software-heading-right">
//                       <p style="padding-left: 10px; ">Software Development</p>
//                   </div>
//               </div>
//           </div>
//       </main>
//       <section class="software-menu-section">
//           <div class="software-menu-list">
//               <div class="software-menu-courses">
//                   <h4>Individual Courses</h4>
//                   <div class="software-menu-submenu">
//                       <ul>
//                           <li>Data Science with R Training</li>
//                           <li>Data Science with Python Training</li>
//                           <li>Data Science with SAS Training</li>
//                           <li>Data Science with Tableau Training</li>
//                           <li>Data Science with Power BI Training</li>
//                           <li>Data Analyst Training</li>
//                           <li>Natural Language Processing NLP Training</li>
//                       </ul>
//                   </div>
//               </div>

//               <div class="software-menu-job-program">
//                   <h4>Job guarantee Program</h4>
//                   <div style="width: 90%; margin: auto; padding-top: 10px;">
//                       <div class="software-menu-job-submenu">
//                           <div class="software-menu-submenu">
//                               <div class="software-menu-job-submenu-box">

//                               </div>
//                               <p>MERN Master</p>
//                           </div>
//                       </div>
//                       <div class="software-menu-job-submenu">
//                           <div class="software-menu-submenu">
//                               <div class="software-menu-job-submenu-box">

//                               </div>
//                               <p>MEAN Master</p>
//                           </div>
//                       </div>
//                       <div class="software-menu-job-submenu">
//                           <div class="software-menu-submenu">
//                               <div class="software-menu-job-submenu-box">

//                               </div>
//                               <p>Java FullStack</p>
//                           </div>
//                       </div>
//                   </div>

//               </div>

//               <div class="software-master-program">
//                   <h4>Master's program</h4>
//                   <div style="width: 90%; margin: auto; padding-top: 10px;">
//                       <div class="software-master-program-submenu">
//                           <div class="software-master-program-menu">
//                               <div class="software-master-program-box">

//                               </div>
//                               <div class="software-master-program-box-one">
//                                   <p>Advanced Digital Marketing</p>
//                                   <p class="duration">Duration - 6 months</p>
//                               </div>
//                           </div>
//                       </div>

//                       <div class="software-master-program-submenu">
//                           <div class="software-master-program-menu">
//                               <div class="software-master-program-box">

//                               </div>
//                               <div class="software-master-program-box-one">
//                                   <p>Advanced Digital Marketing</p>
//                                   <p class="duration">Duration - 6 months</p>
//                               </div>
//                           </div>
//                       </div>

//                       <div class="software-master-program-submenu">
//                           <div class="software-master-program-menu">
//                               <div class="software-master-program-box">

//                               </div>
//                               <div class="software-master-program-box-one">
//                                   <p>Advanced Digital Marketing</p>
//                                   <p class="duration">Duration - 6 months</p>
//                               </div>
//                           </div>
//                       </div>
//                   </div>
//               </div>
//           </div>
//       </section>
//   </div>

//   <div style="display: none;" id="networking-page" class="networking-page">
//       <main class="software">
//           <div class="software-heading">
//               <div class="software-heading-page">
//                   <div class="software-heading-left">
//                       <a href="index.html"> <i class="fa-solid fa-arrow-left"></i></a>
//                   </div>
//                   <div class="software-heading-right">
//                       <p>Networking infrastructure</p>
//                   </div>
//               </div>
//           </div>
//       </main>
//       <section class="software-menu-section">
//           <div class="software-menu-list">
//               <div class="software-menu-courses">
//                   <h4>Individual Courses</h4>
//                   <div class="software-menu-submenu">
//                       <ul>
//                           <li>Data Science with R Training</li>
//                           <li>Data Science with Python Training</li>
//                           <li>Data Science with SAS Training</li>
//                           <li>Data Science with Tableau Training</li>
//                           <li>Data Science with Power BI Training</li>
//                           <li>Data Analyst Training</li>
//                           <li>Natural Language Processing NLP Training</li>
//                       </ul>
//                   </div>
//               </div>

//               <div class="software-menu-job-program">
//                   <h4>Job guarantee Program</h4>
//                   <div style="width: 90%; margin: auto; padding-top: 10px;">
//                       <div class="software-menu-job-submenu">
//                           <div class="software-menu-submenu">
//                               <div class="software-menu-job-submenu-box">

//                               </div>
//                               <p>MERN Master</p>
//                           </div>
//                       </div>
//                       <div class="software-menu-job-submenu">
//                           <div class="software-menu-submenu">
//                               <div class="software-menu-job-submenu-box">

//                               </div>
//                               <p>MEAN Master</p>
//                           </div>
//                       </div>
//                       <div class="software-menu-job-submenu">
//                           <div class="software-menu-submenu">
//                               <div class="software-menu-job-submenu-box">

//                               </div>
//                               <p>Java FullStack</p>
//                           </div>
//                       </div>
//                   </div>

//               </div>

//               <div class="software-master-program">
//                   <h4>Master's program</h4>
//                   <div style="width: 90%; margin: auto; padding-top: 10px;">
//                       <div class="software-master-program-submenu">
//                           <div class="software-master-program-menu">
//                               <div class="software-master-program-box">

//                               </div>
//                               <div class="software-master-program-box-one">
//                                   <p>Advanced Digital Marketing</p>
//                                   <p class="duration">Duration - 6 months</p>
//                               </div>
//                           </div>
//                       </div>

//                       <div class="software-master-program-submenu">
//                           <div class="software-master-program-menu">
//                               <div class="software-master-program-box">

//                               </div>
//                               <div class="software-master-program-box-one">
//                                   <p>Advanced Digital Marketing</p>
//                                   <p class="duration">Duration - 6 months</p>
//                               </div>
//                           </div>
//                       </div>

//                       <div class="software-master-program-submenu">
//                           <div class="software-master-program-menu">
//                               <div class="software-master-program-box">

//                               </div>
//                               <div class="software-master-program-box-one">
//                                   <p>Advanced Digital Marketing</p>
//                                   <p class="duration">Duration - 6 months</p>
//                               </div>
//                           </div>
//                       </div>
//                   </div>
//               </div>
//           </div>
//       </section>
//   </div>


//   <div style="display: none;" id="digital-page" class="digital-page">
//       <main class="software">
//           <div class="software-heading">
//               <div class="software-heading-page">
//                   <div class="software-heading-left">
//                       <a href="index.html"> <i class="fa-solid fa-arrow-left"></i></a>
//                   </div>
//                   <div class="software-heading-right">
//                       <p style="padding-left: 33px;">Digital Marketing</p>
//                   </div>
//               </div>
//           </div>
//       </main>

//       <section class="software-menu-section">
//           <div class="software-menu-list">
//               <div class="software-menu-courses">
//                   <h4>Individual Courses</h4>
//                   <div class="software-menu-submenu">
//                       <ul>
//                           <li>Data Science with R Training</li>
//                           <li>Data Science with Python Training</li>
//                           <li>Data Science with SAS Training</li>
//                           <li>Data Science with Tableau Training</li>
//                           <li>Data Science with Power BI Training</li>
//                           <li>Data Analyst Training</li>
//                           <li>Natural Language Processing NLP Training</li>
//                       </ul>
//                   </div>
//               </div>

//               <div class="software-menu-job-program">
//                   <h4>Job guarantee Program</h4>
//                   <div style="width: 90%; margin: auto; padding-top: 10px;">
//                       <div class="software-menu-job-submenu">
//                           <div class="software-menu-submenu">
//                               <div class="software-menu-job-submenu-box">

//                               </div>
//                               <p>MERN Master</p>
//                           </div>
//                       </div>
//                       <div class="software-menu-job-submenu">
//                           <div class="software-menu-submenu">
//                               <div class="software-menu-job-submenu-box">

//                               </div>
//                               <p>MEAN Master</p>
//                           </div>
//                       </div>
//                       <div class="software-menu-job-submenu">
//                           <div class="software-menu-submenu">
//                               <div class="software-menu-job-submenu-box">

//                               </div>
//                               <p>Java FullStack</p>
//                           </div>
//                       </div>
//                   </div>

//               </div>

//               <div class="software-master-program">
//                   <h4>Master's program</h4>
//                   <div style="width: 90%; margin: auto; padding-top: 10px;">
//                       <div class="software-master-program-submenu">
//                           <div class="software-master-program-menu">
//                               <div class="software-master-program-box">

//                               </div>
//                               <div class="software-master-program-box-one">
//                                   <p>Advanced Digital Marketing</p>
//                                   <p class="duration">Duration - 6 months</p>
//                               </div>
//                           </div>
//                       </div>

//                       <div class="software-master-program-submenu">
//                           <div class="software-master-program-menu">
//                               <div class="software-master-program-box">

//                               </div>
//                               <div class="software-master-program-box-one">
//                                   <p>Advanced Digital Marketing</p>
//                                   <p class="duration">Duration - 6 months</p>
//                               </div>
//                           </div>
//                       </div>

//                       <div class="software-master-program-submenu">
//                           <div class="software-master-program-menu">
//                               <div class="software-master-program-box">

//                               </div>
//                               <div class="software-master-program-box-one">
//                                   <p>Advanced Digital Marketing</p>
//                                   <p class="duration">Duration - 6 months</p>
//                               </div>
//                           </div>
//                       </div>
//                   </div>
//               </div>
//           </div>
//       </section>
//   </div>

//   <div class="data-page" id="data-page" style="display: none;">
//       <main class="software">
//           <div class="software-heading">
//               <div class="software-heading-page">
//                   <div class="software-heading-left">
//                       <a href="index.html"> <i class="fa-solid fa-arrow-left"></i></a>
//                   </div>
//                   <div class="software-heading-right">
//                       <p style="padding-left: 48px;">Data science</p>
//                   </div>
//               </div>
//           </div>
//       </main>

//       <section class="software-menu-section">
//           <div class="software-menu-list">
//               <div class="software-menu-courses">
//                   <h4>Individual Courses</h4>
//                   <div class="software-menu-submenu">
//                       <ul>
//                           <li>Data Science with R Training</li>
//                           <li>Data Science with Python Training</li>
//                           <li>Data Science with SAS Training</li>
//                           <li>Data Science with Tableau Training</li>
//                           <li>Data Science with Power BI Training</li>
//                           <li>Data Analyst Training</li>
//                           <li>Natural Language Processing NLP Training</li>
//                       </ul>
//                   </div>
//               </div>

//               <div class="software-menu-job-program">
//                   <h4>Job guarantee Program</h4>
//                   <div style="width: 90%; margin: auto; padding-top: 10px;">
//                       <div class="software-menu-job-submenu">
//                           <div class="software-menu-submenu">
//                               <div class="software-menu-job-submenu-box">

//                               </div>
//                               <p>MERN Master</p>
//                           </div>
//                       </div>
//                       <div class="software-menu-job-submenu">
//                           <div class="software-menu-submenu">
//                               <div class="software-menu-job-submenu-box">

//                               </div>
//                               <p>MEAN Master</p>
//                           </div>
//                       </div>
//                       <div class="software-menu-job-submenu">
//                           <div class="software-menu-submenu">
//                               <div class="software-menu-job-submenu-box">

//                               </div>
//                               <p>Java FullStack</p>
//                           </div>
//                       </div>
//                   </div>

//               </div>

//               <div class="software-master-program">
//                   <h4>Master's program</h4>
//                   <div style="width: 90%; margin: auto; padding-top: 10px;">
//                       <div class="software-master-program-submenu">
//                           <div class="software-master-program-menu">
//                               <div class="software-master-program-box">

//                               </div>
//                               <div class="software-master-program-box-one">
//                                   <p>Advanced Digital Marketing</p>
//                                   <p class="duration">Duration - 6 months</p>
//                               </div>
//                           </div>
//                       </div>

//                       <div class="software-master-program-submenu">
//                           <div class="software-master-program-menu">
//                               <div class="software-master-program-box">

//                               </div>
//                               <div class="software-master-program-box-one">
//                                   <p>Advanced Digital Marketing</p>
//                                   <p class="duration">Duration - 6 months</p>
//                               </div>
//                           </div>
//                       </div>

//                       <div class="software-master-program-submenu">
//                           <div class="software-master-program-menu">
//                               <div class="software-master-program-box">

//                               </div>
//                               <div class="software-master-program-box-one">
//                                   <p>Advanced Digital Marketing</p>
//                                   <p class="duration">Duration - 6 months</p>
//                               </div>
//                           </div>
//                       </div>
//                   </div>
//               </div>
//           </div>
//       </section>
//   </div>

//   <div class="learning" id="learning" style="display: none;">
//       <main class="software">
//           <div class="software-heading">
//               <div class="software-heading-page">
//                   <div class="software-heading-left">
//                       <a href="index.html"> <i class="fa-solid fa-arrow-left"></i></a>
//                   </div>
//                   <div class="software-heading-right">
//                       <p style="padding-left: 33px;">Machine Learning</p>
//                   </div>
//               </div>
//           </div>
//       </main>

//       <section class="software-menu-section">
//           <div class="software-menu-list">
//               <div class="software-menu-courses">
//                   <h4>Individual Courses</h4>
//                   <div class="software-menu-submenu">
//                       <ul>
//                           <li>Data Science with R Training</li>
//                           <li>Data Science with Python Training</li>
//                           <li>Data Science with SAS Training</li>
//                           <li>Data Science with Tableau Training</li>
//                           <li>Data Science with Power BI Training</li>
//                           <li>Data Analyst Training</li>
//                           <li>Natural Language Processing NLP Training</li>
//                       </ul>
//                   </div>
//               </div>

//               <div class="software-menu-job-program">
//                   <h4>Job guarantee Program</h4>
//                   <div style="width: 90%; margin: auto; padding-top: 10px;">
//                       <div class="software-menu-job-submenu">
//                           <div class="software-menu-submenu">
//                               <div class="software-menu-job-submenu-box">

//                               </div>
//                               <p>MERN Master</p>
//                           </div>
//                       </div>
//                       <div class="software-menu-job-submenu">
//                           <div class="software-menu-submenu">
//                               <div class="software-menu-job-submenu-box">

//                               </div>
//                               <p>MEAN Master</p>
//                           </div>
//                       </div>
//                       <div class="software-menu-job-submenu">
//                           <div class="software-menu-submenu">
//                               <div class="software-menu-job-submenu-box">

//                               </div>
//                               <p>Java FullStack</p>
//                           </div>
//                       </div>
//                   </div>

//               </div>

//               <div class="software-master-program">
//                   <h4>Master's program</h4>
//                   <div style="width: 90%; margin: auto; padding-top: 10px;">
//                       <div class="software-master-program-submenu">
//                           <div class="software-master-program-menu">
//                               <div class="software-master-program-box">

//                               </div>
//                               <div class="software-master-program-box-one">
//                                   <p>Advanced Digital Marketing</p>
//                                   <p class="duration">Duration - 6 months</p>
//                               </div>
//                           </div>
//                       </div>

//                       <div class="software-master-program-submenu">
//                           <div class="software-master-program-menu">
//                               <div class="software-master-program-box">

//                               </div>
//                               <div class="software-master-program-box-one">
//                                   <p>Advanced Digital Marketing</p>
//                                   <p class="duration">Duration - 6 months</p>
//                               </div>
//                           </div>
//                       </div>

//                       <div class="software-master-program-submenu">
//                           <div class="software-master-program-menu">
//                               <div class="software-master-program-box">

//                               </div>
//                               <div class="software-master-program-box-one">
//                                   <p>Advanced Digital Marketing</p>
//                                   <p class="duration">Duration - 6 months</p>
//                               </div>
//                           </div>
//                       </div>
//                   </div>
//               </div>
//           </div>
//       </section>
//   </div>

//   <div class="cybers" id="cybers" style="display: none;">
//       <main class="software">
//           <div class="software-heading">
//               <div class="software-heading-page">
//                   <div class="software-heading-left">
//                       <a href="index.html"> <i class="fa-solid fa-arrow-left"></i></a>
//                   </div>
//                   <div class="software-heading-right">
//                       <p style="padding-left: 48px;">Cyber Security</p>
//                   </div>
//               </div>
//           </div>
//       </main>
//       <section class="software-menu-section">
//           <div class="software-menu-list">
//               <div class="software-menu-courses">
//                   <h4>Individual Courses</h4>
//                   <div class="software-menu-submenu">
//                       <ul>
//                           <li>Data Science with R Training</li>
//                           <li>Data Science with Python Training</li>
//                           <li>Data Science with SAS Training</li>
//                           <li>Data Science with Tableau Training</li>
//                           <li>Data Science with Power BI Training</li>
//                           <li>Data Analyst Training</li>
//                           <li>Natural Language Processing NLP Training</li>
//                       </ul>
//                   </div>
//               </div>

//               <div class="software-menu-job-program">
//                   <h4>Job guarantee Program</h4>
//                   <div style="width: 90%; margin: auto; padding-top: 10px;">
//                       <div class="software-menu-job-submenu">
//                           <div class="software-menu-submenu">
//                               <div class="software-menu-job-submenu-box">

//                               </div>
//                               <p>MERN Master</p>
//                           </div>
//                       </div>
//                       <div class="software-menu-job-submenu">
//                           <div class="software-menu-submenu">
//                               <div class="software-menu-job-submenu-box">

//                               </div>
//                               <p>MEAN Master</p>
//                           </div>
//                       </div>
//                       <div class="software-menu-job-submenu">
//                           <div class="software-menu-submenu">
//                               <div class="software-menu-job-submenu-box">

//                               </div>
//                               <p>Java FullStack</p>
//                           </div>
//                       </div>
//                   </div>

//               </div>

//               <div class="software-master-program">
//                   <h4>Master's program</h4>
//                   <div style="width: 90%; margin: auto; padding-top: 10px;">
//                       <div class="software-master-program-submenu">
//                           <div class="software-master-program-menu">
//                               <div class="software-master-program-box">

//                               </div>
//                               <div class="software-master-program-box-one">
//                                   <p>Advanced Digital Marketing</p>
//                                   <p class="duration">Duration - 6 months</p>
//                               </div>
//                           </div>
//                       </div>

//                       <div class="software-master-program-submenu">
//                           <div class="software-master-program-menu">
//                               <div class="software-master-program-box">

//                               </div>
//                               <div class="software-master-program-box-one">
//                                   <p>Advanced Digital Marketing</p>
//                                   <p class="duration">Duration - 6 months</p>
//                               </div>
//                           </div>
//                       </div>

//                       <div class="software-master-program-submenu">
//                           <div class="software-master-program-menu">
//                               <div class="software-master-program-box">

//                               </div>
//                               <div class="software-master-program-box-one">
//                                   <p>Advanced Digital Marketing</p>
//                                   <p class="duration">Duration - 6 months</p>
//                               </div>
//                           </div>
//                       </div>
//                   </div>
//               </div>
//           </div>
//       </section>
//   </div>


//       <div class="mobile">
//         <div class="mobile-hamburg-click-section" id="mobile-view">
//           <div class="mobile-hamburg-click-section-heading">
//               <div class="mobile-hamburg-click-section-heading-page">
//                   <div class="mobile-hamburg-click-section-heading-left">
//                       <a href="index.html"> <i style="padding-top: 10px;" class="fa-solid fa-arrow-left"></i></a>
//                   </div>
//                   <div class="mobile-hamburg-click-section-heading-right">
//                       <p style="padding-left: 18px; padding-top: 10px;">MENU</p>
//                   </div>
//               </div>
//           </div>
//           <div class="mobile-hamburg-menu-list">
//               <div onclick="hamburgfunction(event)" class="mobile-hamburg-submenu">
//                   <ul>
//                     <li>
//                           <div style="display: flex; justify-content: space-between;">
//                               <p>Women IT job</p>
//                               <p id="women"> <i class="fa-solid fa-plus"></i></p>
//                           </div>
//                           <ul style="display: none;" id="women-job">
//                               <li style="padding-top: 15px">Content-one</li>
//                               <li>Content-two</li>
//                           </ul>
//                           </i>
//                       </li>
//                       <li>Career Restart</li>
//                       <li>Placement</li>
//                       <li>Review</li>
//                       <li>Student Corner</li>
//                       <li>About</li>
//                       <li>About</li>
//                       <li> Blockchain</li>
//                   </ul>
//               </div>
//           </div>
//       </div>
//         </div>    
//   </nav>`
// })

// function hamburgfunction(event) {
//     event.preventDefault()
//         var women = document.getElementById("women");
//         var displayWomenJob = document.getElementById("women-job");
//         var isVisible = false;

//         women.addEventListener("click", function () {
//             if (isVisible) {
//                 displayWomenJob.style.display = "none";
//             } else {
//                 displayWomenJob.style.display = "block";
//             }
//             isVisible = !isVisible;
//         });
// }


//global-footer

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



