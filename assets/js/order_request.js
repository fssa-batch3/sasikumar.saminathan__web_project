
//get elements for changing those dynamicaly
const mobile_image = document.getElementById("mobile_img")
const mobile_name = document.getElementById("mob_name")
const mobile_qty = document.getElementById("qty")
const mobile_price = document.getElementById("price")
const mobile_request_time = document.getElementById("requested_time")
const mobile_request_date = document.getElementById("requested_date")
const main_container = document.querySelector(".requested_mobile")
const head = document.querySelector("h1")
//nav bars
const requesst_bar = document.getElementById("request_orders")
const delivered_history_bar = document.getElementById("delivered_history")


//get the shop id from params
let url = window.location.search
const params = new URLSearchParams(url)
const shop_id = params.get("id")

//get the order array from localstorage
const order_array = JSON.parse(localStorage.getItem("orders"))

//filltering specific shop orders
 let shop_orders = order_array.filter(function (obj) {
    if (shop_id === obj["shop_id"]) {
        return true
    }
    else{
        return false
    }
 })

 //get the mobile details from order shop_orders array
 const product_arr = JSON.parse(localStorage.getItem("products"))
 const pr_array = []
 for(j = 0; j < shop_orders.length;j++ ){       
 for(i = 0; i < product_arr.length;i++){
     if(shop_orders[j]["product_id"] ===  product_arr[i]["user_id"]+""){
         pr_array.push(product_arr[i])
     }
 }
}
console.log(pr_array);

let reuest_mobile = ""
for (let i = 0; i < pr_array.length; i++) {

    reuest_mobile += `<div class="request_container">
    <div class="mobile_name">
        <div class="mobile_img">
            <img src="${pr_array[i]["product_img_1"]}">
        </div>
        <div class="mob_name">
            <p id="mob_name">${pr_array[i]["product_name"]}</p>
        </div>
    </div>
    <div class="qty">
        <p id="qty">${shop_orders[i]["quantity"]}</p>
    </div>
    <div class="price">
        <p id="price">${"₹"+parseFloat(pr_array[i]["product_price"].slice(1)) * parseFloat(shop_orders[i]["quantity"])}</p>
    </div>
    <div class="requested_date">
        <p id="requested_time"><span id="requested_date">Nov 6, 2023</span> at 10:56</p>
    </div>
    <button class="button-45" role="button" data-keyword="${shop_orders[i]["order_id"]}">More info</button>
</div>`
    
}
main_container.innerHTML = reuest_mobile

requesst_bar.addEventListener("click",function () {
    requesst_bar.style.backgroundColor = "#ADEFD1FF"
    delivered_history_bar.style.backgroundColor = "#fff"
    head.innerText = "Requestes"
})


delivered_history_bar.addEventListener("click",function () {
    delivered_history_bar.style.backgroundColor = "#ADEFD1FF"
    requesst_bar.style.backgroundColor = "#fff"

    head.innerText = "Delivered"
})

//toggle option scripts are there
let more_info_btn = document.querySelectorAll(".button-45")
let menu = document.querySelector(".menu")
let close_arrow = document.querySelector(".fa-circle-chevron-right")

for (let i = 0; i < more_info_btn.length; i++) {
    
    more_info_btn[i].addEventListener('click',function(){
        menu.classList.toggle('showmenu');
        
        });
}
close_arrow.addEventListener("click",function () {
    menu.classList.toggle('showmenu')    
})


