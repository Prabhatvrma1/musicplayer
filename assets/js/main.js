/**
 * ====================================================================
 * ENTRY POINT: Application Bootstrap
 * Initializes the MVC Architecture for चटपटे गाने
 * ====================================================================
 */

import { QueueModel } from './models/queue.model.js';
import { StreamService } from './services/stream.service.js';
import { PlayerView } from './views/player.view.js';
import { PlayerController } from './controllers/player.controller.js';

document.addEventListener('DOMContentLoaded', () => {
    const queueModel = new QueueModel();
    const streamService = new StreamService();
    const playerView = new PlayerView();

    const playerController = new PlayerController(queueModel, streamService, playerView);
    playerController.init();
});
