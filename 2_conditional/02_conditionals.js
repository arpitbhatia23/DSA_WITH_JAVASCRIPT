let amount = 7600;

if (amount <= 5000) {
  console.log(`you get 0 % discount }`);
} else if (amount > 5001 && amount <= 7000) {
  console.log(
    `you get 5 % discount of ${Math.floor(amount * 5) / 100} now need to pay ${
      amount - Math.floor(amount * 5) / 100
    }`
  );
} else if (amount > 7001 && amount <= 9000) {
  console.log(
    `you get 10 % discount of ${
      Math.floor(amount * 10) / 100
    }  now need to pay ${amount - Math.floor(amount * 10) / 100}`
  );
} else if (amount > 9000) {
  console.log(
    `you get 20 % discount of ${
      Math.floor(amount * 20) / 100
    } now need to pay ${amount - Math.floor(amount * 20) / 100}`
  );
}
