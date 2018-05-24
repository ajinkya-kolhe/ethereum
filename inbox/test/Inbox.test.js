const assert = require('assert')
const ganache = require('ganache-cli')
const Web3 = require('web3')
const web3 = new Web3(ganache.provider())
const { interface, bytecode } = require('../compile')
require('events').EventEmitter.defaultMaxListeners = 15;

const DEFAULT_MESSAGE = 'Hello World'
let accounts, inbox

beforeEach(async () => {
  accounts = await web3.eth.getAccounts()
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: [DEFAULT_MESSAGE] })
    .send({ from: accounts[0], gas: '1000000' })
})

describe('Inbox', () => {
	it('should deploy a contract', () => {
    assert.ok(inbox.options.address)
  })

  it('should get a default message', async () => {
    const message = await inbox.methods.message().call()
    assert.equal(message, DEFAULT_MESSAGE)
  })
})
