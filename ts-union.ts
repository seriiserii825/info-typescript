function logId(id: Number | String | Boolean) {
  console.log(id, "id");
  switch (typeof id) {
    case "number":
      id.toFixed(2);
      break;
    case "string":
      id.toLowerCase();
      break;
    default:
      console.log(id);
      break;
  }
}

logId(4);
logId("some");
logId(true);

// check for array
function logError(error: string | string[]) {
  if (Array.isArray(error)) {
    error.find((item) => item === "some");
  } else {
    error.toUpperCase();
  }
}

// object
function logObject(obj: { a: number } | { b: number }) {
  if ("a" in obj) {
    console.log(obj.a, "obj.a");
  } else {
    console.log(obj.b, "obj.b");
  }
}
