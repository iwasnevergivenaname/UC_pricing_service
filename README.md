# price estimation service
takes in data {pickup, dropoff} and returns a price estimation based on current time and crude oil prices

### endpoints
GET /estimate - expects pickup and dropoff locations in body, returns price estimation
GET /estimate/health - health check <br>

### stack
express<br>
[oil price api](https://docs.oilpriceapi.com/)