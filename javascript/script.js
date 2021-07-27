function welcome() {
    document.getElementById('aboutMeLink').classList.remove('active');
    document.getElementById('experienceLink').classList.remove('active');
    document.getElementById('projectLink').classList.remove('active');
    document.getElementById('aboutMe').style.setProperty('display', 'none');
    document.getElementById('welcome').style.setProperty('display', 'block');
    document.getElementById('work').style.setProperty('display', 'none');
    document.getElementById('project').style.setProperty('display', 'none');
}

function aboutMe() {
    document.getElementById('aboutMeLink').classList.add('active');
    document.getElementById('experienceLink').classList.remove('active');
    document.getElementById('projectLink').classList.remove('active');
    document.getElementById('aboutMe').style.setProperty('display', 'block');
    document.getElementById('welcome').style.setProperty('display', 'none');
    document.getElementById('work').style.setProperty('display', 'none');
    document.getElementById('project').style.setProperty('display', 'none');
}

function experience() {
    document.getElementById('experienceLink').classList.add('active');
    document.getElementById('aboutMeLink').classList.remove('active');
    document.getElementById('projectLink').classList.remove('active');
    document.getElementById('work').style.setProperty('display', 'block');
    document.getElementById('welcome').style.setProperty('display', 'none');
    document.getElementById('aboutMe').style.setProperty('display', 'none');
    document.getElementById('project').style.setProperty('display', 'none');
}

function projects() {
    document.getElementById('projectLink').classList.add('active');
    document.getElementById('experienceLink').classList.remove('active');
    document.getElementById('aboutMeLink').classList.remove('active');
    document.getElementById('project').style.setProperty('display', 'block');
    document.getElementById('work').style.setProperty('display', 'none');
    document.getElementById('welcome').style.setProperty('display', 'none');
    document.getElementById('aboutMe').style.setProperty('display', 'none');
}

var modal = document.getElementById("picEnlarge");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.querySelectorAll('#template');
img.forEach(img => img.addEventListener('click', enlarge));
var modalImg = document.getElementById("popUp");

function enlarge() {
    modal.style.display = "block";
    console.log(img)
    modalImg.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}