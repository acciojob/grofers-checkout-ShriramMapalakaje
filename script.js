const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // 1. Select all elements with the class 'price'
    const priceElements = document.querySelectorAll('.price');
    let total = 0;

    // 2. Loop through the elements and add their numeric values to the total
    priceElements.forEach(element => {
        total += parseFloat(element.textContent);
    });

    // 3. Create a new row (tr) and a new cell (td)
    const table = document.querySelector('table');
    const newRow = document.createElement('tr');
    const totalCell = document.createElement('td');

    // 4. Set the cell content and make it span both columns for a clean look
    totalCell.setAttribute('id', 'ans'); // Good practice for testing/identification
    totalCell.setAttribute('colspan', '2');
    totalCell.textContent = `Total Price: Rs ${total}`;
    totalCell.style.fontWeight = 'bold';
    totalCell.style.textAlign = 'center';

    // 5. Append the cell to the row, and the row to the table
    newRow.appendChild(totalCell);
    table.appendChild(newRow);

    // Optional: Disable the button after click to prevent multiple total rows
    getSumBtn.disabled = true;
};

getSumBtn.addEventListener("click", getSum);