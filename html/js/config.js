var config = {
  apiUrl: "http://165.227.51.19:1984/",
  mainnetExplorerUrl: "https://xmrchain.com/",
  testnetExplorerUrl: "https://testnet.xmrchain.com/",
  testnet: false,
  coinUnitPlaces: 12,
  txMinConfirms: 10,         // corresponds to CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE in Monero
  txCoinbaseMinConfirms: 60, // corresponds to CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW in Monero
  coinSymbol: 'XHV',
  openAliasPrefix: "xhv",
  coinName: 'Haven',
  coinUriPrefix: 'haven:',
  addressPrefix: 0x5af4,
  integratedAddressPrefix: 0xcd774,
  subAddressPrefix: 0x12d974,
  addressPrefixTestnet: 53,
  integratedAddressPrefixTestnet: 54,
  subAddressPrefixTestnet: 63,
  feePerKB: new JSBigInt('2000000000'),//20^10 - for testnet its not used, as fee is dynamic.
  dustThreshold: new JSBigInt('1000000000'),//10^10 used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
  txChargeRatio: 0.5,
  defaultMixin: 5, // minimum mixin for hardfork v5
  txChargeAddress: '',
  idleTimeout: 30,
  idleWarningDuration: 20,
  maxBlockNumber: 500000000,
  avgBlockTime: 120,
  debugMode: false
};
