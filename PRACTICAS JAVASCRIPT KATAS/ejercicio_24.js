const products = [
    { name: "Funko Dr. Strange", sellCount: 10 },
    { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
    { name: "Sable laser FX", sellCount: 23 },
    { name: "Varita de Voldemort", sellCount: 6 },
  ];

let totalSales = 0;

/*products.forEach ((product) => {
    totalSales += product.sellCount
});

console.log ('El total de ventas es:', totalSales);*/

for (const product of products) {
  totalSales += product.sellCount
}

console.log ('El total de ventas es:', totalSales);