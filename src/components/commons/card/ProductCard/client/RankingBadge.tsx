interface PopularRankingProps {
    popular?: boolean;
    ranking?: number;
}

export const RankingBadge = ({ popular, ranking }: PopularRankingProps) => {
    return (
        <>
            {popular && (
                <div className="absolute z-10 top-[6px] left-[6px] w-5 h-5 bg-white rounded-md border border-solid border-neutral-100 flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className="text-neutral-800 text-[11px] font-bold leading-[11px]">
                        {ranking}
                    </div>
                </div>
            )}
        </>
    );
};
