# Student Store Project

Selling merchandise in the modern era requires digital solutions. For this project, you'll be tasked with designing and constructing an online student store for the College of CodePath. The web app consists of a frontend user interface for potential customers to browse available goods and a backend API to handle data management. The API will be built with Node and Express, and the UI will be built with React.

Check out our [deployed Student Store](https://codepath-student-store-demo.surge.sh/) for reference! Explore the exemplar by trying the following tasks:

- Click on the different categories (clothing, food, etc.) to filter the list of products.
- Search for an existing product.
- Search for a product that doesn't exist.
- Add several products to the shopping cart.
- Checkout and view the final receipt.

## _Week 2_ Application Features

### Core Features

- [x] The website displays header, banner, search, product grid, about, contact, and footer section.
- [x] The website displays the products at the [GET /store endpoint](https://codepath-store-api.herokuapp.com/store) on initial page load.
- [x] Users can click on a category (clothing, food, etc.) to filter the product grid by type.
- [x] Users can search for products.
- [x] User can click on a product in the grid to navigate to a new page containing additional product details.

### Stretch Features

- [x] Users can click to expand the shopping cart in the left navigation.
- [x] Users can click the '+' button on a product cart to increment that product in the shopping cart.
- [x] Users can click the '-' button on a product cart to decrement that product in the shopping cart.
- [x] The shopping cart displays a table of products, quantities, subtotal, tax, and total.
- [] Your choice! (Replace this bullet explaining what you implemented. Example: Users can leave ratings for products they have purchased.)

<a href="https://www.loom.com/share/8faaab16859543428de3d69e5585124d">
    <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/8faaab16859543428de3d69e5585124d-with-play.gif">
  </a>

<div style="position: relative; padding-bottom: 55.208333333333336%; height: 0;"><iframe src="https://www.loom.com/embed/8faaab16859543428de3d69e5585124d?sid=050330b9-c00d-45d1-b3a2-32661098744d" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

Video Walkthrough:
https://www.loom.com/share/8faaab16859543428de3d69e5585124d?sid=64c8838a-d4f0-4a4b-8549-49516d8eb046

## _Week 3_ Application Features

### Core Features

<a "https://www.loom.com/share/09cc0d5e20af4102a8c39c577bae2ca9">

<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/09cc0d5e20af4102a8c39c577bae2ca9?sid=344ad604-4e8e-4af6-8e59-010d565c5c03" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

- [x] User can click to expand the shopping cart in the left navigation.
- [x] Users can click the '+' button on a product cart to increment that product in the shopping cart.
- [x] Users can click the '-' button on a product cart to decrement that product in the shopping cart. If the count is zero, the product should be removed from the cart.
- [x] The shopping cart displays a table of products, quantities, subtotal, tax, and total.
- [x] Users can checkout, and receive a receipt confirming their purchase.

### Stretch Features

- [x] Create an endpoint for fetching all orders in the database and an endpoint for serving an individual order based on its ID.
- [x] Build a page in the UI that displays the list of all past orders. The user should be able to click on any individual order to take them to a more detailed page of the transaction.
- [ ] Allow users to use an input to filter orders by the email of the person who placed the order.
- [ ] Your choice! (Replace this bullet explaining what you implemented. Example: Users can create a wish list of products they are interested in but not yet ready to purchase.)
