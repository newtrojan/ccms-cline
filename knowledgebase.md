# Claims Management System (CMS) Knowledge Base

## System Overview

The CMS is a full-stack application designed to manage insurance claims, with separate frontend and backend components:

- Frontend (CCMS): React + TypeScript + Vite application
- Backend (cms-backend): Express.js + Prisma + Supabase application

## Architecture

### Frontend Architecture

1. **Technology Stack**

   - React 18.3
   - TypeScript
   - Vite
   - Tailwind CSS
   - React Router DOM
   - React Hook Form
   - Zod (validation)

2. **Key Components**

   - MainLayout: Base layout with sidebar and header
   - Claims Management:
     - ClaimsTable: Display claims in tabular format
     - PartsTab: Manage parts and labor
     - AnnexesTab: Handle document uploads
     - ClaimInfoTab: Manage claim details

3. **Features**
   - Global search functionality
   - File upload capabilities
   - Status tracking
   - Parts management
   - Financial calculations
   - Document management

### Backend Architecture

1. **Technology Stack**

   - Express.js
   - Prisma (ORM)
   - Supabase (Authentication & Storage)
   - PostgreSQL (Database)
   - Swagger (API Documentation)
   - Sentry (Error Tracking)

2. **Key Features**
   - JWT Authentication
   - Role-based access control
   - API Documentation
   - Error tracking and monitoring
   - Database migrations
   - File storage

## Database Schema

### Key Entities

1. **User**

   - Basic user information
   - Role-based access
   - Authentication details

2. **Claim**

   - Claim details
   - Status tracking
   - Vehicle information
   - Financial information

3. **Parts**

   - Part information
   - Pricing details
   - Claim association

4. **Documents**
   - File metadata
   - Storage information
   - Claim association

## Security Features

1. **Authentication**

   - JWT-based authentication
   - Supabase integration
   - Role-based access control

2. **User Roles** `typescript
enum UserRole {
  USER = "USER",     // Web user
  CCA = "CCA",       // Call Centre Agent
  CCM = "CCM",       // Call Centre Manager
  ADMIN = "ADMIN",   // Administrator
  SUDO = "SUDO"      // Super Admin
}   `

## Key Features

### 1. Claims Management

- Create and track claims
- Status updates
- Document attachments
- Financial calculations

### 2. Parts Management

- NAGS parts integration
- Custom parts
- Labor costs
- Price calculations

### 3. Document Management

- File uploads
- Document categorization
- Preview capabilities
- Storage management

### 4. Financial Tracking

- Cost calculations
- Tax management
- Deductible handling
- Shop invoice processing

## Development Guidelines

1. **Code Style**

   - TypeScript for type safety
   - ESLint configuration
   - Prettier formatting
   - Component-based architecture

2. **Best Practices**

   - Error handling
   - Loading states
   - Accessibility
   - Responsive design
   - Type safety

3. **Testing**
   - Unit testing setup
   - Integration testing
   - Error boundary testing

## Deployment

1. **Prerequisites**

   - Node.js 18.x or higher
   - PostgreSQL database
   - Supabase project
   - Sentry account

2. **Environment Variables**
   - Database configuration
   - Supabase credentials
   - Sentry DSN
   - API endpoints

## Future Considerations

1. **Planned Features**

   - Enhanced form validation
   - Advanced search functionality
   - Automated tax calculations
   - Document preview
   - Part price history
   - Audit trail implementation

2. **Technical Improvements**
   - State management implementation
   - Performance optimizations
   - Enhanced error handling
   - API documentation expansion

## Support and Maintenance

1. **Error Tracking**

   - Sentry integration
   - Error logging
   - Performance monitoring

2. **Documentation**
   - API documentation
   - Component documentation
   - Setup guides
   - User manuals
