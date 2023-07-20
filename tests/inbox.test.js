const ganache = require('ganache');
const { Web3 } = require('web3');

const { provider } = ganache;
const web3 = new Web3(provider());

let accounts;

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();
  console.log(accounts);

  // Use one of those accounts to deploy
  // the contract
});

describe('Inbox Contract', () => {
  test('should deploy a contract', () => {});
});
