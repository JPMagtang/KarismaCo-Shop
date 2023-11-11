import type { LinksFunction } from "@remix-run/node";
import { useState, useEffect, useRef } from 'react';
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  useLocation
} from "@remix-run/react";
import { SwitchTransition, CSSTransition } from 'react-transition-group';

import AnimatedOutlet from "./components/AnimatedOutlet";
import Layout from "./components/Layout";
import Loader from "./components/Loader";

import faviconURL from "./assets/logo.png";
import styleLoader from "~/styles/loader.css";
import styleGlobal from "~/styles/global.css";
// import styleNavigation from "~/styles/navigation.css";
import styleTailwind from "../styles/tailwind.css";
import styleTransition from "~/styles/transition.css";

export const links: LinksFunction = () => [
  { rel: "icon", href:`${faviconURL}`, type: "image/png" },
  { rel: "stylesheet", href: styleLoader },
  { rel: "stylesheet", href: styleGlobal },
  // { rel: "stylesheet", href: styleNavigation },
  { rel: "stylesheet", href: styleTailwind },
  { rel: "stylesheet", href: styleTransition }
];

function Document({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}

export default function App() {

  const location = useLocation()
  const nodeRef = useRef(null)

  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    },3000);
  }, []);

  return (
    <Document>
      {isLoading ? <Loader /> : (<Layout>
        <SwitchTransition>
          {/* Make this transition a glitch effect. */}
          <CSSTransition
            key={location.pathname}
            timeout={300}
            nodeRef={nodeRef}
            classNames="fade"
          >
            <div ref={nodeRef} className="transition-all">
              <AnimatedOutlet />
            </div>
          </CSSTransition>
        </SwitchTransition>
      </Layout>)}
    </Document>
  );
}
