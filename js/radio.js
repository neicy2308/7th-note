document.addEventListener('DOMContentLoaded', function() {
    // Get all player controls
    const players = document.querySelectorAll('audio');
    const playButtons = document.querySelectorAll('.play-button');
    const volumeSliders = document.querySelectorAll('.volume-slider');

    // Function to stop all players except the one that's playing
    function stopOtherPlayers(currentPlayer) {
        players.forEach(player => {
            if (player !== currentPlayer && !player.paused) {
                player.pause();
                updatePlayButton(player, false);
            }
        });
    }

    // Function to update play button appearance
    function updatePlayButton(player, isPlaying) {
        const button = document.querySelector(`[data-player="${player.id}"]`);
        const playIcon = button.querySelector('.play-icon');
        const pauseIcon = button.querySelector('.pause-icon');
        
        if (isPlaying) {
            playIcon.classList.add('hidden');
            pauseIcon.classList.remove('hidden');
        } else {
            playIcon.classList.remove('hidden');
            pauseIcon.classList.add('hidden');
        }
    }

    // Load saved volume settings
    function loadVolumeSettings() {
        const savedVolumes = JSON.parse(localStorage.getItem('playerVolumes')) || {};
        
        players.forEach(player => {
            if (savedVolumes[player.id]) {
                player.volume = savedVolumes[player.id];
                const slider = document.querySelector(`[data-player="${player.id}"]`)
                    .closest('.player-controls')
                    .querySelector('.volume-slider');
                slider.value = savedVolumes[player.id] * 100;
            } else {
                player.volume = 0.8; // Default volume
            }
        });
    }

    // Save volume settings
    function saveVolumeSettings(playerId, volume) {
        const savedVolumes = JSON.parse(localStorage.getItem('playerVolumes')) || {};
        savedVolumes[playerId] = volume;
        localStorage.setItem('playerVolumes', JSON.stringify(savedVolumes));
    }

    // Add click handlers to play buttons
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            const player = document.getElementById(this.dataset.player);
            
            if (player.paused) {
                stopOtherPlayers(player);
                player.play()
                    .then(() => {
                        updatePlayButton(player, true);
                    })
                    .catch(error => {
                        console.error('Error playing audio:', error);
                    });
            } else {
                player.pause();
                updatePlayButton(player, false);
            }
        });
    });

    // Add volume control handlers with persistence
    volumeSliders.forEach(slider => {
        const updateVolumeValue = (slider) => {
            const volumeValue = slider.parentElement.querySelector('.volume-value');
            volumeValue.textContent = `${slider.value}%`;
            
            // Находим связанный аудио плеер
            const playerControls = slider.closest('.player-controls');
            const audio = playerControls.querySelector('audio');
            if (audio) {
                audio.volume = slider.value / 100;
                saveVolumeSettings(audio.id, slider.value / 100);
            }
        };

        // Обновление при загрузке
        updateVolumeValue(slider);

        // Обновление при изменении
        slider.addEventListener('input', function() {
            updateVolumeValue(this);
        });
    });

    // Initialize volume settings
    loadVolumeSettings();

    // Add keyboard controls for volume
    document.addEventListener('keydown', function(e) {
        const activePlayer = Array.from(players).find(player => !player.paused);
        if (!activePlayer) return;

        const slider = document.querySelector(`[data-player="${activePlayer.id}"]`)
            .closest('.player-controls')
            .querySelector('.volume-slider');

        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            e.preventDefault();
            let newVolume = parseFloat(slider.value);
            
            if (e.key === 'ArrowUp') {
                newVolume = Math.min(newVolume + 5, 100);
            } else {
                newVolume = Math.max(newVolume - 5, 0);
            }
            
            slider.value = newVolume;
            activePlayer.volume = newVolume / 100;
            saveVolumeSettings(activePlayer.id, newVolume / 100);
        }
    });
});
