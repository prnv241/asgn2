let tabledata = [];
let mode = "Home";
const regmarkup =
  "<div class='regbg'></div><div class='blurback'><div class='reghold'><h2>Register for the Event</h2><form class='formblock'><div class='form-group'><label for='exampleFormControlInput1'>Name</label><input type='text' class='form-control' required id='name' /></div><div class='form-group'>  <label for='exampleFormControlInput1'>Email address</label>  <input type='email' required class='form-control' id='email' /></div><div class='form-group'>  <label for='exampleFormControlSelect1'>No of Seats</label>  <select class='form-control' id='seat'>    <option>1</option>    <option>2</option>    <option>3</option>    <option>4</option>    <option>5</option>  </select></div><div class='form-group'>  <label for='exampleFormControlTextarea1'    >Reason behind attending the event</label  >  <textarea required class='form-control' id='reason' rows='3'></textarea></div><div class='form-check'>  <input required class='form-check-input'    type='checkbox'    id='defaultCheck1'  />  <label class='form-check-label' for='defaultCheck1'>    Agree our terms and conditions  </label></div></form><button id='formsub' class='btn btn-outline-light ml-4 mt-4'><a href='./show.html'>Register</a></button></div></div></div>";

const showmarkup =
  "<div class='showbg'></div><div class='blurback'><div class='showhold'><h2>Attendies List</h2><table class='mt-3'><thead id='new'></thead><tbody id='table'></tbody></table><div id='block'></div></div></div>";

const indexmarkup =
  "<div class='indexbg'></div></div><div class='blurback'><div class='texthold'><h1 class='display-1'>Event X</h1><h2>India's Largest Youth Festival</h2></div></div></div>";

var index = document.getElementById("index");

function rerender() {
  if (mode === "Home") {
    index.innerHTML = indexmarkup;
  } else if (mode === "Reg") {
    index.innerHTML = regmarkup;
    var submit = document.getElementById("formsub");
    submit.addEventListener("click", filltabledata);
  } else if (mode === "Show") {
    index.innerHTML = showmarkup;
    if (tabledata.length > 0) {
      var table = document.getElementById("table");
      var news = document.getElementById("new");
      news.innerHTML +=
        "<tr><td>Sr.</td><td>Name</td><td>Email</td><td>Seats</td></tr>";
      tabledata.forEach((entry, index) => {
        table.innerHTML += `<tr><td>${index}</td><td>${entry.name}</td><td>${entry.email}</td><td>${entry.seat}</td></tr>`;
      });
    } else {
      var block = document.getElementById("block");
      console.log(block);
      block.innerHTML += "<p>No Entries Available</p>";
    }
  }
}

function filltabledata(e) {
  e.preventDefault();
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var seat = document.getElementById("seat");
  var reason = document.getElementById("reason");
  var newreg = {
    name: name.value,
    email: email.value,
    seat: seat.value,
    reason: reason.value,
  };
  if (
    newreg.name.length === 0 ||
    newreg.email.length === 0 ||
    newreg.reason.length === 0
  ) {
    alert("Please fill all the fields before suubmitting");
  } else {
    tabledata.push(newreg);
    alert("Reservation added successfully!");
  }
}

var homebuttons = document.getElementsByClassName("gohome");
for (let i = 0; i < homebuttons.length; i++) {
  homebuttons[i].addEventListener("click", () => {
    mode = "Home";
    rerender();
  });
}

var showbuttons = document.getElementsByClassName("goshow");
for (let j = 0; j < showbuttons.length; j++) {
  showbuttons[j].addEventListener("click", () => {
    mode = "Show";
    rerender();
  });
}

var regbuttons = document.getElementsByClassName("goreg");
for (let k = 0; k < regbuttons.length; k++) {
  regbuttons[k].addEventListener("click", () => {
    mode = "Reg";
    rerender();
  });
}

rerender();
