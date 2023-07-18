const ganache = require('ganache');
const { Web3 } = require('web3');

const { provider } = ganache;
const web3 = new Web3(provider());
