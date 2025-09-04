# Egy Safary - Port Said Tourism Platform

## Overview

Egy Safary is a Gen-Z targeted premium tourism platform for Port Said, Egypt. The application serves as a comprehensive travel planning and exploration platform that emphasizes safety, authenticity, and personalized experiences. Built with modern web technologies, it features a vibrant design system with Gen-Z inspired blues and accent colors, focusing on trust and premium user experiences.

The platform provides trip planning tools, partner business discovery, package booking, and safety-first tourism services. It's designed to be the definitive guide for exploring Port Said with verified local partners and authentic experiences.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Library**: Custom component system built on Radix UI primitives with shadcn/ui design patterns
- **Styling**: Tailwind CSS with extensive custom design system featuring Gen-Z color palette
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation through Hookform resolvers

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **API Design**: RESTful APIs with /api prefix convention
- **Development Setup**: Custom Vite integration for development with HMR support
- **Middleware**: Custom logging, JSON parsing, and error handling middleware

### Data Storage
- **Database**: PostgreSQL configured through Drizzle ORM
- **Schema Management**: Drizzle Kit for migrations and schema generation
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Development Storage**: In-memory storage implementation for development/testing
- **Type Safety**: Full TypeScript integration with Drizzle and Zod schema validation

### Design System
- **Typography**: Plus Jakarta Sans for headings, Inter for body text with Arabic fallback support
- **Color Palette**: Custom Gen-Z inspired blue primary colors with gold, teal, lilac, and pink accents
- **Component Architecture**: Modular component system with consistent spacing, shadows, and glass morphism effects
- **Responsive Design**: Mobile-first approach with desktop, tablet, and mobile breakpoints
- **Accessibility**: WCAG AA+ contrast ratios and semantic HTML structure

### Authentication & Authorization
- **Session Management**: PostgreSQL session store with connect-pg-simple
- **User Schema**: Basic user model with username/password authentication
- **Security**: Prepared for production security implementations

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL connection for Neon Database
- **drizzle-orm**: Type-safe database ORM with PostgreSQL dialect
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight React router

### UI & Design Dependencies
- **@radix-ui/***: Complete suite of accessible UI primitives (accordion, dialog, dropdown-menu, etc.)
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant API for component styling
- **lucide-react**: Consistent icon library with 2px stroke width

### Development & Build Tools
- **vite**: Fast build tool and development server
- **typescript**: Type safety and enhanced developer experience
- **esbuild**: Fast JavaScript bundler for production builds
- **@replit/vite-plugin-runtime-error-modal**: Enhanced error reporting in Replit environment
- **@replit/vite-plugin-cartographer**: Development tooling for Replit integration

### Validation & Forms
- **zod**: Runtime type validation and schema definition
- **@hookform/resolvers**: React Hook Form integration with Zod validation
- **react-hook-form**: Performant form library with minimal re-renders

### Additional Features
- **date-fns**: Date manipulation and formatting
- **embla-carousel-react**: Touch-friendly carousel component
- **cmdk**: Command palette and search interface
- **connect-pg-simple**: PostgreSQL session storage for Express sessions

The application is configured for deployment on Replit with custom development tooling and error handling, while maintaining production-ready architecture patterns for potential migration to other hosting platforms.