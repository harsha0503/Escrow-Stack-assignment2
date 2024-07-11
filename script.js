const companyData = {
    company1: {
        accounts: {
            account1: [
                { id: 1, name: 'Alice', balance: '$1000' },
                { id: 2, name: 'Bob', balance: '$1500' }
            ],
            account2: [
                { id: 3, name: 'Charlie', balance: '$2000' },
                { id: 4, name: 'David', balance: '$2500' }
            ]
        }
    },
    company2: {
        accounts: {
            account1: [
                { id: 5, name: 'Eve', balance: '$3000' },
                { id: 6, name: 'Frank', balance: '$3500' }
            ],
            account2: [
                { id: 7, name: 'Grace', balance: '$4000' },
                { id: 8, name: 'Hank', balance: '$4500' }
            ]
        }
    }
};

function updateAccounts() {
    const companySelect = document.getElementById('company');
    const accountSelect = document.getElementById('account');
    const selectedCompany = companySelect.value;

    accountSelect.innerHTML = '';
    const accounts = companyData[selectedCompany].accounts;

    for (const account in accounts) {
        const option = document.createElement('option');
        option.value = account;
        option.textContent = account.charAt(0).toUpperCase() + account.slice(1);
        accountSelect.appendChild(option);
    }

    updateTable();
}

function updateTable() {
    const companySelect = document.getElementById('company');
    const accountSelect = document.getElementById('account');
    const selectedCompany = companySelect.value;
    const selectedAccount = accountSelect.value;

    const tableBody = document.getElementById('data-table').querySelector('tbody');
    tableBody.innerHTML = '';

    const accountData = companyData[selectedCompany].accounts[selectedAccount];
    accountData.forEach(record => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${record.id}</td>
            <td>${record.name}</td>
            <td>${record.balance}</td>
        `;
        tableBody.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateAccounts();
});