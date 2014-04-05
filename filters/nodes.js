function (doc, req) {
  if (doc._deleted) {
    return true;
  }
  if (doc.type && (doc.type == 'node' || doc.type == 'node_no_loc')) {
    return true;
  } else {
    return false;
  }
}
