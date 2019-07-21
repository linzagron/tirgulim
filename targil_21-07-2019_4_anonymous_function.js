
// option 2 -- ctor, clouser -- setter and getter
function MobilePhone( model, size, price, number )
{
  this.size = size
  this.number = number
  
  let _model = null
  let _price = 0
  
  this.getNumber = function () {
    return this.number
  }
  
  this.setNumber = function (newNumber) {
    this.number = newNumber
  }
  
  this.getModel = function () {
    return _model
  }
  
  this.setModel = function (newModel) {
    if( newModel.length >= 4 )
    {
    	_model = newModel
    }
  }
  
  this.getPrice = function () {
    return _price
  }
  
  this.setPrice = function (newPrice) {
    if( newPrice > _price )
    {
    	_price = newPrice
    }
  }
  
  this.setPrice(price)
  this.setModel(model)
}

const p2 = new MobilePhone( 'hp oop kl kkk', '13inc', '3000', "055987584" )

console.log( p2.getPrice() )
p2.setPrice( 5000 )
console.log( p2.getPrice() )

console.log( p2.getModel() )
p2.setModel( "bla" )
console.log( p2.getModel() )














