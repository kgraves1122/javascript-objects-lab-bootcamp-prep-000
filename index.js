var recipes = {};

function updateObjectWithKeyAndValue (object,key, value) {
  object[key] = value;
  return object;
}

function updateObjectWithKeyAndValue (object, key, value) {
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndVlaue (object, key, value) {
  return Object.assign(object, {[key]:value});
}