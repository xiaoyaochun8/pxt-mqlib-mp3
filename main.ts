/**
 * mqMp3 blocks
 */
//% groups=['mp3']
namespace mqlib {
    export function Mp3Init() {
        serial.redirect(SerialPin.P0, SerialPin.P1, BaudRate.BaudRate9600)
    }
    //% subcategory="mp3"
    //% group='mp3'
    //% block="Mp3播放音频 $n"
    export function Mp3PlaySound(n: number) {
        Mp3Init()
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
        }
        serial.writeBuffer(buf)
    }
    //% subcategory="mp3"
    //% group='mp3'
    //% block="Mp3停止播放音频"
    export function Mp3StopPlaySound() {
        Mp3Init()
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
    //% block="Mp3暂停播放音频"
    export function Mp3PausePlaySound() {
        Mp3Init()
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
    //% block="Mp3设置循环模式 单曲停止 单曲循环 全部循环"
    export function Mp3SetLoopMode() {
        
    }
    //% subcategory="mp3"
    //% group='mp3'
    //% block="Mp3播放上一曲"
    export function Mp3PlayPrev() {
        Mp3Init()
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
        Mp3Init()
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