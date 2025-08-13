# Modern Login & Signup Application

A beautiful, responsive React application featuring modern login and signup pages with a sophisticated design system.

## Features

### Login Page
- **Centered Layout**: Clean, centered design with dark teal gradient background
- **Input Fields**: Username field with left user icon, password field with right lock icon
- **Modern Styling**: Rounded rectangles with glassmorphism effects
- **Responsive Design**: Optimized for all device sizes

### Signup Page
- **Two-Column Layout**: Left panel with abstract background and branding text, right panel with form
- **Comprehensive Form**: First name, last name, email, password, and terms acceptance
- **OAuth Integration**: Google and Apple signup options
- **Professional Design**: Clean white background with proper spacing and typography

## Design System

### Color Palette
- **Primary Colors**: 
  - Black: `#000000`
  - White: `#FFFFFF`
  - Dark Teal: `#022B32`
  - Dark Blue: `#0A1E28`
- **Accent Colors**:
  - Input Background: `#2F4C52`
  - Placeholder Text: `#9CAAB0`
  - Form Borders: `#E0E0E0`
  - Google Blue: `#4285F4`

### Typography
- **Headers**: Montserrat Bold (28px) / Poppins Bold (26px)
- **Body Text**: Roboto Regular (16px)
- **Buttons**: Montserrat Bold, Uppercase (18px)

### Layout & Spacing
- **Form Width**: 300-400px max
- **Border Radius**: 24px for inputs, 8px for buttons
- **Spacing**: 20px between elements, 40px container padding

## Accessibility Features
- High contrast text for WCAG AA compliance
- Clear icon indicators for form fields
- Large touch targets for buttons
- Proper ARIA labels and semantic HTML
- Keyboard navigation support

## Responsive Design
- **Mobile**: Stacked layout with optimized spacing
- **Tablet**: Maintains two-column layout with scaled elements
- **Desktop**: Fixed max-width forms with proper aspect ratios

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd login-2
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/
│   ├── LoginPage.js          # Login page component
│   ├── LoginPage.css         # Login page styles
│   ├── SignupPage.js         # Signup page component
│   └── SignupPage.css        # Signup page styles
├── App.js                    # Main app component with routing
├── App.css                   # Global app styles
├── index.js                  # Application entry point
└── index.css                 # Global styles and CSS reset
```

## Technologies Used

- **React 18** - Modern React with hooks
- **React Router** - Client-side routing
- **Lucide React** - Beautiful, customizable icons
- **CSS3** - Modern CSS with custom properties and flexbox/grid
- **Google Fonts** - Montserrat, Poppins, and Roboto

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspiration from modern UI/UX trends
- Icons provided by Lucide React
- Fonts from Google Fonts
- Built with Create React App 