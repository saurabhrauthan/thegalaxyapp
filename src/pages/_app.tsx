import AdminLayout from "@/components/layouts/AdminLayout";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import React from "react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  // Determine the layout based on the route
  const getLayout = () => {
    if (router.pathname.startsWith("/admin")) {
      return (
        <AdminLayout>
          <Component {...pageProps} />
        </AdminLayout>
      );
    }
    return <Component {...pageProps} />;
  };

  return getLayout();
};

export default MyApp;
