/* Noviani Litriani (2001594623) */

function createMat(scene) {
	var mat = new BABYLON.StandardMaterial("materialTex", scene);

	// mat.diffuseColor = new BABYLON.Color3(1,0,0);
	// mat.specularColor = new BABYLON.Color3(0,1,0);
	mat.diffuseTexture = new BABYLON.Texture("grass.jpg", scene);
	mat.specularColor = new BABYLON.Color3(1,0,0);
	mat.specularPower = 25;

	mat.ambientColor = new BABYLON.Color3(0.23,0.90,0.53);

	//transparent
	mat.alpha = 1;

	return mat;
}