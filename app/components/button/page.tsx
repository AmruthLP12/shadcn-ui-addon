"use client";

import { CodePreview } from "@/components/CodePreview";
import ButtonOne from "@/components/ButtonPre";

const codeExample = `import React from 'react';
import { LoadingButton } from '@/components/ui/loading-button';

const LoadingButtonDemo = () => {
  return <LoadingButton loading>loading button</LoadingButton>;
};

export default LoadingButtonDemo;`;

export default function ComponentDocsPage() {
  return (
    <div className="container mx-auto flex flex-col items-center py-10 px-4 space-y-12">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          A Simple Button.
        </h1>
        <p className="text-lg text-muted-foreground">
          A simple Button using shadcn ui Button Element. Still under development.
        </p>
      </header>

      <main className="w-full max-w-[90%] lg:max-w-[1200px] space-y-10">
        <CodePreview
          preview={<div><ButtonOne/></div>}
          code={codeExample}
        />

        <section id="installation" className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
            Installation
          </h2>
          <p>Installation instructions go here.</p>
        </section>

        <section id="usage" className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
            Usage
          </h2>
          <p>Usage instructions go here.</p>
        </section>

        <section id="examples" className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight border-b pb-2">
            Examples
          </h2>
          <CodePreview
            preview={<div>Example Preview</div>}
            code="// Example code goes here"
          />
        </section>
      </main>
    </div>
  );
}

