interface Window {
    ElfsightApps?: {
      init: () => void;
      destroyApp: (element: HTMLElement | null) => void;
    };
  }
  