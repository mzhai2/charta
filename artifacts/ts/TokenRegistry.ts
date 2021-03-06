export const TokenRegistry = 
{
  "contractName": "TokenRegistry",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "symbol",
          "type": "string"
        },
        {
          "name": "token",
          "type": "address"
        }
      ],
      "name": "setTokenAddress",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
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
      "name": "symbolToTokenAddress",
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
      "name": "owner",
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
          "name": "symbol",
          "type": "string"
        }
      ],
      "name": "getTokenAddress",
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
      "constant": false,
      "inputs": [
        {
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    }
  ],
  "bytecode": "0x6060604052336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061061b806100536000396000f30060606040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806317456e5614610072578063202b9688146100ee5780638da5cb5b14610155578063c4091236146101aa578063f2fde38b14610247575b600080fd5b341561007d57600080fd5b6100ec600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610280565b005b34156100f957600080fd5b61011360048080356000191690602001909190505061039b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561016057600080fd5b6101686103ce565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101b557600080fd5b610205600480803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506103f3565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561025257600080fd5b61027e600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061049a565b005b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156102db57600080fd5b8060016000846040518082805190602001908083835b60208310151561031657805182526020820191506020810190506020830392506102f1565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206000191660001916815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b60016020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060016000836040518082805190602001908083835b60208310151561042f578051825260208201915060208101905060208303925061040a565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206000191660001916815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156104f557600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561053157600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a723058205130b374f9f9326427001c7ad96b0912acd75fd697e3e24a76d6769da3b760670029",
  "deployedBytecode": "0x60606040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806317456e5614610072578063202b9688146100ee5780638da5cb5b14610155578063c4091236146101aa578063f2fde38b14610247575b600080fd5b341561007d57600080fd5b6100ec600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610280565b005b34156100f957600080fd5b61011360048080356000191690602001909190505061039b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561016057600080fd5b6101686103ce565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101b557600080fd5b610205600480803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506103f3565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561025257600080fd5b61027e600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061049a565b005b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156102db57600080fd5b8060016000846040518082805190602001908083835b60208310151561031657805182526020820191506020810190506020830392506102f1565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206000191660001916815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b60016020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060016000836040518082805190602001908083835b60208310151561042f578051825260208201915060208101905060208303925061040a565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206000191660001916815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156104f557600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561053157600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a723058205130b374f9f9326427001c7ad96b0912acd75fd697e3e24a76d6769da3b760670029",
  "sourceMap": "87:380:6:-;;;509:10:33;501:5;;:18;;;;;;;;;;;;;;;;;;87:380:6;;;;;;",
  "deployedSourceMap": "87:380:6:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;190:136;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;127:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;238:20:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;332:133:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;832:169:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;190:136:6;653:5:33;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;314:5:6;272:20;:39;303:6;293:17;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:2;51:6;36:153;;;182:3;176:5;171:3;164:6;98:2;93:3;89;82:19;;123:2;118:3;114;107:19;;148:2;143:3;139;132:19;;36:153;;;274:1;267:3;263:2;259:3;254;250;246;315:4;311:3;305;299:5;295:3;356:4;350:3;344:5;340:3;389:7;380;377:2;372:3;365:6;3:399;;;;;;;;;;;;;;;;;;;272:39:6;;;;;;;;;;;;;;;;;;:47;;;;;;;;;;;;;;;;;;190:136;;:::o;127:56::-;;;;;;;;;;;;;;;;;;;;;;:::o;238:20:33:-;;;;;;;;;;;;;:::o;332:133:6:-;393:7;419:20;:39;450:6;440:17;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:2;51:6;36:153;;;182:3;176:5;171:3;164:6;98:2;93:3;89;82:19;;123:2;118:3;114;107:19;;148:2;143:3;139;132:19;;36:153;;;274:1;267:3;263:2;259:3;254;250;246;315:4;311:3;305;299:5;295:3;356:4;350:3;344:5;340:3;389:7;380;377:2;372:3;365:6;3:399;;;;;;;;;;;;;;;;;;;419:39:6;;;;;;;;;;;;;;;;;;;;;;;;;;;412:46;;332:133;;;:::o;832:169:33:-;653:5;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;928:1;908:22;;:8;:22;;;;900:31;;;;;;;;965:8;937:37;;958:5;;;;;;;;;;;937:37;;;;;;;;;;;;988:8;980:5;;:16;;;;;;;;;;;;;;;;;;832:169;:::o",
  "source": "pragma solidity 0.4.18;\n\nimport \"zeppelin-solidity/contracts/ownership/Ownable.sol\";\n\n\ncontract TokenRegistry is Ownable {\n    mapping (bytes32 => address) public symbolToTokenAddress;\n\n    function setTokenAddress(string symbol, address token) public onlyOwner {\n        symbolToTokenAddress[keccak256(symbol)] = token;\n    }\n\n    function getTokenAddress(string symbol) public view returns (address) {\n        return symbolToTokenAddress[keccak256(symbol)];\n    }\n}\n",
  "sourcePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/TokenRegistry.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/TokenRegistry.sol",
      "exportedSymbols": {
        "TokenRegistry": [
          2192
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
        "id": 2152,
        "name": "PragmaDirective",
        "src": "0:23:6"
      },
      {
        "attributes": {
          "SourceUnit": 7844,
          "absolutePath": "zeppelin-solidity/contracts/ownership/Ownable.sol",
          "file": "zeppelin-solidity/contracts/ownership/Ownable.sol",
          "scope": 2193,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2153,
        "name": "ImportDirective",
        "src": "25:59:6"
      },
      {
        "attributes": {
          "contractDependencies": [
            7843
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            2192,
            7843
          ],
          "name": "TokenRegistry",
          "scope": 2193
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
                  "name": "Ownable",
                  "referencedDeclaration": 7843,
                  "type": "contract Ownable"
                },
                "id": 2154,
                "name": "UserDefinedTypeName",
                "src": "113:7:6"
              }
            ],
            "id": 2155,
            "name": "InheritanceSpecifier",
            "src": "113:7:6"
          },
          {
            "attributes": {
              "constant": false,
              "name": "symbolToTokenAddress",
              "scope": 2192,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(bytes32 => address)",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(bytes32 => address)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "bytes32",
                      "type": "bytes32"
                    },
                    "id": 2156,
                    "name": "ElementaryTypeName",
                    "src": "136:7:6"
                  },
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 2157,
                    "name": "ElementaryTypeName",
                    "src": "147:7:6"
                  }
                ],
                "id": 2158,
                "name": "Mapping",
                "src": "127:28:6"
              }
            ],
            "id": 2159,
            "name": "VariableDeclaration",
            "src": "127:56:6"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "setTokenAddress",
              "payable": false,
              "scope": 2192,
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
                      "name": "symbol",
                      "scope": 2177,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 2160,
                        "name": "ElementaryTypeName",
                        "src": "215:6:6"
                      }
                    ],
                    "id": 2161,
                    "name": "VariableDeclaration",
                    "src": "215:13:6"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "token",
                      "scope": 2177,
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
                        "id": 2162,
                        "name": "ElementaryTypeName",
                        "src": "230:7:6"
                      }
                    ],
                    "id": 2163,
                    "name": "VariableDeclaration",
                    "src": "230:13:6"
                  }
                ],
                "id": 2164,
                "name": "ParameterList",
                "src": "214:30:6"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2167,
                "name": "ParameterList",
                "src": "262:0:6"
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
                      "referencedDeclaration": 7817,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 2165,
                    "name": "Identifier",
                    "src": "252:9:6"
                  }
                ],
                "id": 2166,
                "name": "ModifierInvocation",
                "src": "252:9:6"
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
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2159,
                                  "type": "mapping(bytes32 => address)",
                                  "value": "symbolToTokenAddress"
                                },
                                "id": 2168,
                                "name": "Identifier",
                                "src": "272:20:6"
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
                                          "typeIdentifier": "t_string_memory_ptr",
                                          "typeString": "string memory"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 8361,
                                      "type": "function () pure returns (bytes32)",
                                      "value": "keccak256"
                                    },
                                    "id": 2169,
                                    "name": "Identifier",
                                    "src": "293:9:6"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2161,
                                      "type": "string memory",
                                      "value": "symbol"
                                    },
                                    "id": 2170,
                                    "name": "Identifier",
                                    "src": "303:6:6"
                                  }
                                ],
                                "id": 2171,
                                "name": "FunctionCall",
                                "src": "293:17:6"
                              }
                            ],
                            "id": 2172,
                            "name": "IndexAccess",
                            "src": "272:39:6"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2163,
                              "type": "address",
                              "value": "token"
                            },
                            "id": 2173,
                            "name": "Identifier",
                            "src": "314:5:6"
                          }
                        ],
                        "id": 2174,
                        "name": "Assignment",
                        "src": "272:47:6"
                      }
                    ],
                    "id": 2175,
                    "name": "ExpressionStatement",
                    "src": "272:47:6"
                  }
                ],
                "id": 2176,
                "name": "Block",
                "src": "262:64:6"
              }
            ],
            "id": 2177,
            "name": "FunctionDefinition",
            "src": "190:136:6"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getTokenAddress",
              "payable": false,
              "scope": 2192,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "symbol",
                      "scope": 2191,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 2178,
                        "name": "ElementaryTypeName",
                        "src": "357:6:6"
                      }
                    ],
                    "id": 2179,
                    "name": "VariableDeclaration",
                    "src": "357:13:6"
                  }
                ],
                "id": 2180,
                "name": "ParameterList",
                "src": "356:15:6"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2191,
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
                        "id": 2181,
                        "name": "ElementaryTypeName",
                        "src": "393:7:6"
                      }
                    ],
                    "id": 2182,
                    "name": "VariableDeclaration",
                    "src": "393:7:6"
                  }
                ],
                "id": 2183,
                "name": "ParameterList",
                "src": "392:9:6"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 2183
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2159,
                              "type": "mapping(bytes32 => address)",
                              "value": "symbolToTokenAddress"
                            },
                            "id": 2184,
                            "name": "Identifier",
                            "src": "419:20:6"
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
                                      "typeIdentifier": "t_string_memory_ptr",
                                      "typeString": "string memory"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8361,
                                  "type": "function () pure returns (bytes32)",
                                  "value": "keccak256"
                                },
                                "id": 2185,
                                "name": "Identifier",
                                "src": "440:9:6"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2179,
                                  "type": "string memory",
                                  "value": "symbol"
                                },
                                "id": 2186,
                                "name": "Identifier",
                                "src": "450:6:6"
                              }
                            ],
                            "id": 2187,
                            "name": "FunctionCall",
                            "src": "440:17:6"
                          }
                        ],
                        "id": 2188,
                        "name": "IndexAccess",
                        "src": "419:39:6"
                      }
                    ],
                    "id": 2189,
                    "name": "Return",
                    "src": "412:46:6"
                  }
                ],
                "id": 2190,
                "name": "Block",
                "src": "402:63:6"
              }
            ],
            "id": 2191,
            "name": "FunctionDefinition",
            "src": "332:133:6"
          }
        ],
        "id": 2192,
        "name": "ContractDefinition",
        "src": "87:380:6"
      }
    ],
    "id": 2193,
    "name": "SourceUnit",
    "src": "0:468:6"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {
    "42": {
      "events": {},
      "links": {},
      "address": "0xb6ee8bad6caa418e0284eea800d525762130240c"
    },
    "70": {
      "events": {},
      "links": {},
      "address": "0x5833e409d1c61e4d3139654db5faea6ee819a664"
    }
  },
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-03-05T04:42:11.850Z"
}