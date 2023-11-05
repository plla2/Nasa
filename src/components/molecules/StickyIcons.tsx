import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { AiFillEdit } from "@react-icons/all-files/ai/AiFillEdit";
import { AiFillApple } from "@react-icons/all-files/ai/AiFillApple";

const StickyIcons = () => {
  return (
    <aside>
      <a href="https://jhbljs92.tistory.com/" target="_blank">
        <AiFillEdit />
      </a>
      <a href="https://github.com/plla2" target="_blank">
        <AiFillGithub />
      </a>
      <a href="https://plla2.netlify.app/" target="_blank">
        <AiFillApple />
      </a>
    </aside>
  );
};

export default StickyIcons;
