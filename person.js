function Person(name, age, password, gender, carType, isBike) {
  this.name = name;
  this.age = age;
  this.password = password;
  this.gender = gender;
  this.carType = carType;
  this.isBike = isBike;

  this.toString = () => {
    const { name, age, password, gender, carType, isBike } = this;
    return `${name} ${age} ${password} ${gender} ${carType} ${isBike}`;
  };
}
