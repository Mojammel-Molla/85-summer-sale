//Total and discount calculation and Cart items name add 
let total = 0;
function clickHandBtn(target) {
  const cartItems = document.getElementById('items-container');
  const count = cartItems.childElementCount;
  const totalAmountField = document.getElementById('total-amount');
  const grandTotal = document.getElementById('grand-total');
  const itemName = target.childNodes[3].childNodes[3].innerText;
  const li = document.createElement("li");
  li.innerHTML =`${count + 1}. ${itemName}` ;
  cartItems.appendChild(li);
  const price = target.childNodes[3].childNodes[5].innerText.split(" ")[0];
  total = parseFloat(total) + parseFloat(price);
  totalAmountField.innerText = total;
  grandTotal.innerText = total;

//  Apply button visible condition
  if(parseFloat(totalAmountField.innerText) >= 200){
    document.getElementById('apply-btn').disabled = false
  }
// Purchase button visible condition
  if(parseFloat( totalAmountField.innerText) > 0){
   document.getElementById('purchase-btn').disabled = false
  }

}

    
// Discount and grand total calculaton
document.getElementById('apply-btn').addEventListener('click', function () {
  const text = document.getElementById('coupon-field');
  const textValue = text.value;
  const totalPrice = document.getElementById('total-amount');
  const totalAmount = totalPrice.innerText;
  const discount = document.getElementById('discount-amount');
  if (textValue === 'SELL200') {
    const totalDiscount = parseFloat(totalAmount) * 0.20;
    const totalTwoDecimal = totalDiscount.toFixed(2);
    discount.innerText = totalTwoDecimal;
    const grandTotal = document.getElementById('grand-total');
    const grandTotalAmount = parseFloat(totalAmount) - totalTwoDecimal;
    const grandTwoDecimal = grandTotalAmount.toFixed(2);
    grandTotal.innerText = grandTwoDecimal;
  }
    
})

// Back to homepage and reload section
document.getElementById('home-btn').addEventListener('click', function () {
  location.reload(true);
    
})