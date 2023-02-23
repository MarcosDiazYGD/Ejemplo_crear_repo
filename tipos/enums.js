"use strict";
(() => {
    let audioLevel;
    (function (audioLevel) {
        audioLevel[audioLevel["min"] = 0] = "min";
        audioLevel[audioLevel["medium"] = 1] = "medium";
        audioLevel[audioLevel["max"] = 2] = "max";
    })(audioLevel || (audioLevel = {}));
    let currentAudio = audioLevel.min;
    currentAudio = audioLevel.medium;
    currentAudio = audioLevel.max;
    console.log(currentAudio);
})();
