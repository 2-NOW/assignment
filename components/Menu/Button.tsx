interface IMenuButton {
  handleMenuClick: () => void;
}

function MenuButton({ handleMenuClick }: IMenuButton) {
  return (
    <button className="p-2 m-1 hover:bg-[#f0f0f0] rounded-full" onClick={handleMenuClick}>
      <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 10h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 16h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4z" />
      </svg>
    </button>
  );
}

export default MenuButton;
