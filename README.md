> Using Graph Protocol as database to listen to events instead of Moralis Database otherwise everything is same as moralis-frontend repo.

# Project Overview

First thing we've do is before starting anything, deploy our NFT-Marketplace-Contract on testnet.

Instead of reading the events from Moralis server, we will:
  1. Index them with TheGraph
  2. Read from the Graph

# Indexing Events on TheGraph or Subgraph

1. Go to Subgraph Studio on TheGraph protocol Website.

2. Create a subgraph dashboard.

3. Create a new directory in local machine, that's where we're gonna "create our subgraphs"

4. NOW Go and see the README of "subgraph-nft-marketplace" repo.

# Reading Data From Subgraph

After indexing our Events on Subgraph Now it's time for Reading and Using it to change our Frontend.

5. We are using a new package to easily read Subgraph, run this cmd:
  ```
  yarn add @apollo/client graphql
  ```

6. See `graphExample.jsx` file in folder pages to understand how to read Subgraph.

7. After writing the code for graphExample. Go and update the `_app.jsx` by wrapping the apollo provider all around the app like moralis and Initialize it with TheGraph apis and keys, like how we did with Moralis Server.

8. Great!! Now we can update the index.jsx to query for events.