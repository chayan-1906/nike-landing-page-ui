# Nike Landing Page

### [Live Site (Vercel)](https://nike-landing-page.vercel.app/)

## Available Scripts

In the project directory, you can run:

### `npm run serve`

Runs the app in the development mode.
Open [http://localhost:4000](http://localhost:4000) to view it in the browser.

### `npm run build`

Builds the app for production to the `dist` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

## Dependencies

### Tailwind CSS - https://tailwindcss.com/docs/guides/vite
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    tailwind.config.js
      /** @type {import('tailwindcss').Config} */
      export default {
        content: [
          "./index.html",
          "./src/**/*.{js,ts,jsx,tsx}",
        ],
        theme: {
          extend: {},
        },
        plugins: [],
      }
    index.css
      @tailwind base;
      @tailwind components;
      @tailwind utilities;

### Preview (Web UI)
<table>
    <tr>
        <td><img src="https://github.com/chayan-1906/nike-landing-page-ui/assets/82430454/57f9a651-6a21-4b47-94bb-d3d3e5131f77" alt="Web UI" width="340px"></td>
    </tr>
</table>

### Preview (Mobile UI)
<table>
    <tr>
        <td><img src="" alt="Web UI" width="340px"></td>
    </tr>
</table>
