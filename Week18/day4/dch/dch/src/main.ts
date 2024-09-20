type User = {
  type: 'user';
  name: string;
  age: number;
};
 
type Product = {
  type: 'product';
  id: number;
  price: number;
};
 
type Order = {
  type: 'order';
  orderId: string;
  amount: number;
};


function handleData(data: Array<User | Product | Order>): string[] {
  return data.map((item) => {
    if (item.type === 'user') {
      return `Hello ${item.name}, congrats on your ${item.age} birthday`;
    } else if (item.type === 'product') {
      return `The product ID is ${item.id} and its price is ${item.price}`;
    } else if (item.type === 'order') {
      return `Order summary: ID = ${item.orderId}, amount = $${item.amount}`;
    } else {
      return 'Unknown type'; 
    }
  })
}

const infoData: Array<User | Product | Order>= [
  {type:'user', name:'Rami', age: 34},
  {type:'product', id: 123, price: 100},
  {type: 'order', orderId: 'R123', amount: 300},
]

const fx = handleData(infoData)
console.log(fx)