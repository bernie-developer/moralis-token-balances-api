const axios = require("axios");

const apiKey = process.env.MORALIS_KEY || "YOUR_API_KEY";
const address = "YOUR WALLET ADDRESS";

const getBalances = async () => {
    try {
        const response = await axios.get(
            `https://deep-index.moralis.io/api/v2.2/wallets/${address}/tokens`,
            {
                headers: { "X-API-Key": apiKey },
                params: {
                    // Change chain here: 'eth', 'arbitrum'
                    chain: "base",
                    exclude_spam: true,
                    exclude_unverified_contracts: true
                },
            }
        );

        const tokens = response.data.result;

        console.log(`\nWallet Assets (${tokens.length}):`);

        tokens.forEach((token) => {
            const bal = Number(token.balance_formatted).toFixed(4);

            // Check if price exists, otherwise display "N/A"
            const price = token.usd_value
                ? `$${Number(token.usd_value).toFixed(2)}`
                : "Price N/A";

            console.log(`- ${token.name} (${token.symbol}): ${bal} (${price})`);
        });

    } catch (error) {
        console.error("Error fetching balances:", error.response ? error.response.data : error.message);
    }
};

getBalances();
