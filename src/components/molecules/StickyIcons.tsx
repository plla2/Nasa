import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { AiFillEdit } from "@react-icons/all-files/ai/AiFillEdit";
import { AiFillApple } from "@react-icons/all-files/ai/AiFillApple";

const StickyIcons = () => {
  return (
    <aside className="fixed lg:bottom-0  bottom-1/2 left-0 flex flex-col gap-5 items-center bg-gradient-to-t z-40 from-red-500 to-amber-500 rounded-r-lg py-3 px-2 ">
      <a
        href="https://jhbljs92.tistory.com/"
        target="_blank"
        className="text-zinc-100 hover:text-zinc-400"
      >
        <AiFillEdit />
      </a>
      <a
        href="https://github.com/plla2"
        target="_blank"
        className="text-zinc-100 hover:text-zinc-400"
      >
        <AiFillGithub />
      </a>
      <a
        href="https://plla2.netlify.app/"
        target="_blank"
        className="text-zinc-100 hover:text-zinc-400"
      >
        <AiFillApple />
      </a>
    </aside>
  );
};

export default StickyIcons;
