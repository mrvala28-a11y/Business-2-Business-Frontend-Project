# MR.VALA - B2B Women Garment Manufacturing Platform

## Project Overview
- **Project Name**: MR.VALA B2B Platform
- **Type**: Full-stack MERN Web Application
- **Core Functionality**: Wholesale garment manufacturing B2B platform with dealer management, admin controls, and production tracking
- **Target Users**: Garment dealers, wholesale buyers, admin staff

## Technology Stack
- Frontend: React (Vite), Tailwind CSS, Framer Motion
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT
- Additional: WhatsApp API, PDF generation

## Current Status
- Landing page components exist (Hero, Process, Benefits, CTA, Footer, Navbar, Stats, Designs)
- Need to build: Backend, Dealer Panel, Admin Panel, Authentication

## Implementation Plan

### Phase 1: Backend Setup
- [ ] Set up Node.js + Express server
- [ ] Configure MongoDB connection
- [ ] Create database schemas (User, Product, Design, Order, Notification)
- [ ] Implement JWT authentication
- [ ] Create API routes

### Phase 2: Frontend - Authentication
- [ ] Login page
- [ ] Register page (Dealer registration with admin approval)
- [ ] Role-based routing (Dealer vs Admin)

### Phase 3: Dealer Panel
- [ ] Dashboard with stats
- [ ] Profile management
- [ ] Custom design upload
- [ ] Product catalog
- [ ] Cart system
- [ ] Bulk order placement
- [ ] Order tracking with timeline
- [ ] Invoice download
- [ ] Payment status

### Phase 4: Admin Panel
- [ ] Analytics dashboard
- [ ] Dealer approval system
- [ ] Design approval/rejection
- [ ] Product management
- [ ] Stock management
- [ ] Order management
- [ ] Production stage updates
- [ ] Payment management
- [ ] Notification broadcast

### Phase 5: Special Features
- [ ] WhatsApp API integration
- [ ] Invoice PDF generation
- [ ] Dealer credit system
- [ ] Bulk discount logic
- [ ] Low stock alerts

## Database Schemas

### User Schema
```
javascript
{
  name: String,
  email: String (unique),
  password: String,
  role: String (enum: ['admin', 'dealer']),
  companyName: String,
  phone: String,
  address: String,
  approved: Boolean (default: false for dealers),
  creditLimit: Number,
  createdAt: Date
}
```

### Product Schema
```
javascript
{
  name: String,
  category: String,
  basePrice: Number,
  stock: Number,
  minOrderQuantity: Number,
  images: [String],
  description: String,
  dealerPrices: Map (dealerId -> customPrice),
  createdAt: Date
}
```

### Design Schema
```
javascript
{
  dealerId: ObjectId (ref: User),
  title: String,
  description: String,
  imageUrl: String,
  status: String (enum: ['pending', 'approved', 'rejected']),
  adminNotes: String,
  createdAt: Date
}
```

### Order Schema
```
javascript
{
  orderId: String (unique),
  dealerId: ObjectId (ref: User),
  items: [{
    productId: ObjectId,
    quantity: Number,
    unitPrice: Number,
    totalPrice: Number
  }],
  totalAmount: Number,
  totalQuantity: Number,
  producedQuantity: Number,
  dispatchedQuantity: Number,
  remainingQuantity: Number,
  productionStage: String (enum: ['Pending', 'Cutting', 'Stitching', 'Checking', 'Press', 'Packing', 'Dispatch', 'Delivered']),
  status: String,
  paymentStatus: String,
  shippingAddress: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Notification Schema
```
javascript
{
  userId: ObjectId (ref: User),
  title: String,
  message: String,
  type: String,
  read: Boolean,
  createdAt: Date
}
```

## API Endpoints

### Auth
- POST /api/auth/register
- POST /api/auth/login
- GET /api/auth/me
- PUT /api/auth/profile

### Products
- GET /api/products
- GET /api/products/:id
- POST /api/products (admin)
- PUT /api/products/:id (admin)
- DELETE /api/products/:id (admin)

### Designs
- GET /api/designs (dealer: own, admin: all)
- POST /api/designs (dealer upload)
- PUT /api/designs/:id (admin approve/reject)

### Orders
- GET /api/orders (dealer: own, admin: all)
- POST /api/orders
- PUT /api/orders/:id/status (admin)
- PUT /api/orders/:id/production-stage (admin)
- GET /api/orders/:id/invoice

### Admin
- GET /api/admin/dealers
- PUT /api/admin/dealers/:id/approve
- GET /api/admin/analytics
- POST /api/admin/notify

## UI/UX Requirements

### Landing Page (Existing)
- ✅ Modern animated design
- ✅ Dark theme with gradient accents
- ✅ Grid overlay effects
- ✅ Component sections: Hero, Process, Benefits, CTA, Footer, Navbar, Stats, Designs

### Dealer Panel
- Dark dashboard theme
- Sidebar navigation
- Smooth transitions
- Card-based layout
- Animated charts
- Production stage timeline with badges

### Admin Panel
- Enterprise SaaS dashboard style
- Analytics charts
- Clean professional look

## Current Priority
1. Complete the intro/landing page (check if all components are working)
2. Build the backend API
3. Add authentication
4. Build dealer panel
5. Build admin panel
