const fetch = require('node-fetch');

exports.handler = async () => {
  try {
    const response = await fetch('https://zenquotes.io/api/random');
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: { 
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: "Failed to fetch quote" }) };
  }
};