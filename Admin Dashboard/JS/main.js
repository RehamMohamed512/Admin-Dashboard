// Sidebar Links
const navLinks = document.querySelectorAll(".LeftSide .nav-link");
const sections = document.querySelectorAll("#dashboard-section, #users-section, #posts-section, #favourites-section");

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const targetId = link.getAttribute("data-target");

    if (!targetId) return; 

   
    sections.forEach(section => {
      section.style.display = "none";
    });

 
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.style.display = "block";
    }


    navLinks.forEach(l => l.parentElement.classList.remove("active"));
    link.parentElement.classList.add("active");
  });
});

// ========== Toggle Sidebar ==========
let toggle = document.querySelector(".toggle");
let LeftSide = document.querySelector(".LeftSide");
let RightSide = document.querySelector(".RightSide");

toggle.onclick = () => {
  LeftSide.classList.toggle("active");
  RightSide.classList.toggle("active");
};

// ========== Dark/Light Mode ==========
let modeBtn = document.getElementById("modeToggle");

modeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    modeBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    modeBtn.classList.remove("btn-outline-dark");
    modeBtn.classList.add("btn-outline-light");
  } else {
    modeBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    modeBtn.classList.remove("btn-outline-light");
    modeBtn.classList.add("btn-outline-dark");
  }
});

async function loadData() {
  let users = await fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());
  let posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json());
  let comments = await fetch("https://jsonplaceholder.typicode.com/comments").then(res => res.json());

  document.querySelector(".users-count").textContent = users.length;
  document.querySelector(".post-count").textContent = posts.length;
  document.querySelector(".comment-count").textContent = comments.length;
}
loadData();
// =============================================================
