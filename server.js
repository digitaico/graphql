import express from 'express';
import {GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLFloat, GraphQLInt, buildSchema} from 'graphql';
import {createHandler} from 'graphql-http/lib/use/express';
import cors from 'cors';
import helmet from 'helmet';

const data = [
  {
    name: 'Adizero Boston 10',
    description: 'Best running shoes for elite trainning',
    price: 115.99,
    sku: 'AU85215441',
    stock: 12,
    id: 1,
    status: true,
  },
  {
    name: 'Adizero Adios Pro 3',
    description: 'Best running shoes for elite races',
    price: 256.19,
    sku: 'AU526454',
    stock: 9,
    id: 2,
    status: true,
  }
];

// Schema
const schema = buildSchema(`
type Review {
  rating: Int!
  comment: String
}

type Product {
  sku: String!
  price: Float!
  description: String
  name: String!
  id: ID!
  status: Boolean
  stock: Int!
  reviews: [Review]
},

type Order {
  date: String
  subtotal: Float
  id: ID
  items : [OrderItem]
}

type OrderItem {
  product: Product!
  quantity: Int!
}

type Query {
  products: [Product]
  orders: [Order]
},
`);

// Resolver


const PORT = 4000;

const app = express();

// # security middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// # web routes
app.get('/', (req, res) => {
  res.send('Welcome to GraphQL tests');
})

app.get('/about', (request, response) => {
  response.send('About us,  we are funny guys!!!');
})

// # graphql endpoint
app.use('/store', createHandler({schema}));

// app instantiation
app.listen(PORT, () => {
  console.warn(`... GraphQL server listening on port ${PORT}`)
})
