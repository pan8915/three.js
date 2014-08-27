Sidebar.Geometry.Modifiers = function ( signals, object ) {

	var container = new UI.Panel().setPaddingLeft( '90px' );

	var geometry = object.geometry;

	// Compute Vertex Normals

	var button = new UI.Button( 'Compute Vertex Normals' );
	button.onClick( function () {

		geometry.computeVertexNormals();

		if ( geometry instanceof THREE.BufferGeometry ) {

			geometry.attributes.normal.needsUpdate = true;

		} else {

			geometry.normalsNeedUpdate = true;

		}

		signals.objectChanged.dispatch( object );

	} );

	container.add( button );

	//

	return container;

}
