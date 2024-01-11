const productElement = document.getElementById("product");
const numberElement = document.getElementById("number");

//商品DB処理
function Product(id, name, price){
  this.id = id;
  this.name = name;
  this.price = price;
}
const product_1 = new Product(1, "オリジナルブレンド200g ", 500)
const product_2 = new Product(2, "オリジナルブレンド500g ", 900)
const product_3 = new Product(3, "オリジナルブレンド200g ", 700)
const product_4 = new Product(4, "オリジナルブレンド500g ", 1200)

const products = [product_1, product_2, product_3, product_4];

// console.log(products[1].name); //コンソール確認

let purchases = [];

function add() {
  const product = parseInt(productElement.value);
  for(let i = 0; i < products.length; i++){
    if(products[i].id === product){
      productname = products[i].name;
      price = products[i].price;
    }
  }

  const number = parseInt(numberElement.value);
  let purchase = {
    name: productname,
    price: price,
    number: number,
  };

  let newPurchase = true; //--1

  purchases.forEach((item) => {  //--2
    if(item.price === purchase.price) {
      newPurchase = false;
    }
  })

    if(purchases.length < 1 || newPurchase){
      purchases.push(purchase);
    } else {
      for(let i = 0; i < purchases.length; i++) {
        if(purchases[i].price === purchase.price) {
          purchases[i].number += purchase.number;
        }
      }
    }
  window.alert(`${display()}\n小計${subtotal()}円`);
  productElement.value = "";
  numberElement.value = "";
}

function display() {
  return purchases.map(purchase => {
    return `${purchase.name}${purchase.price}円が${purchase.number}点`
  }).join("\n");
};

function subtotal() {
  return purchases.reduce((prev, purchase) => {
    return prev + purchase.price * purchase.number 
  }, 0);
}

function calc() {
  const sum = subtotal();
  const postage = calcPostageFromPurchase(sum);
  window.alert(`${display()}\n\n小計は${sum}円、送料は${postage}円です。合計は${sum + postage}円です。`);
  purchases = [];
  productElement.value= "";
  numberElement.value = "";
}

function calcPostageFromPurchase(sum){
    if(sum < 2000) {
        return 500;
      } else if(sum >= 2000 && sum < 3000){
        return 250;
      } else{
        return 0;
      }
}