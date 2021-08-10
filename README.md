# price estimation service
takes in data {pickup, dropoff} and returns a price estimation based on current time and crude oil prices

### endpoints
GET /estimate - health check <br>
POST /estimate - expects pickup and dropoff locations in body, returns price estimation

### stack
express<br>
[oil price api](https://docs.oilpriceapi.com/)