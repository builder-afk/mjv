import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader, SiteFooter } from "../components/site-chrome";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--paper)] text-[var(--ink)]">
      <SiteHeader />
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-lg text-center space-y-6">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--signal-red)] flex items-center justify-center gap-2">
            <span className="h-1.5 w-1.5 bg-[var(--signal-red)]" />
            Page Not Found
          </div>
          <h1 className="font-display text-[8rem] md:text-[12rem] font-bold leading-none tracking-tighter text-[var(--ink)]">
            404
          </h1>
          <p className="font-mono text-sm text-[var(--ink-muted)] uppercase tracking-wider">
            This page could not be found.
          </p>
          <Link to="/" className="brutal-btn-primary mx-auto">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--signal-red)]" />
            Return to Home →
          </Link>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: any; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--paper)] text-[var(--ink)] px-6">
      <div className="max-w-lg text-center space-y-6">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--signal-red)] flex items-center justify-center gap-2">
          <span className="h-1.5 w-1.5 bg-[var(--signal-red)]" />
          System Error
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-[var(--ink)]">
          Something didn't load.
        </h1>
        <p className="font-mono text-sm text-[var(--ink-muted)] uppercase tracking-wider">
          Try refreshing or return home.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <button onClick={() => { router.invalidate(); reset(); }} className="brutal-btn-primary">
            Retry
          </button>
          <a href="/" className="brutal-btn">
            Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Mount Judi Ventures | Growth Capital & SEBI AIF for Decisive Founders" },
      { name: "description", content: "MJV is a SEBI-registered venture capital fund investing ₹2 Cr to ₹25 Cr in India's category leaders across deeptech, healthcare, logistics, and enterprise." },
      { name: "author", content: "Mount Judi Ventures" },
      { property: "og:site_name", content: "Mount Judi Ventures" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Mount Judi Ventures | Growth Capital & SEBI AIF for Decisive Founders" },
      { name: "twitter:title", content: "Mount Judi Ventures | Growth Capital & SEBI AIF for Decisive Founders" },
      { property: "og:description", content: "MJV is a SEBI-approved venture capital firm partnering with ambitious founders solving meaningful problems across healthcare, AI, deeptech, consumer, logistics, and enterprise." },
      { name: "twitter:description", content: "MJV is a SEBI-approved venture capital firm partnering with ambitious founders solving meaningful problems across healthcare, AI, deeptech, consumer, logistics, and enterprise." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/4f51bd93-ce74-4e34-9ec1-3ef6cd1c98cd" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/4f51bd93-ce74-4e34-9ec1-3ef6cd1c98cd" },
    ],
    links: [
      { rel: "icon", href: "/mount-judi-emblem.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/mount-judi-emblem.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Space+Grotesk:wght@300;400;500;600;700&family=Fjalla+One&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,600;1,9..144,400&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col overflow-x-hidden">
        <SiteHeader />
        <main className="flex-1 overflow-x-hidden">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
