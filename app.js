const firstname = document.getElementById('firstname')
const lastname = document.getElementById('lastname')
const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.querySelector('.form')

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  check_input();
})

function check_input(){
  if(firstname.value === ''){
    console.log(firstname.value)
    dispaly_error(firstname, "First name cannot be empty");
  }else{
    succsess(firstname);
    console.log(1)
  }
  if(lastname.value === ''){
    dispaly_error(lastname, "Last name cannot be empty");
  }else{
    succsess(lastname);
  }
  if(email.value === ''){
    dispaly_error(email, "Email cannot be empty");
  }else if(email.value.search('.com') === -1){
    dispaly_error(email, "Looks like this is not an email");
  }else{
    succsess(email);
  }
  if(password.value === ''){
    dispaly_error(password, "password cannot be empty");
  }else{
    succsess(password);
  }
}

function dispaly_error(field, msg){
  const parentDiv = field.parentElement;
  const small = parentDiv.querySelector('small');

  small.textContent = msg;
  parentDiv.className = "input-field error";
}

function succsess(field){
  const parentDiv = field.parentElement;
  parentDiv.className = "input-field";

}