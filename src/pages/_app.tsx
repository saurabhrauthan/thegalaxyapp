import AdminLayout from "@/components/layouts/AdminLayout";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import React from "react";
import Head from "next/head";
import "../pages/admin.css"

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  // Determine the layout based on the route
  const getLayout = () => {
    if (router.pathname.startsWith("/admin")) {
      return (<>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"></link>
      </Head>
        <AdminLayout>
          <Component {...pageProps} />
        </AdminLayout>
        </>
      );
    }
    return <Component {...pageProps} />;
  };

  return getLayout();
};

export default MyApp;
