
import { MyAddPipe } from './my-add.pipe';

describe('MyAddPipe', () =>
 {
    it("should add two numbers", () =>{
      const pipe = new MyAddPipe();
      expect(pipe.transform(1,2)).toEqual(3);
  
    })


});
