import algosdk from 'algosdk';
const algodToken = 'a'.repeat(64);
const server = 'http://localhost';
const port = '4001';
const mnemonic = 'kingdom minimum drastic fold hunt you awesome gentle female daughter beach credit used duck pigeon result cotton flat powder strong crisp whisper crisp absent juice';
export function getClient() {
    let client = new algosdk.Algodv2(algodToken, server, port);
    return client;
}
export function getAccount() {
    let account = algosdk.mnemonicToSecretKey(mnemonic);
    return account;
}
