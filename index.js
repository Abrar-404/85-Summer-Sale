
let sum = 0;
let discountTotal = 0;

// Main Function
function CardClickHandler(CardValue, thePriceOfCard) {
  const selectedItems = document.getElementById('select');
  const itemCheck = document.getElementById(CardValue);
  const cardName = itemCheck.innerText;
  const ol = document.createElement('ol');
  ol.innerText = cardName;
  selectedItems.appendChild(ol);

  const totalPrice = getEnteredData(thePriceOfCard);
  sum = sum + totalPrice;
  document.getElementById('total-tk').innerText = sum;
  document.getElementById('total-price-tk').innerText = sum;

  const btnPurchase = document.getElementById('purchase-btn');
  btnPurchase.removeAttribute('disabled');

  TotalDiscount();
}


// card-1
document.getElementById('card-1').addEventListener('click', function () {
  CardClickHandler('k-accessories', 'card-1-tk');
})


// card-2
document.getElementById('card-2').addEventListener('click', function () {
  CardClickHandler('cook2', 'card-2-tk');
})


// card-3
document.getElementById('card-3').addEventListener('click', function () {
  CardClickHandler('home-cooker', 'card-3-tk');
})


// card-4
document.getElementById('card-4').addEventListener('click', function () {
  CardClickHandler('sports-cap', 'card-4-tk');
})


// card-5
document.getElementById('card-5').addEventListener('click', function () {
  CardClickHandler('jersey-set', 'card-5-tk');
})


// card-6
document.getElementById('card-6').addEventListener('click', function () {
  CardClickHandler('sports-cates', 'card-6-tk');
})


// coupon section
document.getElementById('coupon-input').addEventListener('keyup', function (func) {
  const couponInput = func.target.value;
  const couponApplyBtn = document.getElementById('coupon-btn');
  
  if (couponInput === 'SELL200' && sum >= 200) {
    couponApplyBtn.removeAttribute('disabled');
  } else {
    couponApplyBtn.setAttribute('disabled', true);
  }
})


document.getElementById('coupon-btn').addEventListener('click', function () {
  const couponInput = document.getElementById('coupon-input');
  const CouponVAlue = couponInput.value;
  if (CouponVAlue === 'SELL200' && sum >= 200) {
    discountTotal = (sum * 20) / 100;
    TotalDiscount();
  }
})


function TotalDiscount() {
  const discountTotalAmount = sum - discountTotal;
  document.getElementById('discount-tk').innerText = discountTotal.toFixed(2);
  document.getElementById('total-tk').innerText = discountTotalAmount.toFixed(2);
}

function getEnteredData(DataValue) {
  const dataField = document.getElementById(DataValue);
  const dataFieldText = dataField.innerText;
  const data = parseFloat(dataFieldText);
  return data;
}

// Go to home
document.getElementById('home-btn').addEventListener('click', function () {
  window.location.href = 'http://127.0.0.1:5500/home-page.html';
})