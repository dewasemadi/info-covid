export const isObject = (obj) => {
  return !!obj && Object.keys(obj).length > 0;
};

export const isFunction = (func) => {
  return !!func && typeof func === 'function' && func !== undefined;
};

export const isExist = (v) => {
  return (
    (typeof v === 'object' && Array.isArray(v) && v.length > 0) ||
    (v !== undefined && v !== null && v !== '' && !!v) ||
    (typeof v === 'object' && Object.keys(v).length > 0)
  );
};
