import React from "react";
import { BackgroundOverlayCard } from "@/components/card/BackgroundOverlayCard";
import { WobbleCard } from "@/components/card/WobbleCard";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 dark:bg-gray-900">
        <BackgroundOverlayCard
          title="Dynamic Background Card"
          description="Hover over this card to see the background change!"
          defaultBackground="https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
          hoverBackground="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif"
          className="max-w-md"
        />
      </div>
      <WobbleCard
        title="Wobble Card"
        description="Interactive 3D card with wobble effect"
        imageUrl="/placeholder.svg?height=450&width=350"
        content={
          <p className="text-sm">
            This card demonstrates a full wobble effect inspired by Aceternity
            UI. It uses Framer Motion for smooth animations and 3D
            transformations. Hover over the card and move your mouse to see the
            effect in action.
          </p>
        }
        footer={
          <Button variant="outline" className="w-full">
            Learn More
          </Button>
        }
      />
    </>
  );
}
