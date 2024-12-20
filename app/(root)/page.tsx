import { Button } from "@/components/ui/button";
import { BlocksIcon, Github } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { SiShadcnui } from "react-icons/si";

export const metadata: Metadata = {
  title: "Welcome Page",
  description: "Welcome to shadcn-addons page",
};

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-[30rem] bg-background text-foreground">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold">Welcome to ShadCN UI Addons</h1>
        <p className="text-lg">
          Enhance your UI with powerful addons for ShadCN-UI, designed to extend
          functionality and streamline your development workflow.
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          Copy-paste components with ease and leverage the power of open-source
          for your next big project.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mt-6">
          {/* Button 1: Get Started */}
          <Button asChild>
            <Link href="/docs" className="flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium text-lg rounded-lg hover:bg-primary/90 transition">
              <BlocksIcon className="mr-2 text-2xl" />
              Get Started
            </Link>
          </Button>
          {/* Button 2: ShadCN */}
          <Button asChild>
            <Link href="https://ui.shadcn.com/" target="_blank" rel="noopener noreferrer" className="flex items-center px-6 py-3 bg-secondary text-secondary-foreground font-medium text-lg rounded-lg hover:bg-secondary/80 transition">
              <SiShadcnui className="mr-2 text-2xl" />
              ShadCN
            </Link>
          </Button>
          {/* Button 3: GitHub */}
          <Button asChild>
            <Link href="https://github.com/AmruthLP12/shadcn-ui-addon" target="_blank" rel="noopener noreferrer" className="flex items-center px-6 py-3 bg-black hover:text-black text-white font-medium text-lg rounded-lg hover:bg-gray-900 transition">
              <Github className="mr-2 text-2xl" />
              GitHub
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
