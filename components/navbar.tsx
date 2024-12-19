'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'
import { Github, Moon, Sun, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { useRouter } from 'next/navigation'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

const searchItems = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Getting Started',
    url: '/getting-started',
  },
  {
    title: 'Components',
    url: '/components',
  },
  {
    title: 'API Reference',
    url: '/api-reference',
  },
]

export function Navbar() {
  const { setTheme, theme } = useTheme()
  const [open, setOpen] = React.useState(false)
  const router = useRouter()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  return (
    <header className="fixed top-0 left-2 right-2 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between gap-5">
        <div className="justify-between flex gap-6">
          
        <div className="text-lg font-bold">Amruth</div>
        <div className="text-lg font-bold">Docs</div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search documentation..."
              className="w-64 pl-8 pr-12"
              onClick={() => setOpen(true)}
              readOnly
            />
            <kbd className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 transform rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
              <span className="text-xs">⌘</span>K
            </kbd>
          </div>
          <Button variant="ghost" size="icon" aria-label="GitHub">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Theme"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle Theme</span>
          </Button>
          <CommandDialog open={open} onOpenChange={setOpen}>
            <VisuallyHidden>
              <h2>Search documentation</h2>
            </VisuallyHidden>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                {searchItems.map((item) => (
                  <CommandItem
                    key={item.url}
                    onSelect={() => runCommand(() => router.push(item.url))}
                  >
                    {item.title}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </CommandDialog>
        </div>
      </div>
    </header>
  )
}

