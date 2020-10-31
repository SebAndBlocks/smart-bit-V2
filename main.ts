devices.onNotified(MesDeviceInfo.IncomingCall, function () {
    basic.showLeds(`
        . # # # #
        . # # . #
        . . . . #
        . # # . #
        . # # # #
        `)
    music.playMelody("C5 A C5 B C5 C B A ", 125)
    basic.showLeds(`
        . # # # #
        . # # . #
        . . . . #
        . # # . #
        . # # # #
        `)
    basic.clearScreen()
})
bluetooth.onBluetoothConnected(function () {
    basic.showLeds(`
        . . # # .
        # . # . #
        . # # # .
        # . # . #
        . . # # .
        `)
    basic.clearScreen()
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # #
        . # . . #
        . # . . #
        # # . # #
        # # . # #
        `)
    music.playMelody("B C5 A B G A F E ", 125)
    basic.showLeds(`
        . # # # #
        . # . . #
        . # . . #
        # # . # #
        # # . # #
        `)
    basic.clearScreen()
})
basic.showLeds(`
    # # # # #
    # . . . .
    # # # # #
    . . . . #
    # # # # #
    `)
basic.pause(500)
basic.showLeds(`
    # # # # .
    # . . . #
    # # # # .
    # . . . #
    # # # # .
    `)
basic.pause(500)
basic.clearScreen()
