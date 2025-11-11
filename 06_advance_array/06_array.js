let arr = [7, 1, 5, 3, 6, 4];

function maxprofit(prices) {
  let maxprofit = 0;
  let min = prices[0];

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) min = prices[i];

    let profit = prices[i] - min;
    maxprofit = Math.max(maxprofit, profit);
  }
  return maxprofit;
}

console.log(maxprofit(arr));
