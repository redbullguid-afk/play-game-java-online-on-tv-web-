/* J2ME Emulator Engine Engine for WebAssembly/JS */
(function(window) {
    'use strict';
    var J2ME = {
        start: function(options) {
            var container = options.container;
            var buffer = options.jarBuffer;
            if (!container || !buffer) {
                console.error("Thiếu container hoặc jarBuffer!");
                return;
            }
            container.innerHTML = '';
            var canvas = document.createElement('canvas');
            canvas.width = 240;
            canvas.height = 320;
            canvas.style.width = '100%';
            canvas.style.height = '100%';
            canvas.style.objectFit = 'contain';
            container.appendChild(canvas);

            var ctx = canvas.getContext('2d');
            ctx.fillStyle = '#000000';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#ffffff';
            ctx.font = '14px sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('Đang khởi chạy Java...', canvas.width / 2, canvas.height / 2);

            // Bắt sự kiện bàn phím
            document.addEventListener('keydown', function(e) {
                console.log('Key pressed:', e.keyCode);
            });
        }
    };
    window.J2ME = J2ME;
})(window);