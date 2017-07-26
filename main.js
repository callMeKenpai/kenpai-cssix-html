function checkout(item1, item2, coupon)
{
  var subtotal = item1 + item2;
  var couponValue = subtotal * coupon;
  var total = subtotal - couponValue;
  console.log(total);
}
var bananaPrice = 1.5;
var chocolatePudding = 6;
var superCoupon = .45;
checkout(bananaPrice, chocolatePudding, superCoupon);
var bankAccount = 100;

var remainAmount = bankAccount - checkout(bananaPrice, chocolatePudding, superCoupon);

function helloFunction(name)
{
  if(name === 'Sammy')
  {
    console.log('Go away, I hate you.')
  }
  else
  {
    console.log('Hello ' + name + '!');
  }
}
