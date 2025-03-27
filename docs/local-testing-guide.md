# Local Testing Guide for Blush & Bloom Website

This guide provides instructions for testing your Blush & Bloom website locally before deploying to Netlify.

## Method 1: Direct Browser Opening (Simplest)

The simplest way to test your website locally is to open the HTML files directly in your browser.

1. **Open index.html in your browser**:
   - Navigate to your project folder in File Explorer/Finder
   - Right-click on `index.html` and select "Open with" your preferred browser
   - Or drag and drop the file into an open browser window

2. **Navigate through the site**:
   - Click on navigation links to move between pages
   - Test responsive design by resizing your browser window

**Limitations**:
- Some JavaScript features might not work correctly due to browser security restrictions
- Form submissions won't work as they require a server
- Relative paths might not resolve correctly in some cases

## Method 2: Using a Local HTTP Server (Recommended)

For a more accurate testing environment, use a local HTTP server.

### Option A: Using Python (if installed)

Python comes with a simple HTTP server:

1. **Open a terminal/command prompt**
2. **Navigate to your project directory**:
   ```
   cd /path/to/blush-and-bloom
   ```
3. **Start the server**:
   - For Python 3:
     ```
     python -m http.server
     ```
   - For Python 2:
     ```
     python -m SimpleHTTPServer
     ```
4. **Access your website**:
   - Open your browser and go to `http://localhost:8000`

### Option B: Using Node.js

If you have Node.js installed:

1. **Install http-server globally**:
   ```
   npm install -g http-server
   ```
2. **Navigate to your project directory**:
   ```
   cd /path/to/blush-and-bloom
   ```
3. **Start the server**:
   ```
   http-server
   ```
4. **Access your website**:
   - Open your browser and go to `http://localhost:8080`

### Option C: Using VS Code Live Server Extension

If you're using Visual Studio Code:

1. **Install the Live Server extension**:
   - Go to Extensions (Ctrl+Shift+X or Cmd+Shift+X)
   - Search for "Live Server" by Ritwick Dey
   - Click Install

2. **Start Live Server**:
   - Right-click on `index.html` in the VS Code explorer
   - Select "Open with Live Server"
   - Your default browser will open automatically with the site

3. **Benefits of Live Server**:
   - Auto-refreshes when you save changes to files
   - Works well with relative paths
   - Provides a proper HTTP server environment

## Testing Forms Locally

Netlify Forms requires deployment to Netlify to fully function. However, you can still test form validation locally:

1. **Form Validation**:
   - Fill out the forms with valid and invalid data
   - Check that validation errors appear appropriately
   - Verify required fields are enforced

2. **Form Submission Simulation**:
   - When using a local server, the form will attempt to submit to `/success.html`
   - You'll be redirected to the success page, but no data will be captured
   - This confirms the form submission flow works, even though data isn't stored

## Testing Responsive Design

1. **Browser Developer Tools**:
   - Open Developer Tools (F12 or Right-click > Inspect)
   - Click the device toggle icon (usually in the top bar)
   - Select different device presets or set custom dimensions

2. **Test Key Breakpoints**:
   - Extra Small: Below 576px (mobile phones)
   - Small: 576px to 767px (large phones, small tablets)
   - Medium: 768px to 991px (tablets)
   - Large: 992px to 1199px (desktops)
   - Extra Large: 1200px and above (large desktops)

## Testing Interactive Elements

1. **Navigation**:
   - Test the mobile menu toggle
   - Verify all navigation links work
   - Check smooth scrolling on internal page links

2. **Portfolio Filtering**:
   - Test category filters on the portfolio page
   - Verify images load correctly
   - Test modal windows for portfolio items

3. **FAQ Accordions**:
   - Click on FAQ questions to expand/collapse answers
   - Verify only one answer is expanded at a time

4. **Form Interactions**:
   - Test file upload previews
   - Verify form validation messages
   - Check form reset functionality

## Preparing for Netlify Deployment

After testing locally, when you're ready to deploy to Netlify:

1. **Ensure all files are saved**
2. **Commit changes to Git** (if using version control)
3. **Deploy to Netlify** using one of these methods:
   - Drag and drop your project folder to Netlify's dashboard
   - Connect your Git repository for continuous deployment
   - Use Netlify CLI for command-line deployment

4. **After deployment**:
   - Test the live forms on your Netlify site
   - Check the Forms section in your Netlify dashboard to confirm submissions are being received

## Troubleshooting Local Testing

- **Broken Links**: Ensure all links use relative paths correctly
- **Missing Styles/Scripts**: Check that file paths are correct and files are in the right locations
- **CORS Issues**: Some features might be blocked due to Cross-Origin restrictions when testing locally
- **Form Issues**: Remember that Netlify Forms only works fully when deployed to Netlify

By testing thoroughly locally before deployment, you can catch most issues and ensure a smooth experience when you go live with your site.
