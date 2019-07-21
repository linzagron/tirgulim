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
        ],
        printMyName() {
        	console.log( this.name )
        },
        getAddress() {
          return this.address
        },
        howManyRelatives() {
          return this.family.length
        },
        addRelative(rel) {
          return this.family.push(rel)
        },
        setName(newName) {
          return this.name = newName
        }
      };

function printObject(obj)
{ 
	for (let n in obj)
  {
    let o = obj[n];
    if(typeof( o ) === "object")
    {
			printObject( o )
    }
    else{
      console.log( `${n} : ${o}` )
    }
  }
}

printObject( myself )

myself.printMyName()

printObject( myself.getAddress() )

console.log( myself.howManyRelatives() )

myself.addRelative( {name: "Yaron", age: 45} )
printObject( myself )

myself.setName( "Linush" )
printObject( myself )

