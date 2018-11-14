import axios from 'axios';

export const loadData = ({commit}) => {
  axios.get('trader.json')
    .then(function (response) {

      const data = response.data;

      const stocks = data.stocks;
      const funds = data.funds;
      const stockPortfolio = data.stockPortfolio;

      const portfolio = {
        stockPortfolio,
        funds
      }

      //stocks.js
      commit('setStocks', stocks);

      //portfolio.js
      commit('SET_PORTFOLIO', portfolio);

    })
};