# Chatter Box

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

# UI/UX Take Home Exercise

## Instructions

Create a responsive single page app that is a simple conversation interface for a customer support agent. The interface will be used by an agent interacting over SMS or WhatsApp with a customer who is buying a product. The agent should be able to see new text messages, and respond in real-time directly to the customer's cell phone.

Think about the following before getting started, and document your thoughts before you start coding. 
* What front-end components are required? 
* How would you build the front-end? What back-end endpoints would you need? Assume that the backend API will be built by another developer, while you're building the front-end. Please mock the requests and responses from the backend API/service endpoints you will need.

This is intended to show your knowledge of Javascript (vanilla JS or any framework of your choice) & Styling technology, while also showing your grasp of UI/UX best practices.

Use the following guidelines when building the application:

  * Customer Details Component
    * Displays a list of Customer account details
  * Chat Interface Component
    * Allows a Customer Success agent to type and submit new messages (feel free to store it client side)
    * Please include at least 1 example of a user message as well since they won't actually be typing anything :)
  * Transaction History Component
    * Display a list of mock transactions from the Customer
    * Allows for client side filtering of the transaction history
  * Use whatever color scheme you want! Go nuts
  * App should respond to changes in screen width (responsive)
  * Bonus: Include at least one javascript test! (No worries if not, we can pair on it)

Spend time on both the UI/UX and the actual functionality of the app. This view should be as complete as possible without interacting with a backend data service, so look at stubbing out fake data.

Try to time box this exercise to take no longer than 4 hours (not including project setup, I reccomend Create React App to help make that easy). If you don't feel like you're able to finish within that timeframe, focus on making parts of the exercise great rather than submitting a project that's 80% complete across the board. This gives engineers an opportunity to explore what it's like to work with you while we're fleshing out the remaining work or expanding on it.

Also, please don't use this an an opportunity to learn a new framework - instead, use tools and technologies you are comfortable with so we can have an in-depth discussion about your decisions and approach. 

## Submission

Please copy this Gist and add it as part of a ReadMe.md to your repo, along with..

  * A link to source files or GitHub repo
  * A README file with instructions on how to run the project locally
  (Bonus: A link to a running version of the application)
  
Here are some visual examples, but assuming that you are in charge of making the design decisions.
* https://drive.google.com/file/d/1XsfR1N5kEe18R8XJNlWeRDtl4OB161pj/view?usp=sharing
* https://drive.google.com/file/d/1japTmbo8KDaTcHW8vUB9U03pFgh01qiO/view?usp=sharing


You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# Exercise Walk Through

## Initial Thoughts: 

* What front-end components are required? 
Specific components: Dashboard, Chat, Transaction History, Customer Details 
Reusable components: Panel with header, Edit Form and inputs, Chat input.

* How would you build the front-end? What back-end endpoints would you need? Assume that the backend API will be built by another developer, while you're building the front-end. Please mock the requests and responses from the backend API/service endpoints you will need.
Use React and start with create-react-app.
Choose a UI library for basic elements and something that can be used to be built onto. (ie. Blueprint.js, shards-ui or material)
Color and font constants. Choose a way to write styles: styled-components, css, sass etc.
Choose state management (ie. Redux, Apollo or Context Api) and real time data fetching system for chat (redux-saga or RxJS with socket.io, apollo graphQL with subscriptions)
Would need socket connection or subscription for chat stream. 
Would need a customer endpoint for details, a transaction endpoint for an array of transaction histories. Would expect to have a customer id to pass as a param to fetch the correct details and transactions.


To start the project I would build out a dashboard component as the main container and a nav section. In the dashboard component, determine and build an initial grid for the rest of the components to live in. This can be created via flexbox or css grid keeping in mind how the columns and rows will respond on a smaller screen. With the initial grid in place create a generic Panel component that will house basic padding and headers for the chat, transactions and details. 

## Customer Details:
Create a component to house a grid of customer details. Keep in mind that different customers might have certain fields but not others as it is likely not all fields will be required. Also would be good to think through enabling the detail fields to become editable within this component. I would explore adding a click to edit component as well as some generic form components with inline editing and possible inline validation.

## Transaction History:
Create a component to display a list of transactions. Will need to fetch a list of transactions. Create a single transaction row component with a title and description. Will need to be able to truncate large descriptions and titles. Should show full titles and description on click potentially a modal. Pagination should be considered and could be built out via a “view more” button to be actionable to refetch the next page of data. Also take into consideration a possible need for a  filter or sort component on the list of transactions.  (old -> new) (large transaction - > small transaction).

## Chat: 
Create a component to display a live chat. This component will need to subscribe to a stream of data to fetch data in real time. Data fetch will need to be displayed in chat bubbles and order based on timestamp. Also chat bubbles should be colored based on whether they belong to the user or the customer. An input component will need to be create in order for the user to respond. Things to consider for the future of this component are the possible need to add photos or large text snippets. 

