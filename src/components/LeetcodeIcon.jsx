
const LeetcodeIcon = ({ size = 24, className = '' }) => {
  return (
    <svg
      className={`fill-current ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      role="img"
      aria-label="LeetCode"
    >
      <title>LeetCode</title>
      <path d="M20.205 17.444c.425-.379.481-1.029.095-1.45a1.057 1.057 0 0 0-1.462-.098 8.153 8.153 0 0 1-10.859-.486 8.117 8.117 0 0 1-.043-11.409 1.061 1.061 0 0 0-.017-1.47 1.058 1.058 0 0 0-1.47-.018A10.242 10.242 0 0 0 2.62 11.996a10.216 10.216 0 0 0 2.984 7.234 10.294 10.294 0 0 0 14.6-.217Zm1.108-11.948A10.286 10.286 0 0 0 12.02 1.762a1.06 1.06 0 0 0-.02 2.119 8.165 8.165 0 0 1 5.642 2.337 8.151 8.151 0 0 1 .026 11.513 1.062 1.062 0 0 0 .027 1.469c.413.408 1.072.4 1.47-.027a10.25 10.25 0 0 0 .148-14.676ZM7.604 12.65l4.648 4.648a1.06 1.06 0 0 0 1.501-1.497l-3.91-3.91 3.91-3.91a1.06 1.06 0 1 0-1.501-1.501L7.604 11.15a1.06 1.06 0 0 0 0 1.5Z" />
    </svg>
  );
};

export default LeetcodeIcon;
