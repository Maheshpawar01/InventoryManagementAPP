# 📦 Inventory Management System 

This project is a full-stack inventory management system designed to streamline and simplify the process of tracking products, managing sales, and generating insightful reports. It provides a user-friendly interface for managing product information, processing sales transactions, and gaining valuable insights into sales performance. The system addresses the need for efficient inventory control, accurate sales tracking, and data-driven decision-making.


📸 **Screenshots**


🚀 **Key Features**

*   **Product Management:** Easily add, update, and delete products with details like name, price, stock, and category.
*   **Real-time Inventory Tracking:** Monitor stock levels and identify low-stock items to prevent shortages.
*   **Sales Processing:** Record sales transactions and automatically update product stock.
*   **Sales Reporting:** Generate comprehensive sales reports, including total sales, total quantity sold, and best-selling products.
*   **User Authentication:** Secure user login to protect sensitive data (basic implementation for demonstration purposes).
*   **Search and Filtering:** Quickly find products using search and category filters.
*   **Intuitive UI:** User-friendly interface for easy navigation and efficient data management.
*   **Modal for Selling:** Dedicated modal for selling products, ensuring accurate stock updates.

🛠️ **Tech Stack**

*   **Frontend:**
    *   React: JavaScript library for building user interfaces.
    *   Vite: Build tool for fast and efficient development.
    *   Tailwind CSS: Utility-first CSS framework for styling.
    *   Axios: HTTP client for making API requests.
*   **Backend:**
    *   Node.js: JavaScript runtime environment.
    *   Express: Web application framework for Node.js.
    *   Mongoose: MongoDB object modeling tool for Node.js.
    *   cors: Middleware for enabling Cross-Origin Resource Sharing (CORS).
*   **Database:**
    *   MongoDB: NoSQL database for storing product and sales data.
*   **Development Tools:**
    *   TypeScript: Superset of JavaScript that adds static typing.

📦 **Getting Started**

### Prerequisites

*   Node.js (>=16)
*   npm or yarn
*   MongoDB installed and running

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd inventory-management-system
    ```

2.  **Install server dependencies:**

    ```bash
    cd server
    npm install  # or yarn install
    ```

3.  **Install client dependencies:**

    ```bash
    cd ../client
    npm install  # or yarn install
    ```

4.  **Configure environment variables:**

    *   Create a `.env` file in the `server` directory.
    *   Add the following environment variables:

        ```
        MONGODB_URI=mongodb://localhost:27017/inventory_app
        PORT=5000
        ```

        *   You can replace `mongodb://localhost:27017/inventory_app` with your MongoDB connection string.

5.  **Start MongoDB:**
    Ensure your MongoDB server is running. If you have installed MongoDB locally with the default settings, it should be running on `mongodb://localhost:27017`.

### Running Locally

1.  **Start the backend server:**

    ```bash
    cd server
    npm run dev # or yarn dev
    ```

    This will start the server on port 5000 (or the port specified in your `.env` file).

2.  **Start the frontend development server:**

    ```bash
    cd ../client
    npm run dev # or yarn dev
    ```

    This will start the React development server, typically on port 3000.

3.  **Access the application:**
    Open your web browser and navigate to `http://localhost:3000` to access the Inventory Management System.

📂 **Project Structure**

```
inventory-management-system/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ProductList.tsx
│   │   │   ├── ProductForm.tsx
│   │   │   ├── SalesReport.tsx
│   │   │   ├── Login.tsx
│   │   │   ├── SellModal.tsx
│   │   ├── api.ts
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   ├── index.css
│   │   ├── types.ts
│   ├── public/
│   ├── vite.config.ts
│   ├── index.html
│   ├── ...
├── server/
│   ├── src/
│   │   ├── models/
│   │   │   ├── Product.ts
│   │   │   ├── Sale.ts
│   │   ├── routes/
│   │   │   ├── products.ts
│   │   │   ├── sales.ts
│   │   ├── index.ts
│   ├── tsconfig.json
│   ├── package.json
│   ├── ...
├── README.md
├── package.json
├── .gitignore
├── ...
```

📬 **Contact**

If you have any questions or suggestions, feel free to contact me at maheshp5447@gmail.com.

💖 **Thanks Message**

Thank you for checking out this project! I hope it helps you manage your inventory more efficiently. Your feedback and contributions are highly appreciated!
