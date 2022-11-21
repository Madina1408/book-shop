const form = document.getElementById("form");
const nameEl = document.getElementById("name");
const surname = document.getElementById("surname");
const street = document.getElementById("street");
const house = document.getElementById("house");
const flat = document.getElementById("flat");
const date = document.getElementById("date1");
const submitBtn = document.getElementById("submit-btn");
const payment = document.getElementsByName('method');
const gift = document.getElementsByClassName('checks');

let varDate = new Date(date); //dd-mm-YYYY
let today = new Date();
today.setHours(0,0,0,0);
let todayDate = new Date();
let month = todayDate.getMonth() + 1;
let year = todayDate.getUTCFullYear() - 0;
let tdate = todayDate.getDate() + 1;
if (month < 10) {
  month = "0" + month;
}
if (tdate < 10) {
  tdate = "0" + tdate;
}
let maxDate = year + "-" + month + "-" + tdate;
date.min = maxDate;

form.addEventListener("keyup", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControls = element.parentElement;
  const errorDisplay = inputControls.querySelector(".error");

  errorDisplay.innerText = message;
  inputControls.classList.add("error");
  inputControls.classList.remove("success");
};
const setSuccess = (element) => {
  const inputControls = element.parentElement;
  const errorDisplay = inputControls.querySelector(".error");

  errorDisplay.innerText = "";
  inputControls.classList.add("success");
  inputControls.classList.remove("error");
};

const validateInputs = () => {
  const nameValue = nameEl.value;
  const surnameValue = surname.value;
  const dateValue = date.value;
  const streetValue = street.value.trim();
  const houseValue = house.value.trim();
  const flatValue = flat.value.trim();
  const paymentValue = payment.value;
  if (nameValue === "") {
    setError(nameEl, "Name is required!");
    submitBtn.disabled=true;
  } else if (nameValue.length < 4) {
    setError(nameEl, "Name should contain more than 4 characters!");
  } else if (nameValue.includes(" ")) {
    setError(nameEl, "Name should not contain spaces!");
    submitBtn.disabled=true;
  } else {
    setSuccess(nameEl);
    submitBtn.disabled=false;
  }

  if (surnameValue === "") {
    setError(surname, "Name is required!");
    submitBtn.disabled=true;
  } else if (surnameValue.length < 5) {
    setError(surname, "Name should contain more than 5 characters!");
    submitBtn.disabled=true;
  } else if (surnameValue.includes(" ")) {
    setError(surname, "Name should not contain spaces!");
    submitBtn.disabled=true;
  } else {
    setSuccess(surname);
    submitBtn.disabled=false;
  }

  if (dateValue === "") {
    submitBtn.disabled=true;
    setError(date, "Please, enter date later than today!");
  } else if (dateValue < maxDate){
    setError(date, "Date should be later than today!");
    submitBtn.disabled=true;
  } else {
    submitBtn.disabled=false;
    setSuccess(date);
  }

  if (streetValue ==="") {
    setError(street, "Street name is required!");
    submitBtn.disabled=true;
  } else if (streetValue.length < 5) {
    setError(street, "Name should contain more than 5 characters!");
    submitBtn.disabled=true;
  } else {
    setSuccess(street);
    submitBtn.disabled=false;
  }

  if (houseValue === "") {
    setError(house, "House number is required!");
    submitBtn.disabled=true;
  } else if (houseValue < 0) {
    setError(house, "Positive numbers only!");
    submitBtn.disabled=true;
  } else {
    setSuccess(house);
    submitBtn.disabled=false;
  }

  if (flatValue === "") {
    setError(flat, "House number is required!");
    submitBtn.disabled=true;
  } else if (flatValue < 0) {
    setError(flat, "Positive numbers only!");
    submitBtn.disabled=true;
  } else {
    setSuccess(flat);
    submitBtn.disabled=false;
  }


};

function hideSummary(){
  popup.style.display='none';
  overlay.style.display='none';
  mainContainer.style.display='block';
  location.replace('../index.html')
}
 const popup=document.getElementById('popup-div');
 const nameSpan=document.querySelector('.name');
 const dateSpan=document.querySelector('.date');
 const addressSpan=document.querySelector('.address');
 const paymentSpan=document.querySelector('.payment');
 const giftSpan=document.querySelector('.gift');
 const overlay = document.querySelector('.main');
 const mainContainer=document.getElementById('form-container');



 form.addEventListener('submit', function(event){
  event.preventDefault();
  const nameValue = nameEl.value;
  const surnameValue = surname.value;
  const dateValue = date.value;
  const streetValue = street.value;
  const houseValue = house.value;
  const flatValue = flat.value;


  popup.style.display='block';
  overlay.style.display='block';
  mainContainer.style.display='none';
  nameSpan.innerHTML=`${nameValue} ${surnameValue}`;
  dateSpan.innerHTML=`${dateValue}`;
  addressSpan.innerHTML=`${flatValue} ${houseValue} ${streetValue}`;

  for( let i=0; i<payment.length; i++){
    if (payment[i].checked){
      paymentSpan.innerHTML=`${payment[i].value}`;
    }
  };
  let str='';

  for( let i=0; i<4; i++){
    if (gift[i].checked===true){
      str+=gift[i].value+' / ';
    }
  };
  giftSpan.innerHTML=`${str}`;
})