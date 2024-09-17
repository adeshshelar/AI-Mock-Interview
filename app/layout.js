import {Inter} from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"]});

export const metadata = {
  title: "QuickMock",
  description: "AI-powered platform that helps users practice mock interviews, providing instant feedback and personalized insights.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
       <html lang="en" style={{background: "linear-gradient(115deg, #ffffff, #d4dfed)"}}>
          <body className={inter.className} >
            <Toaster />
            {children}
          </body>
       </html>
    </ClerkProvider>
   
  );
}
