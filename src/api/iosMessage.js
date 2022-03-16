function iosinfoClean (val) {
  console.log('iosinfoClean')
  // Call to Android App
  if (window.cellimedi) window.cellimedi.register()
  // Call to  IOS App
  else if ((window['webkit']) && (window['webkit'].messageHandlers) && ((window['webkit'].messageHandlers.cellimedi))) window['webkit'].messageHandlers.cellimedi.postMessage(val)
}

function iosinfoClean2 (val) {
  console.log('deleteInfo')
  // Call to Android App
  if (window.cellimedi) window.cellimedi.delete()
  // Call to  IOS App
  else if ((window['webkit']) && (window['webkit'].messageHandlers) && ((window['webkit'].messageHandlers.cellimedi))) window['webkit'].messageHandlers.cellimedi.postMessage(val)
}

function iosinfoClean3 (val) {
  console.log('logoutInfo')
  // Call to Android App
  if (window.cellimedi) window.cellimedi.logout()
  // Call to  IOS App
  else if ((window['webkit']) && (window['webkit'].messageHandlers) && ((window['webkit'].messageHandlers.cellimedi))) window['webkit'].messageHandlers.cellimedi.postMessage(val)
}

export {iosinfoClean, iosinfoClean2, iosinfoClean3}
