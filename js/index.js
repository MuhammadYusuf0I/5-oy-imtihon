import { createCard } from "./funtions.js";

const BASE_URL = "https://frontend-mentor-apis-6efy.onrender.com";
const wrapper = document.getElementById("wrapper");
const darkMode = document.querySelector("#darkMode");
const headerContainer = document.querySelector(".header-container");
const mainContainer = document.querySelector(".main-part-container");
const dark = document.querySelector("#dark");
const select = document.querySelector(".select_mode");
const input = document.querySelector(".input");
const countryy = document.querySelector("country-name");
const bard = document.querySelector(".loader");
const oneInfo = document.getElementById("oneCinfo");
const countriesInfo = document.getElementsByClassName("countries-info");

document.addEventListener("DOMContentLoaded", function () {
  fetch(`${BASE_URL}/countries`, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })

    .then((result) => {
      console.log(result);
      wrapper.innerHTML = "";
      result.data.forEach((element) => {
        let card = createCard(element);
        wrapper.innerHTML += card;
      });
    });
});

select.addEventListener("change", () => {
  let value = select.value;

  fetch(`${BASE_URL}/countries?region=${value}`)
    .then((response) => response.json())
    .then((data) => {
      wrapper.innerHTML = "";
      data.data.forEach((countryy) => {
        let card = createCard(countryy);
        wrapper.innerHTML += card;
      });
    });
});

input.addEventListener("input", updateValue);
function updateValue(e) {
  fetch(`${BASE_URL}/countries?search=${e.target.value}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((result) => {
      wrapper.innerHTML = "";

      result.data.forEach((data) => {
        let card = createCard(data);
        wrapper.innerHTML += card;
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

darkMode &&
  darkMode.addEventListener("click", function (e) {
    e.preventDefault();
    headerContainer.classList.toggle("header-Mode");
    mainContainer.classList.toggle("main-Mode");
    document.body.classList.toggle("main-Mode");

    if (headerContainer.classList.contains("header-Mode")) {
      dark.classList.add("fa-solid");
      dark.classList.remove("fa-regular");
    } else {
      dark.classList.add("fa-regular");
      dark.classList.remove("fa-solid");
    }

    if (headerContainer.classList.contains("header-Mode")) {
      input.classList.add("second-input");
      input.classList.remove("input");
    } else {
      input.classList.add("input");
      input.classList.remove("second-input");
    }

    if (headerContainer.classList.contains("header-Mode")) {
      select.style.backgroundColor = "#2B3844";
      select.style.color = "#fff";
    } else {
      select.style.backgroundColor = "#fff";
      select.style.color = "black";
    }

    if (document.body.classList.toggle("main-Mode")) {
      countryy.style.color = "#fff";
      countryy.backgroundColor = "black";
    } else {
      select.classList.add("select_mode");
      select.classList.remove("select-dark");
    }

  });

countryy &&
  countryy.addEventListener("click", (e) => {
    e.preventDefault();
    fetch(`${BASE_URL}/countries/slug/${countryy - name}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        wrapper.innerHTML = "";
        data.data.forEach((countrySlug) => {
          let card = oneCountInfo(count);
          oneInfo.innerHTML += card;
        });
      });
  });
