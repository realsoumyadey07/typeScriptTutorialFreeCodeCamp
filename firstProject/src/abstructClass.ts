abstract class TakePhoto {
     constructor(public cameraMode: string, public filter: string){

     }
     abstract getSepia(): void;
}

class FaceBook extends TakePhoto {
     constructor(public cameraMode: string, public filter: string){
          super(cameraMode, filter);
     }
     getSepia(): void {
         console.log("hello from sepia");
         
     }
}
// const so = new Instagram("test", "test");