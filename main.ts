/**
 * mqMp3 blocks
 * 文字转语音
 * http://ai-speaker.net/
 * https://www.ttsonline.cn/
 */
//% groups=['mp3']
namespace mqlib {
    
    export enum LoopMode {
        //% block="单曲停止"
        M1 = 1,
        //% block="单曲循环"
        M2 = 2,
        //% block="全部循环"
        M3 = 3
    }
    export enum MyMusicList {
        //% block="小星星"
        m1 = 1,
        //% block="哈哈"
        m2 = 2
    }
    
    //% subcategory="mp3"
    //% group='mp3'
    //% block="Mp3初始化模块"
    //% weight=100
    export function Mp3Init() {
        serial.redirect(SerialPin.P0, SerialPin.P1, BaudRate.BaudRate9600)
        Mp3SetLoopMode(1)
    }
    //% subcategory="mp3"
    //% group='mp3'
    //% block="Mp3播放音乐 编号 $n"
    //% weight=99
    //% n.min=1 n.max=65535 n.defl=1
    export function Mp3PlaySound(n: number) {
        let buf = pins.createBuffer(9)
        buf[0] = 0xfe
        buf[1] = 0x09
        buf[2] = 0xff
        buf[3] = 0xff
        buf[4] = 0x07
        buf[5] = 0x00
        buf[6] = n
        buf[7] = n + 12
        buf[8] = 0xbe
        serial.writeBuffer(buf)
    }
    //% subcategory="mp3"
    //% group='mp3'
    //% block="Mp3播放音乐 名称 $m"
    //% weight=99
    export function Mp3PlaySoundByName(m: MyMusicList) {
        Mp3PlaySound(m)
    }
    //% subcategory="mp3"
    //% group='mp3'
    //% block="Mp3停止播放音乐"
    //% weight=97
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
    //% weight=98
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
    //% weight=96
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
    //% weight=95
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
    //% weight=94
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