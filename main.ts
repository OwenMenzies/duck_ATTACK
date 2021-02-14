input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 128; index++) {
        basic.clearScreen()
        radio.sendString("DECLINED")
        basic.pause(100)
    }
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "DUCKS") {
        basic.showIcon(IconNames.Duck)
    } else {
        basic.showString(receivedString)
    }
    if (receivedString == "<") {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else {
        basic.showString(receivedString)
    }
    if (receivedString == ">") {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else {
        basic.showString(receivedString)
    }
    if (receivedString == "^") {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else {
        basic.showString(receivedString)
    }
    if (receivedString == "\\/") {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else {
        basic.showString(receivedString)
    }
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("DUCKS")
})
radio.setGroup(-1e-308)
basic.forever(function () {
	
})
