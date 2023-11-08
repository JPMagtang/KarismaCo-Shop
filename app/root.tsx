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

import loaderStyle from "~/styles/loader.css";
import navigationStyle from "~/styles/navigation.css";
import transitionStyle from "~/styles/transition.css"

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: navigationStyle },
  { rel: "stylesheet", href: loaderStyle },
  { rel: "stylesheet", href: transitionStyle }
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
