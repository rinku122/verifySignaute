const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("VerifySignature", function () {
  it("Check signature", async function () {
    const accounts = await ethers.getSigners(2);

    const VerifySignature = await ethers.getContractFactory("VerifySignature");
    const contract = await VerifySignature.deploy();
    await contract.deployed();

    const signers = await ethers.getSigners();
    const owner = signers[0];
    console.log(signers[0].address, "owner");
    console.log(signers[1].address, "user1");
    const user1 = signers[1];

    const amount = 12345;
    const message = "HelloWorld";
    const nounce = 123;

    const hash = await contract.getMessageHash(
      owner.address,
      amount,
      message,
      nounce
    );

    const arrayFiedresult = ethers.utils.arrayify(hash);

    console.log("hash", hash);

    let hash2 = ethers.utils.solidityKeccak256(
      ["address", "uint256", "string", "uint256"],
      [owner.address, amount, message, nounce]
    );
    console.log("hash2", hash2);

    //keccak256(abi.encodePacked(_to, _amount, _message, _nonce))===ethers.utils.solidityKeccak256([],[])

    expect(hash).to.equal(hash2);

    const sig = await user1.signMessage(arrayFiedresult);

    expect(
      await contract.verify(
        user1.address,
        owner.address,
        amount,
        message,
        nounce,
        sig
      )
    ).to.equal(true);

    expect(
      await contract.verify(
        owner.address,
        user1.address,
        amount + 1,
        message,
        nounce,
        sig
      )
    ).to.equal(false);

    //Check the signer

    const ethSignedMessageHash = await contract.getEthSignedMessageHash(hash);
    const reoveredAddress = await contract.recoverSigner(
      ethSignedMessageHash,
      sig
    );

    expect(user1.address).to.equal(reoveredAddress);
  });
});
