# Best Practices for AI-Generated React, Next.js, and Tailwind Code

## General Code Generation Guidelines

1. **Start with clear architecture**
   - Begin by outlining the component structure
   - Define data flow patterns before writing code
   - Separate concerns between pages, components, and utilities

2. **Provide complete, runnable solutions**
   - Include all imports at the top of files
   - Ensure the code can run without additional modifications
   - Provide proper exports for all components and functions

3. **Include essential error handling**
   - Add try/catch blocks for async operations
   - Provide graceful fallbacks for loading and error states
   - Handle edge cases explicitly

4. **Add meaningful comments**
   - Explain complex logic or algorithms
   - Document props and their purposes
   - Note any assumptions or limitations

5. **Format code consistently**
   - Follow standard React/Next.js conventions
   - Use consistent indentation and spacing
   - Group related code blocks logically

## React-Specific Best Practices

1. **Component structure**
   - Use functional components with hooks
   - Create small, focused components with single responsibilities
   - Implement prop validation with PropTypes or TypeScript

2. **State management**
   - Use React hooks appropriately (useState, useEffect, useContext, etc.)
   - Avoid prop drilling with Context API for deeper state sharing
   - Consider when to use local state vs. global state

3. **Performance optimization**
   - Implement useMemo and useCallback for expensive calculations
   - Use React.memo for components that render often with the same props
   - Avoid unnecessary re-renders with proper dependency arrays

4. **Hooks implementation**
   - Follow hooks rules (only call at top level, only call in React functions)
   - Create custom hooks for reusable logic
   - Keep hook dependencies accurate and minimal

## Next.js-Specific Best Practices

1. **Routing and navigation**
   - Use the App Router for newer projects or Pages Router where appropriate
   - Implement dynamic routes correctly with proper params handling
   - Use Link components for client-side navigation

2. **Data fetching strategies**
   - Use appropriate data fetching methods (getServerSideProps, getStaticProps, SWR/React Query)
   - Implement ISR (Incremental Static Regeneration) when appropriate
   - Handle loading and error states for all data fetching operations

3. **Layout and page structure**
   - Implement layouts consistently using layout components
   - Use metadata API for SEO optimization
   - Structure pages according to Next.js conventions

4. **API Routes**
   - Organize API routes logically by feature/resource
   - Implement proper request validation and error handling
   - Use appropriate HTTP methods and status codes

## Tailwind CSS Best Practices

1. **Class organization**
   - Group related classes (layout, spacing, typography, etc.)
   - Use consistent ordering of utility classes
   - Extract common patterns to custom component classes when appropriate

2. **Responsive design**
   - Implement mobile-first approach consistently
   - Use breakpoint prefixes logically (sm:, md:, lg:, xl:)
   - Test designs across multiple viewport sizes

3. **Custom configuration**
   - Extend the theme appropriately through tailwind.config.js
   - Create custom utility classes only when necessary
   - Maintain consistency with the design system

4. **Performance and maintainability**
   - Use @apply for repeating class patterns in CSS
   - Create component abstractions for frequent UI patterns
   - Use Tailwind's JIT mode for optimal performance

## Project Structure and Organization

1. **File organization**
   - Group files by feature or type based on project size
   - Use consistent naming conventions (PascalCase for components, camelCase for utilities)
   - Separate UI components from business logic

2. **Maintainable imports**
   - Use absolute imports with path aliases
   - Group and order imports consistently
   - Create barrel exports where appropriate

3. **Environment and configuration**
   - Handle environment variables properly
   - Create configuration files for different environments
   - Document required environment setup

## Documentation Guidelines

1. **Code documentation**
   - Document complex functions with JSDoc
   - Explain component props and return values
   - Note any side effects or dependencies

2. **Usage examples**
   - Provide example usage for components
   - Include prop variations and edge cases
   - Show integration examples for complex components

3. **Implementation notes**
   - Document any workarounds or limitations
   - Explain design decisions and trade-offs
   - Note areas for potential improvement
