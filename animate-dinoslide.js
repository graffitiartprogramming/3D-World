
    AFRAME.registerComponent("animate-dinoslide", {
      init: function () {
        // load the .pngs
        let loader = new THREE.TextureLoader();
        this.pngArray = [];
        this.pngArray.push(
          loader.load(
            "https://cdn.glitch.global/6d57de3d-722e-4de3-a986-24d54c962ab6/dinoslide1.png"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://cdn.glitch.global/6d57de3d-722e-4de3-a986-24d54c962ab6/dinoslide2.png"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://cdn.glitch.global/6d57de3d-722e-4de3-a986-24d54c962ab6/dinoslide3.png"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://cdn.glitch.global/6d57de3d-722e-4de3-a986-24d54c962ab6/dinoslide4.png"
          )
        );
        this.pngArray.push(
          loader.load(
            "https://cdn.glitch.global/6d57de3d-722e-4de3-a986-24d54c962ab6/dinoslide5.png"
          )
        );










        

        this.el.addEventListener("loaded", (e) => {
          let mesh = this.el.getObject3D("mesh");
          this.material = mesh.material;

          var i = 0;
          this.id = setInterval((e) => {
            if (i >= this.pngArray.length) i = 0;
            this.material.map = this.pngArray[i++];
            this.material.needsUpdate = true;
          }, 300);
        });
      },
      remove: function () {
        clearInterval(this.id);
        // free the memory
        for (let i = 0; i < this.pngArray.length; i++) {
          this.pngArray[i].dispose();
        }
      },
    });
