# Inventory Management System for Grocery Store
For the final project of the class Intro to Web Dev, I'll be working on building an Inventory Management system with very basic POS system for grocery store.

This Inverntory Management System will provide users with the features to add, update, remove and view items/products for a grocery store and the store admin will be able to view the products with low stock and expiry product date as well which will make them aware of their product inventory and can make re-purchase decisions.

Talking about the technology, HTML, CSS and JS will be used in the frontend and a simple C#(asp.net) api will be used to get the data from the backend. The data will be persisted in a simple .json file. Bootstrap will be used for making the styling more convenient.

This is a medium sized project where I'll be applying my knowledge of frontend development, api integration, and basic api creation.

# Features and Functionalities
## Core Features (Meeting Final Project Requirements)
- Product Management - Users can add, edit, delete, and search for grocery items.
- Basic POS - User can sell the product and the product quantity will be decreased.
- Category & Filter System - Products are categorized and can be filtered (e.g., Dairy, Fruits, Vegetables, Beverages, Snacks, Household Items).
- Low Stock & Expiry Alerts - Items with low stock or nearing expiration will be highlighted.
- Drag & Drop - Users can drag and drop products inorder to do bulk restocking, bulk updating the quantity. bulk sell
- Multi-page Navigation - The system will have Dashboard, Inventory List, Reports, and Settings pages.
- Network Requests to API - Fetch and update inventory data using a C# backend API.
- Local Storage & API Syncing - Store inventory changes locally before syncing with the API. Incase of the server being offline, the local storage will still be used and updated so the program won't stop from working.
- Shared Page Layout - A consistent header, footer, and navigation bar across all pages.

## Advanced (Hard Things for Extra Credit)
- C# API for Inventory Management 
- Host API on a Cloud Server (Azure or Vercel) 
- Use Local Storage to Sync Inventory Data 
- Host html/css/javascript site on a non github pages PaaS provider
- Responsive Mobile-first Design with Flexbox & Grid 
- Use a JavaScript Toolchain (TypeScript & SCSS)
- Using clipboard api for js
- Use a 3rd party javascript library for animation on scroll (AOS or GSAP)
- Use a css styling framework (Bootstrap)

# Project Breakdown Timeline

## April 02 (05%) - Initial Setup & Planning

- Set up basic folder structure (frontend, backend, assets, etc.).
- Initialize a basic HTML, CSS, and JavaScript structure.
- Create a starter API project in ASP.NET (C#) with basic endpoints.
- Do research for the UI/UX and comeup with an idea for the basic design system.

## April 05 (30%) - Basic UI & API Development

Users will be able to view a dashboard displaying grocery inventory.
Users will be able to add, edit, and delete products from inventory.

- Design Home, Dashboard, Inventory List Page (HTML & CSS).
- Implement basic navigation (header, footer, sidebar) across all pages.
- Set up a C# API with basic CRUD (Create, Read, Update, Delete) operations for inventory.
- Create fetch requests in JavaScript to communicate with the API.
- Implement basic inventory form (Add, Edit, Delete items) with client-side validation.

## April 09 (45%) - Interactive Features & API Integration

I will be connecting the frontend to a simple C# API.
Users will be ablt to filter inventory by categories.
Users will be able to view a low stock and expiry alert system.

- Implement category & filter system (e.g., Dairy, Fruits, Vegetables).
- Display low stock & expiry alerts dynamically.
- Implement Drag & Drop functionality for: Bulk restocking , Bulk updating quantity & Bulk selling

## April 12 (60%) - POS System & Advanced UI Features

Users will be able to process sales so that sold products are removed from inventory.
Users will be able to view reports on sales and stock levels.

- Implement Basic POS system (sell products, update quantity).
- Create Sales & Inventory Reports page with summarized data.
- Enhance UI with Bootstrap for styling and GSAP/AOS for animations.
- Use Clipboard API for quick copying of product details(Just an idea at this point).

## April 16 (75%) - Hosting & Final API Enhancements


The users will be able to access the website online.
The API will also be hosted so it works from anywhere.
The inventory data will be synced between local storage and the backend.

- Deploy Frontend on a PaaS provider (Vercel/Azure Static Web App).
- Host API on a cloud service (Azure, Vercel, or Heroku).
- Implement API syncing with local storage to ensure data persistence.
- Implement responsive design (mobile-first with Flexbox & Grid).
- Conduct user testing.

## April 19 (90%) - Final Testing, Refinements & Submission

- Conduct final debugging and fix issues from testing.
- Working on issues occured while in the middle of the project
- If some quick features seem very useful during the middle of the project, implement them here
