const totalBudget = document.querySelector('#totalBudget');
const totalIncome = document.querySelector('#totalIncome');
const totalExpense = document.querySelector('#totalExpense');
const selectDetail = document.querySelector('#selectDetail');
const desc = document.querySelector('#description');
const inputForm = document.querySelector('#inputForm');
const incomeTable = document.querySelector('#incomeTable')
const expenseTable = document.querySelector('#expenseTable');
const priceNumber = document.querySelector('#priceNumber');
const incomePriceDetail = document.querySelector('icomePriceDetail');
const percentage = document.querySelector('#percentage');
const submitBtn = document.querySelector('#submitBtn');

let incomeTotalArr =[];
let expenseTotalArr = [];
let budget = 0;
selectDetail.addEventListener('change', optionSelected)


function optionSelected(e){
    
        const option = e.target.value;
    
        if(option === 'Income'){
            // console.log('income select');
    
            selectDetail.classList.add('incomeOutline');
            desc.classList.add('incomeOutline');
            priceNumber.classList.add('incomeOutline');
            submitBtn.classList.add('incomeOutline');
    
            selectDetail.classList.remove('expenOutline');
            desc.classList.remove('expenOutline');
            priceNumber.classList.remove('expenOutline');
            submitBtn.classList.remove('expenOutline');
    
        }else {
            // console.log('expense select');

            selectDetail.classList.remove('incomeOutline');
            desc.classList.remove('incomeOutline');
            priceNumber.classList.remove('incomeOutline');
            submitBtn.classList.remove('incomeOutline');

            selectDetail.classList.add('expenOutline');
            desc.classList.add('expenOutline');
            priceNumber.classList.add('expenOutline');
            submitBtn.classList.add('expenOutline');
        }
    
}


inputForm.addEventListener('submit', getDetail);

function getDetail(e){
  
    e.preventDefault();

    const description = desc.value;
    const price = priceNumber.value;
    const total = budget + Number(price);
    
    
    if(description === '' || price === null){
        alert('Fill Detail')
    }

    const elec = selectDetail.value;

    if(elec === 'Income'){
        // console.log('Income Sec');

        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${description}</td>
        <td id="incomePriceDetail">+${price}</td>
        `;

        incomeTable.appendChild(row)
        incomeTotalArr.push(total);
        const incomeBudget = incomeTotalArr.reduce((a,b) => a + b, 0);
        totalIncome.innerHTML = `+${incomeBudget}`
    }else{
        // console.log("Expense Sec");

        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${description}</td>
        <td id="expensePriceDetail">-${price}</td>
        `;

        expenseTable.appendChild(row)
        expenseTotalArr.push(total);
        const expenseBudget = expenseTotalArr.reduce((a,b) => a + b, 0);
        totalExpense.innerHTML = `-${expenseBudget}`
    }

    const totalInBudget = incomeTotalArr.reduce((a,b) => a + b, 0);
    const totalExBudget = expenseTotalArr.reduce((a,b) => a + b, 0);

    totalBudget.innerHTML = `${totalInBudget - totalExBudget}`;

    // console.log(totalExBudget)
    // console.log(totalInBudget)
    const percenTage = (totalExBudget * 100) / totalInBudget;
    percentage.innerText = `${percenTage}%`;
    
    inputForm.reset();
}

