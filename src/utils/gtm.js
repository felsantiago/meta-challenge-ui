const push = (value) => window && window.dataLayer && window.dataLayer.push(value);

const GTMPageView = (url) => {
  const pageEvent = {
    event: 'pageview',
    page: url
  };

  push(pageEvent);
  return pageEvent;
};

export default GTMPageView;
