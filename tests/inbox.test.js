const ganache = require('ganache');
const { Web3 } = require('web3');

const { abi, evm } = require('../compile');

const { provider } = ganache;
const web3 = new Web3(provider());

let accounts;
let inbox;

const INITIAL_MESSAGE = 'Hi there!';

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();

  // Use one of those accounts to deploy
  // the contract
  inbox = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object, arguments: [INITIAL_MESSAGE] })
    .send({ from: accounts[0], gas: '1000000' });
});

describe('Inbox Contract', () => {
  test('should deploy a contract', () => {
    expect(inbox.options.address).toBeDefined();
  });

  test('should have a default message', async () => {
    const initialMessage = await inbox.methods.message().call();
    expect(initialMessage).toBe(INITIAL_MESSAGE);
  });

  test('should change the message', async () => {
    const newMessage = 'bye';

    await inbox.methods.setMessage(newMessage).send({ from: accounts[0] });
    const message = await inbox.methods.message().call();

    expect(message).toBe(newMessage);
  });
});
