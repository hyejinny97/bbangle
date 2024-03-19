interface PopularRankingProps {
  ranking?: number;
}

export const RankingBadge = ({ ranking }: PopularRankingProps) => {
  return (
    <span className="w-5 h-5 bg-white rounded-md border border-solid border-neutral-100  flex items-center justify-center text-neutral-800 text-[11px] font-bold leading-[11px]">
      {ranking}
    </span>
  );
};
