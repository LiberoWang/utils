function tirmObject(obj) {
  const result = [];
  for (const key in obj) {
    const value = obj[key];
    if (value !== undefined && value !== null) {
      result[key] = value;
    }
  }

  return result;
}