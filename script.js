let products = {
    data: [
        {
            productName: "Peace-Za! T-Shirt",
            category: "Shirt",
            price: "RM90",
            image: "product8.jpg",
            page: "project2.html",
        },
        {
            productName: "35 Pocket Tee",
            category: "Shirt",
            price: "RM105",
            image: "product1.jpg",
            page: "project7.html",
        },
        {
            productName: "The End 6 Panel Cap",
            category: "Accecories",
            price: "RM80",
            image: "product2.jpg",
            page: "project1.html",
        },
        {
            productName: "Katering T-Shirt",
            category: "Shirt",
            price: "RM95",
            image: "product3.jpg",
            page: "project6.html",
        },
        {
            productName: "Cordura Slingbag",
            category: "Accecories",
            price: "RM105",
            image: "product4.jpg",
            page: "project4.html",
        },
        {
            productName: "PN Socks",
            category: "Accecories",
            price: "RM37",
            image: "product5.jpg",
            page: "project8.html",
        },
        {
            productName: "PN T-Shirt",
            category: "Shirt",
            price: "RM95",
            image: "product6.jpg",
            page: "project3.html",
        },
        {
            productName: "Cordura Wallet",
            category: "Accecories",
            price: "RM50",
            image: "product7.jpg",
            page: "project5.html",
        },

    ],
};

for (let i of products.data) {

    let card = document.createElement("div");
   
    card.classList.add("card",i.category,"hide");
   
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
   
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
  
    let container = document.createElement("div");
    container.classList.add("container")

    let name = document.createElement("h5")
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
 
    let price = document.createElement("h6");
    price.innerText = i.price;
    container.appendChild(price); 

    card.addEventListener("click", () => {
        window.location.href = i.page;
    });    

    card.appendChild(container);
    document.getElementById("products").appendChild(card);
}


function filterProduct(value){
    
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
    
    if(value.toUpperCase() == button.innerText.toUpperCase()){
        button.classList.add("active");
    }
    else{
        button.classList.remove("active")
    }
    });

   
    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
       
        if(value == "all"){
            element.classList.remove("hide");
        }
        else {
            if(element.classList.contains(value)){
                element.classList.remove("hide");
            }
            else{
                element.classList.add("hide");
            }
        }
    });
}


document.getElementById("search").addEventListener
("click", () => {
    
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");

    elements.forEach((element,index) => {
        
        if (element.innerText.toUpperCase().includes(searchInput.toUpperCase())){
            cards[index].classList.remove("hide");
            }
        else{
            cards[index].classList.add("hide");
        }
    })
});

window.onload = () => {
    filterProduct("all");
};