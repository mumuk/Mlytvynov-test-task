# Task: Create a Single Page Application with React and TypeScript using Vite

## Objective:
Develop a SPA consisting of two main components, **Items** and **Comments**. 


## Components:
### 1. Items (Left Component):
- **Sub-component Form:** A text input "name" and an "Add new" button.
- **Sub-component List:** Displays Items added through the form.
- **Sub-component Item Elements:** Consist of name, comment count, and a "Delete" button.
- **Interaction:** On clicking an Item, it gets highlighted, and its comments are displayed in the Comments component.

### 2. Comments (Right Component):
- **Sub-component Form:** Contains a "comment" text input, a color input, and an "Add new" button.
- **Sub-component List:** Displays Comments added through the form, associated with the selected Item.
- **Comment Elements:** Consist of comment text, a colored square div, and a "Delete" button.


### API Requests:
1. **GET /items**
2. **POST /items**
3. **DELETE /items/:id**
4. **PUT /items/:id**

### State Management:
- Utilizing Redux Toolkit (RTK) for managing state.

### Styling:
- Using native CSS for styling.

### Project bundler:
- Using Vite for bundling.

### Project launch using npm scripts for launching the project.
- npm run dev - Runs the project in development mode.
- npm run serve - Runs the backend server.

### Notes:
## The task can be approached in several ways:

# First Approach: 
Add an Items array to the root element and operate 
on it by passing props and methods through props-drilling or context.

# Second Approach:
Using Redux: Using Redux for state management.
For self-development, the second approach with RTK is chosen. 
Additionally, json-server is integrated to simulate a full-fledged backend interaction.