/**
 * mqMp3 blocks
 */
//% groups=['mp3']
namespace mqlib {
    
    enum LoopMode {
        //% block="单曲停止"
        M1 = 1,
        //% block="单曲循环"
        M2 = 2,
        //% block="全部循环"
        M3 = 3
    }
    
    //% subcategory="mp3"
    //% group='mp3'
    //% block="初始化Mp3模块"
    export function Mp3Init() {
        serial.redirect(SerialPin.P0, SerialPin.P1, BaudRate.BaudRate9600)
        Mp3SetLoopMode(1)
    }
    //% subcategory="mp3"
    //% group='mp3'
    //% block="Mp3播放音乐序号 $n"
    export function Mp3PlaySound(n: number) {
        let buf = pins.createBuffer(9)
        buf[0] = 0xfe
        buf[1] = 0x09
        buf[2] = 0xff
        buf[3] = 0xff
        buf[4] = 0x07
        buf[5] = 0x00
        buf[6] = 0x01
        buf[7] = 0x0d
        buf[8] = 0xbe
        if(n == 1){
            buf[6] = 0x01
            buf[7] = 0x0d
        } else if (n == 2) {
            buf[6] = 0x02
            buf[7] = 0x0e
        } else if (n == 3) {
            buf[6] = 0x03
            buf[7] = 0x0f
        } else if (n == 4) {
            buf[6] = 0x04
            buf[7] = 0x10
        } else if (n == 5) {
            buf[6] = 0x05
            buf[7] = 0x11
        } else if (n == 6) {
            buf[6] = 0x06
            buf[7] = 0x12
        } else if (n == 7) {
            buf[6] = 0x07
            buf[7] = 0x13
        } else if (n == 8) {
            buf[6] = 0x08
            buf[7] = 0x14
        } else if (n == 9) {
            buf[6] = 0x09
            buf[7] = 0x15
        } else if (n == 10) {
            buf[6] = 0x0a
            buf[7] = 0x16
        } else if (n == 11) {
            buf[6] = 0x0b
            buf[7] = 0x17
        } else if (n == 12) {
            buf[6] = 0x0c
            buf[7] = 0x18
        } else if (n == 13) {
            buf[6] = 0x0d
            buf[7] = 0x19
        } else if (n == 14) {
            buf[6] = 0x0e
            buf[7] = 0x1a
        } else if (n == 15) {
            buf[6] = 0x0f
            buf[7] = 0x1b
        } else if (n == 16) {
            buf[6] = 0x10
            buf[7] = 0x1c
        } else if (n == 17) {
            buf[6] = 0x11
            buf[7] = 0x1d
        } else if (n == 18) {
            buf[6] = 0x12
            buf[7] = 0x1e
        } else if (n == 19) {
            buf[6] = 0x13
            buf[7] = 0x1f
        } else if (n == 20) {
            buf[6] = 0x14
            buf[7] = 0x20
        }
        serial.writeBuffer(buf)
    }
    //% subcategory="mp3"
    //% group='mp3'
    //% block="Mp3停止播放音乐"
    export function Mp3StopPlaySound() {
        let buf = pins.createBuffer(7)
        buf[0] = 0xfe
        buf[1] = 0x07
        buf[2] = 0xff
        buf[3] = 0xff
        buf[4] = 0x04
        buf[5] = 0x07
        buf[6] = 0xbe
        serial.writeBuffer(buf)
    }
    //% subcategory="mp3"
    //% group='mp3'
    //% block="Mp3暂停播放音乐"
    export function Mp3PausePlaySound() {
        let buf = pins.createBuffer(7)
        buf[0] = 0xfe
        buf[1] = 0x07
        buf[2] = 0xff
        buf[3] = 0xff
        buf[4] = 0x03
        buf[5] = 0x06
        buf[6] = 0xbe
        serial.writeBuffer(buf)
    }
    //% subcategory="mp3"
    //% group='mp3'
    //% block="Mp3设置循环模式 $mode"
    export function Mp3SetLoopMode(mode:LoopMode) {
        let buf = pins.createBuffer(10)
        buf[0] = 0xfe
        buf[1] = 0x0a
        buf[2] = 0xff
        buf[3] = 0xff
        buf[4] = 0x18
        buf[5] = 0x06
        buf[6] = 0x00
        buf[7] = 0x00
        buf[8] = 0x24
        buf[9] = 0xbe
        //单曲不循环
        if(mode == 1){

        //单曲循环
        } else if (mode == 2) {
            buf[5] = 0x02
            buf[8] = 0x20
        //全部循环
        } else if (mode == 2) {
            buf[5] = 0x01
            buf[8] = 0x1f
        }
        serial.writeBuffer(buf)
    }
    //% subcategory="mp3"
    //% group='mp3'
    //% block="Mp3播放上一曲"
    export function Mp3PlayPrev() {
        let buf = pins.createBuffer(7)
        buf[0] = 0xfe
        buf[1] = 0x07
        buf[2] = 0xff
        buf[3] = 0xff
        buf[4] = 0x05
        buf[5] = 0x08
        buf[6] = 0xbe
        serial.writeBuffer(buf)
    }
    //% subcategory="mp3"
    //% group='mp3'
    //% block="Mp3播放下一曲"
    export function Mp3PlayNext() {
        let buf = pins.createBuffer(7)
        buf[0] = 0xfe
        buf[1] = 0x07
        buf[2] = 0xff
        buf[3] = 0xff
        buf[4] = 0x06
        buf[5] = 0x09
        buf[6] = 0xbe
        serial.writeBuffer(buf)
    }
    
}