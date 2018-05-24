const HdWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')
const { interface, bytecode } = require('./compile')
const provider = new HdWalletProvider(
  'weapon frame aunt capital nest corn ivory flush fatal damage giggle pair',
  'https://rinkeby.infura.io/LH1ujCA82E9zCHA2Omo6'
)
const web3 = new Web3(provider)

const deploy = async () => {
  const accounts = await web3.eth.getAccounts()

  console.log('Attempting to deploy from account', accounts[0])
  
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hello World'] })
    .send({ from: accounts[0], gas: '1000000' })
  
  console.log('Contract deployed to ', inbox.options.address)
}

deploy()
