import * as THREE from "three" ;
import { OrbitControls } from "https://unpkg.com/three@0.152.2/examples/jsm/controls/OrbitControls.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.03;

const geometry = new THREE.IcosahedronGeometry(1.0, 2);
const material = new THREE.MeshStandardMaterial({ 
    color: 0xffffff,
    flatShading: true
 });

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const wireMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true
});
scene.add(wireMaterial);

const wireMesh = new THREE.Mesh(geometry, wireMaterial);
wireMesh.scale.setScalar(1.0001)
mesh.add(wireMesh);

const lightSource = new THREE.HemisphereLight(0x9d4edd, 0x43aa8b);
scene.add(lightSource);

camera.position.z = 3;

function animate() {
  requestAnimationFrame(animate);
  mesh.rotation.x += 0.005;
  mesh.rotation.y += 0.005;
  renderer.render(scene, camera);
  controls.update();
}
animate();
