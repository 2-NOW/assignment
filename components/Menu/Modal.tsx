import Item from "./Item";
import { Items } from "./Items";

function Modal() {
  return (
    <div className="z-50 absolute w-[328px] h-[448px] border-2 top-[60px] right-3 rounded-lg drop-shadow bg-white p-4 grid grid-cols-3 gap-5 gap-y-7 auto-rows-min">
      {Items.map((v, i) => {
        const { src, title, link } = v;
        return <Item src={src} title={title} link={link} key={i} />;
      })}
    </div>
  );
}

export default Modal;
