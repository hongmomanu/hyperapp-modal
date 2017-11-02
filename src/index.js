import { h, app } from "hyperapp";
import picostyle from "picostyle";
const style = picostyle(h);
const Div = style("div")(()=>({
    display: 'block',
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor:'rgba(0, 0, 0, .5)',
    // "@keyframes fadeIn": {
    //     from: {
    //         opacity: 0
    //     },
    //     to: {
    //         opacity: 1,
    //     }
    // },
    // animation: 'fadeIn 4s linear',
}));
const Content = style("div")(({stys:{width, height, color,bcolor}})=>({
    width: `${width||200}px`,
    height: `${height||100}px`,
    position: 'absolute',
    display: 'flex',
    top: '50%',
    left: '50%',
    flexDirection:'row',
    transform: 'translate(-50%, -50%)',
    backgroundColor: `${bcolor||'#fff'}`,
    color: `${color||'black'}`,
    borderRadius: '10px',
    textAlign: 'center'
}));

const Close = style("div")(()=>({
    position:'absolute',
    right:'10px',
    width:'10px',
    height:'10px',
    top:'10px',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    cursor:'pointer'

}))


const Message = style("div")(()=>({
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flex:1
}))

export const Modal = ({
    stys,
    isshow,
    message,
    modalaction
  }) => {
    return isshow > 0
      ? <Div >
          <Content stys={stys}>
              <Close onclick={e => modalaction({ flag: false })}>X</Close>
              <Message>
                {message}
              </Message>
          </Content>
        </Div>
      : "";
  };