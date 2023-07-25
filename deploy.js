const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const dotenv = require('dotenv');

const { abi, evm } = require('./compile');

// Load Environment variables
const { parsed } = dotenv.config();
const { ACCOUNT_MNEMONIC, INFURA_URL } = parsed;

// Setting up a Provider and Web3 instance
const provider = new HDWalletProvider(ACCOUNT_MNEMONIC, INFURA_URL);
const web3 = new Web3(provider);
