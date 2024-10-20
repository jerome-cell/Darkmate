// Display account details
const accountName = document.getElementById('account-name');
const accountBank = document.getElementById('account-bank');
const accountNumberText = document.getElementById('account-number-text');
const amountToPay = document.getElementById('amount-to-pay');

// Hardcoded account details for demonstration purposes
accountName.textContent = 'Account Name:UGWU CHIKAMSO MARTINS';
accountBank.textContent = 'Bank: UBA';
accountNumberText.textContent = '2326392225';
amountToPay.textContent = 'Amount to Pay: $100';

// Copy account number icon
const copyAccountNumberIcon = document.getElementById('copy-account-number-icon');

copyAccountNumberIcon.addEventListener('click', () => {
  navigator.clipboard.writeText(accountNumberText.textContent);
  alert('Account number copied!');
});

// Show account details container after registration form submission
const registrationForm = document.getElementById('form');
const accountDetailsContainer = document.querySelector('.account-details-container');

registrationForm.addEventListener('submit', (e) => {
  e.preventDefault();
  accountDetailsContainer.style.display = 'block';
});