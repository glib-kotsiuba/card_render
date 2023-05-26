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
        price: [100, 1000]
    },
    {
        type: 'laptop',
        price: [50, 1500]
    },
    {
        type: 'smartphone',
        price: [80, 2000]
    },
    {
        type: 'tablet',
        price: [20, 1300]
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

let Kitchen = { category: "Kitchen" },
    Devices = { category: "Devices" },
    Cosmetics = { category: "Cosmetics" };


let modProducts = [];

function getProto(arr, proto) {
    modProducts = arr
        .map(product => {
            let newProducts = Object.create(proto);
            for (key in product) {
                newProducts[key] = product[key];
            }
            return newProducts;
        })
    modProducts.category = proto.category;
    return modProducts;
}


let arr = [
    getProto(kitchenProducts, Kitchen),
    getProto(devicesProducts, Devices),
    getProto(cosmeticsProducts, Cosmetics)
];
console.log(arr)

let newArr = [];

arr.forEach(array => {
    document.write(`<div class="category px-3"><h3>Category: ${array.category}</h3><div class="item__row">`)
    array.map(obj => {
        newArr.push(`<div class="card bg-body-secondary justify-content-between align-items-center p-3 gap-2"style="width:${(100 / array.length) - 2}%">
                        <img src="./images/${obj.type}.svg" alt="">
                        <p class="mb-0">Name: <span><b>${obj.type}</b></span></p>
                        <p class="mb-0">Price: <span><b>$${Array.isArray(obj.price) === true ? String(obj.price[0]) + '-' + String(obj.price[1]) : obj.price}</b></span></p>
                    </div>`)
    })
    document.write(newArr.join(''));
    newArr.splice(0);
    document.write(`</div></div>`)

});

window.addEventListener('resize', () => {
    if (window.innerWidth <= 1200) {
        document.querySelectorAll(`.item__row`).forEach((card) => {
            card.classList.add(`flex-column`)
        })
        document.querySelectorAll(`.card`).forEach((card) => {
            card.classList.add(`card__responsive`)
        })
    } else {
        document.querySelectorAll(`.item__row`).forEach((card) => {
            card.classList.remove(`flex-column`)
        })
        document.querySelectorAll(`.card`).forEach((card) => {
            card.classList.remove(`card__responsive`)
        })
    }
})