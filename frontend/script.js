fetch("http://localhost:5000/api/products")
    .then(response => response.json())
    .then(products => {
        const container = document.getElementById("products");

        products.forEach(product => {
            const item = document.createElement("div");

            item.innerHTML = `
                <h3>${product.name}</h3>
                <p>Price: ₹${product.price}</p>
                <p>Category: ${product.category}</p>
                <hr>
            `;

            container.appendChild(item);
        });
    })
    .catch(error => {
        console.error("Error:", error);
    });