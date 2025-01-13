import ReactGA from 'react-ga4';

// Google Analytics Measurement ID
const MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your actual GA4 measurement ID

export const initGA = () => {
  ReactGA.initialize(MEASUREMENT_ID);
};

export const logPageView = () => {
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
};

export const logEvent = (category: string, action: string, label?: string) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};

export const logTransaction = (transactionId: string, value: number) => {
  ReactGA.event({
    category: 'Transaction',
    action: 'Purchase',
    label: transactionId,
    value,
  });
};

// Custom events for NFT platform
export const NFTEvents = {
  mint: (tokenId: string, price: number) => {
    logEvent('NFT', 'Mint', tokenId);
    logTransaction(tokenId, price);
  },
  
  stake: (tokenId: string) => {
    logEvent('NFT', 'Stake', tokenId);
  },
  
  unstake: (tokenId: string) => {
    logEvent('NFT', 'Unstake', tokenId);
  },
  
  claimRewards: (amount: number) => {
    logEvent('Rewards', 'Claim', undefined, amount);
  },
  
  connectWallet: (address: string) => {
    logEvent('Wallet', 'Connect', address);
  },
  
  disconnectWallet: (address: string) => {
    logEvent('Wallet', 'Disconnect', address);
  },
  
  error: (message: string) => {
    logEvent('Error', message);
  },
  
  performance: {
    pageLoad: (duration: number) => {
      logEvent('Performance', 'Page Load', undefined, duration);
    },
    
    apiCall: (endpoint: string, duration: number) => {
      logEvent('Performance', 'API Call', endpoint, duration);
    },
    
    transaction: (type: string, duration: number) => {
      logEvent('Performance', 'Transaction', type, duration);
    },
  },
  
  userEngagement: {
    viewNFT: (tokenId: string) => {
      logEvent('Engagement', 'View NFT', tokenId);
    },
    
    filterCollection: (filter: string) => {
      logEvent('Engagement', 'Filter Collection', filter);
    },
    
    sortCollection: (sortBy: string) => {
      logEvent('Engagement', 'Sort Collection', sortBy);
    },
    
    toggleView: (view: 'grid' | 'list') => {
      logEvent('Engagement', 'Toggle View', view);
    },
  },
};
