$(document).ready(function () {
  SearchTab();

  $("#SearchTab").click(function (e) {
    SearchTab();
  });

  $("#RegisterTab").click(function (e) {
    RegisterTab();
  });
});

/* RegisterTab */
function RegisterTab() {
  $("#Container").load("./html/registerTab.html");

  setTimeout(() => {
    $("#loadPic").click(function (e) {
      document.getElementById("picShow").src =
        document.getElementById("txtImage").value;
    });

    $("#postBtn").click(async function (e) {
      const formData = new FormData(document.getElementById("formData"));

      await fetch("./php/create.php", {
        method: "POST",
        body: formData,
      });

      SearchTab();
    });
  }, 250);
}

/* SearchTab */
async function SearchTab() {
  $("#Container").load("./html/searchTab.html");

  const data = await (await fetch("./php/query.php")).json();
  data.forEach((item) => {
    createCard(item);
  });

  $(".Card").map((index, item) => {
    item.addEventListener("click", () => {
      hideControls();

      $(item).children(".Controls").css({
        transform: "scale(100%)",
      });
    });
  });
}

/* Functions */
hideControls = () => {
  $(".Controls").css("transform", "scale(0)");
};

function createCard(data) {
  /* Boring part */
  var card = document.createElement("div");
  card.classList.add("Card");

  var title = document.createElement("h2");
  title.innerText = data[1];
  title.classList.add("Title");

  var date = document.createElement("h2");
  date.innerText = data[5];
  date.classList.add("Date");

  var author = document.createElement("h2");
  author.innerText = data[7];
  author.classList.add("Author");

  var portrait = document.createElement("img");
  portrait.src = data[2];
  portrait.classList.add("Portrait");

  var logo = document.createElement("img");
  logo.src = data[6];
  logo.classList.add("Logo");

  var controls = document.createElement("div");
  controls.classList.add("Controls");

  /* Buttons for Edit and Delete */
  var btnEdit = document.createElement("button");
  btnEdit.textContent = "EDIT";

  btnEdit.addEventListener("click", async () => {
    EditRegister(data);
  });

  var btnDelete = document.createElement("button");
  btnDelete.textContent = "DELETE";

  btnDelete.addEventListener("click", async () => {
    DeleteRegister(data);
  });

  /* Making controls */
  controls.appendChild(btnEdit);
  controls.appendChild(btnDelete);

  /* Making card */
  card.appendChild(title);
  card.appendChild(date);
  card.appendChild(author);
  card.appendChild(portrait);
  card.appendChild(logo);
  card.appendChild(controls);

  document.getElementById("CardList").appendChild(card);
}

async function DeleteRegister(data) {
  var formData = new FormData();
  formData.append("id", `${data[0]}`);

  await fetch("./php/delete.php", {
    method: "POST",
    body: formData,
  });

  setTimeout(() => {
    SearchTab();
  }, 250);
}

async function EditRegister(data) {
    $("#Container").load("./html/editTab.html");

    setTimeout(() => {
      document.getElementById("idInput").value = data[0];
      document.getElementById("txtTitle").value = data[1];
      document.getElementById("txtImage").value = data[2];
      document.getElementById("picShow").src = data[2];
      document.getElementById("cbAmbientacion").value = data[4];
      document.getElementById("txtRelease").value = data[5];
      document.getElementById("cbIndustria").value = data[3];
      document.getElementById("txtCompany").value = data[6];
      document.getElementById("txtDirector").value = data[7];

      $('#loadPic').click(function (e) { 
        document.getElementById("picShow").src =
        document.getElementById("txtImage").value;
      });

      $("#editBtn").click(async function (e) {
        const formData = new FormData(document.getElementById("formData"));

        await fetch("./php/edit.php", {
          method: "POST",
          body: formData,
        });
        SearchTab();
      });
    }, 500);
  }
