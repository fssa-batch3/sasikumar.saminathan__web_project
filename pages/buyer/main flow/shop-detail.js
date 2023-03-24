const product_list = [
    {
        image: "../../../assets/image/iq-z6-5g.webp",
        name: "IQOO Z6 5G",
        price: "₹15,799",
        star: "4.0",
        rating: "20,717 Ratings"
    },
    {
        image: "../../../assets/image/galaxy-s21-fe-5g-lavender-8gb-128gb-storage-sm-g990elviinu-original-imagbnbdaj3tygup.webp",
        name: "SAMSUNG Galaxy S21 FE 5G",
        price: "₹39,999",
        star: "4.3",
        rating: "26,443 Ratings"

    },
    {
        image: "../../../assets/image/-original-imaghxa5hvapbfds.webp",
        name: "APPLE iPhone 14",
        price: "₹77,400",
        star: "4.6",
        rating: "786 Ratings"
    },
    {
        image: "../../../assets/image/-original-imagg2abzhxjckxu.webp",
        name: "OnePlus Nord CE 2 Lite 5G",
        price: "₹19,979",
        star: "4.4",
        rating: "34,497 Ratings"
    },
]

// <div class="mob-2">
//         <a href="#"><img src="../../../assets/image/iq-z6-5g.webp" alt="" width="150px" height="200px"></a>
//         <h4 class="detail-1-2">IQOO Z6 5G</h4>
//        <div class="rate-2"> <h2>₹15,799</h2><p class="onward-2">onwards</p></div>
//        <div class="rating-2">
//         <div class="rating-1-2">
//             <h5>4.0</h5><i class="fa fa-star" aria-hidden="true"></i>
//         </div>
//         <p>20,717 Ratings</p></div>
//     </div>

for (let j = 3; 0 <= j; j--) //loop for creating 12 product cards
{
    //div 1 class name: pack
    const div_2 = document.createElement("div");
    div_2.setAttribute("class", "mob-2")
    document.querySelector(".mobile-2").prepend(div_2)

    //product img
    const img = document.createElement("img");
    img.setAttribute("src", product_list[j].image)
    img.setAttribute("alt", "redmi_note_11")
    img.setAttribute("width", "150px")
    img.setAttribute("height", "200px")
    document.querySelector(".mob-2").append(img)

    //anker tag for going next pages
    const a = document.createElement("a");
    a.setAttribute("aria-label", "redmi")
    a.setAttribute("class", "mob-link")
    a.setAttribute("href", "#")
    document.querySelector(".mob-2").append(a)

    //product name
    const h4 = document.createElement("h4");
    h4.setAttribute("class", "detail-1-2")
    h4.innerHTML = product_list[j].name
    document.querySelector(".mob-link").append(h4)

    //div 2 class name: rate for show price
    const div_3 = document.createElement("div");
    div_3.setAttribute("class", "rate-2")
    document.querySelector(".mob-2").append(div_3)

    //product price
    const h2 = document.createElement("h2");
    h2.innerHTML = product_list[j].price
    document.querySelector(".rate-2").append(h2)

    //product price
    const p = document.createElement("p");
    p.setAttribute("class", "onward-2")
    p.innerHTML = "onwards"
    document.querySelector(".rate-2").append(p)

    //div 2 class name: rate for show rating
    const div_4 = document.createElement("div");
    div_4.setAttribute("class", "rating-2")
    document.querySelector(".mob-2").append(div_4)

    //div 2 class name: rate for show rating
    const div_5 = document.createElement("div");
    div_5.setAttribute("class", "rating-1-2")
    document.querySelector(".rating-2").append(div_5)

    //product rating
    const h5 = document.createElement("h5");
    h5.innerHTML = product_list[j].star
    document.querySelector(".rating-1-2").append(h5)

    //product rating star icon
    const i = document.createElement("i");
    i.setAttribute("class", "fa fa-star")
    i.setAttribute("aria-hidden", "true")
    document.querySelector(".rating-1-2").append(i)

    //product rating count
    const p_1 = document.createElement("p");
    p_1.innerHTML = product_list[j].rating
    document.querySelector(".rating-2").append(p_1)
}

const product_array = JSON.parse(localStorage.getItem("products"))


//get url from search bar
const url = window.location.search;

const urlParams = new URLSearchParams(url);

const productname = urlParams.get("id")

const search = product_array.find(function (userobj){

const name = userobj["user_id"]+"";
//console.log(name);

//console.log(name);
if (productname === name) {
    return true

} else {

    return false
}
})

//button elements
const order = document.getElementById("buy")
const cart = document.getElementById("cart")

const user_array = JSON.parse(localStorage.getItem("profile"))


//this function for add to cart
cart.addEventListener("click",function(){

if (user_array === false || user_array === null) {

    window.location.href = "../../sign-in/login.html"
}
else{
    let cart_arr = JSON.parse(localStorage.getItem("cart"))?JSON.parse(localStorage.getItem("cart")):[]

    //creating unique id
    let uid = Math.floor(Math.random() * 1000)
    cart_arr.push(
        {
            "cart_id" : uid,
            "user_id" : user_array["user_id"],
            "product_id" : search["user_id"]
        }
    )

    localStorage.setItem("cart",JSON.stringify(cart_arr));

    window.location.href = "../cart.html?user_id="+user_array["user_id"]}
})

order.addEventListener("click",function(){
const quantity = document.getElementById("quantity")
search["quantity"] = quantity.value

localStorage.setItem("products",JSON.stringify(product_array))

window.location.href = "../address.html?id="+productname
})


const pro_name = document.getElementById("pr_name")
const pro_image = document.getElementById("pr_image")
const pro_price = document.getElementById("pr_price")

pro_name.innerText = search["product_name"]
pro_price.innerText = search["product_price"]
pro_image.setAttribute("src",search["product_img_1"])






