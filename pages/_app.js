import React from "react";
import Head from "next/head";
import "./global.css";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Metaversus</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <style jsx global>
        {`
          body {
            cursor: url('/cursor.svg'), auto; 
          }
        `}
      </style>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
