const isValidMobile = function (value) {
    if (typeof value === "string" && /^[0-9]\d{9}$/gi.test(value)) return true;
    return false;
  };