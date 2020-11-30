export const sliceResult = (data, pageNumber = 1, size = 10) => {
  return data.length && data.slice((pageNumber - 1) * size, pageNumber * size);
}

export const searchResult = (data, searchField, searchValue) => {
  return data.filter(
    item => item[searchField].toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
  );
}

export const range = (from, to) => {
  const range = [];

  while (from <= to) {
    range.push(from);
    from++
  }
  return range;
}

export const debounce = (func, wait) => {
  let timeout;

  return (...args) => {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};