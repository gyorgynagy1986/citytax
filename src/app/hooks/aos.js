"use client"

import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const useAos = (options) => {
  useEffect(() => {
    Aos.init(options);
    // Cleanup function to reset AOS when components using this hook unmount
    return () => Aos.refresh();
  }, [options]); // Only re-run if options change
};

export default useAos;