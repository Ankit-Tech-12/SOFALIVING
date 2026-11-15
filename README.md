# SOFALIVING – Custom Sofa Experience

SOFALIVING is a responsive sofa customisation website built with Next.js and React. It allows users to explore different sofa collections, customise their preferred sofa, select colours, fabrics and seating configurations, and view dynamically calculated prices.

The project focuses on providing a clean, modern and interactive shopping experience inspired by a Figma design.

## Features

### 1. Home Page
- Responsive navigation bar.
- Hero section with collection and customisation links.
- Featured sofa collection.
- Modern furniture-focused UI.

### 2. Sofa Collection
- Displays three sofa models:
  - Luna – ₹42,999
  - Urban – ₹54,999
  - Cloud – ₹64,999
- Product images and descriptions.
- Product tags and pricing.
- Customise buttons for individual sofa models.

### 3. Interactive Sofa Customiser
Users can personalise their sofa by selecting:

**Sofa Models**
- Luna
- Urban
- Cloud

**Colours**
- Beige
- Grey
- Blue
- Green
- Other model-specific colour options.

**Fabric Types**
- Linen – Included
- Velvet – Additional ₹5,000
- Leatherette – Additional ₹8,000

**Seating Configurations**
- 2 Seater – ₹7,000 discount
- 3 Seater – Included
- L Shape – Additional ₹18,000

Additional functionality:
- Dynamic price calculation.
- Selected configuration summary.
- Automatic colour adjustment when switching sofa models.
- Responsive customisation interface.

### 4. Craftsmanship Section
Highlights the quality and craftsmanship behind the sofa collection through feature cards and statistics.

### 5. Enquiry & Consultation Form
- Customer information form.
- Name, phone number, email and delivery location.
- Automatically synchronised sofa configuration.
- Optional special requirements.
- Complimentary fabric swatch selection.
- Form validation.
- Submission success message.

**Note:** The enquiry form currently uses frontend state only. It does not submit information to a backend or email service.

### 6. Responsive Design
Optimised for:
- Desktop
- Tablet
- Mobile devices

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js | React framework |
| React.js | UI development |
| JavaScript (ES6+) | Application logic |
| Tailwind CSS | Styling and responsive design |
| Lucide React | Icons |
| Next.js Image | Image optimisation component |
| React Hooks | State management |

## Project Structure

```text
sofaliving/
│
├── public/
│   └── images/
│
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.js
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── FeaturedSofas.jsx
│   │   ├── SofaCustomiser.jsx
│   │   ├── Craftsmanship.jsx
│   │   ├── EnquiryForm.jsx
│   │   └── Footer.jsx
│   │
│   └── data/
│       └── sofas.js
│
├── .gitignore
├── package.json
├── package-lock.json
├── next.config.mjs
├── postcss.config.mjs
└── README.md
```

## Getting Started

Follow these instructions to run the project locally.

### Prerequisites

- Node.js
- npm
- Git

### 1. Clone the Repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Navigate to the Project

```bash
cd sofaliving
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

### 5. Open in Browser

Visit:

```text
http://localhost:3000
```

## Dynamic Price Calculation

The total sofa price is calculated using three factors:

```text
Total Price = Base Sofa Price + Fabric Price + Seating Configuration Price
```

For example:

```text
Selected Sofa: Luna          ₹42,999
Selected Fabric: Velvet       ₹5,000
Configuration: L Shape       ₹18,000
-------------------------------------
Total Price                  ₹65,999
```

The price updates automatically whenever the user changes a selection.

## State Management

React's `useState` hook manages the selected sofa configuration.

The selection state is maintained in the main page component and shared with the customiser and enquiry form through props.

This approach allows the enquiry form to automatically display the latest sofa configuration without duplicating state.

## Future Improvements

- Add separate sofa images for each colour.
- Integrate backend APIs for enquiry submissions.
- Add email notifications for customer enquiries.
- Implement user authentication.
- Add a shopping cart and checkout functionality.
- Integrate a database to store customer enquiries.
- Add more sofa models and customisation options.

## Author

**Ankit Gupta**

Computer Engineering Student | Aspiring Full Stack Developer

---

*Built as a frontend development assignment using Next.js, React and Tailwind CSS.*