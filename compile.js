const path = require('path');
const fs = require('fs');

const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf-8');

const input = {
  language: 'Solidity',
  sources: { 'Inbox.sol': { content: source } },
  settings: {
    outputSelection: {
      '*': { '*': ['*'] },
    },
  },
};

const compiledOutput = JSON.parse(solc.compile(JSON.stringify(input)));
const compiledContract = compiledOutput.contracts['Inbox.sol'];

module.exports = compiledContract.Inbox;
