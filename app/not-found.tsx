import ButtonGooey from "@/app/components/ButtonGooey";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container relative min-h-[calc(100vh-5rem)] px-4 sm:px-5 py-12 md:py-16 lg:py-20 flex flex-col items-center justify-center text-center">
      <span className="text-sm sm:text-base text-primary mb-4">404 Error</span>
      
      <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium mb-4 sm:mb-6">
        Page not found
      </h1>
      
      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg mb-8 sm:mb-10">
        Sorry, we couldn't find the page you're looking for. Perhaps you've mistyped the URL? 
        Be sure to check your spelling.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        <Link href="/">
          <ButtonGooey>
            Go to Homepage
          </ButtonGooey>
        </Link>
        <Link href="/contact">
          <ButtonGooey>
            Contact Support
          </ButtonGooey>
        </Link>
      </div>
    </main>
  );
} 