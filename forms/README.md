# Sign In / Login    Page

This documentation provides an overview of the key components and concepts used in the Sign In (Login) Page of our Angular application.

## ReactiveForms

ReactiveForms are utilized for capturing and handling user input. Here's how they work:

1. A `FormGroup` is created to represent a form that consists of input fields.
2. User data is collected through this form using the ReactiveForms approach.
3. Upon a specific event (e.g., form submission or a button click), the collected data is sent to the component TypeScript file.
4. This approach is a robust and recommended way to handle form data, providing a seamless connection between the template and component.

## HttpClient

The `HttpClient` module is employed for making HTTP requests to external resources or APIs. Here's an overview of how it's integrated:

1. HTTP requests are typically made within a dedicated service.
2. This service uses the Angular `HttpClient` to create and send HTTP requests.
3. Observables are used to manage asynchronous data streams, and the `subscribe` method is employed to process the responses.
4. This ensures efficient and non-blocking handling of HTTP requests and responses.

## Json-Server

In our application, we utilize a JSON Server as a fake API for making requests. Here's how it's used:

1. JSON Server acts as a mock API, allowing us to simulate interactions with a real API without the need for a backend server.
2. It's particularly useful during development and testing phases to ensure our application behaves as expected with different data scenarios.
3. JSON Server provides a simple way to define and serve JSON data over HTTP.
4. We configure endpoints and data using a JSON file, and the server responds to HTTP requests accordingly.
5. This approach enables us to test our frontend components with various data responses and HTTP status codes, improving the robustness of our application.

By using JSON Server, we can efficiently develop and test our application without relying on a real backend API during the development process.


## Angular Material

Angular Material is a design system for Angular applications that provides pre-built UI components. Here's its role in our application:

1. Angular Material components are utilized to create a cohesive and user-friendly interface.
2. These components offer a consistent design and behavior, enhancing the user experience.
3. They save development time and effort by providing ready-to-use building blocks for the application's UI.

This documentation serves as a high-level overview of the Sign In | Login Page in our Angular application. For more detailed information and code examples, please refer to the respective source code and documentation files.
