//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract TestContract {

    uint number;

    constructor() {
        number = 0;
    }

     function setNumber(uint _num) public {
          number = _num;
      }

      function getNumber() public view returns (uint) {
          return number;
      }

      function multiplyByThree() public view returns (uint) {
          return number*3;
      }

}