import { InjectedConnector } from '@web3-react/injected-connector';

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 56, 97], // Ethereum Mainnet, Ropsten, Rinkeby, Goerli, Kovan, BSC Mainnet, BSC Testnet
});
