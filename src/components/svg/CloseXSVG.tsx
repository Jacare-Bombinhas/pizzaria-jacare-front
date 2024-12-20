
type ArrowSVGProps = {
  onClick?: React.MouseEventHandler<SVGSVGElement> | undefined,
  className?: string | undefined
}

export default function CloseXSVG({onClick, className}: ArrowSVGProps) {
  return (
    <svg onClick={onClick} className={className} width={20} height={20} viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000" strokeWidth="0.5200000000000006">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier"> 
        <path fill="#ff0000" d="M9,0a9,9,0,1,0,9,9A9,9,0,0,0,9,0Zm4.707,12.293a1,1,0,1,1-1.414,1.414L9,10.414,5.707,13.707a1,1,0,0,1-1.414-1.414L7.586,9,4.293,5.707A1,1,0,0,1,5.707,4.293L9,7.586l3.293-3.293a1,1,0,0,1,1.414,1.414L10.414,9Z"></path> 
      </g>
    </svg>
  )
}
