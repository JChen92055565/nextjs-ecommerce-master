
Fitness E-Commerce Full Stack Application:

Components Folder:
    Contains re-usable react components, renders UI elemnts and manages user interface. 

-Footer: 
    displays navigation links (home and cart), cart link, etc


Models Folder:
    Defines data structures/schema of orders and products. Exports these schema to a MongoDB database. 

Pages:
    app.js: Configures layout of the entire User Interface

    checkout.js:

    API folder:
        Defining serverless API routes, which handle HTTP requests and serve as endpoints for the frontend to interact with the backend.

        checkout.js: API route designed to handle checkout and payment processes.

        products.js: findAllProducts function queries database and retrieves products.
        
        webhooks.js: Handles webhook events from Stripe, receiving notifications about events related to payment processing.


