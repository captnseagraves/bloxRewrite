var MLSToken = artifacts.require("./Blox.sol");

contract('MLSToken', function(accounts) {

  let mlsNumber = 123456789;
  homeAddress = "4242 Artisan Dr. Boulder, CO 80302";
  valueOfHome = 1000000;

  it("should have value for home", async function() {
    // config
    let token = await MLSToken.new({from: accounts[0]});

    await token.MLSCreate(mlsNumber, homeAddress, valueOfHome);

    let mlsNum = await token.mlsNumber.call();
    assert.isTrue(mlsNum == 123456789);

    let home = await token.homeAddress.call();
    assert.isTrue(home == "4242 Artisan Dr. Boulder, CO 80302");

    let value = await token.valueOfHome.call();
    assert.isTrue(value == 1000000);

  });
})
