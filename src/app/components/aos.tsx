"use client";

import { useEffect } from "react";

function Aos() {
  useEffect(() => {
    import("aos").then((AOS) =>
      AOS.init({
        duration: 1200,
      })
    );
  }, []);

  return <></>;
}

export default Aos;
