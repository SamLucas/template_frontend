import React, { useEffect, useState } from "react";

import LoadingPage from "src/middlewares/loading";

export default function Autenticate({ Page }) {
  const { loading, setLoading } = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);

  return loading ? <LoadingPage /> : <Page />;
}
