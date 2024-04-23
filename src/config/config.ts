import algosdk from 'algosdk';

const algodToken = 'a'.repeat(64);
const server: string = 'http://localhost';
const port: string = '4001';

// algorand account mnemonic
const mnemonic: string =
  'kingdom minimum drastic fold hunt you awesome gentle female daughter beach credit used duck pigeon result cotton flat powder strong crisp whisper crisp absent juice';

  // create algorand client 
export function getClient(): algosdk.Algodv2 {
  let client = new algosdk.Algodv2(algodToken, server, port);
  return client;
}

// get account from account mnemonic
export function getAccount(): algosdk.Account {
  let account = algosdk.mnemonicToSecretKey(mnemonic);
  return account;
}
