 const header = document.createElement("header");
 document.body.appendChild(header);

 const nav = document.createElement("nav");
 header.appendChild(nav);

 const logo = document.createElement("a");
 logo.className = "logo";
 logo.textContent = "Coffee Shop";
 nav.appendChild(logo);

 const navList = document.createElement("ul");
 navList.className = "nav-list";
 nav.appendChild(navList);

 const navItems = ["Home", "Menu", "About", "Contact"];
 navItems.forEach((item) => {
   const li = document.createElement("li");
   li.className = "nav-item";
   const a = document.createElement("a");
   a.textContent = item;
   li.appendChild(a);
   navList.appendChild(li);
 });

 const hero = document.createElement("section");
 hero.className = "hero";
 document.body.appendChild(hero);

 const heroContent = document.createElement("div");
 heroContent.className = "hero-content";
 hero.appendChild(heroContent);

 const heroTitle = document.createElement("h1");
 heroTitle.textContent = "Welcome to Our Coffee Shop";
 heroContent.appendChild(heroTitle);

 const heroDescription = document.createElement("p");
 heroDescription.textContent = "Enjoy the best coffee in town.";
 heroContent.appendChild(heroDescription);

 const btn = document.createElement("a");
 btn.className = "btn";
 btn.textContent = "Explore Our Menu";
 heroContent.appendChild(btn);

 const footer = document.createElement("footer");
 footer.className = "footer";
 document.body.appendChild(footer);

 const footerText = document.createElement("p");
 footerText.textContent = "© 2024 Coffee Shop. All rights reserved.";
 footer.appendChild(footerText);

 header.style.backgroundColor = "#fff";
 header.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
 header.style.padding = "1rem 0";

 nav.style.display = "flex";
 nav.style.justifyContent = "space-between";
 nav.style.alignItems = "center";
 nav.style.maxWidth = "1200px";
 nav.style.margin = "0 auto";
 nav.style.padding = "0 1rem";

 logo.style.fontSize = "1.5rem";
 logo.style.fontWeight = "bold";
 logo.style.color = "#333";
 logo.style.textDecoration = "none";

 navList.style.display = "flex";
 navList.style.listStyle = "none";

 document.querySelectorAll(".nav-item").forEach((item) => {
   item.style.marginLeft = "1.5rem";
   item.querySelector("a").style.textDecoration = "none";
   item.querySelector("a").style.color = "#333";
   item.querySelector("a").style.fontWeight = "bold";
 });

 hero.style.height = "560px";
 hero.style.background =
   "url('https://images.pexels.com/photos/2907301/pexels-photo-2907301.jpeg?auto=compress&cs=tinysrgb&w=640&h=853&dpr=1') no-repeat center center/cover";
 hero.style.color = "#fff";

 heroContent.style.maxWidth = "600px";
 heroContent.style.height = "100%";
 heroContent.style.display = "flex";
 heroContent.style.flexDirection = "column";
 heroContent.style.justifyContent = "space-around";
 heroContent.style.alignItems = "center";
 heroContent.style.textAlign = "center";

 heroTitle.style.fontSize = "2.5rem";
 heroTitle.style.marginBottom = "1rem";

 heroDescription.style.fontSize = "1.2rem";
 heroDescription.style.marginBottom = "2rem";

 btn.style.backgroundColor = "#333";
 btn.style.color = "#fff";
 btn.style.padding = "0.75rem 1.5rem";
 btn.style.textDecoration = "none";
 btn.style.borderRadius = "5px";
 btn.style.transition = "background-color 0.3s ease";

 btn.addEventListener("mouseover", () => {
   btn.style.backgroundColor = "#555";
 });

 btn.addEventListener("mouseout", () => {
   btn.style.backgroundColor = "#333";
 });

 footer.style.backgroundColor = "#333";
 footer.style.color = "#fff";
 footer.style.textAlign = "center";
 footer.style.padding = "1rem 0";
 footer.style.marginTop = "auto";