/**
 * mqMp3 blocks
 */
//% groups=['mp3']
namespace mqlib {

    //% subcategory="mp3"
    //% group='mp3'
    //% block="Mp3播放音频 $n"
    export function Mp3PlaySound(n: number) {
        serial.redirect(SerialPin.P0, SerialPin.P1, BaudRate.BaudRate9600)
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
    
}