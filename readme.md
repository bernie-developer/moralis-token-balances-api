# Moralis Token Balances API Demo

This repository contains a simple Node.js implementation of the Moralis Token Balances API. It demonstrates how to fetch all token balances for a specific wallet address, including current USD prices, in a single API call.

## Features
- Fetches balances and prices simultaneously (single endpoint).
- Includes spam and unverified contract filtering.
- Supports multiple chains (Base, Ethereum, Arbitrum) by changing the chain parameter.
- Formats crypto balances and USD values for better readability.

## Setup

1. Clone the repository:
```
git clone https://github.com/bernie-developer/moralis-token-balances-api.git
```

3. Install dependencies:
```
npm install
```

4. Configuration:
Open index.js and add your Moralis API key and the target wallet address:
```
const apiKey = "YOUR_API_KEY";
const address = "0x...";
```

## Usage
Run the script from your terminal:
```
node index.js
```

## Technical Details
This project uses the Moralis Wallet API (v2.2). By using the `balance_formatted` field, we avoid manual decimal conversions for various token standards (ERC20). The `exclude_spam` and `exclude_unverified_contracts` parameters are enabled to ensure data quality.

## Video Demo
I created a short video to explain the logic behind this implementation and how the response data can be used:
[Link to your Loom video] 
Duration: 02:30

For more information, see the official Moralis documentation:
https://docs.moralis.com/web3-data-api/evm/reference/get-wallet-token-balances-price
