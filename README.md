mesh-mean-curvature
===================
Computes an approximation of the mean curvature of a mesh at each vertex.

## Install

```
npm i mesh-mean-curvature
```

## Example

```javascript
var bunny = require('bunny')
var curvature = require('mesh-mean-curvature')(bunny.cells, bunny.positions)


```


## API

#### `require('mesh-mean-curvature')(cells, positions)`
Computes an approximation of the mean curvature of a mesh

* `cells` are the cells of the mesh
* `positions` are the positions of the vertices of the mesh

**Returns** An array of per-vertex mean curvature values

## License
(c) 2015 Mikola Lysenko. MIT License
