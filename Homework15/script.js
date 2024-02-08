let kitchenProducts = [
    {
        type: 'grater',
        price: 10
    },
    {
        type: 'pastry-bag',
        price: 25
    },
    {
        type: 'scale',
        price: 5
    },
    {
        type: 'whisk',
        price: 15
    }
];

let devicesProducts = [
    {
        type: 'desktop',
        price: [100,1000]
    },
    {
        type: 'laptop',
        price: [50,1500]
    },
    {
        type: 'smartphone',
        price: [80,2000]
    },
    {
        type: 'tablet',
        price: [20,1300]
    }
];

let cosmeticsProducts = [
    {
        type: 'blush',
        price: 100
    },
    {
        type: 'eyeshadow',
        price: 50
    },
    {
        type: 'lipstick',
        price: 80
    },
    {
        type: 'nail-polish',
        price: 200
    },
    {
        type: 'perfume',
        price: 300,
    }
];

let kitchen = { category: 'kitchen' };
let devices = { category: 'devices' };
let cosmetics = { category: 'cosmetics' };
const mainDiv = document.createElement('div');
mainDiv.className = 'wrapper';
setCategory(kitchen.category);
kitchenProducts.forEach(function(product) {
    let newProduct = Object.create(kitchen);
    newProduct.type = product.type;
    newProduct.price = product.price;
    newProduct.label = 'New!';
    setCard(kitchen.category, newProduct);
});

setLine();
setCategory(devices.category);

devicesProducts.forEach(function(product) {
    let newProduct = Object.create(devices);
    newProduct.type = product.type;
    newProduct.price = product.price;
    newProduct.label = 'Hit!';
    setCard(devices.category, newProduct);
});

setLine();
setCategory(cosmetics.category);
cosmeticsProducts.forEach(function(product) {
    let newProduct = Object.create(cosmetics);
    newProduct.type = product.type;
    newProduct.price = product.price;
    newProduct.label = 'Sale!';
    setCard(cosmetics.category, newProduct);
});
setLine();
document.body.appendChild(mainDiv);

function setCard(category, obj) {
    let divCard = document.createElement('div');
    divCard.className = 'card card--img';
    let img = document.createElement('img');
    img.className = 'img';
    img.src = 'images/'+ category + '/' + obj.type + '.svg';
    let p = document.createElement('p');
    let price = typeof obj.price !== 'number' ? (obj.price).join('-') : obj.price;
    p.innerHTML = `Name: <b>${capitalizeFirstLetter(obj.type)}</b>
                   <br>Price: <b>$${price}</b>
                   <br><br><b>${obj.label}</b>`;
    divCard.appendChild(img);
    divCard.appendChild(p);
    mainDiv.appendChild(divCard);
}

function setLine() {
    const hr = document.createElement('hr');
    hr.style.border = '1px dashed black';
    hr.style.width = '100%';
    mainDiv.appendChild(hr);
}

function setCategory(categoryName){
    let category = document.createElement('p');
    category.innerHTML = `Category: ${categoryName}`;
    category.style.width = '100%';
    category.style.fontSize = '17px';
    mainDiv.appendChild(category);
}

function capitalizeFirstLetter(str) {
    return str.substring(0, 1).toUpperCase() + str.substring(1);
}
