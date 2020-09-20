import React, { Component, Fragment } from 'react'
import RestaurantCard from './RestaurantCard'

class RestaurantList extends Component {
    render() {
        //const cardsToRender = this.fetchAllRestaurants()
        const cardsToRenderTest = [
            {
              id: '1',
              Name : 'Behrouz',
              description: 'Prisma turns your database into a GraphQL API 😎',
              url: 'https://www.prismagraphql.com',
            },
            {
              id: '2',
              Name : 'Biryani Palace',
              description: 'The best GraphQL client',
              url: 'https://www.apollographql.com/docs/react/',
            },
          ]
          return (
            <div class= "container py-5">
            {cardsToRenderTest.map((restaurant, index) => (
                <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
                />
            ))}
            </div> 
          )
    }
}
export default RestaurantList
