$(document).ready(function() {

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
  camera.position.x = 0 ;
  camera.position.y = 3 ;
  camera.position.z = 5 ;

  const renderer = new THREE.WebGLRenderer({ canvas: threeCanvas });
  renderer.setSize(500, 500);

  loader.load('./models/amy.json',
  function ( obj ) {
    scene.add( new THREE.AmbientLight( 0x111111 ) );
    const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.125 );
    scene.add( directionalLight );
    pointLight = new THREE.PointLight( 0xffffff, 1 );
    scene.add( pointLight );
  },

  function ( xhr ) {
    console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
  },
  function ( err ) {
    console.error( 'An error happened' );
  }
  ) ;

  const animate = function () {
  // requestAnimationFrame( animate );
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;
  // renderer.render( scene, camera );
  };

  animate();

}) ;
