function Circle({ size, color , ops , c}: any) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx={c}
        cy={c}
        r={c-2}
        stroke={color}
        strokeOpacity={ops}
        strokeWidth={"1"}
      />
    </svg>
  );
}

export default Circle


