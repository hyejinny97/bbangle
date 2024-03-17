interface PopularRankingProps {
  popular?: boolean;
  ranking?: number;
}

export const RankingBadge = ({ popular, ranking }: PopularRankingProps) => {
  return (
    <>
      {popular && (
        <div className="w-5 h-5 bg-white rounded-md border border-solid border-neutral-100  flex items-center justify-center">
          <div className="text-neutral-800 text-[11px] font-bold leading-[11px]">{ranking}</div>
        </div>
      )}
    </>
  );
};
