"use client";

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { Highlight, themes } from "prism-react-renderer";

import CopyToClipboard from "react-copy-to-clipboard";

interface CodePreviewProps {
  preview: React.ReactNode;
  code: string;
}

export function CodePreview({ preview, code }: CodePreviewProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mx-auto w-full max-w-[90%] lg:max-w-[1200px]">
      <Tabs defaultValue="preview" className="relative mt-6 w-full">
        <div className="flex items-center justify-between pb-3">
          <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
            <TabsTrigger
              value="preview"
              className="relative rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
            >
              Preview
            </TabsTrigger>
            <TabsTrigger
              value="code"
              className="relative rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
            >
              Code
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="preview" className="relative rounded-md border">
          <div className="flex justify-center items-center p-6">{preview}</div>
        </TabsContent>
        <TabsContent value="code">
          <div className="relative">
            <Highlight theme={themes.shadesOfPurple} code={code} language="tsx">
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-muted p-4 w-full">
                  {tokens.map((line, i) => (
                    <div key={i} {...getLineProps({ line, key: i })}>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
            <CopyToClipboard text={code} onCopy={handleCopy}>
              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 opacity-50 hover:opacity-100"
              >
                {copied ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4 opacity-50 hover:opacity-100" />
                )}
              </Button>
            </CopyToClipboard>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

