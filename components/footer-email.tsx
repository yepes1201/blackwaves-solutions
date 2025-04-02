"use client";

// Hooks
import { useToast } from "@/hooks/use-toast";

// Components
import { Toaster } from "./ui/toaster";
import { Copy } from "lucide-react";

export function ContactInfo() {
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText("contacto@blackwaves.io");
    toast({
      title: "Copiado",
      description: "Email copiado al portapapeles",
      duration: 2000,
      variant: "default",
    });
  };

  return (
    <>
      <Toaster />
      <p
        onClick={handleCopy}
        className="text-muted-foreground hover:underline cursor-pointer flex gap-2 items-center"
      >
        <Copy className="h-4 w-4" /> contacto@blackwaves.io
      </p>
    </>
  );
}
