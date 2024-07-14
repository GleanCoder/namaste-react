Topics I learned in this episode:-

👉Exploring Content Delivery Networks (CDNs) and came to know why we uses CDNs in Web Development. A CDN, or Content Delivery Network, is a system of distributed servers that deliver web content and resources to users based on their geographic location. By caching content closer to end-users, a CDN improves website load times, reduces latency, and enhances the overall user experience.

👉Since we know that React is a library, so we can add React CDN links to our HTML page and use React wherever needed without creating an entire React project. Even for a small portion of our page.

👉Create Element and Nested HTML structure using a React Method called React.createElement().It is used to define what should be rendered on the screen. It has 3 Parameters.

➡️Parameters of React.createElement(type,{props},[...Children])
=> Type: The type of HTML element (for e.g., "div", "section")
=> props: An object containing the properties (attributes) we want to set on the element like Class, Id, etc. its optional
=>children: It can be children elements that will be nested inside the created element or can be a simple String.

👉ReactDOM.createRoot(container). container is the DOM element where the React application should be mounted. This is the Typically <div> element with id container.

👉Understanding the Render Property: it's a crucial aspect of React and react.render(container) is used to render a React element into the specified container DOM node
➡️NOTE: Everything we write in container is override by the render method.

👉 Primary Conclusions:

🌟Content Delivery Network (CDN): It facilitates efficient with two script files: React and ReactDOM
🌟React.createElement() used to create element what we want to show on the browser.
🌟ReactDOM.createRoot() is used to target the DOM element where we want to show the React elements or components.
🌟Render Property: It is used to show the elements in DOM using react.render()
