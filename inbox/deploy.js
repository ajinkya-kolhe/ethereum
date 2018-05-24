const HdWalletProvider = reqire('truffle-hdwallet-provider')
const Web3 = require('web3')
const { interface, bytecode } = require('./compile')
const provider = new HdWalletProvider(
  'weapon frame aunt capital nest corn ivory flush fatal damage giggle pair',
  'https://rinkeby.infura.io/LH1ujCA82E9zCHA2Omo6'
)
const web3 = new Web3(provider)

