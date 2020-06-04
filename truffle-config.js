require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remind modify give clog bridge surprise'; 
let testAccounts = [
"0x1683944c671a3fba1f879eecf8203b49a0258149105b90b321087a101b19efca",
"0xae8db98a89f242941d013e1586e428b0cc9fdeba6e58c66bb307a874443cd47f",
"0xf312be7485481bacb276bcef95056eb09910f07c8de3bc0d7146dbc1ef70de09",
"0x1b9e20d0117893977273e07266a7823381b86edbe86d7b2cdf7d67628335c437",
"0x8f879b7e1bdf3ef568a31cb35c6f30b48af55cff624fd19ed027874d60eabc1d",
"0x495a25993107f3c36352a34a7aba3a74089c973d6d0924cc3df51488abce4851",
"0x443050b5dca647719c693b11d570b924d73018717da65f2fb8e55092d520610c",
"0x7272e20b89f67c5b34ad66d282b0158f64e4edd7668dd8aa7f10b1693d6dd188",
"0x069264c827dbfed4437678342dc65ff739f86dd6288fed054d9265492981f78e",
"0x233c66618c55fb3e37a837ba3badfaf97db8e165ace7cbec7fe21fd50f7e2881"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
