import { useQuery, gql } from "@apollo/client"

// gql = GraphQL syntax to get the ActiveItem data.
// NOTE \\ To get it correct, you can build the syntax, first in Subgraph studio's Playground
// REVIEW \\ "where: buyer" means from where to start listening and since 0x00 is default address for starting point / When no one is owner. So, It's obvious that we will be staring from 1st item in the list.
const GET_ACTIVE_ITEMS = gql`
    {
        activeItems(first: 5, where: { buyer: "0x0000000000000000000000000000000000000000" }) {
            id
            buyer
            seller
            nftAddress
            tokenId
            price
        }
    }
`

// NOW We can use the above query with "useQuery" hook
export default function GraphExample() {
    const { loading, error, data } = useQuery(GET_ACTIVE_ITEMS)
    console.log(data)
    return <div>HI from GarphExample</div>
}
