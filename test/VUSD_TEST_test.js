const VUSD_TEST = artifacts.require("VUSD_TEST");

contract("VUSD_TEST",  (accounts) => {
    it("should exist",async () => {
       let vusd_instance = await VUSD_TEST.deployed();

       let total_supply = await vusd_instance.totalSupply();
       console.log("TOTAL SUPPLY BEFORE FAUCET:" + total_supply);
       await vusd_instance.faucet();
       total_supply = await vusd_instance.totalSupply();
       console.log("TOTAL SUPPLY AFTER FAUCET:" + total_supply);
    });
})