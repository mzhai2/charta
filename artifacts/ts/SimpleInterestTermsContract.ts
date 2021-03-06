export const SimpleInterestTermsContract = 
{
  "contractName": "SimpleInterestTermsContract",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "agreementId",
          "type": "bytes32"
        }
      ],
      "name": "getValueRepaidToDate",
      "outputs": [
        {
          "name": "_valueRepaid",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "DAY_LENGTH_IN_SECONDS",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "debtKernel",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "MONTH_LENGTH_IN_SECONDS",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "agreementId",
          "type": "bytes32"
        }
      ],
      "name": "registerTermStart",
      "outputs": [
        {
          "name": "_success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "debtRegistry",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "WEEK_LENGTH_IN_SECONDS",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "agreementId",
          "type": "bytes32"
        },
        {
          "name": "payer",
          "type": "address"
        },
        {
          "name": "beneficiary",
          "type": "address"
        },
        {
          "name": "unitsOfRepayment",
          "type": "uint256"
        },
        {
          "name": "tokenAddress",
          "type": "address"
        }
      ],
      "name": "registerRepayment",
      "outputs": [
        {
          "name": "_success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "HOUR_LENGTH_IN_SECONDS",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "repaymentRouter",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "agreementId",
          "type": "bytes32"
        },
        {
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "name": "getExpectedRepaymentValue",
      "outputs": [
        {
          "name": "_expectedRepaymentValue",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "repaymentToken",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "parameters",
          "type": "bytes32"
        }
      ],
      "name": "unpackParametersFromBytes",
      "outputs": [
        {
          "name": "_principalPlusInterest",
          "type": "uint128"
        },
        {
          "name": "_amortizationUnitType",
          "type": "uint8"
        },
        {
          "name": "_termLengthInAmortizationUnits",
          "type": "uint120"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "YEAR_LENGTH_IN_SECONDS",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "valueRepaid",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_debtRegistry",
          "type": "address"
        },
        {
          "name": "_debtKernel",
          "type": "address"
        },
        {
          "name": "_repaymentToken",
          "type": "address"
        },
        {
          "name": "_repaymentRouter",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    }
  ],
  "bytecode": "0x6060604052341561000f57600080fd5b6040516080806110e18339810160405280805190602001909190805190602001909190805190602001909190805190602001909190505083600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050610f848061015d6000396000f3006060604052600436106100db576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806303a896a1146100e0578063077629821461011b578063079dd4b7146101445780632086389414610199578063282b3405146101c25780632f866f731461020157806340018a0d146102565780635f0280ba1461027f5780636f69c96f146103245780636fa9d0561461034d57806399114d84146103a2578063d6939ce0146103e6578063ed8907d71461043b578063fd127a41146104d0578063fd40d52e146104f9575b600080fd5b34156100eb57600080fd5b610105600480803560001916906020019091905050610534565b6040518082815260200191505060405180910390f35b341561012657600080fd5b61012e610558565b6040518082815260200191505060405180910390f35b341561014f57600080fd5b610157610561565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101a457600080fd5b6101ac610587565b6040518082815260200191505060405180910390f35b34156101cd57600080fd5b6101e7600480803560001916906020019091905050610593565b604051808215151515815260200191505060405180910390f35b341561020c57600080fd5b6102146106e2565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561026157600080fd5b610269610708565b6040518082815260200191505060405180910390f35b341561028a57600080fd5b61030a60048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610714565b604051808215151515815260200191505060405180910390f35b341561032f57600080fd5b61033761082a565b6040518082815260200191505060405180910390f35b341561035857600080fd5b610360610830565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156103ad57600080fd5b6103d0600480803560001916906020019091908035906020019091905050610856565b6040518082815260200191505060405180910390f35b34156103f157600080fd5b6103f96109d7565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561044657600080fd5b6104606004808035600019169060200190919050506109fd565b60405180846fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020018360ff1660ff168152602001826effffffffffffffffffffffffffffff166effffffffffffffffffffffffffffff168152602001935050505060405180910390f35b34156104db57600080fd5b6104e3610abe565b6040518082815260200191505060405180910390f35b341561050457600080fd5b61051e600480803560001916906020019091905050610acb565b6040518082815260200191505060405180910390f35b60008060008360001916600019168152602001908152602001600020549050919050565b6018610e100281565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b601e6018610e10020281565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156105f157600080fd5b3073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f6f494c9846000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15156106a957600080fd5b6102c65a03f115156106ba57600080fd5b5050506040518051905073ffffffffffffffffffffffffffffffffffffffff16149050919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60076018610e10020281565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561077257600080fd5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561081c576107f583600080896000191660001916815260200190815260200160002054610ae390919063ffffffff16565b60008088600019166000191681526020019081526020016000208190555060019050610821565b600090505b95945050505050565b610e1081565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000610860610f1d565b600084600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f6f494c9826000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b151561090457600080fd5b6102c65a03f1151561091557600080fd5b5050506040518051905073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1614151561095857600080fd5b61096186610b01565b925082602001518511151561097957600093506109ce565b82604001518510151561099257826000015193506109ce565b61099c8584610d77565b91506109cb83608001516109bd848660000151610dc190919063ffffffff16565b610dfc90919063ffffffff16565b93505b50505092915050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000806000806000806000807fffffffffffffffffffffffffffffffff00000000000000000000000000000000600102891694506fff000000000000000000000000000000600102891693507001000000000000000000000000000000008560019004811515610a6957fe5b0492506f010000000000000000000000000000008460019004811515610a8b57fe5b0491506effffffffffffffffffffffffffffff600102891690508282826001900497509750975050505050509193909250565b61016d6018610e10020281565b60006020528060005260406000206000915090505481565b6000808284019050838110151515610af757fe5b8091505092915050565b610b09610f1d565b6000806000806000806000806000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663314a522e8c6000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1515610bb857600080fd5b6102c65a03f11515610bc957600080fd5b505050604051805190509850610bde896109fd565b826fffffffffffffffffffffffffffffffff1692508160ff169150806effffffffffffffffffffffffffffff169050809850819950829a50505050600480811115610c2557fe5b8711151515610c3357600080fd5b866004811115610c3f57fe5b9450610c4a85610e17565b9350600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d69dbf638c6000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1515610ced57600080fd5b6102c65a03f11515610cfe57600080fd5b505050604051805190509250610d1d8487610dc190919063ffffffff16565b9150610d328383610ae390919063ffffffff16565b905060a060405190810160405280898152602001848152602001828152602001866004811115610d5e57fe5b8152602001878152509950505050505050505050919050565b6000806000610d93846020015186610f0490919063ffffffff16565b9150610da28460600151610e17565b9050610db78183610dfc90919063ffffffff16565b9250505092915050565b6000806000841415610dd65760009150610df5565b8284029050828482811515610de757fe5b04141515610df157fe5b8091505b5092915050565b6000808284811515610e0a57fe5b0490508091505092915050565b6000806004811115610e2557fe5b826004811115610e3157fe5b1415610e4157610e109050610eff565b60016004811115610e4e57fe5b826004811115610e5a57fe5b1415610e6d576018610e10029050610eff565b60026004811115610e7a57fe5b826004811115610e8657fe5b1415610e9c5760076018610e1002029050610eff565b60036004811115610ea957fe5b826004811115610eb557fe5b1415610ecb57601e6018610e1002029050610eff565b600480811115610ed757fe5b826004811115610ee357fe5b1415610efa5761016d6018610e1002029050610eff565b600080fd5b919050565b6000828211151515610f1257fe5b818303905092915050565b60a06040519081016040528060008152602001600081526020016000815260200160006004811115610f4b57fe5b81526020016000815250905600a165627a7a72305820ce06398ae9aeb68ea3bedb0180c888e970146fdf656569e58506d50089fcad220029",
  "deployedBytecode": "0x6060604052600436106100db576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806303a896a1146100e0578063077629821461011b578063079dd4b7146101445780632086389414610199578063282b3405146101c25780632f866f731461020157806340018a0d146102565780635f0280ba1461027f5780636f69c96f146103245780636fa9d0561461034d57806399114d84146103a2578063d6939ce0146103e6578063ed8907d71461043b578063fd127a41146104d0578063fd40d52e146104f9575b600080fd5b34156100eb57600080fd5b610105600480803560001916906020019091905050610534565b6040518082815260200191505060405180910390f35b341561012657600080fd5b61012e610558565b6040518082815260200191505060405180910390f35b341561014f57600080fd5b610157610561565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101a457600080fd5b6101ac610587565b6040518082815260200191505060405180910390f35b34156101cd57600080fd5b6101e7600480803560001916906020019091905050610593565b604051808215151515815260200191505060405180910390f35b341561020c57600080fd5b6102146106e2565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561026157600080fd5b610269610708565b6040518082815260200191505060405180910390f35b341561028a57600080fd5b61030a60048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610714565b604051808215151515815260200191505060405180910390f35b341561032f57600080fd5b61033761082a565b6040518082815260200191505060405180910390f35b341561035857600080fd5b610360610830565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156103ad57600080fd5b6103d0600480803560001916906020019091908035906020019091905050610856565b6040518082815260200191505060405180910390f35b34156103f157600080fd5b6103f96109d7565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561044657600080fd5b6104606004808035600019169060200190919050506109fd565b60405180846fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020018360ff1660ff168152602001826effffffffffffffffffffffffffffff166effffffffffffffffffffffffffffff168152602001935050505060405180910390f35b34156104db57600080fd5b6104e3610abe565b6040518082815260200191505060405180910390f35b341561050457600080fd5b61051e600480803560001916906020019091905050610acb565b6040518082815260200191505060405180910390f35b60008060008360001916600019168152602001908152602001600020549050919050565b6018610e100281565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b601e6018610e10020281565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156105f157600080fd5b3073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f6f494c9846000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15156106a957600080fd5b6102c65a03f115156106ba57600080fd5b5050506040518051905073ffffffffffffffffffffffffffffffffffffffff16149050919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60076018610e10020281565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561077257600080fd5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561081c576107f583600080896000191660001916815260200190815260200160002054610ae390919063ffffffff16565b60008088600019166000191681526020019081526020016000208190555060019050610821565b600090505b95945050505050565b610e1081565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000610860610f1d565b600084600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f6f494c9826000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b151561090457600080fd5b6102c65a03f1151561091557600080fd5b5050506040518051905073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1614151561095857600080fd5b61096186610b01565b925082602001518511151561097957600093506109ce565b82604001518510151561099257826000015193506109ce565b61099c8584610d77565b91506109cb83608001516109bd848660000151610dc190919063ffffffff16565b610dfc90919063ffffffff16565b93505b50505092915050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000806000806000806000807fffffffffffffffffffffffffffffffff00000000000000000000000000000000600102891694506fff000000000000000000000000000000600102891693507001000000000000000000000000000000008560019004811515610a6957fe5b0492506f010000000000000000000000000000008460019004811515610a8b57fe5b0491506effffffffffffffffffffffffffffff600102891690508282826001900497509750975050505050509193909250565b61016d6018610e10020281565b60006020528060005260406000206000915090505481565b6000808284019050838110151515610af757fe5b8091505092915050565b610b09610f1d565b6000806000806000806000806000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663314a522e8c6000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1515610bb857600080fd5b6102c65a03f11515610bc957600080fd5b505050604051805190509850610bde896109fd565b826fffffffffffffffffffffffffffffffff1692508160ff169150806effffffffffffffffffffffffffffff169050809850819950829a50505050600480811115610c2557fe5b8711151515610c3357600080fd5b866004811115610c3f57fe5b9450610c4a85610e17565b9350600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d69dbf638c6000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1515610ced57600080fd5b6102c65a03f11515610cfe57600080fd5b505050604051805190509250610d1d8487610dc190919063ffffffff16565b9150610d328383610ae390919063ffffffff16565b905060a060405190810160405280898152602001848152602001828152602001866004811115610d5e57fe5b8152602001878152509950505050505050505050919050565b6000806000610d93846020015186610f0490919063ffffffff16565b9150610da28460600151610e17565b9050610db78183610dfc90919063ffffffff16565b9250505092915050565b6000806000841415610dd65760009150610df5565b8284029050828482811515610de757fe5b04141515610df157fe5b8091505b5092915050565b6000808284811515610e0a57fe5b0490508091505092915050565b6000806004811115610e2557fe5b826004811115610e3157fe5b1415610e4157610e109050610eff565b60016004811115610e4e57fe5b826004811115610e5a57fe5b1415610e6d576018610e10029050610eff565b60026004811115610e7a57fe5b826004811115610e8657fe5b1415610e9c5760076018610e1002029050610eff565b60036004811115610ea957fe5b826004811115610eb557fe5b1415610ecb57601e6018610e1002029050610eff565b600480811115610ed757fe5b826004811115610ee357fe5b1415610efa5761016d6018610e1002029050610eff565b600080fd5b919050565b6000828211151515610f1257fe5b818303905092915050565b60a06040519081016040528060008152602001600081526020016000815260200160006004811115610f4b57fe5b81526020016000815250905600a165627a7a72305820ce06398ae9aeb68ea3bedb0180c888e970146fdf656569e58506d50089fcad220029",
  "sourceMap": "728:10145:12:-;;;2041:369;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2268:13;2240:12;;:42;;;;;;;;;;;;;;;;;;2306:11;2293:10;;:24;;;;;;;;;;;;;;;;;;2344:15;2327:14;;:32;;;;;;;;;;;;;;;;;;2387:16;2369:15;;:34;;;;;;;;;;;;;;;;;;2041:369;;;;728:10145;;;;;;",
  "deployedSourceMap": "728:10145:12:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6255:167;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1190:72;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1594:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1345:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2991:219;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1555:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1268:71;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3921:446;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1131:53;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1660:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4976:998;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1625:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6428:1691;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1424:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1504:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6255:167;6351:17;6391:11;:24;6403:11;6391:24;;;;;;;;;;;;;;;;;;6384:31;;6255:167;;;:::o;1190:72::-;1260:2;1177:7;1235:27;1190:72;:::o;1594:25::-;;;;;;;;;;;;;:::o;1345:73::-;1416:2;1260;1177:7;1235:27;1392:26;1345:73;:::o;2991:219::-;3108:13;2006:10;;;;;;;;;;;1992:24;;:10;:24;;;1984:33;;;;;;;;3198:4;3144:59;;:12;;;;;;;;;;;:29;;;3174:11;3144:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:59;;;3137:66;;2991:219;;;:::o;1555:32::-;;;;;;;;;;;;;:::o;1268:71::-;1338:1;1260:2;1177:7;1235:27;1314:25;1268:71;:::o;3921:446::-;4150:13;1751:15;;;;;;;;;;;1737:29;;:10;:29;;;1729:38;;;;;;;;4199:14;;;;;;;;;;;4183:30;;:12;:30;;;4179:159;;;4256:46;4285:16;4256:11;:24;4268:11;4256:24;;;;;;;;;;;;;;;;;;:28;;:46;;;;:::i;:::-;4229:11;:24;4241:11;4229:24;;;;;;;;;;;;;;;;;:73;;;;4323:4;4316:11;;;;4179:159;4355:5;4348:12;;1777:1;3921:446;;;;;;;:::o;1131:53::-;1177:7;1131:53;:::o;1660:30::-;;;;;;;;;;;;;:::o;4976:998::-;5164:28;5208:34;;:::i;:::-;5785:13;5134:11;1881:12;;;;;;;;;;;:29;;;1911:11;1881:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1864:59;;1872:4;1864:59;;;1856:68;;;;;;;;5245:39;5272:11;5245:26;:39::i;:::-;5208:76;;5312:6;:29;;;5299:9;:42;;5295:673;;;5494:1;5487:8;;;;5295:673;5529:6;:27;;;5516:9;:40;;5512:456;;;5726:6;:28;;;5719:35;;;;5512:456;5801:51;5834:9;5845:6;5801:32;:51::i;:::-;5785:67;;5873:84;5920:6;:36;;;5873:42;5906:8;5873:6;:28;;;:32;;:42;;;;:::i;:::-;:46;;:84;;;;:::i;:::-;5866:91;;1934:1;4976:998;;;;;;;:::o;1625:29::-;;;;;;;;;;;;;:::o;6428:1691::-;6541:30;6585:27;6626:38;6778:36;6992:35;7371:26;7455:25;7816:37;6842:66;6829:79;;:10;:79;6778:130;;7055:66;7042:79;;:10;:79;6992:129;;7437:8;7405:28;7400:34;;;:45;;;;;;;;7371:74;;7519:8;7488:27;7483:33;;;:44;;;;;;;;7455:72;;7881:66;7868:79;;:10;:79;7816:131;;7987:21;8029:20;8072:29;8064:38;;;7958:154;;;;;;6428:1691;;;;;;;;;;:::o;1424:73::-;1494:3;1260:2;1177:7;1235:27;1470;1424:73;:::o;1504:44::-;;;;;;;;;;;;;;;;;:::o;1008:129:32:-;1066:7;1081:9;1097:1;1093;:5;1081:17;;1116:1;1111;:6;;1104:14;;;;;;1131:1;1124:8;;1008:129;;;;;:::o;8535:1524:12:-;8640:27;;:::i;:::-;8683:18;8767:26;8803:31;8844:34;9218:41;9321:36;9427:27;9519:24;9623:25;8704:12;;;;;;;;;;;:39;;;8744:11;8704:52;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8683:73;;8986:37;9012:10;8986:25;:37::i;:::-;8889:134;;;;;;;;;;;;;;;;;;;;;;;;;;;9179:26;9174:32;;;;;;;;9144:26;:62;;9136:71;;;;;;;;9283:26;9262:48;;;;;;;;9218:92;;9360:56;9395:20;9360:34;:56::i;:::-;9321:95;;9457:12;;;;;;;;;;;:38;;;9496:11;9457:51;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9427:81;;9546:66;9580:31;9546:29;:33;;:66;;;;:::i;:::-;9519:93;;9651:47;9675:22;9651:19;:23;;:47;;;;:::i;:::-;9623:75;;9716:336;;;;;;;;;9774:21;9716:336;;;;9833:22;9716:336;;;;9891:20;9716:336;;;;9947:20;9716:336;;;;;;;;;;;;10012:29;9716:336;;;9709:343;;8535:1524;;;;;;;;;;;;:::o;8125:404::-;8268:10;8294;8361:36;8307:44;8321:6;:29;;;8307:9;:13;;:44;;;;:::i;:::-;8294:57;;8400:63;8435:6;:27;;;8400:34;:63::i;:::-;8361:102;;8480:42;8490:31;8480:5;:9;;:42;;;;:::i;:::-;8473:49;;8125:404;;;;;;:::o;203:173:32:-;261:7;316:9;285:1;280;:6;276:35;;;303:1;296:8;;;;276:35;332:1;328;:5;316:17;;355:1;350;346;:5;;;;;;;;:10;339:18;;;;;;370:1;363:8;;203:173;;;;;;:::o;458:265::-;516:7;605:9;621:1;617;:5;;;;;;;;605:17;;717:1;710:8;;458:265;;;;;:::o;10065:806:12:-;10199:37;10280:26;10256:50;;;;;;;;:20;:50;;;;;;;;;10252:613;;;1177:7;10322:29;;;;10252:613;10396:25;10372:49;;;;;;;;:20;:49;;;;;;;;;10368:497;;;1260:2;1177:7;1235:27;10437:28;;;;10368:497;10510:26;10486:50;;;;;;;;:20;:50;;;;;;;;;10482:383;;;1338:1;1260:2;1177:7;1235:27;1314:25;10552:29;;;;10482:383;10626:27;10602:51;;;;;;;;:20;:51;;;;;;;;;10598:267;;;1416:2;1260;1177:7;1235:27;1392:26;10669:30;;;;10598:267;10744:26;10720:50;;;;;;;;:20;:50;;;;;;;;;10716:149;;;1494:3;1260:2;1177:7;1235:27;1470;10786:29;;;;10716:149;10846:8;;;10065:806;;;;:::o;836:110:32:-;894:7;921:1;916;:6;;909:14;;;;;;940:1;936;:5;929:12;;836:110;;;;:::o;728:10145:12:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\nimport \"zeppelin-solidity/contracts/math/SafeMath.sol\";\nimport \"../DebtRegistry.sol\";\nimport \"../TermsContract.sol\";\n\n\ncontract SimpleInterestTermsContract is TermsContract {\n    using SafeMath for uint;\n\n    enum AmortizationUnitType { HOURS, DAYS, WEEKS, MONTHS, YEARS }\n\n    struct SimpleInterestParams {\n        uint principalPlusInterest;\n        uint termStartUnixTimestamp;\n        uint termEndUnixTimestamp;\n        AmortizationUnitType amortizationUnitType;\n        uint termLengthInAmortizationUnits;\n    }\n\n    uint public constant HOUR_LENGTH_IN_SECONDS = 60 * 60;\n    uint public constant DAY_LENGTH_IN_SECONDS = HOUR_LENGTH_IN_SECONDS * 24;\n    uint public constant WEEK_LENGTH_IN_SECONDS = DAY_LENGTH_IN_SECONDS * 7;\n    uint public constant MONTH_LENGTH_IN_SECONDS = DAY_LENGTH_IN_SECONDS * 30;\n    uint public constant YEAR_LENGTH_IN_SECONDS = DAY_LENGTH_IN_SECONDS * 365;\n\n    mapping (bytes32 => uint) public valueRepaid;\n\n    DebtRegistry public debtRegistry;\n\n    address public debtKernel;\n    address public repaymentToken;\n    address public repaymentRouter;\n\n    modifier onlyRouter() {\n        require(msg.sender == repaymentRouter);\n        _;\n    }\n\n    modifier onlyMappedToThisContract(bytes32 agreementId) {\n        require(address(this) == debtRegistry.getTermsContract(agreementId));\n        _;\n    }\n\n    modifier onlyDebtKernel() {\n        require(msg.sender == debtKernel);\n        _;\n    }\n\n    function SimpleInterestTermsContract(\n        address _debtRegistry,\n        address _debtKernel,\n        address _repaymentToken,\n        address _repaymentRouter\n    )\n        public\n    {\n        debtRegistry = DebtRegistry(_debtRegistry);\n\n        debtKernel = _debtKernel;\n        repaymentToken = _repaymentToken;\n        repaymentRouter = _repaymentRouter;\n    }\n\n    /// When called, the registerTermStart function registers the fact that\n    ///    the debt agreement has begun.  Given that the SimpleInterestTermsContract\n    ///    doesn't rely on taking any sorts of actions when the loan term begins,\n    ///    we simply validate DebtKernel is the transaction sender, and return\n    ///    `true` if the debt agreement is associated with this terms contract.\n    /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n    /// @return _success bool. Acknowledgment of whether\n    function registerTermStart(\n        bytes32 agreementId\n    )\n        public\n        onlyDebtKernel\n        returns (bool _success)\n    {\n        return debtRegistry.getTermsContract(agreementId) == address(this);\n    }\n\n     /// When called, the registerRepayment function records the debtor's\n     ///  repayment, as well as any auxiliary metadata needed by the contract\n     ///  to determine ex post facto the value repaid (e.g. current USD\n     ///  exchange rate)\n     /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @param  payer address. The address of the payer.\n     /// @param  beneficiary address. The address of the payment's beneficiary.\n     /// @param  unitsOfRepayment uint. The units-of-value repaid in the transaction.\n     /// @param  tokenAddress address. The address of the token with which the repayment transaction was executed.\n    function registerRepayment(\n        bytes32 agreementId,\n        address payer,\n        address beneficiary,\n        uint256 unitsOfRepayment,\n        address tokenAddress\n    )\n        public\n        onlyRouter\n        returns (bool _success)\n    {\n        if (tokenAddress == repaymentToken) {\n            valueRepaid[agreementId] = valueRepaid[agreementId].add(unitsOfRepayment);\n            return true;\n        }\n\n        return false;\n    }\n\n     /// Returns the cumulative units-of-value expected to be repaid given a block's timestamp.\n     ///  Note this is not a constant function -- this value can vary on basis of any number of\n     ///  conditions (e.g. interest rates can be renegotiated if repayments are delinquent).\n     /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @param  timestamp uint. The timestamp for which repayment expectation is being queried.\n     /// @return uint256 The cumulative units-of-value expected to be repaid given a block's timestamp.\n    function getExpectedRepaymentValue(\n        bytes32 agreementId,\n        uint256 timestamp\n    )\n        public\n        view\n        onlyMappedToThisContract(agreementId)\n        returns (uint _expectedRepaymentValue)\n    {\n        SimpleInterestParams memory params = unpackParamsForAgreementID(agreementId);\n\n        if (timestamp <= params.termStartUnixTimestamp) {\n            /* The query occurs before the contract was even initialized so the\n            expected value of repayments is 0. */\n            return 0;\n        } else if (timestamp >= params.termEndUnixTimestamp) {\n            /* the query occurs beyond the contract's term, so the expected\n            value of repayment is the full principal plus interest. */\n            return params.principalPlusInterest;\n        } else {\n            uint numUnits = numAmortizationUnitsForTimestamp(timestamp, params);\n            return params.principalPlusInterest.mul(numUnits).div(params.termLengthInAmortizationUnits);\n        }\n    }\n\n     /// Returns the cumulative units-of-value repaid to date.\n     /// @param agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @return uint256 The cumulative units-of-value repaid by the specified block timestamp.\n    function getValueRepaidToDate(bytes32 agreementId)\n        public\n        view\n        returns (uint _valueRepaid)\n    {\n        return valueRepaid[agreementId];\n    }\n\n    function unpackParametersFromBytes(bytes32 parameters)\n        public\n        pure\n        returns (\n            uint128 _principalPlusInterest,\n            uint8 _amortizationUnitType,\n            uint120 _termLengthInAmortizationUnits\n        )\n    {\n        // The first 16 bytes of the parameters represent the total principal + interest\n        bytes32 principalPlusInterestShifted =\n            parameters & 0xffffffffffffffffffffffffffffffff00000000000000000000000000000000;\n        // The subsequent byte represents the amortization unit type code\n        bytes32 amortizationUnitTypeShifted =\n            parameters & 0x00000000000000000000000000000000ff000000000000000000000000000000;\n\n        // We bit-shift these values, respectively, 16 bytes and 15 bytes right using\n        // mathematical operations, so that their 32 byte integer counterparts\n        // correspond to the intended values packed in the 32 byte string\n        uint principalPlusInterest = uint(principalPlusInterestShifted) / 2 ** 128;\n        uint amortizationUnitType = uint(amortizationUnitTypeShifted) / 2 ** 120;\n\n        // The last 15 bytes of the parameters represents the term length of the loan,\n        // as defined in terms of the specified amortization units.\n        // Since this value takes the rightmost place in the parameters string,\n        // we do not need to bit-shift it.\n        bytes32 termLengthInAmortizationUnits =\n            parameters & 0x0000000000000000000000000000000000ffffffffffffffffffffffffffffff;\n\n        return (\n            uint128(principalPlusInterest),\n            uint8(amortizationUnitType),\n            uint120(termLengthInAmortizationUnits)\n        );\n    }\n\n    function numAmortizationUnitsForTimestamp(\n        uint timestamp,\n        SimpleInterestParams params\n    )\n        internal\n        returns (uint units)\n    {\n        uint delta = timestamp.sub(params.termStartUnixTimestamp);\n        uint amortizationUnitLengthInSeconds = getAmortizationUnitLengthInSeconds(params.amortizationUnitType);\n        return delta.div(amortizationUnitLengthInSeconds);\n    }\n\n    function unpackParamsForAgreementID(\n        bytes32 agreementId\n    )\n        internal\n        returns (SimpleInterestParams params)\n    {\n        bytes32 parameters = debtRegistry.getTermsContractParameters(agreementId);\n\n        uint principalPlusInterest;\n        uint amortizationUnitTypeAsUint;\n        uint termLengthInAmortizationUnits;\n\n        (principalPlusInterest, amortizationUnitTypeAsUint, termLengthInAmortizationUnits) =\n            unpackParametersFromBytes(parameters);\n\n        // Before we cast to `AmortizationUnitType`, ensure that the raw value being stored is valid.\n        require(amortizationUnitTypeAsUint <= uint(AmortizationUnitType.YEARS));\n\n        AmortizationUnitType amortizationUnitType = AmortizationUnitType(amortizationUnitTypeAsUint);\n\n        uint amortizationUnitLengthInSeconds = getAmortizationUnitLengthInSeconds(amortizationUnitType);\n\n        uint issuanceBlockTimestamp = debtRegistry.getIssuanceBlockTimestamp(agreementId);\n\n        uint termLengthInSeconds = termLengthInAmortizationUnits.mul(amortizationUnitLengthInSeconds);\n\n        uint termEndUnixTimestamp = termLengthInSeconds.add(issuanceBlockTimestamp);\n\n        return SimpleInterestParams({\n            principalPlusInterest: principalPlusInterest,\n            termStartUnixTimestamp: issuanceBlockTimestamp,\n            termEndUnixTimestamp: termEndUnixTimestamp,\n            amortizationUnitType: amortizationUnitType,\n            termLengthInAmortizationUnits: termLengthInAmortizationUnits\n        });\n    }\n\n    function getAmortizationUnitLengthInSeconds(AmortizationUnitType amortizationUnitType)\n        internal\n        pure\n        returns (uint _amortizationUnitLengthInSeconds)\n    {\n        if (amortizationUnitType == AmortizationUnitType.HOURS) {\n            return HOUR_LENGTH_IN_SECONDS;\n        } else if (amortizationUnitType == AmortizationUnitType.DAYS) {\n            return DAY_LENGTH_IN_SECONDS;\n        } else if (amortizationUnitType == AmortizationUnitType.WEEKS) {\n            return WEEK_LENGTH_IN_SECONDS;\n        } else if (amortizationUnitType == AmortizationUnitType.MONTHS) {\n            return MONTH_LENGTH_IN_SECONDS;\n        } else if (amortizationUnitType == AmortizationUnitType.YEARS) {\n            return YEAR_LENGTH_IN_SECONDS;\n        } else {\n            revert();\n        }\n    }\n}\n",
  "sourcePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/examples/SimpleInterestTermsContract.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/examples/SimpleInterestTermsContract.sol",
      "exportedSymbols": {
        "SimpleInterestTermsContract": [
          3735
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "0.4",
            ".18"
          ]
        },
        "id": 3254,
        "name": "PragmaDirective",
        "src": "584:23:12"
      },
      {
        "attributes": {
          "SourceUnit": 7788,
          "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
          "file": "zeppelin-solidity/contracts/math/SafeMath.sol",
          "scope": 3736,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 3255,
        "name": "ImportDirective",
        "src": "609:55:12"
      },
      {
        "attributes": {
          "SourceUnit": 1653,
          "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/DebtRegistry.sol",
          "file": "../DebtRegistry.sol",
          "scope": 3736,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 3256,
        "name": "ImportDirective",
        "src": "665:29:12"
      },
      {
        "attributes": {
          "SourceUnit": 2151,
          "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/TermsContract.sol",
          "file": "../TermsContract.sol",
          "scope": 3736,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 3257,
        "name": "ImportDirective",
        "src": "695:30:12"
      },
      {
        "attributes": {
          "contractDependencies": [
            2150
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            3735,
            2150
          ],
          "name": "SimpleInterestTermsContract",
          "scope": 3736
        },
        "children": [
          {
            "attributes": {
              "arguments": [
                null
              ]
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "TermsContract",
                  "referencedDeclaration": 2150,
                  "type": "contract TermsContract"
                },
                "id": 3258,
                "name": "UserDefinedTypeName",
                "src": "768:13:12"
              }
            ],
            "id": 3259,
            "name": "InheritanceSpecifier",
            "src": "768:13:12"
          },
          {
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "SafeMath",
                  "referencedDeclaration": 7787,
                  "type": "library SafeMath"
                },
                "id": 3260,
                "name": "UserDefinedTypeName",
                "src": "794:8:12"
              },
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 3261,
                "name": "ElementaryTypeName",
                "src": "807:4:12"
              }
            ],
            "id": 3262,
            "name": "UsingForDirective",
            "src": "788:24:12"
          },
          {
            "attributes": {
              "canonicalName": "SimpleInterestTermsContract.AmortizationUnitType",
              "name": "AmortizationUnitType"
            },
            "children": [
              {
                "attributes": {
                  "name": "HOURS"
                },
                "id": 3263,
                "name": "EnumValue",
                "src": "846:5:12"
              },
              {
                "attributes": {
                  "name": "DAYS"
                },
                "id": 3264,
                "name": "EnumValue",
                "src": "853:4:12"
              },
              {
                "attributes": {
                  "name": "WEEKS"
                },
                "id": 3265,
                "name": "EnumValue",
                "src": "859:5:12"
              },
              {
                "attributes": {
                  "name": "MONTHS"
                },
                "id": 3266,
                "name": "EnumValue",
                "src": "866:6:12"
              },
              {
                "attributes": {
                  "name": "YEARS"
                },
                "id": 3267,
                "name": "EnumValue",
                "src": "874:5:12"
              }
            ],
            "id": 3268,
            "name": "EnumDefinition",
            "src": "818:63:12"
          },
          {
            "attributes": {
              "canonicalName": "SimpleInterestTermsContract.SimpleInterestParams",
              "name": "SimpleInterestParams",
              "scope": 3735,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "principalPlusInterest",
                  "scope": 3279,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "uint256",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 3269,
                    "name": "ElementaryTypeName",
                    "src": "925:4:12"
                  }
                ],
                "id": 3270,
                "name": "VariableDeclaration",
                "src": "925:26:12"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "termStartUnixTimestamp",
                  "scope": 3279,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "uint256",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 3271,
                    "name": "ElementaryTypeName",
                    "src": "961:4:12"
                  }
                ],
                "id": 3272,
                "name": "VariableDeclaration",
                "src": "961:27:12"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "termEndUnixTimestamp",
                  "scope": 3279,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "uint256",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 3273,
                    "name": "ElementaryTypeName",
                    "src": "998:4:12"
                  }
                ],
                "id": 3274,
                "name": "VariableDeclaration",
                "src": "998:25:12"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "amortizationUnitType",
                  "scope": 3279,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "enum SimpleInterestTermsContract.AmortizationUnitType",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "AmortizationUnitType",
                      "referencedDeclaration": 3268,
                      "type": "enum SimpleInterestTermsContract.AmortizationUnitType"
                    },
                    "id": 3275,
                    "name": "UserDefinedTypeName",
                    "src": "1033:20:12"
                  }
                ],
                "id": 3276,
                "name": "VariableDeclaration",
                "src": "1033:41:12"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "termLengthInAmortizationUnits",
                  "scope": 3279,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "uint256",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 3277,
                    "name": "ElementaryTypeName",
                    "src": "1084:4:12"
                  }
                ],
                "id": 3278,
                "name": "VariableDeclaration",
                "src": "1084:34:12"
              }
            ],
            "id": 3279,
            "name": "StructDefinition",
            "src": "887:238:12"
          },
          {
            "attributes": {
              "constant": true,
              "name": "HOUR_LENGTH_IN_SECONDS",
              "scope": 3735,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 3280,
                "name": "ElementaryTypeName",
                "src": "1131:4:12"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "commonType": {
                    "typeIdentifier": "t_rational_3600_by_1",
                    "typeString": "int_const 3600"
                  },
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "operator": "*",
                  "type": "int_const 3600"
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "hexvalue": "3630",
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "subdenomination": null,
                      "token": "number",
                      "type": "int_const 60",
                      "value": "60"
                    },
                    "id": 3281,
                    "name": "Literal",
                    "src": "1177:2:12"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "hexvalue": "3630",
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "subdenomination": null,
                      "token": "number",
                      "type": "int_const 60",
                      "value": "60"
                    },
                    "id": 3282,
                    "name": "Literal",
                    "src": "1182:2:12"
                  }
                ],
                "id": 3283,
                "name": "BinaryOperation",
                "src": "1177:7:12"
              }
            ],
            "id": 3284,
            "name": "VariableDeclaration",
            "src": "1131:53:12"
          },
          {
            "attributes": {
              "constant": true,
              "name": "DAY_LENGTH_IN_SECONDS",
              "scope": 3735,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 3285,
                "name": "ElementaryTypeName",
                "src": "1190:4:12"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "commonType": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "operator": "*",
                  "type": "uint256"
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 3284,
                      "type": "uint256",
                      "value": "HOUR_LENGTH_IN_SECONDS"
                    },
                    "id": 3286,
                    "name": "Identifier",
                    "src": "1235:22:12"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "hexvalue": "3234",
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "subdenomination": null,
                      "token": "number",
                      "type": "int_const 24",
                      "value": "24"
                    },
                    "id": 3287,
                    "name": "Literal",
                    "src": "1260:2:12"
                  }
                ],
                "id": 3288,
                "name": "BinaryOperation",
                "src": "1235:27:12"
              }
            ],
            "id": 3289,
            "name": "VariableDeclaration",
            "src": "1190:72:12"
          },
          {
            "attributes": {
              "constant": true,
              "name": "WEEK_LENGTH_IN_SECONDS",
              "scope": 3735,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 3290,
                "name": "ElementaryTypeName",
                "src": "1268:4:12"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "commonType": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "operator": "*",
                  "type": "uint256"
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 3289,
                      "type": "uint256",
                      "value": "DAY_LENGTH_IN_SECONDS"
                    },
                    "id": 3291,
                    "name": "Identifier",
                    "src": "1314:21:12"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "hexvalue": "37",
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "subdenomination": null,
                      "token": "number",
                      "type": "int_const 7",
                      "value": "7"
                    },
                    "id": 3292,
                    "name": "Literal",
                    "src": "1338:1:12"
                  }
                ],
                "id": 3293,
                "name": "BinaryOperation",
                "src": "1314:25:12"
              }
            ],
            "id": 3294,
            "name": "VariableDeclaration",
            "src": "1268:71:12"
          },
          {
            "attributes": {
              "constant": true,
              "name": "MONTH_LENGTH_IN_SECONDS",
              "scope": 3735,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 3295,
                "name": "ElementaryTypeName",
                "src": "1345:4:12"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "commonType": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "operator": "*",
                  "type": "uint256"
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 3289,
                      "type": "uint256",
                      "value": "DAY_LENGTH_IN_SECONDS"
                    },
                    "id": 3296,
                    "name": "Identifier",
                    "src": "1392:21:12"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "hexvalue": "3330",
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "subdenomination": null,
                      "token": "number",
                      "type": "int_const 30",
                      "value": "30"
                    },
                    "id": 3297,
                    "name": "Literal",
                    "src": "1416:2:12"
                  }
                ],
                "id": 3298,
                "name": "BinaryOperation",
                "src": "1392:26:12"
              }
            ],
            "id": 3299,
            "name": "VariableDeclaration",
            "src": "1345:73:12"
          },
          {
            "attributes": {
              "constant": true,
              "name": "YEAR_LENGTH_IN_SECONDS",
              "scope": 3735,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 3300,
                "name": "ElementaryTypeName",
                "src": "1424:4:12"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "commonType": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "operator": "*",
                  "type": "uint256"
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 3289,
                      "type": "uint256",
                      "value": "DAY_LENGTH_IN_SECONDS"
                    },
                    "id": 3301,
                    "name": "Identifier",
                    "src": "1470:21:12"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "hexvalue": "333635",
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "subdenomination": null,
                      "token": "number",
                      "type": "int_const 365",
                      "value": "365"
                    },
                    "id": 3302,
                    "name": "Literal",
                    "src": "1494:3:12"
                  }
                ],
                "id": 3303,
                "name": "BinaryOperation",
                "src": "1470:27:12"
              }
            ],
            "id": 3304,
            "name": "VariableDeclaration",
            "src": "1424:73:12"
          },
          {
            "attributes": {
              "constant": false,
              "name": "valueRepaid",
              "scope": 3735,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(bytes32 => uint256)",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(bytes32 => uint256)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "bytes32",
                      "type": "bytes32"
                    },
                    "id": 3305,
                    "name": "ElementaryTypeName",
                    "src": "1513:7:12"
                  },
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 3306,
                    "name": "ElementaryTypeName",
                    "src": "1524:4:12"
                  }
                ],
                "id": 3307,
                "name": "Mapping",
                "src": "1504:25:12"
              }
            ],
            "id": 3308,
            "name": "VariableDeclaration",
            "src": "1504:44:12"
          },
          {
            "attributes": {
              "constant": false,
              "name": "debtRegistry",
              "scope": 3735,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "contract DebtRegistry",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "DebtRegistry",
                  "referencedDeclaration": 1652,
                  "type": "contract DebtRegistry"
                },
                "id": 3309,
                "name": "UserDefinedTypeName",
                "src": "1555:12:12"
              }
            ],
            "id": 3310,
            "name": "VariableDeclaration",
            "src": "1555:32:12"
          },
          {
            "attributes": {
              "constant": false,
              "name": "debtKernel",
              "scope": 3735,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "address",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "address",
                  "type": "address"
                },
                "id": 3311,
                "name": "ElementaryTypeName",
                "src": "1594:7:12"
              }
            ],
            "id": 3312,
            "name": "VariableDeclaration",
            "src": "1594:25:12"
          },
          {
            "attributes": {
              "constant": false,
              "name": "repaymentToken",
              "scope": 3735,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "address",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "address",
                  "type": "address"
                },
                "id": 3313,
                "name": "ElementaryTypeName",
                "src": "1625:7:12"
              }
            ],
            "id": 3314,
            "name": "VariableDeclaration",
            "src": "1625:29:12"
          },
          {
            "attributes": {
              "constant": false,
              "name": "repaymentRouter",
              "scope": 3735,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "address",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "address",
                  "type": "address"
                },
                "id": 3315,
                "name": "ElementaryTypeName",
                "src": "1660:7:12"
              }
            ],
            "id": 3316,
            "name": "VariableDeclaration",
            "src": "1660:30:12"
          },
          {
            "attributes": {
              "name": "onlyRouter",
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 3317,
                "name": "ParameterList",
                "src": "1716:2:12"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8370,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 3318,
                            "name": "Identifier",
                            "src": "1729:7:12"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 8367,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 3319,
                                    "name": "Identifier",
                                    "src": "1737:3:12"
                                  }
                                ],
                                "id": 3320,
                                "name": "MemberAccess",
                                "src": "1737:10:12"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3316,
                                  "type": "address",
                                  "value": "repaymentRouter"
                                },
                                "id": 3321,
                                "name": "Identifier",
                                "src": "1751:15:12"
                              }
                            ],
                            "id": 3322,
                            "name": "BinaryOperation",
                            "src": "1737:29:12"
                          }
                        ],
                        "id": 3323,
                        "name": "FunctionCall",
                        "src": "1729:38:12"
                      }
                    ],
                    "id": 3324,
                    "name": "ExpressionStatement",
                    "src": "1729:38:12"
                  },
                  {
                    "id": 3325,
                    "name": "PlaceholderStatement",
                    "src": "1777:1:12"
                  }
                ],
                "id": 3326,
                "name": "Block",
                "src": "1719:66:12"
              }
            ],
            "id": 3327,
            "name": "ModifierDefinition",
            "src": "1697:88:12"
          },
          {
            "attributes": {
              "name": "onlyMappedToThisContract",
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 3344,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 3328,
                        "name": "ElementaryTypeName",
                        "src": "1825:7:12"
                      }
                    ],
                    "id": 3329,
                    "name": "VariableDeclaration",
                    "src": "1825:19:12"
                  }
                ],
                "id": 3330,
                "name": "ParameterList",
                "src": "1824:21:12"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8370,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 3331,
                            "name": "Identifier",
                            "src": "1856:7:12"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_contract$_SimpleInterestTermsContract_$3735",
                                          "typeString": "contract SimpleInterestTermsContract"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)",
                                      "value": "address"
                                    },
                                    "id": 3332,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "1864:7:12"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 8420,
                                      "type": "contract SimpleInterestTermsContract",
                                      "value": "this"
                                    },
                                    "id": 3333,
                                    "name": "Identifier",
                                    "src": "1872:4:12"
                                  }
                                ],
                                "id": 3334,
                                "name": "FunctionCall",
                                "src": "1864:13:12"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "getTermsContract",
                                      "referencedDeclaration": 1540,
                                      "type": "function (bytes32) view external returns (address)"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 3310,
                                          "type": "contract DebtRegistry",
                                          "value": "debtRegistry"
                                        },
                                        "id": 3335,
                                        "name": "Identifier",
                                        "src": "1881:12:12"
                                      }
                                    ],
                                    "id": 3336,
                                    "name": "MemberAccess",
                                    "src": "1881:29:12"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3329,
                                      "type": "bytes32",
                                      "value": "agreementId"
                                    },
                                    "id": 3337,
                                    "name": "Identifier",
                                    "src": "1911:11:12"
                                  }
                                ],
                                "id": 3338,
                                "name": "FunctionCall",
                                "src": "1881:42:12"
                              }
                            ],
                            "id": 3339,
                            "name": "BinaryOperation",
                            "src": "1864:59:12"
                          }
                        ],
                        "id": 3340,
                        "name": "FunctionCall",
                        "src": "1856:68:12"
                      }
                    ],
                    "id": 3341,
                    "name": "ExpressionStatement",
                    "src": "1856:68:12"
                  },
                  {
                    "id": 3342,
                    "name": "PlaceholderStatement",
                    "src": "1934:1:12"
                  }
                ],
                "id": 3343,
                "name": "Block",
                "src": "1846:96:12"
              }
            ],
            "id": 3344,
            "name": "ModifierDefinition",
            "src": "1791:151:12"
          },
          {
            "attributes": {
              "name": "onlyDebtKernel",
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 3345,
                "name": "ParameterList",
                "src": "1971:2:12"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8370,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 3346,
                            "name": "Identifier",
                            "src": "1984:7:12"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 8367,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 3347,
                                    "name": "Identifier",
                                    "src": "1992:3:12"
                                  }
                                ],
                                "id": 3348,
                                "name": "MemberAccess",
                                "src": "1992:10:12"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3312,
                                  "type": "address",
                                  "value": "debtKernel"
                                },
                                "id": 3349,
                                "name": "Identifier",
                                "src": "2006:10:12"
                              }
                            ],
                            "id": 3350,
                            "name": "BinaryOperation",
                            "src": "1992:24:12"
                          }
                        ],
                        "id": 3351,
                        "name": "FunctionCall",
                        "src": "1984:33:12"
                      }
                    ],
                    "id": 3352,
                    "name": "ExpressionStatement",
                    "src": "1984:33:12"
                  },
                  {
                    "id": 3353,
                    "name": "PlaceholderStatement",
                    "src": "2027:1:12"
                  }
                ],
                "id": 3354,
                "name": "Block",
                "src": "1974:61:12"
              }
            ],
            "id": 3355,
            "name": "ModifierDefinition",
            "src": "1948:87:12"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": true,
              "modifiers": [
                null
              ],
              "name": "SimpleInterestTermsContract",
              "payable": false,
              "scope": 3735,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_debtRegistry",
                      "scope": 3385,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 3356,
                        "name": "ElementaryTypeName",
                        "src": "2087:7:12"
                      }
                    ],
                    "id": 3357,
                    "name": "VariableDeclaration",
                    "src": "2087:21:12"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_debtKernel",
                      "scope": 3385,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 3358,
                        "name": "ElementaryTypeName",
                        "src": "2118:7:12"
                      }
                    ],
                    "id": 3359,
                    "name": "VariableDeclaration",
                    "src": "2118:19:12"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_repaymentToken",
                      "scope": 3385,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 3360,
                        "name": "ElementaryTypeName",
                        "src": "2147:7:12"
                      }
                    ],
                    "id": 3361,
                    "name": "VariableDeclaration",
                    "src": "2147:23:12"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_repaymentRouter",
                      "scope": 3385,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 3362,
                        "name": "ElementaryTypeName",
                        "src": "2180:7:12"
                      }
                    ],
                    "id": 3363,
                    "name": "VariableDeclaration",
                    "src": "2180:24:12"
                  }
                ],
                "id": 3364,
                "name": "ParameterList",
                "src": "2077:133:12"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 3365,
                "name": "ParameterList",
                "src": "2230:0:12"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "contract DebtRegistry"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3310,
                              "type": "contract DebtRegistry",
                              "value": "debtRegistry"
                            },
                            "id": 3366,
                            "name": "Identifier",
                            "src": "2240:12:12"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "contract DebtRegistry",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1652,
                                  "type": "type(contract DebtRegistry)",
                                  "value": "DebtRegistry"
                                },
                                "id": 3367,
                                "name": "Identifier",
                                "src": "2255:12:12"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3357,
                                  "type": "address",
                                  "value": "_debtRegistry"
                                },
                                "id": 3368,
                                "name": "Identifier",
                                "src": "2268:13:12"
                              }
                            ],
                            "id": 3369,
                            "name": "FunctionCall",
                            "src": "2255:27:12"
                          }
                        ],
                        "id": 3370,
                        "name": "Assignment",
                        "src": "2240:42:12"
                      }
                    ],
                    "id": 3371,
                    "name": "ExpressionStatement",
                    "src": "2240:42:12"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3312,
                              "type": "address",
                              "value": "debtKernel"
                            },
                            "id": 3372,
                            "name": "Identifier",
                            "src": "2293:10:12"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3359,
                              "type": "address",
                              "value": "_debtKernel"
                            },
                            "id": 3373,
                            "name": "Identifier",
                            "src": "2306:11:12"
                          }
                        ],
                        "id": 3374,
                        "name": "Assignment",
                        "src": "2293:24:12"
                      }
                    ],
                    "id": 3375,
                    "name": "ExpressionStatement",
                    "src": "2293:24:12"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3314,
                              "type": "address",
                              "value": "repaymentToken"
                            },
                            "id": 3376,
                            "name": "Identifier",
                            "src": "2327:14:12"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3361,
                              "type": "address",
                              "value": "_repaymentToken"
                            },
                            "id": 3377,
                            "name": "Identifier",
                            "src": "2344:15:12"
                          }
                        ],
                        "id": 3378,
                        "name": "Assignment",
                        "src": "2327:32:12"
                      }
                    ],
                    "id": 3379,
                    "name": "ExpressionStatement",
                    "src": "2327:32:12"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3316,
                              "type": "address",
                              "value": "repaymentRouter"
                            },
                            "id": 3380,
                            "name": "Identifier",
                            "src": "2369:15:12"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3363,
                              "type": "address",
                              "value": "_repaymentRouter"
                            },
                            "id": 3381,
                            "name": "Identifier",
                            "src": "2387:16:12"
                          }
                        ],
                        "id": 3382,
                        "name": "Assignment",
                        "src": "2369:34:12"
                      }
                    ],
                    "id": 3383,
                    "name": "ExpressionStatement",
                    "src": "2369:34:12"
                  }
                ],
                "id": 3384,
                "name": "Block",
                "src": "2230:180:12"
              }
            ],
            "id": 3385,
            "name": "FunctionDefinition",
            "src": "2041:369:12"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "registerTermStart",
              "payable": false,
              "scope": 3735,
              "stateMutability": "nonpayable",
              "superFunction": 2118,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 3404,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 3386,
                        "name": "ElementaryTypeName",
                        "src": "3027:7:12"
                      }
                    ],
                    "id": 3387,
                    "name": "VariableDeclaration",
                    "src": "3027:19:12"
                  }
                ],
                "id": 3388,
                "name": "ParameterList",
                "src": "3017:35:12"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_success",
                      "scope": 3404,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 3391,
                        "name": "ElementaryTypeName",
                        "src": "3108:4:12"
                      }
                    ],
                    "id": 3392,
                    "name": "VariableDeclaration",
                    "src": "3108:13:12"
                  }
                ],
                "id": 3393,
                "name": "ParameterList",
                "src": "3107:15:12"
              },
              {
                "attributes": {
                  "arguments": [
                    null
                  ]
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 3355,
                      "type": "modifier ()",
                      "value": "onlyDebtKernel"
                    },
                    "id": 3389,
                    "name": "Identifier",
                    "src": "3076:14:12"
                  }
                ],
                "id": 3390,
                "name": "ModifierInvocation",
                "src": "3076:14:12"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 3393
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "==",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "address",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "getTermsContract",
                                  "referencedDeclaration": 1540,
                                  "type": "function (bytes32) view external returns (address)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3310,
                                      "type": "contract DebtRegistry",
                                      "value": "debtRegistry"
                                    },
                                    "id": 3394,
                                    "name": "Identifier",
                                    "src": "3144:12:12"
                                  }
                                ],
                                "id": 3395,
                                "name": "MemberAccess",
                                "src": "3144:29:12"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3387,
                                  "type": "bytes32",
                                  "value": "agreementId"
                                },
                                "id": 3396,
                                "name": "Identifier",
                                "src": "3174:11:12"
                              }
                            ],
                            "id": 3397,
                            "name": "FunctionCall",
                            "src": "3144:42:12"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "address",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_SimpleInterestTermsContract_$3735",
                                      "typeString": "contract SimpleInterestTermsContract"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(address)",
                                  "value": "address"
                                },
                                "id": 3398,
                                "name": "ElementaryTypeNameExpression",
                                "src": "3190:7:12"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8420,
                                  "type": "contract SimpleInterestTermsContract",
                                  "value": "this"
                                },
                                "id": 3399,
                                "name": "Identifier",
                                "src": "3198:4:12"
                              }
                            ],
                            "id": 3400,
                            "name": "FunctionCall",
                            "src": "3190:13:12"
                          }
                        ],
                        "id": 3401,
                        "name": "BinaryOperation",
                        "src": "3144:59:12"
                      }
                    ],
                    "id": 3402,
                    "name": "Return",
                    "src": "3137:66:12"
                  }
                ],
                "id": 3403,
                "name": "Block",
                "src": "3127:83:12"
              }
            ],
            "id": 3404,
            "name": "FunctionDefinition",
            "src": "2991:219:12"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "registerRepayment",
              "payable": false,
              "scope": 3735,
              "stateMutability": "nonpayable",
              "superFunction": 2133,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 3442,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 3405,
                        "name": "ElementaryTypeName",
                        "src": "3957:7:12"
                      }
                    ],
                    "id": 3406,
                    "name": "VariableDeclaration",
                    "src": "3957:19:12"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "payer",
                      "scope": 3442,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 3407,
                        "name": "ElementaryTypeName",
                        "src": "3986:7:12"
                      }
                    ],
                    "id": 3408,
                    "name": "VariableDeclaration",
                    "src": "3986:13:12"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "beneficiary",
                      "scope": 3442,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 3409,
                        "name": "ElementaryTypeName",
                        "src": "4009:7:12"
                      }
                    ],
                    "id": 3410,
                    "name": "VariableDeclaration",
                    "src": "4009:19:12"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "unitsOfRepayment",
                      "scope": 3442,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 3411,
                        "name": "ElementaryTypeName",
                        "src": "4038:7:12"
                      }
                    ],
                    "id": 3412,
                    "name": "VariableDeclaration",
                    "src": "4038:24:12"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "tokenAddress",
                      "scope": 3442,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 3413,
                        "name": "ElementaryTypeName",
                        "src": "4072:7:12"
                      }
                    ],
                    "id": 3414,
                    "name": "VariableDeclaration",
                    "src": "4072:20:12"
                  }
                ],
                "id": 3415,
                "name": "ParameterList",
                "src": "3947:151:12"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_success",
                      "scope": 3442,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 3418,
                        "name": "ElementaryTypeName",
                        "src": "4150:4:12"
                      }
                    ],
                    "id": 3419,
                    "name": "VariableDeclaration",
                    "src": "4150:13:12"
                  }
                ],
                "id": 3420,
                "name": "ParameterList",
                "src": "4149:15:12"
              },
              {
                "attributes": {
                  "arguments": [
                    null
                  ]
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 3327,
                      "type": "modifier ()",
                      "value": "onlyRouter"
                    },
                    "id": 3416,
                    "name": "Identifier",
                    "src": "4122:10:12"
                  }
                ],
                "id": 3417,
                "name": "ModifierInvocation",
                "src": "4122:10:12"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "falseBody": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "==",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3414,
                              "type": "address",
                              "value": "tokenAddress"
                            },
                            "id": 3421,
                            "name": "Identifier",
                            "src": "4183:12:12"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3314,
                              "type": "address",
                              "value": "repaymentToken"
                            },
                            "id": 3422,
                            "name": "Identifier",
                            "src": "4199:14:12"
                          }
                        ],
                        "id": 3423,
                        "name": "BinaryOperation",
                        "src": "4183:30:12"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "=",
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": true,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 3308,
                                          "type": "mapping(bytes32 => uint256)",
                                          "value": "valueRepaid"
                                        },
                                        "id": 3424,
                                        "name": "Identifier",
                                        "src": "4229:11:12"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 3406,
                                          "type": "bytes32",
                                          "value": "agreementId"
                                        },
                                        "id": 3425,
                                        "name": "Identifier",
                                        "src": "4241:11:12"
                                      }
                                    ],
                                    "id": 3426,
                                    "name": "IndexAccess",
                                    "src": "4229:24:12"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "uint256",
                                      "type_conversion": false
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          ],
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "add",
                                          "referencedDeclaration": 7786,
                                          "type": "function (uint256,uint256) pure returns (uint256)"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "type": "uint256"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 3308,
                                                  "type": "mapping(bytes32 => uint256)",
                                                  "value": "valueRepaid"
                                                },
                                                "id": 3427,
                                                "name": "Identifier",
                                                "src": "4256:11:12"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 3406,
                                                  "type": "bytes32",
                                                  "value": "agreementId"
                                                },
                                                "id": 3428,
                                                "name": "Identifier",
                                                "src": "4268:11:12"
                                              }
                                            ],
                                            "id": 3429,
                                            "name": "IndexAccess",
                                            "src": "4256:24:12"
                                          }
                                        ],
                                        "id": 3430,
                                        "name": "MemberAccess",
                                        "src": "4256:28:12"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 3412,
                                          "type": "uint256",
                                          "value": "unitsOfRepayment"
                                        },
                                        "id": 3431,
                                        "name": "Identifier",
                                        "src": "4285:16:12"
                                      }
                                    ],
                                    "id": 3432,
                                    "name": "FunctionCall",
                                    "src": "4256:46:12"
                                  }
                                ],
                                "id": 3433,
                                "name": "Assignment",
                                "src": "4229:73:12"
                              }
                            ],
                            "id": 3434,
                            "name": "ExpressionStatement",
                            "src": "4229:73:12"
                          },
                          {
                            "attributes": {
                              "functionReturnParameters": 3420
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "74727565",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "bool",
                                  "type": "bool",
                                  "value": "true"
                                },
                                "id": 3435,
                                "name": "Literal",
                                "src": "4323:4:12"
                              }
                            ],
                            "id": 3436,
                            "name": "Return",
                            "src": "4316:11:12"
                          }
                        ],
                        "id": 3437,
                        "name": "Block",
                        "src": "4215:123:12"
                      }
                    ],
                    "id": 3438,
                    "name": "IfStatement",
                    "src": "4179:159:12"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 3420
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "hexvalue": "66616c7365",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "subdenomination": null,
                          "token": "bool",
                          "type": "bool",
                          "value": "false"
                        },
                        "id": 3439,
                        "name": "Literal",
                        "src": "4355:5:12"
                      }
                    ],
                    "id": 3440,
                    "name": "Return",
                    "src": "4348:12:12"
                  }
                ],
                "id": 3441,
                "name": "Block",
                "src": "4169:198:12"
              }
            ],
            "id": 3442,
            "name": "FunctionDefinition",
            "src": "3921:446:12"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "name": "getExpectedRepaymentValue",
              "payable": false,
              "scope": 3735,
              "stateMutability": "view",
              "superFunction": 2142,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 3496,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 3443,
                        "name": "ElementaryTypeName",
                        "src": "5020:7:12"
                      }
                    ],
                    "id": 3444,
                    "name": "VariableDeclaration",
                    "src": "5020:19:12"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "timestamp",
                      "scope": 3496,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 3445,
                        "name": "ElementaryTypeName",
                        "src": "5049:7:12"
                      }
                    ],
                    "id": 3446,
                    "name": "VariableDeclaration",
                    "src": "5049:17:12"
                  }
                ],
                "id": 3447,
                "name": "ParameterList",
                "src": "5010:62:12"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_expectedRepaymentValue",
                      "scope": 3496,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 3451,
                        "name": "ElementaryTypeName",
                        "src": "5164:4:12"
                      }
                    ],
                    "id": 3452,
                    "name": "VariableDeclaration",
                    "src": "5164:28:12"
                  }
                ],
                "id": 3453,
                "name": "ParameterList",
                "src": "5163:30:12"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 3344,
                      "type": "modifier (bytes32)",
                      "value": "onlyMappedToThisContract"
                    },
                    "id": 3448,
                    "name": "Identifier",
                    "src": "5109:24:12"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 3444,
                      "type": "bytes32",
                      "value": "agreementId"
                    },
                    "id": 3449,
                    "name": "Identifier",
                    "src": "5134:11:12"
                  }
                ],
                "id": 3450,
                "name": "ModifierInvocation",
                "src": "5109:37:12"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        3455
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "params",
                          "scope": 3496,
                          "stateVariable": false,
                          "storageLocation": "memory",
                          "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "SimpleInterestParams",
                              "referencedDeclaration": 3279,
                              "type": "struct SimpleInterestTermsContract.SimpleInterestParams storage pointer"
                            },
                            "id": 3454,
                            "name": "UserDefinedTypeName",
                            "src": "5208:20:12"
                          }
                        ],
                        "id": 3455,
                        "name": "VariableDeclaration",
                        "src": "5208:34:12"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3682,
                              "type": "function (bytes32) returns (struct SimpleInterestTermsContract.SimpleInterestParams memory)",
                              "value": "unpackParamsForAgreementID"
                            },
                            "id": 3456,
                            "name": "Identifier",
                            "src": "5245:26:12"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3444,
                              "type": "bytes32",
                              "value": "agreementId"
                            },
                            "id": 3457,
                            "name": "Identifier",
                            "src": "5272:11:12"
                          }
                        ],
                        "id": 3458,
                        "name": "FunctionCall",
                        "src": "5245:39:12"
                      }
                    ],
                    "id": 3459,
                    "name": "VariableDeclarationStatement",
                    "src": "5208:76:12"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "<=",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3446,
                              "type": "uint256",
                              "value": "timestamp"
                            },
                            "id": 3460,
                            "name": "Identifier",
                            "src": "5299:9:12"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "termStartUnixTimestamp",
                              "referencedDeclaration": 3272,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3455,
                                  "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                                  "value": "params"
                                },
                                "id": 3461,
                                "name": "Identifier",
                                "src": "5312:6:12"
                              }
                            ],
                            "id": 3462,
                            "name": "MemberAccess",
                            "src": "5312:29:12"
                          }
                        ],
                        "id": 3463,
                        "name": "BinaryOperation",
                        "src": "5299:42:12"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "functionReturnParameters": 3453
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 3464,
                                "name": "Literal",
                                "src": "5494:1:12"
                              }
                            ],
                            "id": 3465,
                            "name": "Return",
                            "src": "5487:8:12"
                          }
                        ],
                        "id": 3466,
                        "name": "Block",
                        "src": "5343:163:12"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": ">=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3446,
                                  "type": "uint256",
                                  "value": "timestamp"
                                },
                                "id": 3467,
                                "name": "Identifier",
                                "src": "5516:9:12"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "termEndUnixTimestamp",
                                  "referencedDeclaration": 3274,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3455,
                                      "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                                      "value": "params"
                                    },
                                    "id": 3468,
                                    "name": "Identifier",
                                    "src": "5529:6:12"
                                  }
                                ],
                                "id": 3469,
                                "name": "MemberAccess",
                                "src": "5529:27:12"
                              }
                            ],
                            "id": 3470,
                            "name": "BinaryOperation",
                            "src": "5516:40:12"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "functionReturnParameters": 3453
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "principalPlusInterest",
                                      "referencedDeclaration": 3270,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 3455,
                                          "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                                          "value": "params"
                                        },
                                        "id": 3471,
                                        "name": "Identifier",
                                        "src": "5726:6:12"
                                      }
                                    ],
                                    "id": 3472,
                                    "name": "MemberAccess",
                                    "src": "5726:28:12"
                                  }
                                ],
                                "id": 3473,
                                "name": "Return",
                                "src": "5719:35:12"
                              }
                            ],
                            "id": 3474,
                            "name": "Block",
                            "src": "5558:207:12"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "assignments": [
                                    3476
                                  ]
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "constant": false,
                                      "name": "numUnits",
                                      "scope": 3496,
                                      "stateVariable": false,
                                      "storageLocation": "default",
                                      "type": "uint256",
                                      "value": null,
                                      "visibility": "internal"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "name": "uint",
                                          "type": "uint256"
                                        },
                                        "id": 3475,
                                        "name": "ElementaryTypeName",
                                        "src": "5785:4:12"
                                      }
                                    ],
                                    "id": 3476,
                                    "name": "VariableDeclaration",
                                    "src": "5785:13:12"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "uint256",
                                      "type_conversion": false
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            },
                                            {
                                              "typeIdentifier": "t_struct$_SimpleInterestParams_$3279_memory_ptr",
                                              "typeString": "struct SimpleInterestTermsContract.SimpleInterestParams memory"
                                            }
                                          ],
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 3599,
                                          "type": "function (uint256,struct SimpleInterestTermsContract.SimpleInterestParams memory) returns (uint256)",
                                          "value": "numAmortizationUnitsForTimestamp"
                                        },
                                        "id": 3477,
                                        "name": "Identifier",
                                        "src": "5801:32:12"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 3446,
                                          "type": "uint256",
                                          "value": "timestamp"
                                        },
                                        "id": 3478,
                                        "name": "Identifier",
                                        "src": "5834:9:12"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 3455,
                                          "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                                          "value": "params"
                                        },
                                        "id": 3479,
                                        "name": "Identifier",
                                        "src": "5845:6:12"
                                      }
                                    ],
                                    "id": 3480,
                                    "name": "FunctionCall",
                                    "src": "5801:51:12"
                                  }
                                ],
                                "id": 3481,
                                "name": "VariableDeclarationStatement",
                                "src": "5785:67:12"
                              },
                              {
                                "attributes": {
                                  "functionReturnParameters": 3453
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "uint256",
                                      "type_conversion": false
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          ],
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "div",
                                          "referencedDeclaration": 7742,
                                          "type": "function (uint256,uint256) pure returns (uint256)"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "isStructConstructorCall": false,
                                              "lValueRequested": false,
                                              "names": [
                                                null
                                              ],
                                              "type": "uint256",
                                              "type_conversion": false
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": [
                                                    {
                                                      "typeIdentifier": "t_uint256",
                                                      "typeString": "uint256"
                                                    }
                                                  ],
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "member_name": "mul",
                                                  "referencedDeclaration": 7724,
                                                  "type": "function (uint256,uint256) pure returns (uint256)"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "isConstant": false,
                                                      "isLValue": true,
                                                      "isPure": false,
                                                      "lValueRequested": false,
                                                      "member_name": "principalPlusInterest",
                                                      "referencedDeclaration": 3270,
                                                      "type": "uint256"
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 3455,
                                                          "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                                                          "value": "params"
                                                        },
                                                        "id": 3482,
                                                        "name": "Identifier",
                                                        "src": "5873:6:12"
                                                      }
                                                    ],
                                                    "id": 3483,
                                                    "name": "MemberAccess",
                                                    "src": "5873:28:12"
                                                  }
                                                ],
                                                "id": 3484,
                                                "name": "MemberAccess",
                                                "src": "5873:32:12"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 3476,
                                                  "type": "uint256",
                                                  "value": "numUnits"
                                                },
                                                "id": 3485,
                                                "name": "Identifier",
                                                "src": "5906:8:12"
                                              }
                                            ],
                                            "id": 3486,
                                            "name": "FunctionCall",
                                            "src": "5873:42:12"
                                          }
                                        ],
                                        "id": 3487,
                                        "name": "MemberAccess",
                                        "src": "5873:46:12"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "termLengthInAmortizationUnits",
                                          "referencedDeclaration": 3278,
                                          "type": "uint256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 3455,
                                              "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                                              "value": "params"
                                            },
                                            "id": 3488,
                                            "name": "Identifier",
                                            "src": "5920:6:12"
                                          }
                                        ],
                                        "id": 3489,
                                        "name": "MemberAccess",
                                        "src": "5920:36:12"
                                      }
                                    ],
                                    "id": 3490,
                                    "name": "FunctionCall",
                                    "src": "5873:84:12"
                                  }
                                ],
                                "id": 3491,
                                "name": "Return",
                                "src": "5866:91:12"
                              }
                            ],
                            "id": 3492,
                            "name": "Block",
                            "src": "5771:197:12"
                          }
                        ],
                        "id": 3493,
                        "name": "IfStatement",
                        "src": "5512:456:12"
                      }
                    ],
                    "id": 3494,
                    "name": "IfStatement",
                    "src": "5295:673:12"
                  }
                ],
                "id": 3495,
                "name": "Block",
                "src": "5198:776:12"
              }
            ],
            "id": 3496,
            "name": "FunctionDefinition",
            "src": "4976:998:12"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getValueRepaidToDate",
              "payable": false,
              "scope": 3735,
              "stateMutability": "view",
              "superFunction": 2149,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 3508,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 3497,
                        "name": "ElementaryTypeName",
                        "src": "6285:7:12"
                      }
                    ],
                    "id": 3498,
                    "name": "VariableDeclaration",
                    "src": "6285:19:12"
                  }
                ],
                "id": 3499,
                "name": "ParameterList",
                "src": "6284:21:12"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_valueRepaid",
                      "scope": 3508,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 3500,
                        "name": "ElementaryTypeName",
                        "src": "6351:4:12"
                      }
                    ],
                    "id": 3501,
                    "name": "VariableDeclaration",
                    "src": "6351:17:12"
                  }
                ],
                "id": 3502,
                "name": "ParameterList",
                "src": "6350:19:12"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 3502
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3308,
                              "type": "mapping(bytes32 => uint256)",
                              "value": "valueRepaid"
                            },
                            "id": 3503,
                            "name": "Identifier",
                            "src": "6391:11:12"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3498,
                              "type": "bytes32",
                              "value": "agreementId"
                            },
                            "id": 3504,
                            "name": "Identifier",
                            "src": "6403:11:12"
                          }
                        ],
                        "id": 3505,
                        "name": "IndexAccess",
                        "src": "6391:24:12"
                      }
                    ],
                    "id": 3506,
                    "name": "Return",
                    "src": "6384:31:12"
                  }
                ],
                "id": 3507,
                "name": "Block",
                "src": "6374:48:12"
              }
            ],
            "id": 3508,
            "name": "FunctionDefinition",
            "src": "6255:167:12"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "unpackParametersFromBytes",
              "payable": false,
              "scope": 3735,
              "stateMutability": "pure",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "parameters",
                      "scope": 3569,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 3509,
                        "name": "ElementaryTypeName",
                        "src": "6463:7:12"
                      }
                    ],
                    "id": 3510,
                    "name": "VariableDeclaration",
                    "src": "6463:18:12"
                  }
                ],
                "id": 3511,
                "name": "ParameterList",
                "src": "6462:20:12"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_principalPlusInterest",
                      "scope": 3569,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint128",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint128",
                          "type": "uint128"
                        },
                        "id": 3512,
                        "name": "ElementaryTypeName",
                        "src": "6541:7:12"
                      }
                    ],
                    "id": 3513,
                    "name": "VariableDeclaration",
                    "src": "6541:30:12"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_amortizationUnitType",
                      "scope": 3569,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint8",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint8",
                          "type": "uint8"
                        },
                        "id": 3514,
                        "name": "ElementaryTypeName",
                        "src": "6585:5:12"
                      }
                    ],
                    "id": 3515,
                    "name": "VariableDeclaration",
                    "src": "6585:27:12"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_termLengthInAmortizationUnits",
                      "scope": 3569,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint120",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint120",
                          "type": "uint120"
                        },
                        "id": 3516,
                        "name": "ElementaryTypeName",
                        "src": "6626:7:12"
                      }
                    ],
                    "id": 3517,
                    "name": "VariableDeclaration",
                    "src": "6626:38:12"
                  }
                ],
                "id": 3518,
                "name": "ParameterList",
                "src": "6527:147:12"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        3520
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "principalPlusInterestShifted",
                          "scope": 3569,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bytes32",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bytes32",
                              "type": "bytes32"
                            },
                            "id": 3519,
                            "name": "ElementaryTypeName",
                            "src": "6778:7:12"
                          }
                        ],
                        "id": 3520,
                        "name": "VariableDeclaration",
                        "src": "6778:36:12"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "&",
                          "type": "bytes32"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3510,
                              "type": "bytes32",
                              "value": "parameters"
                            },
                            "id": 3521,
                            "name": "Identifier",
                            "src": "6829:10:12"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "307866666666666666666666666666666666666666666666666666666666666666663030303030303030303030303030303030303030303030303030303030303030",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 115792089237316195423570985008687907852929702298719625575994209400481361428480",
                              "value": "0xffffffffffffffffffffffffffffffff00000000000000000000000000000000"
                            },
                            "id": 3522,
                            "name": "Literal",
                            "src": "6842:66:12"
                          }
                        ],
                        "id": 3523,
                        "name": "BinaryOperation",
                        "src": "6829:79:12"
                      }
                    ],
                    "id": 3524,
                    "name": "VariableDeclarationStatement",
                    "src": "6778:130:12"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3526
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "amortizationUnitTypeShifted",
                          "scope": 3569,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bytes32",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bytes32",
                              "type": "bytes32"
                            },
                            "id": 3525,
                            "name": "ElementaryTypeName",
                            "src": "6992:7:12"
                          }
                        ],
                        "id": 3526,
                        "name": "VariableDeclaration",
                        "src": "6992:35:12"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "&",
                          "type": "bytes32"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3510,
                              "type": "bytes32",
                              "value": "parameters"
                            },
                            "id": 3527,
                            "name": "Identifier",
                            "src": "7042:10:12"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "307830303030303030303030303030303030303030303030303030303030303030306666303030303030303030303030303030303030303030303030303030303030",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 338953138925153547590470800371487866880",
                              "value": "0x00000000000000000000000000000000ff000000000000000000000000000000"
                            },
                            "id": 3528,
                            "name": "Literal",
                            "src": "7055:66:12"
                          }
                        ],
                        "id": 3529,
                        "name": "BinaryOperation",
                        "src": "7042:79:12"
                      }
                    ],
                    "id": 3530,
                    "name": "VariableDeclarationStatement",
                    "src": "6992:129:12"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3532
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "principalPlusInterest",
                          "scope": 3569,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 3531,
                            "name": "ElementaryTypeName",
                            "src": "7371:4:12"
                          }
                        ],
                        "id": 3532,
                        "name": "VariableDeclaration",
                        "src": "7371:26:12"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "/",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(uint256)",
                                  "value": "uint"
                                },
                                "id": 3533,
                                "name": "ElementaryTypeNameExpression",
                                "src": "7400:4:12"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3520,
                                  "type": "bytes32",
                                  "value": "principalPlusInterestShifted"
                                },
                                "id": 3534,
                                "name": "Identifier",
                                "src": "7405:28:12"
                              }
                            ],
                            "id": 3535,
                            "name": "FunctionCall",
                            "src": "7400:34:12"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_rational_340282366920938463463374607431768211456_by_1",
                                "typeString": "int_const 340282366920938463463374607431768211456"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "operator": "**",
                              "type": "int_const 340282366920938463463374607431768211456"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "32",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 2",
                                  "value": "2"
                                },
                                "id": 3536,
                                "name": "Literal",
                                "src": "7437:1:12"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "313238",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 128",
                                  "value": "128"
                                },
                                "id": 3537,
                                "name": "Literal",
                                "src": "7442:3:12"
                              }
                            ],
                            "id": 3538,
                            "name": "BinaryOperation",
                            "src": "7437:8:12"
                          }
                        ],
                        "id": 3539,
                        "name": "BinaryOperation",
                        "src": "7400:45:12"
                      }
                    ],
                    "id": 3540,
                    "name": "VariableDeclarationStatement",
                    "src": "7371:74:12"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3542
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "amortizationUnitType",
                          "scope": 3569,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 3541,
                            "name": "ElementaryTypeName",
                            "src": "7455:4:12"
                          }
                        ],
                        "id": 3542,
                        "name": "VariableDeclaration",
                        "src": "7455:25:12"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "/",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(uint256)",
                                  "value": "uint"
                                },
                                "id": 3543,
                                "name": "ElementaryTypeNameExpression",
                                "src": "7483:4:12"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3526,
                                  "type": "bytes32",
                                  "value": "amortizationUnitTypeShifted"
                                },
                                "id": 3544,
                                "name": "Identifier",
                                "src": "7488:27:12"
                              }
                            ],
                            "id": 3545,
                            "name": "FunctionCall",
                            "src": "7483:33:12"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_rational_1329227995784915872903807060280344576_by_1",
                                "typeString": "int_const 1329227995784915872903807060280344576"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "operator": "**",
                              "type": "int_const 1329227995784915872903807060280344576"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "32",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 2",
                                  "value": "2"
                                },
                                "id": 3546,
                                "name": "Literal",
                                "src": "7519:1:12"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "313230",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 120",
                                  "value": "120"
                                },
                                "id": 3547,
                                "name": "Literal",
                                "src": "7524:3:12"
                              }
                            ],
                            "id": 3548,
                            "name": "BinaryOperation",
                            "src": "7519:8:12"
                          }
                        ],
                        "id": 3549,
                        "name": "BinaryOperation",
                        "src": "7483:44:12"
                      }
                    ],
                    "id": 3550,
                    "name": "VariableDeclarationStatement",
                    "src": "7455:72:12"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3552
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "termLengthInAmortizationUnits",
                          "scope": 3569,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bytes32",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bytes32",
                              "type": "bytes32"
                            },
                            "id": 3551,
                            "name": "ElementaryTypeName",
                            "src": "7816:7:12"
                          }
                        ],
                        "id": 3552,
                        "name": "VariableDeclaration",
                        "src": "7816:37:12"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "&",
                          "type": "bytes32"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3510,
                              "type": "bytes32",
                              "value": "parameters"
                            },
                            "id": 3553,
                            "name": "Identifier",
                            "src": "7868:10:12"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "307830303030303030303030303030303030303030303030303030303030303030303030666666666666666666666666666666666666666666666666666666666666",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 1329227995784915872903807060280344575",
                              "value": "0x0000000000000000000000000000000000ffffffffffffffffffffffffffffff"
                            },
                            "id": 3554,
                            "name": "Literal",
                            "src": "7881:66:12"
                          }
                        ],
                        "id": 3555,
                        "name": "BinaryOperation",
                        "src": "7868:79:12"
                      }
                    ],
                    "id": 3556,
                    "name": "VariableDeclarationStatement",
                    "src": "7816:131:12"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 3518
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "tuple(uint128,uint8,uint120)"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint128",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(uint128)",
                                  "value": "uint128"
                                },
                                "id": 3557,
                                "name": "ElementaryTypeNameExpression",
                                "src": "7979:7:12"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3532,
                                  "type": "uint256",
                                  "value": "principalPlusInterest"
                                },
                                "id": 3558,
                                "name": "Identifier",
                                "src": "7987:21:12"
                              }
                            ],
                            "id": 3559,
                            "name": "FunctionCall",
                            "src": "7979:30:12"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint8",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(uint8)",
                                  "value": "uint8"
                                },
                                "id": 3560,
                                "name": "ElementaryTypeNameExpression",
                                "src": "8023:5:12"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3542,
                                  "type": "uint256",
                                  "value": "amortizationUnitType"
                                },
                                "id": 3561,
                                "name": "Identifier",
                                "src": "8029:20:12"
                              }
                            ],
                            "id": 3562,
                            "name": "FunctionCall",
                            "src": "8023:27:12"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint120",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(uint120)",
                                  "value": "uint120"
                                },
                                "id": 3563,
                                "name": "ElementaryTypeNameExpression",
                                "src": "8064:7:12"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3552,
                                  "type": "bytes32",
                                  "value": "termLengthInAmortizationUnits"
                                },
                                "id": 3564,
                                "name": "Identifier",
                                "src": "8072:29:12"
                              }
                            ],
                            "id": 3565,
                            "name": "FunctionCall",
                            "src": "8064:38:12"
                          }
                        ],
                        "id": 3566,
                        "name": "TupleExpression",
                        "src": "7965:147:12"
                      }
                    ],
                    "id": 3567,
                    "name": "Return",
                    "src": "7958:154:12"
                  }
                ],
                "id": 3568,
                "name": "Block",
                "src": "6679:1440:12"
              }
            ],
            "id": 3569,
            "name": "FunctionDefinition",
            "src": "6428:1691:12"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "numAmortizationUnitsForTimestamp",
              "payable": false,
              "scope": 3735,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "timestamp",
                      "scope": 3599,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 3570,
                        "name": "ElementaryTypeName",
                        "src": "8176:4:12"
                      }
                    ],
                    "id": 3571,
                    "name": "VariableDeclaration",
                    "src": "8176:14:12"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "params",
                      "scope": 3599,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "contractScope": null,
                          "name": "SimpleInterestParams",
                          "referencedDeclaration": 3279,
                          "type": "struct SimpleInterestTermsContract.SimpleInterestParams storage pointer"
                        },
                        "id": 3572,
                        "name": "UserDefinedTypeName",
                        "src": "8200:20:12"
                      }
                    ],
                    "id": 3573,
                    "name": "VariableDeclaration",
                    "src": "8200:27:12"
                  }
                ],
                "id": 3574,
                "name": "ParameterList",
                "src": "8166:67:12"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "units",
                      "scope": 3599,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 3575,
                        "name": "ElementaryTypeName",
                        "src": "8268:4:12"
                      }
                    ],
                    "id": 3576,
                    "name": "VariableDeclaration",
                    "src": "8268:10:12"
                  }
                ],
                "id": 3577,
                "name": "ParameterList",
                "src": "8267:12:12"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        3579
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "delta",
                          "scope": 3599,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 3578,
                            "name": "ElementaryTypeName",
                            "src": "8294:4:12"
                          }
                        ],
                        "id": 3579,
                        "name": "VariableDeclaration",
                        "src": "8294:10:12"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sub",
                              "referencedDeclaration": 7762,
                              "type": "function (uint256,uint256) pure returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3571,
                                  "type": "uint256",
                                  "value": "timestamp"
                                },
                                "id": 3580,
                                "name": "Identifier",
                                "src": "8307:9:12"
                              }
                            ],
                            "id": 3581,
                            "name": "MemberAccess",
                            "src": "8307:13:12"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "termStartUnixTimestamp",
                              "referencedDeclaration": 3272,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3573,
                                  "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                                  "value": "params"
                                },
                                "id": 3582,
                                "name": "Identifier",
                                "src": "8321:6:12"
                              }
                            ],
                            "id": 3583,
                            "name": "MemberAccess",
                            "src": "8321:29:12"
                          }
                        ],
                        "id": 3584,
                        "name": "FunctionCall",
                        "src": "8307:44:12"
                      }
                    ],
                    "id": 3585,
                    "name": "VariableDeclarationStatement",
                    "src": "8294:57:12"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3587
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "amortizationUnitLengthInSeconds",
                          "scope": 3599,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 3586,
                            "name": "ElementaryTypeName",
                            "src": "8361:4:12"
                          }
                        ],
                        "id": 3587,
                        "name": "VariableDeclaration",
                        "src": "8361:36:12"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_enum$_AmortizationUnitType_$3268",
                                  "typeString": "enum SimpleInterestTermsContract.AmortizationUnitType"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3734,
                              "type": "function (enum SimpleInterestTermsContract.AmortizationUnitType) pure returns (uint256)",
                              "value": "getAmortizationUnitLengthInSeconds"
                            },
                            "id": 3588,
                            "name": "Identifier",
                            "src": "8400:34:12"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "amortizationUnitType",
                              "referencedDeclaration": 3276,
                              "type": "enum SimpleInterestTermsContract.AmortizationUnitType"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3573,
                                  "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                                  "value": "params"
                                },
                                "id": 3589,
                                "name": "Identifier",
                                "src": "8435:6:12"
                              }
                            ],
                            "id": 3590,
                            "name": "MemberAccess",
                            "src": "8435:27:12"
                          }
                        ],
                        "id": 3591,
                        "name": "FunctionCall",
                        "src": "8400:63:12"
                      }
                    ],
                    "id": 3592,
                    "name": "VariableDeclarationStatement",
                    "src": "8361:102:12"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 3577
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "div",
                              "referencedDeclaration": 7742,
                              "type": "function (uint256,uint256) pure returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3579,
                                  "type": "uint256",
                                  "value": "delta"
                                },
                                "id": 3593,
                                "name": "Identifier",
                                "src": "8480:5:12"
                              }
                            ],
                            "id": 3594,
                            "name": "MemberAccess",
                            "src": "8480:9:12"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3587,
                              "type": "uint256",
                              "value": "amortizationUnitLengthInSeconds"
                            },
                            "id": 3595,
                            "name": "Identifier",
                            "src": "8490:31:12"
                          }
                        ],
                        "id": 3596,
                        "name": "FunctionCall",
                        "src": "8480:42:12"
                      }
                    ],
                    "id": 3597,
                    "name": "Return",
                    "src": "8473:49:12"
                  }
                ],
                "id": 3598,
                "name": "Block",
                "src": "8284:245:12"
              }
            ],
            "id": 3599,
            "name": "FunctionDefinition",
            "src": "8125:404:12"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "unpackParamsForAgreementID",
              "payable": false,
              "scope": 3735,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 3682,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 3600,
                        "name": "ElementaryTypeName",
                        "src": "8580:7:12"
                      }
                    ],
                    "id": 3601,
                    "name": "VariableDeclaration",
                    "src": "8580:19:12"
                  }
                ],
                "id": 3602,
                "name": "ParameterList",
                "src": "8570:35:12"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "params",
                      "scope": 3682,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "contractScope": null,
                          "name": "SimpleInterestParams",
                          "referencedDeclaration": 3279,
                          "type": "struct SimpleInterestTermsContract.SimpleInterestParams storage pointer"
                        },
                        "id": 3603,
                        "name": "UserDefinedTypeName",
                        "src": "8640:20:12"
                      }
                    ],
                    "id": 3604,
                    "name": "VariableDeclaration",
                    "src": "8640:27:12"
                  }
                ],
                "id": 3605,
                "name": "ParameterList",
                "src": "8639:29:12"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        3607
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "parameters",
                          "scope": 3682,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bytes32",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bytes32",
                              "type": "bytes32"
                            },
                            "id": 3606,
                            "name": "ElementaryTypeName",
                            "src": "8683:7:12"
                          }
                        ],
                        "id": 3607,
                        "name": "VariableDeclaration",
                        "src": "8683:18:12"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "bytes32",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "getTermsContractParameters",
                              "referencedDeclaration": 1556,
                              "type": "function (bytes32) view external returns (bytes32)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3310,
                                  "type": "contract DebtRegistry",
                                  "value": "debtRegistry"
                                },
                                "id": 3608,
                                "name": "Identifier",
                                "src": "8704:12:12"
                              }
                            ],
                            "id": 3609,
                            "name": "MemberAccess",
                            "src": "8704:39:12"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3601,
                              "type": "bytes32",
                              "value": "agreementId"
                            },
                            "id": 3610,
                            "name": "Identifier",
                            "src": "8744:11:12"
                          }
                        ],
                        "id": 3611,
                        "name": "FunctionCall",
                        "src": "8704:52:12"
                      }
                    ],
                    "id": 3612,
                    "name": "VariableDeclarationStatement",
                    "src": "8683:73:12"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        null
                      ],
                      "initialValue": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "principalPlusInterest",
                          "scope": 3682,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 3613,
                            "name": "ElementaryTypeName",
                            "src": "8767:4:12"
                          }
                        ],
                        "id": 3614,
                        "name": "VariableDeclaration",
                        "src": "8767:26:12"
                      }
                    ],
                    "id": 3615,
                    "name": "VariableDeclarationStatement",
                    "src": "8767:26:12"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        null
                      ],
                      "initialValue": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "amortizationUnitTypeAsUint",
                          "scope": 3682,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 3616,
                            "name": "ElementaryTypeName",
                            "src": "8803:4:12"
                          }
                        ],
                        "id": 3617,
                        "name": "VariableDeclaration",
                        "src": "8803:31:12"
                      }
                    ],
                    "id": 3618,
                    "name": "VariableDeclarationStatement",
                    "src": "8803:31:12"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        null
                      ],
                      "initialValue": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "termLengthInAmortizationUnits",
                          "scope": 3682,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 3619,
                            "name": "ElementaryTypeName",
                            "src": "8844:4:12"
                          }
                        ],
                        "id": 3620,
                        "name": "VariableDeclaration",
                        "src": "8844:34:12"
                      }
                    ],
                    "id": 3621,
                    "name": "VariableDeclarationStatement",
                    "src": "8844:34:12"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "tuple()"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "tuple(uint256,uint256,uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3614,
                                  "type": "uint256",
                                  "value": "principalPlusInterest"
                                },
                                "id": 3622,
                                "name": "Identifier",
                                "src": "8890:21:12"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3617,
                                  "type": "uint256",
                                  "value": "amortizationUnitTypeAsUint"
                                },
                                "id": 3623,
                                "name": "Identifier",
                                "src": "8913:26:12"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3620,
                                  "type": "uint256",
                                  "value": "termLengthInAmortizationUnits"
                                },
                                "id": 3624,
                                "name": "Identifier",
                                "src": "8941:29:12"
                              }
                            ],
                            "id": 3625,
                            "name": "TupleExpression",
                            "src": "8889:82:12"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "tuple(uint128,uint8,uint120)",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3569,
                                  "type": "function (bytes32) pure returns (uint128,uint8,uint120)",
                                  "value": "unpackParametersFromBytes"
                                },
                                "id": 3626,
                                "name": "Identifier",
                                "src": "8986:25:12"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3607,
                                  "type": "bytes32",
                                  "value": "parameters"
                                },
                                "id": 3627,
                                "name": "Identifier",
                                "src": "9012:10:12"
                              }
                            ],
                            "id": 3628,
                            "name": "FunctionCall",
                            "src": "8986:37:12"
                          }
                        ],
                        "id": 3629,
                        "name": "Assignment",
                        "src": "8889:134:12"
                      }
                    ],
                    "id": 3630,
                    "name": "ExpressionStatement",
                    "src": "8889:134:12"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8370,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 3631,
                            "name": "Identifier",
                            "src": "9136:7:12"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "<=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3617,
                                  "type": "uint256",
                                  "value": "amortizationUnitTypeAsUint"
                                },
                                "id": 3632,
                                "name": "Identifier",
                                "src": "9144:26:12"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "uint256",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_enum$_AmortizationUnitType_$3268",
                                          "typeString": "enum SimpleInterestTermsContract.AmortizationUnitType"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(uint256)",
                                      "value": "uint"
                                    },
                                    "id": 3633,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "9174:4:12"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "member_name": "YEARS",
                                      "referencedDeclaration": null,
                                      "type": "enum SimpleInterestTermsContract.AmortizationUnitType"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 3268,
                                          "type": "type(enum SimpleInterestTermsContract.AmortizationUnitType)",
                                          "value": "AmortizationUnitType"
                                        },
                                        "id": 3634,
                                        "name": "Identifier",
                                        "src": "9179:20:12"
                                      }
                                    ],
                                    "id": 3635,
                                    "name": "MemberAccess",
                                    "src": "9179:26:12"
                                  }
                                ],
                                "id": 3636,
                                "name": "FunctionCall",
                                "src": "9174:32:12"
                              }
                            ],
                            "id": 3637,
                            "name": "BinaryOperation",
                            "src": "9144:62:12"
                          }
                        ],
                        "id": 3638,
                        "name": "FunctionCall",
                        "src": "9136:71:12"
                      }
                    ],
                    "id": 3639,
                    "name": "ExpressionStatement",
                    "src": "9136:71:12"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3641
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "amortizationUnitType",
                          "scope": 3682,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "enum SimpleInterestTermsContract.AmortizationUnitType",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "AmortizationUnitType",
                              "referencedDeclaration": 3268,
                              "type": "enum SimpleInterestTermsContract.AmortizationUnitType"
                            },
                            "id": 3640,
                            "name": "UserDefinedTypeName",
                            "src": "9218:20:12"
                          }
                        ],
                        "id": 3641,
                        "name": "VariableDeclaration",
                        "src": "9218:41:12"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "enum SimpleInterestTermsContract.AmortizationUnitType",
                          "type_conversion": true
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3268,
                              "type": "type(enum SimpleInterestTermsContract.AmortizationUnitType)",
                              "value": "AmortizationUnitType"
                            },
                            "id": 3642,
                            "name": "Identifier",
                            "src": "9262:20:12"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3617,
                              "type": "uint256",
                              "value": "amortizationUnitTypeAsUint"
                            },
                            "id": 3643,
                            "name": "Identifier",
                            "src": "9283:26:12"
                          }
                        ],
                        "id": 3644,
                        "name": "FunctionCall",
                        "src": "9262:48:12"
                      }
                    ],
                    "id": 3645,
                    "name": "VariableDeclarationStatement",
                    "src": "9218:92:12"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3647
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "amortizationUnitLengthInSeconds",
                          "scope": 3682,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 3646,
                            "name": "ElementaryTypeName",
                            "src": "9321:4:12"
                          }
                        ],
                        "id": 3647,
                        "name": "VariableDeclaration",
                        "src": "9321:36:12"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_enum$_AmortizationUnitType_$3268",
                                  "typeString": "enum SimpleInterestTermsContract.AmortizationUnitType"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3734,
                              "type": "function (enum SimpleInterestTermsContract.AmortizationUnitType) pure returns (uint256)",
                              "value": "getAmortizationUnitLengthInSeconds"
                            },
                            "id": 3648,
                            "name": "Identifier",
                            "src": "9360:34:12"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3641,
                              "type": "enum SimpleInterestTermsContract.AmortizationUnitType",
                              "value": "amortizationUnitType"
                            },
                            "id": 3649,
                            "name": "Identifier",
                            "src": "9395:20:12"
                          }
                        ],
                        "id": 3650,
                        "name": "FunctionCall",
                        "src": "9360:56:12"
                      }
                    ],
                    "id": 3651,
                    "name": "VariableDeclarationStatement",
                    "src": "9321:95:12"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3653
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "issuanceBlockTimestamp",
                          "scope": 3682,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 3652,
                            "name": "ElementaryTypeName",
                            "src": "9427:4:12"
                          }
                        ],
                        "id": 3653,
                        "name": "VariableDeclaration",
                        "src": "9427:27:12"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "getIssuanceBlockTimestamp",
                              "referencedDeclaration": 1589,
                              "type": "function (bytes32) view external returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3310,
                                  "type": "contract DebtRegistry",
                                  "value": "debtRegistry"
                                },
                                "id": 3654,
                                "name": "Identifier",
                                "src": "9457:12:12"
                              }
                            ],
                            "id": 3655,
                            "name": "MemberAccess",
                            "src": "9457:38:12"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3601,
                              "type": "bytes32",
                              "value": "agreementId"
                            },
                            "id": 3656,
                            "name": "Identifier",
                            "src": "9496:11:12"
                          }
                        ],
                        "id": 3657,
                        "name": "FunctionCall",
                        "src": "9457:51:12"
                      }
                    ],
                    "id": 3658,
                    "name": "VariableDeclarationStatement",
                    "src": "9427:81:12"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3660
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "termLengthInSeconds",
                          "scope": 3682,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 3659,
                            "name": "ElementaryTypeName",
                            "src": "9519:4:12"
                          }
                        ],
                        "id": 3660,
                        "name": "VariableDeclaration",
                        "src": "9519:24:12"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "mul",
                              "referencedDeclaration": 7724,
                              "type": "function (uint256,uint256) pure returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3620,
                                  "type": "uint256",
                                  "value": "termLengthInAmortizationUnits"
                                },
                                "id": 3661,
                                "name": "Identifier",
                                "src": "9546:29:12"
                              }
                            ],
                            "id": 3662,
                            "name": "MemberAccess",
                            "src": "9546:33:12"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3647,
                              "type": "uint256",
                              "value": "amortizationUnitLengthInSeconds"
                            },
                            "id": 3663,
                            "name": "Identifier",
                            "src": "9580:31:12"
                          }
                        ],
                        "id": 3664,
                        "name": "FunctionCall",
                        "src": "9546:66:12"
                      }
                    ],
                    "id": 3665,
                    "name": "VariableDeclarationStatement",
                    "src": "9519:93:12"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3667
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "termEndUnixTimestamp",
                          "scope": 3682,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 3666,
                            "name": "ElementaryTypeName",
                            "src": "9623:4:12"
                          }
                        ],
                        "id": 3667,
                        "name": "VariableDeclaration",
                        "src": "9623:25:12"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "add",
                              "referencedDeclaration": 7786,
                              "type": "function (uint256,uint256) pure returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3660,
                                  "type": "uint256",
                                  "value": "termLengthInSeconds"
                                },
                                "id": 3668,
                                "name": "Identifier",
                                "src": "9651:19:12"
                              }
                            ],
                            "id": 3669,
                            "name": "MemberAccess",
                            "src": "9651:23:12"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3653,
                              "type": "uint256",
                              "value": "issuanceBlockTimestamp"
                            },
                            "id": 3670,
                            "name": "Identifier",
                            "src": "9675:22:12"
                          }
                        ],
                        "id": 3671,
                        "name": "FunctionCall",
                        "src": "9651:47:12"
                      }
                    ],
                    "id": 3672,
                    "name": "VariableDeclarationStatement",
                    "src": "9623:75:12"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 3605
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": true,
                          "lValueRequested": false,
                          "names": [
                            "principalPlusInterest",
                            "termStartUnixTimestamp",
                            "termEndUnixTimestamp",
                            "amortizationUnitType",
                            "termLengthInAmortizationUnits"
                          ],
                          "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3279,
                              "type": "type(struct SimpleInterestTermsContract.SimpleInterestParams storage pointer)",
                              "value": "SimpleInterestParams"
                            },
                            "id": 3673,
                            "name": "Identifier",
                            "src": "9716:20:12"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3614,
                              "type": "uint256",
                              "value": "principalPlusInterest"
                            },
                            "id": 3674,
                            "name": "Identifier",
                            "src": "9774:21:12"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3653,
                              "type": "uint256",
                              "value": "issuanceBlockTimestamp"
                            },
                            "id": 3675,
                            "name": "Identifier",
                            "src": "9833:22:12"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3667,
                              "type": "uint256",
                              "value": "termEndUnixTimestamp"
                            },
                            "id": 3676,
                            "name": "Identifier",
                            "src": "9891:20:12"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3641,
                              "type": "enum SimpleInterestTermsContract.AmortizationUnitType",
                              "value": "amortizationUnitType"
                            },
                            "id": 3677,
                            "name": "Identifier",
                            "src": "9947:20:12"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3620,
                              "type": "uint256",
                              "value": "termLengthInAmortizationUnits"
                            },
                            "id": 3678,
                            "name": "Identifier",
                            "src": "10012:29:12"
                          }
                        ],
                        "id": 3679,
                        "name": "FunctionCall",
                        "src": "9716:336:12"
                      }
                    ],
                    "id": 3680,
                    "name": "Return",
                    "src": "9709:343:12"
                  }
                ],
                "id": 3681,
                "name": "Block",
                "src": "8673:1386:12"
              }
            ],
            "id": 3682,
            "name": "FunctionDefinition",
            "src": "8535:1524:12"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getAmortizationUnitLengthInSeconds",
              "payable": false,
              "scope": 3735,
              "stateMutability": "pure",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "amortizationUnitType",
                      "scope": 3734,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "enum SimpleInterestTermsContract.AmortizationUnitType",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "contractScope": null,
                          "name": "AmortizationUnitType",
                          "referencedDeclaration": 3268,
                          "type": "enum SimpleInterestTermsContract.AmortizationUnitType"
                        },
                        "id": 3683,
                        "name": "UserDefinedTypeName",
                        "src": "10109:20:12"
                      }
                    ],
                    "id": 3684,
                    "name": "VariableDeclaration",
                    "src": "10109:41:12"
                  }
                ],
                "id": 3685,
                "name": "ParameterList",
                "src": "10108:43:12"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_amortizationUnitLengthInSeconds",
                      "scope": 3734,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 3686,
                        "name": "ElementaryTypeName",
                        "src": "10199:4:12"
                      }
                    ],
                    "id": 3687,
                    "name": "VariableDeclaration",
                    "src": "10199:37:12"
                  }
                ],
                "id": 3688,
                "name": "ParameterList",
                "src": "10198:39:12"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_enum$_AmortizationUnitType_$3268",
                            "typeString": "enum SimpleInterestTermsContract.AmortizationUnitType"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "==",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3684,
                              "type": "enum SimpleInterestTermsContract.AmortizationUnitType",
                              "value": "amortizationUnitType"
                            },
                            "id": 3689,
                            "name": "Identifier",
                            "src": "10256:20:12"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "member_name": "HOURS",
                              "referencedDeclaration": null,
                              "type": "enum SimpleInterestTermsContract.AmortizationUnitType"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3268,
                                  "type": "type(enum SimpleInterestTermsContract.AmortizationUnitType)",
                                  "value": "AmortizationUnitType"
                                },
                                "id": 3690,
                                "name": "Identifier",
                                "src": "10280:20:12"
                              }
                            ],
                            "id": 3691,
                            "name": "MemberAccess",
                            "src": "10280:26:12"
                          }
                        ],
                        "id": 3692,
                        "name": "BinaryOperation",
                        "src": "10256:50:12"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "functionReturnParameters": 3688
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3284,
                                  "type": "uint256",
                                  "value": "HOUR_LENGTH_IN_SECONDS"
                                },
                                "id": 3693,
                                "name": "Identifier",
                                "src": "10329:22:12"
                              }
                            ],
                            "id": 3694,
                            "name": "Return",
                            "src": "10322:29:12"
                          }
                        ],
                        "id": 3695,
                        "name": "Block",
                        "src": "10308:54:12"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_enum$_AmortizationUnitType_$3268",
                                "typeString": "enum SimpleInterestTermsContract.AmortizationUnitType"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3684,
                                  "type": "enum SimpleInterestTermsContract.AmortizationUnitType",
                                  "value": "amortizationUnitType"
                                },
                                "id": 3696,
                                "name": "Identifier",
                                "src": "10372:20:12"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "member_name": "DAYS",
                                  "referencedDeclaration": null,
                                  "type": "enum SimpleInterestTermsContract.AmortizationUnitType"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3268,
                                      "type": "type(enum SimpleInterestTermsContract.AmortizationUnitType)",
                                      "value": "AmortizationUnitType"
                                    },
                                    "id": 3697,
                                    "name": "Identifier",
                                    "src": "10396:20:12"
                                  }
                                ],
                                "id": 3698,
                                "name": "MemberAccess",
                                "src": "10396:25:12"
                              }
                            ],
                            "id": 3699,
                            "name": "BinaryOperation",
                            "src": "10372:49:12"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "functionReturnParameters": 3688
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3289,
                                      "type": "uint256",
                                      "value": "DAY_LENGTH_IN_SECONDS"
                                    },
                                    "id": 3700,
                                    "name": "Identifier",
                                    "src": "10444:21:12"
                                  }
                                ],
                                "id": 3701,
                                "name": "Return",
                                "src": "10437:28:12"
                              }
                            ],
                            "id": 3702,
                            "name": "Block",
                            "src": "10423:53:12"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_enum$_AmortizationUnitType_$3268",
                                    "typeString": "enum SimpleInterestTermsContract.AmortizationUnitType"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "==",
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3684,
                                      "type": "enum SimpleInterestTermsContract.AmortizationUnitType",
                                      "value": "amortizationUnitType"
                                    },
                                    "id": 3703,
                                    "name": "Identifier",
                                    "src": "10486:20:12"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "member_name": "WEEKS",
                                      "referencedDeclaration": null,
                                      "type": "enum SimpleInterestTermsContract.AmortizationUnitType"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 3268,
                                          "type": "type(enum SimpleInterestTermsContract.AmortizationUnitType)",
                                          "value": "AmortizationUnitType"
                                        },
                                        "id": 3704,
                                        "name": "Identifier",
                                        "src": "10510:20:12"
                                      }
                                    ],
                                    "id": 3705,
                                    "name": "MemberAccess",
                                    "src": "10510:26:12"
                                  }
                                ],
                                "id": 3706,
                                "name": "BinaryOperation",
                                "src": "10486:50:12"
                              },
                              {
                                "children": [
                                  {
                                    "attributes": {
                                      "functionReturnParameters": 3688
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 3294,
                                          "type": "uint256",
                                          "value": "WEEK_LENGTH_IN_SECONDS"
                                        },
                                        "id": 3707,
                                        "name": "Identifier",
                                        "src": "10559:22:12"
                                      }
                                    ],
                                    "id": 3708,
                                    "name": "Return",
                                    "src": "10552:29:12"
                                  }
                                ],
                                "id": 3709,
                                "name": "Block",
                                "src": "10538:54:12"
                              },
                              {
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "commonType": {
                                        "typeIdentifier": "t_enum$_AmortizationUnitType_$3268",
                                        "typeString": "enum SimpleInterestTermsContract.AmortizationUnitType"
                                      },
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "operator": "==",
                                      "type": "bool"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 3684,
                                          "type": "enum SimpleInterestTermsContract.AmortizationUnitType",
                                          "value": "amortizationUnitType"
                                        },
                                        "id": 3710,
                                        "name": "Identifier",
                                        "src": "10602:20:12"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "member_name": "MONTHS",
                                          "referencedDeclaration": null,
                                          "type": "enum SimpleInterestTermsContract.AmortizationUnitType"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 3268,
                                              "type": "type(enum SimpleInterestTermsContract.AmortizationUnitType)",
                                              "value": "AmortizationUnitType"
                                            },
                                            "id": 3711,
                                            "name": "Identifier",
                                            "src": "10626:20:12"
                                          }
                                        ],
                                        "id": 3712,
                                        "name": "MemberAccess",
                                        "src": "10626:27:12"
                                      }
                                    ],
                                    "id": 3713,
                                    "name": "BinaryOperation",
                                    "src": "10602:51:12"
                                  },
                                  {
                                    "children": [
                                      {
                                        "attributes": {
                                          "functionReturnParameters": 3688
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 3299,
                                              "type": "uint256",
                                              "value": "MONTH_LENGTH_IN_SECONDS"
                                            },
                                            "id": 3714,
                                            "name": "Identifier",
                                            "src": "10676:23:12"
                                          }
                                        ],
                                        "id": 3715,
                                        "name": "Return",
                                        "src": "10669:30:12"
                                      }
                                    ],
                                    "id": 3716,
                                    "name": "Block",
                                    "src": "10655:55:12"
                                  },
                                  {
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "commonType": {
                                            "typeIdentifier": "t_enum$_AmortizationUnitType_$3268",
                                            "typeString": "enum SimpleInterestTermsContract.AmortizationUnitType"
                                          },
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "operator": "==",
                                          "type": "bool"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 3684,
                                              "type": "enum SimpleInterestTermsContract.AmortizationUnitType",
                                              "value": "amortizationUnitType"
                                            },
                                            "id": 3717,
                                            "name": "Identifier",
                                            "src": "10720:20:12"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "lValueRequested": false,
                                              "member_name": "YEARS",
                                              "referencedDeclaration": null,
                                              "type": "enum SimpleInterestTermsContract.AmortizationUnitType"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 3268,
                                                  "type": "type(enum SimpleInterestTermsContract.AmortizationUnitType)",
                                                  "value": "AmortizationUnitType"
                                                },
                                                "id": 3718,
                                                "name": "Identifier",
                                                "src": "10744:20:12"
                                              }
                                            ],
                                            "id": 3719,
                                            "name": "MemberAccess",
                                            "src": "10744:26:12"
                                          }
                                        ],
                                        "id": 3720,
                                        "name": "BinaryOperation",
                                        "src": "10720:50:12"
                                      },
                                      {
                                        "children": [
                                          {
                                            "attributes": {
                                              "functionReturnParameters": 3688
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 3304,
                                                  "type": "uint256",
                                                  "value": "YEAR_LENGTH_IN_SECONDS"
                                                },
                                                "id": 3721,
                                                "name": "Identifier",
                                                "src": "10793:22:12"
                                              }
                                            ],
                                            "id": 3722,
                                            "name": "Return",
                                            "src": "10786:29:12"
                                          }
                                        ],
                                        "id": 3723,
                                        "name": "Block",
                                        "src": "10772:54:12"
                                      },
                                      {
                                        "children": [
                                          {
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "arguments": [
                                                    null
                                                  ],
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": false,
                                                  "isStructConstructorCall": false,
                                                  "lValueRequested": false,
                                                  "names": [
                                                    null
                                                  ],
                                                  "type": "tuple()",
                                                  "type_conversion": false
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": [
                                                        null
                                                      ],
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 8371,
                                                      "type": "function () pure",
                                                      "value": "revert"
                                                    },
                                                    "id": 3724,
                                                    "name": "Identifier",
                                                    "src": "10846:6:12"
                                                  }
                                                ],
                                                "id": 3725,
                                                "name": "FunctionCall",
                                                "src": "10846:8:12"
                                              }
                                            ],
                                            "id": 3726,
                                            "name": "ExpressionStatement",
                                            "src": "10846:8:12"
                                          }
                                        ],
                                        "id": 3727,
                                        "name": "Block",
                                        "src": "10832:33:12"
                                      }
                                    ],
                                    "id": 3728,
                                    "name": "IfStatement",
                                    "src": "10716:149:12"
                                  }
                                ],
                                "id": 3729,
                                "name": "IfStatement",
                                "src": "10598:267:12"
                              }
                            ],
                            "id": 3730,
                            "name": "IfStatement",
                            "src": "10482:383:12"
                          }
                        ],
                        "id": 3731,
                        "name": "IfStatement",
                        "src": "10368:497:12"
                      }
                    ],
                    "id": 3732,
                    "name": "IfStatement",
                    "src": "10252:613:12"
                  }
                ],
                "id": 3733,
                "name": "Block",
                "src": "10242:629:12"
              }
            ],
            "id": 3734,
            "name": "FunctionDefinition",
            "src": "10065:806:12"
          }
        ],
        "id": 3735,
        "name": "ContractDefinition",
        "src": "728:10145:12"
      }
    ],
    "id": 3736,
    "name": "SourceUnit",
    "src": "584:10290:12"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-03-05T04:42:11.865Z"
}