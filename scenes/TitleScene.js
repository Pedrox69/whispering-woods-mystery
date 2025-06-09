class TitleScene extends Phaser.Scene {
    constructor() {
        super('TitleScene');
    }

    preload() {
        // Load menu background image (optional)
        this.load.image('menu_bg', 'assets/main_menu_bg.jpg');
    }

    create() {
        // Add background image (if loaded)
        if (this.textures.exists('menu_bg')) {
            this.add.image(400, 300, 'menu_bg').setOrigin(0.5).setDisplaySize(800, 600);
        } else {
            // Fallback if no image, or if you prefer a solid background
            this.add.rectangle(400, 300, 800, 600, 0x1a1a1a).setOrigin(0.5);
        }

        // Add title text
        this.add.text(400, 150, 'The Whispering Woods Mystery', {
            fontSize: '36px',
            fill: '#ffd700', // Gold color
            fontFamily: '"Press Start 2P", Arial'
        }).setOrigin(0.5);

        // Add Start button
        const startButton = this.add.text(400, 300, 'Start Game', {
            fontSize: '24px',
            fill: '#00ff00', // Green color
            backgroundColor: '#333',
            padding: { x: 20, y: 10 },
            fontFamily: '"Press Start 2P", Arial'
        }).setOrigin(0.5)
          .setInteractive({ useHandCursor: true });

        startButton.on('pointerover', () => startButton.setStyle({ fill: '#ffffff', backgroundColor: '#555' }));
        startButton.on('pointerout', () => startButton.setStyle({ fill: '#00ff00', backgroundColor: '#333' }));
        startButton.on('pointerdown', () => {
            this.scene.start('GameScene'); // Start the GameScene
        });

        // Add Options button (placeholder for now)
        const optionsButton = this.add.text(400, 380, 'Options', {
            fontSize: '24px',
            fill: '#00aaff', // Blue color
            backgroundColor: '#333',
            padding: { x: 20, y: 10 },
            fontFamily: '"Press Start 2P", Arial'
        }).setOrigin(0.5)
          .setInteractive({ useHandCursor: true });

        optionsButton.on('pointerover', () => optionsButton.setStyle({ fill: '#ffffff', backgroundColor: '#555' }));
        optionsButton.on('pointerout', () => optionsButton.setStyle({ fill: '#00aaff', backgroundColor: '#333' }));
        optionsButton.on('pointerdown', () => {
            console.log("Options clicked!"); // Placeholder
            // In a real game, you'd go to an options scene
        });
    }
}
