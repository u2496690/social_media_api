var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import algosdk from 'algosdk';
import { getClient, getAccount } from '../config/config.js';
export const storeWeatherData = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const client = getClient();
        const account = getAccount();
        const suggestedParams = yield client.getTransactionParams().do();
        const note = algosdk.encodeObj(data);
        const txn = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
            from: account.addr,
            to: account.addr, // Sending the transaction to oneself
            amount: 1000, // Minimum amount
            note: note,
            suggestedParams: suggestedParams,
        });
        const signedTxn = txn.signTxn(account.sk);
        const sendTxn = yield client.sendRawTransaction(signedTxn).do();
        console.log('Transaction ID:', sendTxn.txId);
    }
    catch (error) {
        console.error('Failed to store weather data:', error);
    }
});
