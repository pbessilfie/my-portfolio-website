import { useEffect } from "react";

const BASE = "Essilfie Prince Bondzie | Frontend Engineer";

const usePageTitle = (page) => {
  useEffect(() => {
    document.title = page ? `${page} — ${BASE}` : BASE;
    return () => {
      document.title = BASE;
    };
  }, [page]);
};

export default usePageTitle;
