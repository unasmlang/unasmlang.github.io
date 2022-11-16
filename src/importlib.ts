// @ts-nocheck
import lib from './libunasm/dist/インデックス'
window.libunasm = lib;
lib.instructions.out = ()=>document.querySelector('#out').innerHTML+=(lib.registers.r1.toString());
lib.instructions.outc = ()=>document.querySelector('#out').innerHTML+=(String.fromCharCode(lib.registers.r1));
window.exec = (data: string) => {
  document.querySelector('#out').innerHTML = '';
  const res = libunasm.execute(data)
  document.querySelector('#out').innerHTML+='\n-> ' + res;
}
