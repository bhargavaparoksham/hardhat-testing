const { expect } = require("chai");

describe('Test Contract Unit Test', function() {
	before(async function () {
      TestContract = await ethers.getContractFactory('TestContract');
      testContract = await TestContract.deploy();
      await testContract.deployed();
    });

    beforeEach(async function () {
        await testContract.setNumber(0);
    });

    it('Initial value is set to 0', async function () {
        expect((await testContract.getNumber()).toString()).to.equal('0');
      });


    it('retrieve returns a value previously stored', async function () {
      await testContract.setNumber(77);
      expect((await testContract.getNumber()).toString()).to.equal('77');
    });

});