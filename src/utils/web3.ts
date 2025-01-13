import { InjectedConnector } from '@web3-react/injected-connector';

const SUPPORTED_CHAIN_IDS = [1, 3, 4, 5, 42, 56, 97];

export const injected = new InjectedConnector({
  supportedChainIds: SUPPORTED_CHAIN_IDS,
});

export const getErrorMessage = (error: Error): string => {
  if (error?.message?.includes('Unsupported chain id')) {
    return 'Please connect to a supported network (Ethereum Mainnet or testnet)';
  }
  return 'An error occurred. Please try again.';
};

export const shortenAddress = (address: string): string => {
  return `${address?.slice(0, 6)}...${address?.slice(-4)}`;
};
