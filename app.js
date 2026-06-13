// THEME

const themeBtn =
document.getElementById("themeBtn");

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

localStorage.setItem(
"theme",
document.body.classList.contains("dark")
);

});

// LOAD THEME

if(localStorage.getItem("theme")==="true"){
document.body.classList.add("dark");
}

// COUNTERS

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=
+counter.getAttribute("data-target");

const count=
+counter.innerText;

const increment=
target/100;

if(count<target){

counter.innerText=
Math.ceil(count+increment);

setTimeout(update,20);

}else{

counter.innerText=target;

}

};

update();

});

// SCROLL PROGRESS

window.addEventListener("scroll",()=>{

let scrollTop=
document.documentElement.scrollTop;

let scrollHeight=
document.documentElement.scrollHeight-
document.documentElement.clientHeight;

let progress=
(scrollTop/scrollHeight)*100;

document.getElementById("progressBar")
.style.width=
progress+"%";

});

// BACK TO TOP

document.getElementById("topBtn")
.onclick=()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

};

// FAQ

const acc =
document.querySelectorAll(".accordion");

acc.forEach(item=>{

item.addEventListener("click",()=>{

item.classList.toggle("active");

let panel =
item.nextElementSibling;

if(panel.style.maxHeight){

panel.style.maxHeight=null;

}else{

panel.style.maxHeight=
panel.scrollHeight+"px";

}

});

});

// AI ASSISTANT

function askAI(){

const input =
document.getElementById("chatInput");

const msg=input.value.toLowerCase();

const chat =
document.getElementById("chatMessages");

let reply="";

if(msg.includes("rice"))
reply="Rice requires high water and fertile soil.";

else if(msg.includes("banana"))
reply="Banana grows well in tropical climates.";

else if(msg.includes("organic"))
reply="Organic farming avoids synthetic chemicals.";

else
reply="Please consult our agriculture expert.";

chat.innerHTML +=
`<p><b>You:</b> ${msg}</p>`;

chat.innerHTML +=
`<p><b>AI:</b> ${reply}</p>`;

input.value="";

}

// LANGUAGE SWITCH

const translations={

en:{
heroTitle:
"Empowering Farmers Through Smart Agriculture",
heroText:
"Modern farming solutions and smart technologies."
},

ta:{
heroTitle:
"நவீன விவசாயத்தின் மூலம் விவசாயிகளை வலுப்படுத்துதல்",
heroText:
"நவீன விவசாய தீர்வுகள் மற்றும் ஸ்மார்ட் தொழில்நுட்பங்கள்."
}

};

document
.getElementById("langBtn")
.addEventListener("click",()=>{

let current=
document.documentElement.lang==="en"
? "ta":"en";

document.documentElement.lang=current;

document
.querySelectorAll("[data-key]")
.forEach(el=>{

el.textContent=
translations[current]
[el.dataset.key];

});

});