# Moralis Token Balances API

## Wallet Token Balances via Moralis API (Node.js)

This example demonstrates how to fetch and display native and ERC-20 token balances, including their real-time USD prices, for a wallet address using the Moralis Web3 Data API.

The script queries the Moralis Wallet Token Balances endpoint on the Base chain and outputs a clean, human-readable overview of token balances and their USD values.

### What this code does

* Calls the Moralis `/wallets/{address}/tokens` endpoint
* Fetches verified, non-spam token balances
* Formats token balances and USD prices for readable CLI output
* Runs as a simple Node.js script using Axios

### Requirements

* Node.js 18+
* [A Moralis API key](https://docs.moralis.com/web3-data-api/evm/get-your-api-key)
* Axios (`npm install axios`)

### Configuration

Set your Moralis API key as an environment variable:

```bash
export MORALIS_KEY=your_api_key_here
```

Update the wallet address directly in the script.

### Supported chains

The example uses `base` by default. You can easily switch chains, such as:

* `eth`
* `arbitrum`

by changing the `chain` parameter.

### Use case

Ideal for developers who want a quick way to inspect wallet holdings, prototype portfolio views, or integrate token balance data into backend services without dealing directly with raw blockchain data.
