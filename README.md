# The Cube - Interactive Rubik's Cube Simulator

An immersive 3D Rubik's Cube simulator built with vanilla JavaScript that offers a realistic cube-solving experience in your browser.

## Features

- **Multiple Cube Sizes**: Play with 2x2, 3x3, 4x4, and 5x5 cubes
- **Intuitive Controls**: Smooth touch and mouse controls for natural cube manipulation
- **Performance Tracking**:
  - Timer with precision timing
  - Move counter
  - Best time records
- **Customization Options**:
  - Different flip animation types: Swift, Smooth, and Bounce
  - Adjustable scramble length
  - Camera perspective settings (Orthographic/Perspective)
- **Responsive Design**: Works on both desktop and mobile devices
- **Celebration Animation**: Special animation when you solve the cube
- **Vercel Deployment**: Configuration included for easy deployment to Vercel

## Installation

1. Clone the repository:
   ```powershell
   git clone https://github.com/yourusername/the-cube.git
   cd the-cube
   ```

2. Install dependencies:
   ```powershell
   npm install
   ```

3. Build the CSS from Sass:
   ```powershell
   npm run build
   ```

4. Start the server:
   ```powershell
   npm start
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Development

Run the development server with live Sass compilation:
```powershell
npm run dev
```

This will start both the Express server and the Sass watcher, automatically compiling style changes as you make them.

## Project Structure

```
the-cube/
  ├── src/              # Source files
  │   ├── index.html    # Main HTML structure
  │   ├── script.js     # Game logic and 3D rendering
  │   └── style.sass    # Styling (Sass format)
  └── dist/             # Compiled files (generated)
      ├── index.html    # HTML output
      ├── script.js     # JavaScript output
      └── style.css     # Compiled CSS
```

## Technologies Used

- **Vanilla JavaScript**: For game logic and animations
- **Sass**: For structured and maintainable CSS
- **Express.js**: For serving the application
- **Three.js** (integrated in script.js): For 3D rendering and manipulation

## Commands

- `npm start`: Start the Express server
- `npm run sass`: Start the Sass watcher (compiles Sass to CSS)
- `npm run build`: Build CSS from Sass files and copy necessary files to dist directory
- `npm run dev`: Run both server and Sass watcher simultaneously
- `npm run deploy`: Deploy the application to Vercel (requires Vercel CLI)

## Deployment on Vercel

This project is configured to deploy easily on Vercel:

1. Sign up for a Vercel account at [vercel.com](https://vercel.com) if you don't have one.

2. Install Vercel CLI:
   ```powershell
   npm install -g vercel
   ```

3. Login to Vercel:
   ```powershell
   vercel login
   ```

4. Deploy to Vercel:
   ```powershell
   vercel
   ```
   
   Follow the prompts in the CLI:
   - Select your Vercel account/team
   - Confirm the project name or enter a new one
   - Select "No" when asked if this is part of a larger project
   - The deployment will begin automatically

5. For production deployment:
   ```powershell
   vercel --prod
   ```

The project is already configured with a `vercel.json` file to handle the build process and routing.

### Vercel Configuration Details

The `vercel.json` file configures:
- Node.js server build process 
- Static file serving for the Cube assets
- Routing all requests to the Express server
- Automatic builds using the project's build script

## License

ISC License
