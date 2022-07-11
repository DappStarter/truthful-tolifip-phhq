require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner neck fringe speak guard render remind mistake hockey enroll olympic thing'; 
let testAccounts = [
"0xb904cd2a364221dd35730e720fcb666613ed7e3cddccac0e1537d4bc5c00c721",
"0xd03ba465e67cf075b06b64be7acc34aae8cb881e939abbc74da1d2be6c9f2bb8",
"0xf51af273b48b806016306f74a83f9db071152225a23d7664ab840c916913aa82",
"0xdf5cf66c17e5ccf7e13f7b5bdf7773f8341685d540f274c00cd62d804fa48133",
"0xdd0a66bf6eac01104415157a0a1b3b4cb63d650aa69c476133318a304596cb6c",
"0xb4261b47916f5d5a00375d29e808ee7a8bd920f3a8f8bcf9a7388bf5113343e5",
"0x61540c0092ffb77e5f5e2ae23229b68c524f28f43c5704cd9dab0779c4299350",
"0xa181ba5fdb0f31f5168c4de8f785af1a0e8a720bd2bb77d5de06cad090c2642b",
"0x2f15eaae3d92197442f23c2a21283aa9c8299443cefe899c87599156edc02528",
"0x7725f406d38432a306a3b8b2a17802bb4d3e58e8fc91df2f84903a3c262a5740"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


