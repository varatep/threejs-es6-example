import * as THREE from 'three'

const scene = new THREE.Scene()
const cam = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
const renderer = new THREE.WebGLRenderer()

renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// drawing time
let geometry = new THREE.BoxGeometry(1, 1, 1)
let material = new THREE.MeshBasicMaterial({color: 0x00ff00})
let cube = new THREE.Mesh(geometry, material)
scene.add(cube)

cam.position.z = 3

function render() {
  requestAnimationFrame(render)
  cube.rotation.x += 0.01
  cube.rotation.y += 0.01
  renderer.render(scene, cam)
}
render()
