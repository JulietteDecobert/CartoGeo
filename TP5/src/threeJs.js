$(document).ready(function() {

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 25, 1, 0.1, 1000 );
    camera.position.set(7, 0, 6) ;
  
    const renderer = new THREE.WebGLRenderer({ canvas: canvasthreeJSCompass });
    renderer.setSize(500, 500);
  
    const light = new THREE.AmbientLight( 0xffffff );
    scene.add( light );
  
    const gltfLoader = new THREE.GLTFLoader();
    gltfLoader.load('./models/Duck.gltf', function(gltf) {
      scene.add( gltf.scene ) ;
    },
    function ( xhr ) {
      console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    },
    function ( error ) {
      console.log( 'An error happened' );
    }
  ) ;
  
  const controls = new THREE.OrbitControls( camera, renderer.domElement );


  const animate = function () {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
  };
  animate();
  }) ;
  