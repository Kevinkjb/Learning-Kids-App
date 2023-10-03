const images = document.querySelectorAll('.sound');
    const audioElements = [];
    const imageArray = Array.from(images);

      // Create audio elements and add them to the array
      imageArray.forEach(image => {
        const audio = new Audio(image.getAttribute('data-src'));
        audioElements.push(audio);
      });

      // Function to stop all audio playback
      function stopAllAudio() {
        audioElements.forEach(audio => {
          if (!audio.paused) {
            audio.pause();
            audio.currentTime = 0;
          }
        });
      }

      // Event listeners for all images
      imageArray.forEach(image => {
        image.addEventListener('click', function () {
          stopAllAudio(); // Stop all other sounds
          const audio = audioElements[imageArray.indexOf(this)]; // Get the corresponding audio element
          audio.play(); // Play the selected sound
        });
      });