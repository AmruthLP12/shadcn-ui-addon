import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Security | Minimal Docs Site',
  description: 'Learn about security best practices in our library',
}

export default function Security() {
  return (
    <main className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Security</h1>
      <p className="text-xl mb-4">
        Ensuring the security of your application is paramount. This section covers essential security practices and features provided by our library to help you build secure applications.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Input Validation</h2>
      <p className="mb-4">
        Learn how to properly validate and sanitize user inputs to prevent common security vulnerabilities such as XSS and SQL injection attacks.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Authentication</h2>
      <p className="mb-4">
        Explore our authentication modules and best practices for implementing secure user authentication in your applications.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Authorization</h2>
      <p className="mb-4">
        Understand how to implement proper authorization checks to ensure users can only access the resources they're permitted to.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Data Encryption</h2>
      <p className="mb-4">
        Learn about data encryption techniques and how to use our library's built-in encryption features to protect sensitive information.
      </p>
    </main>
  )
}

