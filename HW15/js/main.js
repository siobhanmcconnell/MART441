

/**
 * Generate a scene object with a background color
 **/
function getScene() {
  var scene = new THREE.Scene();
  scene.background = new THREE.Color(0x1F0812);
  return scene;
}

/**
 * Generate the camera to be used in the scene.
 **/
function getCamera() {
  var aspectRatio = window.innerWidth / window.innerHeight;
  var camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
  camera.position.set(0, 90, -1);
  return camera;
}

/**
 * Generate the light to be used in the scene.
 * @param {obj} scene: the current scene object
 **/
function getLight(scene) {
  var light = new THREE.PointLight(0xffffe3, 0.8, 0);
  light.position.set(20, 50, 25);
  scene.add(light);

  

  var ambientLight = new THREE.AmbientLight(0x111111);
  scene.add(ambientLight);

  return light;

}

/**
 * Generate the renderer to be used in the scene
 **/
function getRenderer() {
  var renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  return renderer;
}

/**
 * Generate the controls to be used in the scene
 **/
function getControls(camera, renderer) {
  var controls = new THREE.TrackballControls(camera, renderer.domElement);
  controls.zoomSpeed = 0.4;
  controls.panSpeed = 0.4;
  return controls;
}

var text = "aems",
  height = 2,
  size = 10,
  curveSegments = 10,
  bevelThickness = 1,
  bevelSize = 0.3,
  bevelSegments = 3,
  bevelEnabled = true,
  font = undefined;


/**
 * Load model
 **/
function loadModel() {
  var loader = new THREE.OBJLoader();

  loader.load('cat.obj', function (object) {
    object.rotation.z = Math.PI;
    object.position.z= -20;
    scene.add(object);

    document.querySelector('h1').style.display = 'none';
  });

var loaderText = new THREE.FontLoader();
    loaderText.load('helvetiker_regular.typeface.json', 
        function (res){
            font = res;
            createText();
        })
  
}

function createText() {
  // change the text here
  textGeo = new THREE.TextGeometry('Icecream !', {
    font: font,
    size: size,
    height: height,
    curveSegments: curveSegments,
    weight: "normal",
    bevelThickness: bevelThickness,
    bevelSize: bevelSize,
    bevelSegments: bevelSegments,
    bevelEnabled: bevelEnabled
  });

  textGeo.computeBoundingBox();
  textGeo.computeVertexNormals();


  // change the color here
  var color = new THREE.Color(0x824c71);
  var textMaterial = new THREE.MeshBasicMaterial({ color: color });

  var textMesh = new THREE.Mesh(textGeo, textMaterial);
  textMesh.position.x = 30;
  textMesh.position.z = 40;
  textMesh.position.y= -20;
  textMesh.castShadow = true;
  textMesh.rotation.x = 1.57;
  textMesh.rotation.y = 3.14;


  scene.add(textMesh);
}




/**
 * Render!
 **/
function render() {
  requestAnimationFrame(render);


cube.rotation.z += 0.01;
cube.scale.set(7,7,7)
cube.position.set(-20,20,5)


cone.rotation.x = -1.57;
cone.position.set(-20,20,-10)

cherry.scale.set(0.1,0.1,0.1)
cherry.position.set(-20, 20, 10)



  renderer.render(scene, camera);
  controls.update();
}

var scene = getScene();
var camera = getCamera();
var light = getLight(scene);
var renderer = getRenderer();
var controls = getControls(camera, renderer);

var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({
    color: 0x00ff00
});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

var geometry2 = new THREE.ConeGeometry(5,20,32);
var material2 = new THREE.MeshBasicMaterial( {color: 0xffff00});
var cone = new THREE.Mesh(geometry2, material2);
scene.add(cone);


var geometry3 = new THREE.SphereGeometry( 15, 32, 16 );
var material3 = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
var cherry = new THREE.Mesh(geometry3, material3);
scene.add(cherry);



var material4 = new THREE.LineBasicMaterial( { color: 0xff00ff } );
var points = [];
points.push( new THREE.Vector3( - 20, -20, 60 ) );
points.push( new THREE.Vector3( -10, -20, 50 ) );
points.push( new THREE.Vector3( 0, -20, 70 ) );
points.push( new THREE.Vector3( 20, -20, 54 ));
points.push( new THREE.Vector3( 40, -20, 62 ));
points.push( new THREE.Vector3( 37, -20, 52 ));
points.push( new THREE.Vector3( 57, -20, 49 ));
points.push( new THREE.Vector3( 37, -20, 42 ));
points.push( new THREE.Vector3( 53, -20, 33 ));
points.push( new THREE.Vector3( 23, -20, 37 ));
points.push( new THREE.Vector3( 19, -20, 27 ));
points.push( new THREE.Vector3( 14, -20, 35 ));
points.push( new THREE.Vector3( 6, -20, 30 ));
points.push( new THREE.Vector3( 2, -20, 36 ));
points.push( new THREE.Vector3( -12, -20, 29 ));
points.push( new THREE.Vector3( -16, -20, 35 ));
points.push( new THREE.Vector3( -36, -20, 28 ));
points.push( new THREE.Vector3( -40, -20, 38 ));
points.push( new THREE.Vector3( -47, -20, 38 ));
points.push( new THREE.Vector3( -40, -20, 42 ));
points.push( new THREE.Vector3( -54, -20, 49 ));
points.push( new THREE.Vector3( -41, -20, 49 ));
points.push( new THREE.Vector3( -51, -20, 69 ));
points.push( new THREE.Vector3( -34, -20, 54 ));
points.push( new THREE.Vector3( - 20, -20, 60 ) );



var geometry4 = new THREE.BufferGeometry().setFromPoints( points );
var line = new THREE.Line( geometry4, material4 );
scene.add( line );






var material5 = new THREE.LineBasicMaterial( { color: 0xd84df7 } );
var points2 = [];
points2.push( new THREE.Vector3( -51, -20, 74 ));
points2.push( new THREE.Vector3( -34, -20, 59 ));
points2.push( new THREE.Vector3( - 20, -20, 65 ) );
points2.push( new THREE.Vector3( -10, -20, 55 ) );
points2.push( new THREE.Vector3( 0, -20, 75 ) );
points2.push( new THREE.Vector3( 20, -20, 59 ));
points2.push( new THREE.Vector3( 40, -20, 67 ));



var geometry5 = new THREE.BufferGeometry().setFromPoints( points2 );
var line2 = new THREE.Line( geometry5, material5 );
scene.add( line2 );




loadModel();
render();