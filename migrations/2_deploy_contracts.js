var CrowdBank = artifacts.require("./CrowdBank.sol");
var Mortgage = artifacts.require("./Mortgage.sol");
module.exports = function(deployer) {
  deployer.deploy(CrowdBank, {gas:1070000});
  deployer.deploy(Mortgage, {gas:1070000});
};
