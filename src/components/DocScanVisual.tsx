// Portrait visual with a framed circular image replacing the old doc-scan placeholder.

export default function DocScanVisual() {
  return (
    <div
      className="relative mx-auto w-full max-w-[420px] select-none"
      role="img"
      aria-label="Portrait image of Brandon Downer in a circular frame"
    >
      <div className="relative mx-auto h-[320px] w-[320px] overflow-hidden rounded-full border-[4px] border-[#4B4B4B] shadow-[0_8px_30px_rgba(0,0,0,0.08)] sm:h-[380px] sm:w-[380px]">
        <img
          src="/me/unnamed%20(6).jpg"
          alt="Brandon Downer portrait"
          className="h-full w-full object-cover object-center"
        />
      </div>
    </div>
  );
}
