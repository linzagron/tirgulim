const myself = 
      {
        name:"Lin", 
        age:21,
        address: {
          city: "Bat Yam",
          country: "Israel"
        },
        family: [
          {
            name: "Noy",
            age: "17"
          },
          {
            name: "Avivit",
            age: "43"
          }
        ]
      };

function printObject(obj)
{ 
	for (let n in obj)
  {
    let o = obj[n];
    if(typeof(o) === "object")
    {
			printObject(o)
    }
    else{
      console.log(`${n}:${o}`)
    }
  }
}

printObject(myself);


