# Country Select React App

This is a simple React application that features:

- A select input for choosing a country.
- Keyboard shortcut toggling (e.g., Ctrl + Enter to focus the select input, and arrow keys to navigate).
- Data fetched from a GraphQL API ([countries.trevorblades.com](https://countries.trevorblades.com/)).
- A Console Log button to log the selected country's name and code.

---

## Features

- 🚀 GraphQL API integration using Apollo Client.
- 🎯 Keyboard navigation to focus/select country without using the mouse.
- 🖱️ Console Log button to easily see the selected country in DevTools.

---

## Demo

Select a country using your keyboard or mouse.  
Press the button to log your selected country in the browser console.

---

## Technologies

- [React](https://reactjs.org/)
- [Apollo Client](https://www.apollographql.com/docs/react/)
- [GraphQL](https://graphql.org/)
- [Tailwind CSS](https://tailwindcss.com/) (for basic styling)

---

## Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/guitarbuju/countriesGraphQl.git
    cd countriesGraphQl
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the development server:**

    ```bash
    npm run dev
    ```

---

## Usage

1. **Focus the select input** by pressing `Ctrl + Enter`.
2. **Navigate** through the countries using the `↑` and `↓` arrow keys.
3. **Select** a country by pressing `Enter`.
4. **Log the selected country** by clicking the **Console Log** button (check your DevTools console).

---

## GraphQL Query Example

```graphql
query GetCountries {
  countries {
    code
    name
    emoji
  }
}
