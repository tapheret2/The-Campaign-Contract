import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && window.ethereum) {
  web3 = new Web3(window.ethereum);
} else {
  const provider = new Web3.providers.HttpProvider('https://sepolia.infura.io/v3/f9333858fd6b4fab97f28679c8972c12');
  web3 = new Web3(provider);
}

export default web3;