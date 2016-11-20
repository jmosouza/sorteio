// libs

var _random = new Random(Random.engines.mt19937().autoSeed())

// elements

var $minDraw      = document.getElementById('minDraw')
var $maxDraw      = document.getElementById('maxDraw')
var $drawForm     = document.getElementById('drawForm')
var $resultOutput = document.getElementById('result')

// events

var normalizeMinDraw = function() {
  var min = parseInt($minDraw.value)
  var max = parseInt($maxDraw.value)
  if (min < -9999) { $minDraw.value = -9999 }
  if (min >  9999) { $minDraw.value =  9999 }
  if (min >  max ) { $maxDraw.value =  min  }
}

var normalizeMaxDraw = function() {
  var min = parseInt($minDraw.value)
  var max = parseInt($maxDraw.value)
  if (max < -9999) { $maxDraw.value = -9999 }
  if (max >  9999) { $maxDraw.value =  9999 }
  if (max <  min ) { $minDraw.value =  max  }
}

var drawResult = function() {
  var min                 = parseInt($minDraw.value)
  var max                 = parseInt($maxDraw.value)
  var resultValue         = _random.integer(min, max)
  $resultOutput.innerHTML = resultValue
}

var preventSubmitAndDrawResult = function(e) {
  e.preventDefault()
  drawResult()
}

var onPressEnterDrawResult = function(e) {
  if (e.keyCode == 13 || e.keyCode == 32) { // enter or spacebar
    drawResult();
  }
}

$minDraw.onchange = normalizeMinDraw
$maxDraw.onchange = normalizeMaxDraw
$drawForm.onsubmit = preventSubmitAndDrawResult
window.onkeypress  = onPressEnterDrawResult
