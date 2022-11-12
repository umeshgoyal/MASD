import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlcService {
  private slc:{admission:string}[] =[
    {
        "admission": "11135"
    },
    {
        "admission": "11134"
    },
    {
        "admission": "11143"
    },
    {
        "admission": "10075"
    },
    {
        "admission": "9856"
    },
    {
        "admission": "9777"
    },
    {
        "admission": "9779"
    },
    {
        "admission": "9780"
    },
    {
        "admission": "10497"
    },
    {
        "admission": "10923"
    },
    {
        "admission": "10809"
    },
    {
        "admission": "9778"
    },
    {
        "admission": "10867"
    },
    {
        "admission": "10616"
    },
    {
        "admission": "11121"
    },
    {
        "admission": "11104"
    },
    {
        "admission": "10877"
    },
    {
        "admission": "10878"
    },
    {
        "admission": "10879"
    },
    {
        "admission": "10880"
    },
    {
        "admission": "10882"
    },
    {
        "admission": "10881"
    },
    {
        "admission": "10613"
    },
    {
        "admission": "9929"
    },
    {
        "admission": "10071"
    },
    {
        "admission": "10276"
    },
    {
        "admission": "9703"
    },
    {
        "admission": "11340"
    },
    {
        "admission": "10894"
    },
    {
        "admission": "10893"
    },
    {
        "admission": "11341"
    },
    {
        "admission": "9053"
    },
    {
        "admission": "11376"
    },
    {
        "admission": "11052"
    },
    {
        "admission": "11051"
    },
    {
        "admission": "11052"
    },
    {
        "admission": "11051"
    },
    {
        "admission": "10906"
    },
    {
        "admission": "11065"
    },
    {
        "admission": "10486"
    },
    {
        "admission": "10567"
    },
    {
        "admission": "10938"
    },
    {
        "admission": "10939"
    },
    {
        "admission": "10635"
    },
    {
        "admission": "10521"
    },
    {
        "admission": "10522"
    },
    {
        "admission": "11086"
    },
    {
        "admission": "10589"
    },
    {
        "admission": "10950"
    },
    {
        "admission": "10962"
    },
    {
        "admission": "10887"
    },
    {
        "admission": "11304"
    },
    {
        "admission": "11000"
    },
    {
        "admission": "11136"
    },
    {
        "admission": "10315"
    },
    {
        "admission": "10310"
    },
    {
        "admission": "10906"
    },
    {
        "admission": "7935"
    },
    {
        "admission": "8830"
    },
    {
        "admission": "7760"
    },
    {
        "admission": "10117"
    },
    {
        "admission": "11102"
    },
    {
        "admission": "11047"
    },
    {
        "admission": "11048"
    },
    {
        "admission": "10934"
    },
    {
        "admission": "11126"
    },
    {
        "admission": "9044"
    },
    {
        "admission": "10131"
    },
    {
        "admission": "10799"
    },
    {
        "admission": "7462"
    },
    {
        "admission": "11057"
    },
    {
        "admission": "8214"
    },
    {
        "admission": "9984"
    },
    {
        "admission": "10268"
    },
    {
        "admission": "10981"
    },
    {
        "admission": "10948"
    },
    {
        "admission": "10914"
    },
    {
        "admission": "10568"
    },
    {
        "admission": "8798"
    },
    {
        "admission": "11027"
    },
    {
        "admission": "10994"
    },
    {
        "admission": "11042"
    },
    {
        "admission": "10668"
    },
    {
        "admission": "10667"
    },
    {
        "admission": "8367"
    },
    {
        "admission": "10969"
    },
    {
        "admission": "11456"
    },
    {
        "admission": "11457"
    },
    {
        "admission": "10132"
    },
    {
        "admission": "10892"
    },
    {
        "admission": "9320"
    },
    {
        "admission": "7580"
    },
    {
        "admission": "10857"
    },
    {
        "admission": "11107"
    },
    {
        "admission": "11074"
    },
    {
        "admission": "10940"
    },
    {
        "admission": "7395"
    },
    {
        "admission": "7526"
    },
    {
        "admission": "10759"
    },
    {
        "admission": "9878"
    },
    {
        "admission": "9557"
    },
    {
        "admission": "8344"
    },
    {
        "admission": "8001"
    },
    {
        "admission": "11445"
    },
    {
        "admission": "10307"
    },
    {
        "admission": "9307"
    },
    {
        "admission": "11681"
    },
    {
        "admission": "11682"
    },
    {
        "admission": "11287"
    },
    {
        "admission": "11284"
    },
    {
        "admission": "8965"
    },
    {
        "admission": "9254"
    },
    {
        "admission": "10648"
    },
    {
        "admission": "8803"
    },
    {
        "admission": "11097"
    },
    {
        "admission": "11755"
    },
    {
        "admission": "9247"
    },
    {
        "admission": "7594"
    },
    {
        "admission": "10852"
    },
    {
        "admission": "11235"
    },
    {
        "admission": "11299"
    },
    {
        "admission": "8251"
    },
    {
        "admission": "8980"
    },
    {
        "admission": "9327"
    },
    {
        "admission": "10678"
    },
    {
        "admission": "10853"
    },
    {
        "admission": "10390"
    },
    {
        "admission": "11434"
    },
    {
        "admission": "11673"
    },
    {
        "admission": "11627"
    },
    {
        "admission": "11428"
    },
    {
        "admission": "11655"
    },
    {
        "admission": "10982"
    },
    {
        "admission": "10677"
    },
    {
        "admission": "10815"
    },
    {
        "admission": "11672"
    },
    {
        "admission": "11134"
    },
    {
        "admission": "11144"
    },
    {
        "admission": "10238"
    },
    {
        "admission": "10864"
    },
    {
        "admission": "9887"
    },
    {
        "admission": "10125"
    },
    {
        "admission": "11599"
    },
    {
        "admission": "9406"
    },
    {
        "admission": "10403"
    },
    {
        "admission": "11589"
    },
    {
        "admission": "10110"
    },
    {
        "admission": "11534"
    },
    {
        "admission": "11513"
    },
    {
        "admission": "9538"
    },
    {
        "admission": "10989"
    },
    {
        "admission": "11590"
    },
    {
        "admission": "11720"
    },
    {
        "admission": "10396"
    },
    {
        "admission": "10450"
    },
    {
        "admission": "9694"
    },
    {
        "admission": "11108"
    },
    {
        "admission": "11622"
    },
    {
        "admission": "10137"
    },
    {
        "admission": "11549"
    },
    {
        "admission": "11632"
    },
    {
        "admission": "11300"
    },
    {
        "admission": "11625"
    },
    {
        "admission": "11708"
    },
    {
        "admission": "11639"
    },
    {
        "admission": "11607"
    },
    {
        "admission": "11608"
    },
    {
        "admission": "11680"
    },
    {
        "admission": "11520"
    },
    {
        "admission": "11521"
    },
    {
        "admission": "11487"
    },
    {
        "admission": "9304"
    },
    {
        "admission": "10355"
    },
    {
        "admission": "11799"
    },
    {
        "admission": "11473"
    },
    {
        "admission": "11665"
    },
    {
        "admission": "11819"
    },
    {
        "admission": "10054"
    },
    {
        "admission": "9547"
    },
    {
        "admission": "9546"
    },
    {
        "admission": "8491"
    },
    {
        "admission": "8196"
    },
    {
        "admission": "8953"
    },
    {
        "admission": "9651"
    },
    {
        "admission": "8583"
    },
    {
        "admission": "8584"
    },
    {
        "admission": "8641"
    },
    {
        "admission": "11378"
    },
    {
        "admission": "11841"
    },
    {
        "admission": "11857"
    },
    {
        "admission": "11842"
    },
    {
        "admission": "8197"
    },
    {
        "admission": "10858"
    },
    {
        "admission": "11535"
    },
    {
        "admission": "11292"
    },
    {
        "admission": "11427"
    },
    {
        "admission": "10925"
    },
    {
        "admission": "8875"
    },
    {
        "admission": "10933"
    },
    {
        "admission": "10599"
    },
    {
        "admission": "8608"
    },
    {
        "admission": "10126"
    },
    {
        "admission": "11704"
    },
    {
        "admission": "11294"
    },
    {
        "admission": "11704"
    },
    {
        "admission": "10598"
    },
    {
        "admission": "10419"
    },
    {
        "admission": "11624"
    },
    {
        "admission": "11214"
    },
    {
        "admission": "10079"
    },
    {
        "admission": "9562"
    },
    {
        "admission": "7559"
    },
    {
        "admission": "11033"
    },
    {
        "admission": "11989"
    },
    {
        "admission": "10951"
    },
    {
        "admission": "8840"
    },
    {
        "admission": "11032"
    },
    {
        "admission": "10539"
    },
    {
        "admission": "10919"
    },
    {
        "admission": "8946"
    },
    {
        "admission": "11752"
    },
    {
        "admission": "11451"
    },
    {
        "admission": "8161"
    },
    {
        "admission": "10958"
    },
    {
        "admission": "7765"
    },
    {
        "admission": "11463"
    },
    {
        "admission": "8790"
    },
    {
        "admission": "10396"
    },
    {
        "admission": "10398"
    },
    {
        "admission": "11377"
    },
    {
        "admission": "10960"
    },
    {
        "admission": "11060"
    },
    {
        "admission": "11062"
    },
    {
        "admission": "10400"
    },
    {
        "admission": "11870"
    },
    {
        "admission": "11871"
    },
    {
        "admission": "11961"
    },
    {
        "admission": "11806"
    },
    {
        "admission": "9891"
    },
    {
        "admission": "11556"
    },
    {
        "admission": "11579"
    },
    {
        "admission": "9621"
    },
    {
        "admission": "11368"
    },
    {
        "admission": "8946"
    },
    {
        "admission": "11872"
    },
    {
        "admission": "10362"
    },
    {
        "admission": "8603"
    },
    {
        "admission": "10466"
    },
    {
        "admission": "10144"
    },
    {
        "admission": "10141"
    },
    {
        "admission": "11092"
    },
    {
        "admission": "10203"
    },
    {
        "admission": "9873"
    },
    {
        "admission": "7787"
    },
    {
        "admission": "11368"
    },
    {
        "admission": "10602"
    },
    {
        "admission": "10601"
    },
    {
        "admission": "8652"
    }
]
  constructor() { }
  getSlc(){
    return this.slc.slice();
  }
}
