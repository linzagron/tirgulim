function clicked() {
  const name = document.getElementById("nameTxt").value;
  const age = document.getElementById("age").value;
  const password = document.getElementById("password").value;
  const genders = document.getElementsByName("gender");

  let gender;
  for (let i = 0; i < genders.length; i++) {
    if (genders[i].checked) {
      gender = genders[i].value;
      break;
    }
  }

  const e = document.getElementById("carType");
  const carType = e.options[e.selectedIndex].value;

  const isBike = document.getElementById("isBike").checked;

  console.log(name, age, password, gender, carType, isBike);

  //call new Person with values from input boxes
  //-- create Person
  let p1 = new Person(name, age, password, gender, carType, isBike);
  console.log(p1);

  // -- use class
}
