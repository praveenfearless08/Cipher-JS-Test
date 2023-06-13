exports.getCurrentDateTime = function () {
  const currentDateTime = new Date();
  return currentDateTime.toISOString();
};
