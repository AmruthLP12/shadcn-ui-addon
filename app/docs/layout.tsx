import '../(root)/globals.css'
import { Inter } from 'next/font/google'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'
import { Navbar } from '@/components/navbar'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'shadcn-ui/addons',
  description: 'Enhance your UI with powerful addons for shadcn-ui, designed to extend functionality and streamline your development workflow.',
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SidebarProvider>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <div className="flex flex-1">
                <AppSidebar />
                <main className="flex-1 overflow-auto p-8 pt-20">
                  <SidebarTrigger className="mb-4" />
                  {children}
                </main>
              </div>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

