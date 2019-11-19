let incedents;
var geoLoc=[];
var refGeoLoc=[];
function preload(){
    incedents=loadTable("trafficIncedents.csv");
}
function setup(){
    createCanvas(1500,1500);
    background(0);

    for(var i=1;i<=160857;i++){
        geoLoc[i]=incedents.get(i,33);
        refGeoLoc[i]=match(geoLoc[i],/\d{2}\.\d{6}/g);
        if(refGeoLoc[i]!=null&&refGeoLoc[i][1]!=null){
        print(refGeoLoc[i]);
        let mXD=map(refGeoLoc[i][0],30.3599,30.55,0,1500);
        let mYD=map(refGeoLoc[i][1],91,91.21,0,550);
        stroke(61,1,60);
        strokeWeight(5);
        point(mYD,mXD);
        let mX1D=map(refGeoLoc[i][0],30.3599,30.55,0,1500);
        let mY1D=map(refGeoLoc[i][1],91,91.21,1500,950);
        stroke(61,1,60);
        strokeWeight(5);
        point(mY1D,mX1D);
        let mXC=map(refGeoLoc[i][0],30.3599,30.55,0,1500);
        let mYC=map(refGeoLoc[i][1],91,91.21,0,650);
        stroke(96,72,127);
        strokeWeight(4);
        point(mYC,mXC);
        let mX1C=map(refGeoLoc[i][0],30.3599,30.55,0,1500);
        let mY1C=map(refGeoLoc[i][1],91,91.21,1500,850);
        stroke(96,72,127);
        strokeWeight(4);
        point(mY1C,mX1C);
        let mXB=map(refGeoLoc[i][0],30.3599,30.55,0,1500);
        let mYB=map(refGeoLoc[i][1],91,91.21,0,750);
        stroke(120,136,191);
        strokeWeight(3);
        point(mYB,mXB);
        let mX1B=map(refGeoLoc[i][0],30.3599,30.55,0,1500);
        let mY1B=map(refGeoLoc[i][1],91,91.21,1500,750);
        stroke(120,136,191);
        strokeWeight(3);
        point(mY1B,mX1B);
        let mXA=map(refGeoLoc[i][0],30.3599,30.55,0,1500);
        let mYA=map(refGeoLoc[i][1],91,91.21,0,850);
        stroke(104,194,229);
        strokeWeight(2);
        point(mYA,mXA);
        let mX1A=map(refGeoLoc[i][0],30.3599,30.55,0,1500);
        let mY1A=map(refGeoLoc[i][1],91,91.21,1500,650);
        stroke(104,194,229);
        strokeWeight(2);
        point(mY1A,mX1A);
        let mX=map(refGeoLoc[i][0],30.3599,30.55,0,1500);
        let mY=map(refGeoLoc[i][1],91,91.21,0,950);
        stroke(74,248,255);
        strokeWeight(2);
        point(mY,mX);
        let mX1=map(refGeoLoc[i][0],30.3599,30.55,0,1500);
        let mY1=map(refGeoLoc[i][1],91,91.21,1500,550);
        stroke(74,248,255);
        strokeWeight(2);
        point(mY1,mX1);

        }
    }

}
function draw(){

}