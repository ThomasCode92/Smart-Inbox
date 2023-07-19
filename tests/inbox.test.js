const ganache = require('ganache');
const { Web3 } = require('web3');

const { provider } = ganache;
const web3 = new Web3(provider());

beforeEach(done => {
  // Get a list of all accounts
  web3.eth.getAccounts().then(fetchedAccounts => {
    console.log(fetchedAccounts);
    done();
  });

  // Use one of those accounts to deploy
  // the contract
});

describe('Inbox Contract', () => {
  test('should deploy a contract', () => {});
});
