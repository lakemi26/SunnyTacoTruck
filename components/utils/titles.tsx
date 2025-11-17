type titleProps = {
  text: string;
};

export default function Title({ text }: titleProps) {
  return (
    <h2 className="font-popins text-[40px] text-[#E58155] font-semibold lg:text-[60px]">
      {text}
    </h2>
  );
}
