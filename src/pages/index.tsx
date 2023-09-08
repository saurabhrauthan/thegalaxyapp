import { useRouter } from "next/router";
import { useEffect } from "react";

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the admin page when accessing the root URL
    router.push("/admin");
  }, [router]);

  return null;
};

export default Index;
