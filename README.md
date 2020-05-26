# VUSD_Test_Token
This is a simple ERC20 token that simulates a stable coin in Vega testnet. [Vega](https://vega.xyz) has deployed this token to Ethereum's Ropsten testnet to demonstrate the Ethereum ERC20 token bridge functionality. VUSD will be whitelisted as one of potentially many settlement assets that can be deposited in to the Vega testnet.

To receive VUSD to your Testnet wallet, follow instructions here: [https://youtu.be/5Q8rjGFphIc](https://youtu.be/5Q8rjGFphIc)

This README will be updated with details of how to deposit your [minted VUSD](#to-get-tokens) through the bridge.

## Ropsten deployment:
* **Contract address:** `0x955C6789A7fbee203B4bE0F01428E769308813f2`
* **Constructor args:** `"VUSD_TEST"`, `"VUSD"`, `18`, `"1000000"`
* **Etherscan token info:** https://ropsten.etherscan.io/token/0x955C6789A7fbee203B4bE0F01428E769308813f2
* **Etherscan pending contract tx:** https://ropsten.etherscan.io/address/0x955C6789A7fbee203B4bE0F01428E769308813f2

### To get tokens
* Call `faucet()` function to mint and receive 1000 VUSD

### Run contract functions
* Unlock MetaMask
* Switch Metamask to Ropsten testnet
* Ensure you have a positive ETH balance on unlocked account (click `deposit` if not and use the faucet)
* Go to  `https://www.myetherwallet.com/access-my-wallet`
* Click "Access my wallet"
* Click "mew CX"
* Click "I accept terms" checkmark
* Click "Access my Wallet"
* Click "Contract"
* For "Contract Address" paste: 0x955C6789A7fbee203B4bE0F01428E769308813f2
* For "ABI/JSON Interface" paste contents of `VUSD_TEST_abi.json`
* Click "continue"
* From dropdown called "Select an item" select `faucet`
* Click "write"
* Click "confirm" on Metamask Popup

## Run the tests
To run the tests, first install the dependencies and start the ganache service:
```bash
npm install
npm test-server
```

When ganache has started up, run the test suite:
```bash
npm test
```

# Links
* [Open Zeppelin](https://openzeppelin.com/contracts/)
* [Truffle](https://www.trufflesuite.com)
