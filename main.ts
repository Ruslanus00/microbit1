input.onButtonPressed(Button.A, function () {
    life += 5
})
let dy = 0
let dx = 0
let life = 0
let px = 3
let py = 3
let gx = 0
let gy = 0
led.plotBrightness(gx, gy, 100)
led.plotBrightness(px, py, 255)
basic.forever(function () {
    if (life > 0) {
        dx = px - gx
        dy = py - gy
        led.unplot(gx, gy)
        if (dx == 0 && dy == 0) {
            gx = 0
            gy = 0
            life += -1
            led.plotBrightness(px, py, 255)
        }
        if (Math.abs(dx) > Math.abs(dy)) {
            if (dx > 0) {
                gx += 1
            } else {
                gx += -1
            }
        } else {
            if (dy > 0) {
                gy += 1
            } else {
                gy += -1
            }
        }
        led.plotBrightness(gx, gy, 100)
        basic.pause(200)
    }
})
