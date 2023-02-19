// Question link:

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // Solution 1: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/901163352/
  // Solution link
  let maxProfit = 0;
  let lastBuy = prices[0];
  prices.forEach((price) => {
    lastBuy = Math.min(lastBuy, price);
    maxProfit = Math.max(maxProfit, price - lastBuy);
  });
  return maxProfit;

  // Forum Solution:
  // Solution link
};

// Below is for internal testing
module.exports = {
  f: maxProfit,
};
