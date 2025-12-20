### Moralis Token Balances API Demo

This repository contains a simple Node.js implementation of the Moralis Token Balances API. It demonstrates how to fetch all token balances for a specific wallet address, including current USD prices, in a single API call.

### Features
- Fetches balances and prices simultaneously (single endpoint).
- Includes spam and unverified contract filtering.
- Supports multiple chains (Base, Ethereum, Arbitrum, ...) by changing the chain parameter.
- Formats crypto balances and USD values for better readability.

### Setup

#### 1. Clone the repository:
```
git clone https://github.com/bernie-developer/moralis-token-balances-api.git
```

#### 2. Install dependencies:
```
npm install
```

#### 3. Configuration: Open index.js to configure the script:

1. Get your API Key: Sign up for the free tier at [admin.moralis.com](https://admin.moralis.com/) to generate your key.

2. Set your API Key: Choose one of the following methods:

* Option A (Direct): Replace `YOUR_API_KEY` directly in the code.

* Option B (Secure): Set a `MORALIS_KEY` environment variable. The script prioritizes this method.

3. Set Wallet Address: Update the address variable with the EVM wallet you wish to query.
```
const apiKey = "YOUR_API_KEY";
const address = "0x...";
```

#### Usage
Run the script from your terminal:
```
node index.js
```
![Terminal Output](https://github.com/user-attachments/assets/6e50c2a2-d6b7-4b92-8f0a-16f504b43b66)

#### Technical Details

This project uses the Moralis Wallet API (v2.2). By using the `balance_formatted` field, we avoid manual decimal conversions for various token standards (ERC20). The `exclude_spam` and `exclude_unverified_contracts` parameters are enabled to ensure data quality.

#### Video Tutorial
I created a short video to explain the logic behind this implementation and how the response data can be used:
[Video Tutorial](https://www.loom.com/share/d74c7f92b38d40caa26980da1aa3b166)<br>
**Duration:** ~2m 30s

For more information, see the official Moralis documentation:
[https://docs.moralis.com/web3-data-api/evm/reference/get-wallet-token-balances-price]
