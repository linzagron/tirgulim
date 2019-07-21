
// option 1 -- creator function
function CreateMobilePhone( model, size, price, number )
{
  var result = { }
  
  result.model = model
  result.size = size
  result.price = price
  result.number = number
  
  result.getNumber = function () {
    return result.number
  }
  
  result.setNumber = function (newNumber) {
    result.number = newNumber
  }
  return result
}

const p1 = CreateMobilePhone( 'hp', '13inc', '3000', "055987584" )
console.log( p1.getNumber() )
p1.setNumber( "022105" )
console.log( p1.getNumber() )

// option 2 -- ctor
function MobilePhone( model, size, price, number )
{
  this.model = model
  this.size = size
  this.price = price
  this.number = number
  
  this.getNumber = function () {
    return this.number
  }
  
  this.setNumber = function (newNumber) {
    this.number = newNumber
  }
}

const p2 = new MobilePhone( 'hp', '13inc', '3000', "055987584" )
console.log( p2.getNumber() )
p2.setNumber( "022105" )
console.log( p2.getNumber() )















