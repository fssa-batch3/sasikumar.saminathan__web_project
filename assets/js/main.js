// const array = [

    
//     {
//         product_id : "1",
//         product_img_1 : "https://iili.io/HVTwwCX.webp",
//         product_img_2 : "https://iili.io/HVTwhQt.webp",
//         product_img_3 : "https://iili.io/HVTwMpp.webp",
//         product_img_4 : "https://iili.io/HVTwEYv.webp",
//         product_name: "SAMSUNG Galaxy S21 FE 5G",
//         product_price: "₹39,999",
//         product_ram : "6",
//         product_rom : "128",
//         highlights : "50 mp front camera 108mp back camera 6000mah battery 4 years warranty Gorilla glass protection",
//         status : true

//     },
//     {
//         product_id : "2",
//         product_img_1 : "https://iili.io/HVTwSyl.webp",
//         product_img_2 : "https://iili.io/HVTwEYv.webp",
//         product_img_3 : "https://iili.io/HVTw13J.webp",
//         product_img_4 : "https://iili.io/HVTwl4a.webp",
//         product_name: "APPLE iPhone 14",
//         product_price: "₹71,999",
//         product_ram : "6",
//         product_rom : "128",
//         highlights : "128 GB ROM\n15.49 cm (6.1 inch) Super Retina XDR Display\n12MP + 12MP | 12MP Front Camera\nA15 Bionic Chip, 6 Core Processor Processor",
//         status : true
//     }



// ]

const array = [{"user_id":55,"product_name":"SAMSUNG Galaxy S21 FE 5G","product_price":"₹ 39999","product_ram":"6","product_rom":"128","product_img_1":"https://iili.io/HVTwwCX.webp","product_img_2":"https://iili.io/H86cfs9.webp","product_img_3":"https://iili.io/H86cKW7.webp","product_img_4":"https://iili.io/H86cBfe.webp","highlights":"50 mp front camera 108mp back camera 6000mah battery 4 years warranty Gorilla glass protection","status":true},{"user_id":91,"product_name":"APPLE iPhone 14","product_price":"₹ 71999","product_ram":"6","product_rom":"128","product_img_1":"https://iili.io/HVTwSyl.webp","product_img_2":"https://iili.io/H86w17S.webp","product_img_3":"https://iili.io/H86w022.webp","product_img_4":"https://iili.io/H86wcrl.webp","highlights":"128 GB ROM\\n15.49 cm (6.1 inch) Super Retina XDR Display\\n12MP + 12MP | 12MP Front Camera\\nA15 Bionic Chip, 6 Core Processor Processor","status":true}]
const shop_arr = [
    {
      "id": 3294,
      "name": "Unique Cell Care",
      "phone_number": "098849 437",
      "img": "https://lh3.googleusercontent.com/p/AF1QipPEeK09H20dUBgdISO_eu7aIG1HmW0xpnf49U42=s1360-w1360-h1020",
      "address": "No. 151, Tharamani 100 Feet Road, Taramani Link Rd, Anna Nagar, Tharamani, Chennai, Tamil Nadu",
      "pincode": "600113",
      "shop_license": "kdfjkadj01",
      "area": "",
      "latitude": 13.0826802,
      "longitude": 80.2707184,
      "seller_id": "2319"
    },
    {
      "id": 3276,
      "name": "Sam Mobile Accessories & Service",
      "phone_number": " 080561 78",
      "img": "https://lh3.googleusercontent.com/proxy/uBoB2LnNsW8N4idTwDlzZUjXOhOR32_GPKCrf1CO2LN_LhHNL5zZqvtPQhOKehoi52PnPG6bzPyX_Zry3BNX8jDteWmj75YNyVYS2QpV6_3mW41lp8sAY3Q4msllGjeduF4x-vcThfI6q6VebPKapGUryjfMydokb1QYxA=s1360-w1360-h1020",
      "address": "No 23 Sri ram Nagar Taramani road Metro water tank, near by Chennai, Tamil Nadu",
      "pincode": "600113",
      "shop_license": "2384uojflkls",
      "area": "",
      "latitude": 13.0826802,
      "longitude": 80.2707184,
      "seller_id": "9552"
    }
  ]
const pro_array = localStorage.getItem("products")
const shop_array = localStorage.getItem("shop")
if (pro_array == null) {
    localStorage.setItem("products",JSON.stringify(array))
}
if(shop_array == null){
    localStorage.setItem("shop",JSON.stringify(shop_arr))
}







//product_list array created with contain 12 objects
const product_list = [

    {
        image: "assets/image/note-11-2201117ti-redmi-original-imagbh8dmpjfzrjw.webp",
        name: "Redmi note 11",
        price: "₹12,993",
        star: "4.5",
        rating: "27,000 Ratings",
        id : "1"
        
    },


    {
        image: "./assets/image/galaxy-s21-fe-5g-lavender-8gb-128gb-storage-sm-g990elviinu-original-imagbnbdaj3tygup.webp",
        name: "SAMSUNG Galaxy S21 FE 5G",
        price: "₹39,999",
        star: "4.3",
        rating: "26,443 Ratings",
        url : "./pages/buyer/main flow/location.html",
        id : "2"


    },

    {
        image: "./assets/image/-original-imaghxa5hvapbfds.webp",
        name: "APPLE iPhone 14",
        price: "₹77,400",
        star: "4.6",
        rating: "786 Ratings",
        url : "./pages/buyer/main flow/location.html",
        id : "3"
    },

    {
        image: "./assets/image/-original-imagg2abzhxjckxu.webp",
        name: "OnePlus Nord CE 2 Lite 5G",
        price: "₹19,979",
        star: "4.4",
        rating: "34,497 Ratings",
        url : "./pages/buyer/main flow/location.html"

    },
    
    {
        image: "./assets/image/image/lenova.webp",
        name: "Lenovo IdeaPad 3",
        price: "₹43,700",
        star: "4.3",
        rating: "1,260 Ratings",
        url : "./pages/buyer/main flow/location.html"

    },

    {
        image: "./assets/image/image/acer.webp",
        name: "acer Aspire",
        price: "₹35,990",
        star: "4.4",
        rating: "258 Ratings",
        url : "./pages/buyer/main flow/location.html"

    },
    {
        image: "./assets/image/image/infinix.webp",
        name: "Infinix INBook X1 Neo Series",
        price: "₹24,999",
        star: "4.2",
        rating: "2,819 Ratings",
        url : "./pages/buyer/main flow/location.html"

    },
    {
        image: "./assets/image/na-thin-and-light-laptop-asus-original-imag3ebnzawky4kn.webp",
        name: "ASUS Core i3 11th Gen",
        price: "₹36,990",
        star: "4.3",
        rating: "1,034 Ratings",
        url : "./pages/buyer/main flow/location.html"

    },
    {
        image: "./assets/image/rockerz-450-pro-boat-original-imagf9gyd4u6w85z.webp",
        name: "boAt Rockerz 450 Pro",
        price: "₹1,999",
        star: "4.2",
        rating: "39,601 Ratings",
        url : "./pages/buyer/main flow/location.html"

    },
    {
        image: "./assets/image/mtey2hn-a-apple-original-imaf9ec8nvqu6ymc.webp",
        name: "APPLE Watch Series 3",
        price: "₹20,900",
        star: "4.6",
        rating: "55,175 Ratings",
        url : "./pages/buyer/main flow/location.html"

    },
    {
        image: "./assets/image/-original-imaga4m8sz5ymcf7.webp",
        name: "Boult Audio Y1 TWS Earbuds",
        price: "₹1,499",
        star: "4.0",
        rating: "60,686 Ratings",
        url : "./pages/buyer/main flow/location.html"

    },
    {
        image: "./assets/image/-original-imaggz3n8pymzwbr.webp",
        name: "Apple 20W Charging Adapter",
        price: "₹1,599",
        star: "4.6",
        rating: "1,14,282 Ratings",
        url : "./pages/buyer/main flow/location.html"


    }


]

const product_detail =[
{
Images :
 {
    main_image :"../../../assets/image/redmi-main.webp",
    image_1  : "../../../assets/image/redmi-1.webp",
    image_2 : "../../../assets/image/redmi-2.webp",
    image_3 : "../../../assets/image/redmi-3.webp"
},

product_name : "Redmi Note 11 (Horizon Blue, 128 GB) (6 GB RAM)",
product_price : "₹14,690",
star : "4.3",
ratings : "26,443 Ratings",

highlights : {
    lists_1 : "5000 mAh Battery",
    lists_2 : "50MP Rear Camera",
    lists_3 : "16.33 cm (6.43 inch) Display",
    lists_4 : "6 GB RAM | 128 GB ROM",
},
shop_name : "Chennai - Madipakam",
shop_address : "69/70, Bazaar Road, Meenatchi Sundareswarar Koil, Sadasiva Nagar, Madipakkam, Chennai. Tamil Nadu 600091 Ph: 805678889"

},
{
Images : {
    main_image :"../../../../assets/image/samsung-galaxy/samsung-main.webp",
    image_1  : "../../../../assets/image/samsung-galaxy/samsung-2.webp",
    image_2 : "../../../../assets/image/samsung-galaxy/samsung-3.webp",
    image_3 : "../../../../assets/image/samsung-galaxy/samsung-4.webp"
},

product_name : "SAMSUNG Galaxy S21 FE 5G (Lavender, 128 GB)",
product_price : "₹39,999",
star : "4.3",
ratings : "26,946 Ratings",

highlights : {
    lists_1 : "8 GB RAM | 128 GB ROM",
    lists_2 : "16.26 cm (6.4 inch) Full HD+ Display",
    lists_3 : "12MP + 12MP + 8MP (OIS) | 32MP Front Camera",
    lists_4 : "4500 mAh Lithium-ion Battery",
},
shop_name : "Chennai - Koyambedu",
shop_address : "No: 1, Kaliamman Koil Street, opp KFC Koyambedu, Chennai.Tamil Nadu 600107 Ph: 8428100000"
},


]
//     

// for (let j=0; j<12; j++) //loop for creating 12 product cards
// {
//     //div 1 class name: pack
//     const div_2 = document.createElement("div");
//     div_2.setAttribute("class", "mob")


//     //product img
//     const img = document.createElement("img");
//     img.setAttribute("src", product_list[j].image)
//     img.setAttribute("alt", "redmi_note_11")
//     img.setAttribute("width", "150px")
//     img.setAttribute("height", "200px")
//     div_2.append(img)

//     //anker tag for going next pages
//     const a = document.createElement("a");
//     a.setAttribute("aria-label", "redmi")
//     a.setAttribute("class", "mob-link")
//     a.setAttribute("href", "/pages/buyer/main flow/product-detail.html?id="+ product_list[j].id)
//     div_2.append(a)

//     //product name
//     const h4 = document.createElement("h4");
//     h4.setAttribute("class", "detail-1")
//     h4.innerHTML = product_list[j].name
//     a.append(h4)

//     //div 2 class name: rate for show price
//     const div_3 = document.createElement("div");
//     div_3.setAttribute("class", "rate")
//     div_2.append(div_3)

//     //product price
//     const h2 = document.createElement("h2");
//     h2.innerHTML = product_list[j].price
//     div_3.append(h2)

//     //product price
//     const p = document.createElement("p");
//     p.setAttribute("class", "onward")
//     p.innerHTML = "onwards"
//     div_3.append(p)

//     //div 2 class name: rate for show rating
//     const div_4 = document.createElement("div");
//     div_4.setAttribute("class", "rating")
//     div_2.append(div_4)

//     //div 2 class name: rate for show rating
//     const div_5 = document.createElement("div");
//     div_5.setAttribute("class", "rating-1")
//     div_4.append(div_5)

//     //product rating
//     const h5 = document.createElement("h5");
//     h5.innerHTML = product_list[j].star
//     div_5.append(h5)

//     //product rating star icon
//     const i = document.createElement("i");
//     i.setAttribute("class", "fa fa-star")
//     i.setAttribute("aria-hidden", "true")
//     div_5.append(i)

//     //product rating count
//     const p_1 = document.createElement("p");
//     p_1.innerHTML = product_list[j].rating
//     div_4.append(p_1)

//     document.querySelector(".pack").append(div_2)

// }

// for(k=0;k<=product_detail.length;k++){
//     const a = document.createElement("a");
//     a.setAttribute("aria-label", "redmi")
//     a.setAttribute("class", "mob-link")
//     a.setAttribute("href", "/pages/buyer/main flow/product-detail.html?product_name="+ product_detail[k]["product_name"])
//     div_2.append(a)
// }

//...................................................................................................
//product_detail array with contain page details




//toggle option scripts are there
let icon = document.querySelector(".fa-bars")
let menu = document.querySelector(".menu")

icon.addEventListener('click',function(){
menu.classList.toggle('showmenu');
});

//get elements from my account btn for redirecting
const login = document.getElementById("login")
const profile = JSON.parse(localStorage.getItem("profile"))

//this condition for showing login text while there is no profile are logged out
if (profile == false) {

  login.innerText = "Login"
}
else if (profile == null) {

login.innerText = "Login"
}

//this logic for decide which page want to go in diffrent situation
login.addEventListener("click",function(){
if (profile == false) {
window.location.href ="/pages/sign-in/login.html"
login.innerText = "Login"
}
else if (profile == null) {
window.location.href ="/pages/sign-in/login.html"
login.innerText = "Login"
}
else{
window.location.href ="/pages/sign-in/real-profile.html"
}
});




//produucts display from object
const product_array = JSON.parse(localStorage.getItem("products"))
//console.log(product_array);
const pr_array = product_array.filter(function (e) {

if (e["status"] === true) {
return true
}
else{
return false
}

})

//    console.log(false);

for (let j=0; j< pr_array.length; j++) //loop for creating 12 product cards
{

        //anker tag for going next pages
        const a = document.createElement("a");
        a.setAttribute("aria-label", "redmi")
        a.setAttribute("class", "mob-link")
        a.setAttribute("href", "/pages/buyer/main flow/location.html?user_id="+ pr_array[j]["user_id"])
        

    //div 1 class name: pack
    const div_2 = document.createElement("div");
    div_2.setAttribute("class", "mob")
    a.append(div_2)


    //product img
    const img = document.createElement("img");
    img.setAttribute("src", pr_array[j]["product_img_1"])
    img.setAttribute("alt", "redmi_note_11")
    img.setAttribute("width", "150px")
    img.setAttribute("height", "200px")
    div_2.append(img)


    //product name
    const h4 = document.createElement("h4");
    h4.setAttribute("class", "detail-1")
    h4.innerHTML = pr_array[j]["product_name"]
    div_2.append(h4)

    //div 2 class name: rate for show price
    const div_3 = document.createElement("div");
    div_3.setAttribute("class", "rate")
    div_2.append(div_3)

    //product price
    const h2 = document.createElement("h2");
    h2.innerHTML = pr_array[j]["product_price"]+" "
    div_3.append(h2)

    //product price
    const p = document.createElement("p");
    p.setAttribute("class", "onward")
    p.innerHTML = "onwards"
    div_3.append(p)

    //div 2 class name: rate for show rating
    const div_4 = document.createElement("div");
    div_4.setAttribute("class", "rating")
    div_2.append(div_4)

    //div 2 class name: rate for show rating
    const div_5 = document.createElement("div");
    div_5.setAttribute("class", "rating-1")
    div_4.append(div_5)

    //product rating
    const h5 = document.createElement("h5");
    h5.innerHTML = product_list[j].star
    div_5.append(h5)

    //product rating star icon
    const i = document.createElement("i");
    i.setAttribute("class", "fa fa-star")
    i.setAttribute("aria-hidden", "true")
    div_5.append(i)

    //product rating count
    const p_1 = document.createElement("p");
    p_1.innerHTML = product_list[j].rating
    div_4.append(p_1)

    document.querySelector(".pack").append(a)

}

const pr_btn = document.getElementById("pr_btn_create")

const seller_profile = JSON.parse(localStorage.getItem("profile"))
if (seller_profile["seller_id"]) {
pr_btn.innerText = "Create product"
pr_btn.addEventListener("click",function(){
    window.location.href = "/pages/Seller/product_enter.html"
    })
}

if (profile["seller_id"] !== undefined) {
    const seller_nav = document.getElementById("seller")
    const cart_nav = document.getElementById("order_hide")
    const cart_icon = document.getElementById("cart_icon")
    const location_icon = document.getElementById("order_icon")

    
    seller_nav.style.display = "none"
    cart_nav.style.display = "none"
    // cart_icon.removeAttribute("class")
    cart_icon.setAttribute("class","home-icon fa-solid fa-calendar-plus")
    location_icon.setAttribute("class","home-icon fa-solid fa-clipboard-list")

    cart_icon.addEventListener("click",function () {
        window.location.href = "/pages/Seller/mobile_create.html?id="+profile["shop_id"]
    })
    location_icon.addEventListener("click",function () {
        window.location.href = "/pages/Seller/order_request.html?id="+profile["shop_id"]
    })

    document.querySelector(".pack").innerHTML = ""
    document.querySelector(".our").innerHTML = ""
    

}
else{
    //this logic for user going to orders page
const orders = document.getElementById("order")
const cart = document.getElementById("cart")
const user_obj = JSON.parse(localStorage.getItem("profile"))
orders.addEventListener("click",function(){
if (profile == false) {
window.location.href ="/pages/sign-in/login.html"
}
else if (profile == null) {
window.location.href ="/pages/sign-in/login.html"
}
else{
window.location.href ="/pages/buyer/my_orders.html?user_id="+user_obj["user_id"]
}
})
cart.addEventListener("click",function(){
if (profile == false) {
window.location.href ="/pages/sign-in/login.html"
}
else if (profile == null) {
window.location.href ="/pages/sign-in/login.html"
}
else{
window.location.href ="./pages/buyer/cart.html?user_id="+user_obj["user_id"]
}
})
}
