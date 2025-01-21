// function
radio.onReceivedNumberDeprecated(function (receivedNumber) {
    // // if recieved number on radio group 200 start melody wawawawawa
    if (receivedNumber == 1) {
        basic.pause(2000)
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
        // pause 1000ms
        basic.pause(1000)
        // clear screen
        basic.clearScreen()
        basic.showIcon(IconNames.Happy)
    }
})
input.onButtonPressed(Button.B, function () {
    music.stopMelody(MelodyStopOptions.All)
    basic.clearScreen()
    basic.showIcon(IconNames.Sad)
})
radio.setGroup(200)
