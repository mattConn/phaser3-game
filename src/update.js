import { player } from './create';
import { config } from './index';
import getKeyboardInput from './getKeyboardInput';

export default function update(){
  getKeyboardInput(this);
}