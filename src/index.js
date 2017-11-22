import { h, app } from "hyperapp";
import  './index.css';
export const Modal = ({
    stys,
    isshow,
    message,
    modalaction
  }) => {
    return isshow > 0
      ? <div class={`modal-main`} >
          <div class={`${stys} modal-content`} >
              <div class={`modal-close`} onclick={e => modalaction({ flag: false })}>X</div>
              <div class={`modal-message`}>
                {message}
              </div>
          </div>
        </div>
      : "";
  };