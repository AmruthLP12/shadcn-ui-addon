import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Performance | Minimal Docs Site',
  description: 'Learn about performance optimization in our library',
}

export default function Performance() {
  return (
    <main className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Performance</h1>
      <p className="text-xl mb-4">
        Optimizing performance is crucial for creating responsive and efficient applications. This section covers various techniques and best practices for improving the performance of your projects using our library.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Lazy Loading</h2>
      <p className="mb-4">
        Implement lazy loading for components and modules to reduce initial load times and improve perceived performance.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Code Splitting</h2>
      <p className="mb-4">
        Utilize code splitting techniques to break your application into smaller chunks, loading only what's necessary for each route or component.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Memoization</h2>
      <p className="mb-4">
        Use memoization techniques like React.memo and useMemo to prevent unnecessary re-renders and optimize component performance.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Virtual Lists</h2>
      <p className="mb-4">
        Implement virtual lists for rendering large datasets efficiently, improving scroll performance and reducing memory usage.
      </p>
    </main>
  )
}

