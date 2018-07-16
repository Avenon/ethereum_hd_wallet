const bip39 = require('bip39')
const hdkey = require('hdkey')
const ethUtil = require('ethereumjs-util')

const mnemonic = bip39.generateMnemonic(); //generates string
console.log(mnemonic);
const seed = bip39.mnemonicToSeed(mnemonic); //creates seed buffer
console.log(seed);

const root = hdkey.fromMasterSeed(seed);
console.log(root);
const masterPrivateKey = root.privateKey.toString('hex');
console.log(masterPrivateKey);

const addrNode = root.derive("m/44'/60'/0'/0/0"); //line 1
console.log(addrNode)
const pubKey = ethUtil.privateToPublic(addrNode._privateKey);
console.log(pubKey)
const addr = ethUtil.publicToAddress(pubKey).toString('hex');
console.log(addr)
const address = ethUtil.toChecksumAddress(addr);
console.log(address)

/*
   If using ethereumjs-wallet instead do after line 1:
   const address = addrNode.getWallet().getChecksumAddressString();
*/
