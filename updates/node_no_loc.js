function (doc, req) {
  var newdoc = JSON.parse(req.body);
  if (newdoc.type != 'node_no_loc') {
    return [null, 'Error: type != node_no_loc'];
  }
  if (doc) {
    newdoc._id = doc._id;
    newdoc._rev = doc._rev;
  }
  if (!newdoc._id && req.id) {
    newdoc._id = req.id;
  }

  var date = (new Date()).toISOString();
  newdoc.ctime = doc ? doc.ctime : date;
  newdoc.mtime = date;

  return [newdoc, 'doc updated'];
}
