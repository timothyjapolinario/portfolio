interface MenuIconProps {
  imagePath: string;
  onClick: () => void;
}
const MenuIcon = (props: MenuIconProps) => {
  return (
    <div>
      <img className="h-[3vh]" src={props.imagePath} onClick={props.onClick} />
    </div>
  );
};
export default MenuIcon;
