const Migrations = artifacts.require("Migrations");

const VUSD_TEST = artifacts.require("VUSD_TEST");

module.exports = function(deployer) {
  deployer.deploy(Migrations);

  deployer.deploy(VUSD_TEST, "VUSD_TEST", "VUSD", 18, 1000000);

};
