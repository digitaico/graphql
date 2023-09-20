const express = require('express');
const {buildSchema} = require('graphql');
const {createHandler} = require('graphql-http');

const schema = buildSchema(`
  type Query {
    description: String
    price: Float
    sku: String
  }
`);

const PORT = 3000;

const app = express();

const root = {
  description: 'Adizero Boston 11',
  price: 115.99,
  sku: 'AU85215441',
};


app.all('/store', createHandler({
  root
}));

app.listen(PORT, () => {
  console.warn(`... GraphQL server listening on port ${PORT}`)
})

