function getObjectDiff(last, current) {
  const diff = Object.keys(last).reduce((result, key) => {
    if (!current.hasOwnProperty(key)) {
      result.push(key);
    } else if (_.isEqual(last[key], current[key])) {
      const resultKeyIndex = result.indexOf(key);
      result.splice(resultKeyIndex, 1);
    }
    return result;
  }, Object.keys(current));

  return diff;
}


