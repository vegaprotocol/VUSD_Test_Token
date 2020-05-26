# VUSD_Test_Token

#### Ropsten deployment:
* contract address: 0x955C6789A7fbee203B4bE0F01428E769308813f2
* constructor args: "VUSD_TEST", "VUSD", 18, "1000000"
* etherscan token info: https://ropsten.etherscan.io/token/0x955C6789A7fbee203B4bE0F01428E769308813f2
* etherscan pending contract tx: https://ropsten.etherscan.io/address/0x955C6789A7fbee203B4bE0F01428E769308813f2


#### To get tokens:
* call `faucet()` function to mint and receive 1000 VUSD

#### RUN CONTRACT FUNCTIONS
* unlock MetaMask
* switch Metamask to Ropsten testnet
* ensure you have a positive ETH balance on unlocked account (click `deposit` if not and use the faucet)
* go to  `https://www.myetherwallet.com/access-my-wallet`
* click "Access my wallet"
* click "mew CX"
* click "I accept terms" checkmark
* click "Access my Wallet"
* click "Contract"
* for "Contract Address" paste: 0x955C6789A7fbee203B4bE0F01428E769308813f2
* for "ABI/JSON Interface" paste contents of `VUSD_TEST_abi.json`
* click "continue"
* from dropdown called "Select an item" select `faucet`
* click "write"
* click "confirm" on Metamask Popup
