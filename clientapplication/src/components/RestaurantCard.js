import React, {Component} from 'react'

class RestaurantCard extends Component {
    render() {
        return (
          <div class="card">
            <div class="card-body">
                <div class = "card-title">
                    {this.props.restaurant.Name}
                </div>
                <div class="card-text"> 
                    {this.props.restaurant.description} 
                </div>
            </div>
          </div>
        )
      }
}

export default RestaurantCard