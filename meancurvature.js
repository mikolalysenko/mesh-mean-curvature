'use strict'

module.exports = meanCurvature

var lapList = require('mesh-laplacian')
var CSRMatrix = require('csr-matrix')

function meanCurvature (cells, positions) {
  var laplacian = CSRMatrix.fromList(lapList(cells, positions))

  var numVerts = positions.length

  var i
  var x = new Array(numVerts)
  var y = new Array(numVerts)
  var z = new Array(numVerts)
  var curvature = new Array(numVerts)
  for (i = 0; i < numVerts; ++i) {
    var p = positions[i]
    x[i] = p[0]
    y[i] = p[1]
    z[i] = p[2]
    curvature[i] = 0
  }

  laplacian.apply(x, curvature)
  for (i = 0; i < numVerts; ++i) {
    curvature[i] = Math.pow(curvature[i], 2)
    x[i] = 0
  }

  laplacian.apply(y, x)
  for (i = 0; i < numVerts; ++i) {
    curvature[i] += Math.pow(x[i], 2)
    x[i] = 0
  }

  laplacian.apply(z, x)
  for (i = 0; i < numVerts; ++i) {
    curvature[i] += Math.pow(x[i], 2)
    x[i] = 0
  }

  for (i = 0; i < numVerts; ++i) {
    curvature[i] = Math.sqrt(curvature[i])
  }

  return curvature
}
