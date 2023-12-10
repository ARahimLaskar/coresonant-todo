# React Todo App Documentation

## Overview

<p>This documentation provides an overview of the React Currency Information App, detailing its functionality, features, technologies used, and deployment process.</p>

## Project Description

<p>The React Todo App is a task management web application built using React. Upon initial rendering, the app fetches task data from an external API. The fetched data is stored in the browser's localStorage to ensure persistence across sessions. During the fetching process, a loading component is displayed to indicate the pending status, while an error component handles any rejected states that might occur.</p>

<p>Users can add new tasks using a modal that appears upon clicking the "Add Task" button. This modal allows users to input a task name and select its status (complete or incomplete) using a dropdown menu. Additionally, the app provides a filtering option allowing users to view either completed or incomplete tasks.</p>

<p>Each task is displayed individually, showing the task name, status toggle checkbox, an edit button, and a delete button. Clicking the checkbox toggles the task's status between completed and incomplete. The edit button opens an edit modal where users can modify the existing task details, and the delete button triggers a confirmation modal to ensure the deletion action.</p>

## Technologies Used

<ul>
<li>React: Front-end library for building user interfaces.</li>
<li>CSS: Styling the components and layout.</li>
<li>React Toolkit: Simplifies Redux state management.</li>
<li>Axios: HTTP client for making API requests.</li>
<li>React-Loading: Library for displaying loading indicators.</li>
<li>GitHub: Version control and code repository.</li>
<li>Netlify: Deployment platform for hosting the application.</li>
</ul>

## Features

<ul>
<h2>Initial Data Fetching</h2>
<li>On initial render, the app fetches task data from an external API.</li>
<li>Stores the fetched data in the localStorage for persistence.</li>
<h2>Loading and Error Handling</h2>
<li>Displays a loading component during data fetching.</li>
<li>Handles rejected states with an error component for a seamless user experience.</li>
<h2>Task Management</h2>
<li>Allows users to add new tasks via a modal input form.</li>
<li>Provides a filter option to view completed or incomplete tasks separately.</li>
<li>Displays all tasks with task name, status toggle checkbox, edit, and delete buttons.</li>
<h2>Task Modification</h2>
<li>Users can toggle the status of a task between completed and incomplete using a checkbox.</li>
<li>Edit button opens an edit modal for modifying existing task details.</li>
<li>Delete button triggers a confirmation modal before deleting a task.</li>
<h2>Deployment</h2>
<li>The React Todo App is deployed using Netlify for hosting the application.</li>
<h2>To run the application locally:</h2>
<li>Clone the GitHub repository containing the React Currency Information App.</li>
<li>Install dependencies using `npm install`.</li>
<li>Start the development server with `npm run dev`.</li>
<li>Access the application via the provided localhost address.</li>
</ul>

## Deployed link:

https://arl-coresonant-todo.netlify.app/
