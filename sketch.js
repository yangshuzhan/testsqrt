var buf = new ArrayBuffer(4),
    f32=new Float32Array(buf),
    u32=new Uint32Array(buf);
function q2(x) {
  var x2 = (f32[0] = x)>>1;
  u32[0] = (0x5f3759df - (u32[0] >> 1));
  var y = f32[0];
  y  = y * ( 1.5 - ( x2 * y * y ) );   // 1st iteration
  y  = y * ( 1.5 - ( x2 * y * y ) );   // 1st iteration
  y  = y * ( 1.5 - ( x2 * y * y ) );   // 1st iteration
  return y;
}

var seed=1;
function frand(){
  seed=(997309*seed)%2147483647;
  return seed/2147483647;
}
var seed2=Math.SQRT2;
function srand(){
  seed2=fraction(seed2*9973);
  return seed2;
}
function* infinite() {
    let index = 0;
        yield index++;  
}
function fraction(a){
  return a-~~a;
}
function bits(x){
    f32[0] = x;
   //u32[0]=0x5f3759df-(u32[0]>>1);
   u32[0]=0x1fe00000+((u32[0])>>1);//指数/2
}
 function fsqrt(x){
   f32[0] = x;
   u32[0]=0x1fbb67af+((u32[0])>>1);
   let y=f32[0];
     y=(y+x/y)*0.5;
     y=(y+x/y)*0.5;
     y=(y+x/y)*0.5;
   return y;
 }


function setup() {
  //frameRate(1)
  
  createCanvas(400, 400);
  
}
function draw() {
  
   time1=millis();
   for(let i=0;i<9999999;i++){
      let j=fsqrt(i);
   }
   time2=millis();
//console.log('fsqrt耗时毫秒',time2-time1,'误差',(fsqrt(2)-sqrt(2))/sqrt(2));

   time3=millis();
   for(let i=0;i<9999999;i++){
      let j=sqrt(i);
   }
   time4=millis();
  
//console.log('Math.sqrt原本耗时',time4-time3);
  textSize(20);
  background(255);
  text('fsqrt耗时',30,40);
  
  text(time2-time1,30,70);
  text('Math.sqrt原本耗时',30,140);
  
  text(time4-time3,30,170);
}
