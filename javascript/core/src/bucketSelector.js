(function () {
  'use strict';

  function intFromDigestedBytes(digested) {
    return new DataView(digested).getInt32(0);
  }

  function padAndHash(digest, spread) {
    return function (buckets, content) {
      var selected = [];
      var bucketId;
      var copy = new Int8Array(content.byteLength + 1);
      copy.set(new Int8Array(content));
      for (var i = 0; i < spread; i++) {
        copy[copy.length - 1] = i;
        bucketId = intFromDigestedBytes(digest(copy.buffer)) % buckets;
        if (bucketId < 0) {
          bucketId += buckets;
        }
        selected.push(bucketId);
      }
      return selected;
    };
  }

  module.exports = {
    padAndHash: padAndHash
  };
})();