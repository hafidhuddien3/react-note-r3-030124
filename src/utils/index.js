const showFormattedDate = (date,locale) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return locale === 'id' ?
  new Date(date).toLocaleDateString('id-ID', options)
  : new Date(date).toLocaleDateString('en', options);

};

export { showFormattedDate };
