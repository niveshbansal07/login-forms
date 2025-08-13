# Login & Signup Pages

A pixel-perfect, responsive implementation of login and signup pages with exact design specifications.

## Features

### Login Page
- **Background**: Dark teal gradient (#022B32 to #09363E)
- **Title**: "USER LOGIN" in Montserrat Bold, 28px, uppercase, white, centered
- **Input Fields**: 
  - Username field with left-aligned user icon
  - Password field with right-aligned lock icon
  - Rounded rectangles (#2F4C52, border-radius 24px, height 48px)
  - Placeholder text in #9CAAB0, Roboto Regular 16px
- **Login Button**: White background, black "LOGIN" text, Montserrat Bold 18px, full width
- **Spacing**: 20px between elements
- **Layout**: Centered both vertically and horizontally

### Signup Page
- **Two-column layout**: Full-height background image on left, white form on right
- **Left Column**: 
  - Background image from Unsplash
  - Overlay gradient from transparent to #022B32
  - "Create your Account" title (Montserrat Bold, 26px, white)
  - "Share your artwork and Get projects!" subtitle (Roboto Regular, 16px, white)
  - Vertically centered with 40px left padding
- **Right Column**: 
  - White background with 16px outer corner radius
  - "Sign Up" title (Montserrat Bold, 26px, black, centered)
  - Input fields: First name, Last name, Email, Password
  - Checkbox for Terms & Conditions
  - Primary button: Black background, "Join us →" text
  - Divider with "or" text
  - Google and Apple signup buttons with respective icons
- **Responsive**: Stacks vertically on screens under 768px

## Technical Specifications

### Colors
- Primary: #022B32, #09363E (gradient)
- Secondary: #2F4C52 (input backgrounds)
- Accent: #9CAAB0 (placeholder text)
- White: #FFFFFF
- Black: #000000
- Border: #E0E0E0

### Typography
- **Font Stack**: 'Montserrat', 'Poppins', 'Roboto', sans-serif
- **Weights**: 400 (Regular), 500 (Medium), 700 (Bold)
- **Sizes**: 14px, 16px, 18px, 22px, 24px, 26px, 28px

### Layout
- **Flexbox/Grid**: Used for responsive layouts
- **Spacing**: 15-20px between form elements
- **Border Radius**: 8px for inputs, 16px for containers, 24px for login inputs
- **Responsive Breakpoints**: 768px (tablet), 480px (mobile)

### Icons
- **SVG Icons**: User, lock, Google G, Apple logo
- **High-DPI**: Optimized for crisp rendering on all devices
- **External Sources**: Google and Apple logos from Wikimedia Commons

## File Structure
```
login-2-/
├── index.html          # Main HTML file with both pages
├── styles.css          # Complete CSS styling
└── README.md           # Project documentation
```

## Usage

1. Open `index.html` in a web browser
2. The login page will be displayed by default
3. Click "Sign up" to switch to the signup page
4. Click "Log in" to return to the login page
5. Both pages are fully responsive and will adapt to different screen sizes

## Browser Support

- Modern browsers with CSS Grid and Flexbox support
- Responsive design works on all device sizes
- High-DPI displays supported with crisp icon rendering

## Dependencies

- Google Fonts: Montserrat, Poppins, Roboto
- External images: Unsplash background, Wikimedia Commons icons
- No JavaScript frameworks required
- Pure HTML, CSS, and minimal vanilla JavaScript for page switching
