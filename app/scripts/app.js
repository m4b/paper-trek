(function (document) {
  'use strict';

  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function() {
    document.querySelector('body').removeAttribute('unresolved');
  });
    console.log('WebComponentsReady');

})(document);
