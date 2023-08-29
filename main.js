const createBtn = document.getElementById('create-btn');
const clearBtn = document.getElementById('clear-btn');
const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');

const brandIn = document.querySelector('#brandInput');
const priceIn = document.querySelector('#priceInput');
const modelIn = document.querySelector('#modelInput');

const tBody = document.querySelector('#car-table tbody');

const cars = [];

createBtn.onclick = () => {
   let brand = brandIn.value.trim();
   let price = priceIn.value.trim();
   let model = modelIn.value.trim();

   if (brand === '' || price === '' || model === '') {
      alert("Please enter all required data.");
   } else {
      let item = new Car(brand, price, model, stockCheck.checked);
      console.log(item);
      cars.push(item);
      updateTable();
   }
};

clearBtn.onclick = () => {
   cars.length = 0;
   updateTable();
};

searchButton.onclick = () => {
   updateTable();
};

function updateTable() {
   tBody.innerHTML = '';
   cars.forEach(item => {
      if (searchInput.value.trim() === '' ||
         item.brand.toLowerCase().includes(searchInput.value.trim().toLowerCase()) ||
         item.model.toLowerCase().includes(searchInput.value.trim().toLowerCase())) {
         addProductToTable(item);
      }
   });
}

function addProductToTable(item) {
   tBody.innerHTML += `
        <tr>
            <th scope="row">${item.id}</th>
            <td>${item.brand}</td>
            <td>${item.model}</td>
            <td>${item.price}</td>
            <td>
                ${item.inStock ?
         '<span class="badge text-bg-primary">In Stock</span>'
         :
         '<span class="badge text-bg-secondary">Out of Stock</span>'
      }
            </td>
        </tr>`;
}

class Car {
   static count = 1;

   constructor(brand, price, model, inStock) {
      this.brand = brand;
      this.price = price;
      this.model = model;
      this.inStock = inStock;
      this.id = Car.count++;
   }
}