

// document.getElementById('sixteenGB').addEventListener('click',function(){
//     // const memoryCost = document.getElementById('memory-cost');
//     // memoryCost.innerText = 300;
//     // const bestPrice = document.getElementById('best-price').innerText;
//     // const memoryPrice = document.getElementById('memory-cost').innerText;
//     // const storagePrice = document.getElementById('storage-cost').innerText;
//     // const deliveryPrice = document.getElementById('delivery-cost').innerText;
//     // const totalCost = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryPrice);
//     // const totalPrice = document.getElementById('total-price');
//     // totalPrice.innerText = totalCost;

// updatePrice('memory-cost',300)
    
// });

function onClick(clickID,updateId,price){
    document.getElementById(clickID).addEventListener('click',function(){
        updatePrice(updateId, price)
        document.getElementById(clickID).style.backgroundColor = 'blue'
    })
}
onClick('sixteenGB','memory-cost',300)
onClick('ssd3','storage-cost',200)
onClick('paid-delivery','delivery-cost',20)

// document.getElementById('ssd3').addEventListener('click',function(){
//     updatePrice('storage-cost', 200)
// })
// document.getElementById('paid-delivery').addEventListener('click',function(){
//     updatePrice('delivery-cost', 20)
// })

function updatePrice(itemId,price){
    const memoryCost = document.getElementById(itemId);
    memoryCost.innerText = price;
    const bestPrice = document.getElementById('best-price').innerText;
    const memoryPrice = document.getElementById('memory-cost').innerText;
    const storagePrice = document.getElementById('storage-cost').innerText;
    const deliveryPrice = document.getElementById('delivery-cost').innerText;
    const totalCost = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryPrice);
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = totalCost;
  
};

document.getElementById('apply-btn').addEventListener('click',function(){
    const fakeCode = 'phero';
    const code = document.getElementById('promo-input').value;
    if(code === fakeCode){
        const total = document.getElementById('total-price');
        const totalPrice = parseFloat(total.innerText) ;
        const discount = (totalPrice *20) / 100;
       
        total.innerText = totalPrice - discount;
        
          document.getElementById('error').innerHTML = `<p class="text-success  " id="applied-text">Coupon applied</p>`
       
       
        
        
             

    }else{
        
        document.getElementById('error').innerHTML = `<p class="text-danger " id="not-match">Couldn't apply coupon</p>`
       

    }

})


