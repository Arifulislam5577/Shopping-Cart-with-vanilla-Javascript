let buy = document.querySelectorAll('.buy');
let price = document.querySelectorAll('.price');
let all_prices = document.querySelector('.all_prices');
let items = document.querySelector('.items');
let ol = document.querySelector('.ol');
let totalPrice = 0;

//Create Li Element Using Function
function listItem(productTile ,path){
    let li = document.createElement('li');
    ol.append(li);
    li.innerText = `${productTile} - $${path}`;  
}



buy.forEach((singleBtn)=>{
    singleBtn.addEventListener('click' , (event) =>{

        let path = parseFloat(event.target.parentElement.firstElementChild.firstElementChild.innerText);
        totalPrice += path;
        all_prices.innerText = `$${totalPrice}`;

        let title = event.target.parentElement.parentElement.childNodes[3].innerText;
        items.innerText = ol.childElementCount + 1;

        if(items.innerText == 1){
            items.innerText = ol.childElementCount + 1 +' item';
        }else if(items.innerText > 1){
            items.innerText = ol.childElementCount + 1 +' items';
        }

        listItem(title,path);
    })
})


////////////////////Some Important Note//////////////////

 //let path = parseFloat(event.target.previousElementSibling.innerText.slice(1));
 //console.log(event.target.parentElement.firstElementChild.firstElementChild.innerText);
 // img link -- console.log(event.target.parentElement.parentElement.firstElementChild.src);

////////////////////Some Important Note//////////////////