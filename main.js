import "./style.css"
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { DeviceOrientationControls } from "./deviceorientation";

console.log(DeviceOrientationControls)
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75,
   window.innerWidth / window.innerHeight, 0.1, 1000
  
  );

const renderer = new THREE.WebGLRenderer({
  antialias : true
});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

camera.position.z = 5;

const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );

// const directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
// scene.add( directionalLight );

const hlight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 1 );
scene.add( hlight );

// const controls = new OrbitControls( camera, renderer.domElement );
// controls.update();

const controls = new DeviceOrientationControls( camera );

const loader = new GLTFLoader();
const textureLoader = new THREE.TextureLoader();



loader.load(
	'Exhibition.glb',
	function ( gltf ) {


    textureLoader.load(
      'Warehouse_8K.jpg',
      function ( texture ) {

        const warehouse = gltf.scene.getObjectByName("Warehouse")
        console.log(warehouse)

        texture.colorSpace = THREE.SRGBColorSpace;
        texture.flipY = false;
        texture.needsUpdate = true;

        warehouse.material = new THREE.MeshBasicMaterial();
        warehouse.material.map = texture;
        warehouse.material.needsUpdate = true;

        // warehouse.material.map = texture;
        // warehouse.material.needsUpdate = true;

      },
    );


    textureLoader.load(
      'Door.jpg',
      function ( texture ) {



        const door = gltf.scene.getObjectByName("Door")

        console.log(door)

        

        texture.colorSpace = THREE.SRGBColorSpace;
        texture.flipY = false;
        texture.needsUpdate = true;
        // door.material.map = texture;
        // door.material.needsUpdate = true;
        door.material = new THREE.MeshBasicMaterial();
        door.material.map = texture;
        door.material.needsUpdate = true;
      },
    );

    textureLoader.load(
      'Floor.jpg',
      function ( texture ) {

        const floor = gltf.scene.getObjectByName("Floor")

        texture.colorSpace = THREE.SRGBColorSpace;
        texture.flipY = false;
        texture.needsUpdate = true;

        // floor.material.map = texture;
        // floor.material.metalness = 0

        // floor.material.needsUpdate = true;
        floor.material = new THREE.MeshBasicMaterial();
        floor.material.map = texture;
        floor.material.needsUpdate = true;

      },
    );

    textureLoader.load(
      'Pillars.jpg',
      function ( texture ) {

        const pillar = gltf.scene.getObjectByName("Pillars")

        texture.colorSpace = THREE.SRGBColorSpace;
        texture.flipY = false;
        texture.needsUpdate = true;
        // pillar.material.map = texture;
        // pillar.material.metalness = 0

        // pillar.material.needsUpdate = true;
        pillar.material = new THREE.MeshBasicMaterial();
        pillar.material.map = texture;
        pillar.material.needsUpdate = true;

      },
    );

    textureLoader.load(
      'Upstairs.jpg',
      function ( texture ) {

        const upstairs = gltf.scene.getObjectByName("Upstairs")

        texture.colorSpace = THREE.SRGBColorSpace;
        texture.flipY = false;
        texture.needsUpdate = true;
        // upstairs.material.map = texture;
        // upstairs.material.metalness = 0

        // upstairs.material.needsUpdate = true;
        upstairs.material = new THREE.MeshBasicMaterial();
        upstairs.material.map = texture;
        upstairs.material.needsUpdate = true;

      },
    );

    
    textureLoader.load(
      'Sign_Upstairs.jpg',
      function ( texture ) {

        const supstairs = gltf.scene.getObjectByName("Sign_Upstairs")

        texture.colorSpace = THREE.SRGBColorSpace;
        texture.flipY = false;
        texture.needsUpdate = true;


        supstairs.material = new THREE.MeshBasicMaterial();
        supstairs.material.map = texture;
        supstairs.material.needsUpdate = true;



      },
    );


    

    console.log(gltf.scene)

    
    gltf.scene.position.y = -2.5
		scene.add( gltf.scene );
	},
	function ( xhr ) {
		// console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
	},
	function ( error ) {
		console.log( 'An error happened' )
	}
);

function animate() {

	// cube.rotation.x += 0.01;
	// cube.rotation.y += 0.01;


  controls.update();

	renderer.render( scene, camera );

}