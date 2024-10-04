/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

const ALCHEMY_API_URL = "https://eth-holesky.g.alchemy.com/v2/naV-yyVERfxmX_exJqz2MAyiLHm5IQZ-"; 
const PRIVATE_KEY = "3914c3cc4b881bd287cbeb347012ef78c964bfcee3fc15e9dd3f31552607c400"; 

module.exports = {
  solidity: "0.8.26", 
  networks: {
    holesky: {
      url: ALCHEMY_API_URL,
      accounts: [`0x${PRIVATE_KEY}`] 
    }
  }
};
