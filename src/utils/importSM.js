const importSM = async () => {
    if (window.ScrollMagic) {
      return Promise.resolve(window.ScrollMagic);
    } else {
      const module = await import("scrollmagic").then((sm) => {
        window.ScrollMagic = sm.default;
        return sm.default;
      });
      return module;
    }
  };

  export default importSM