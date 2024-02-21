interface PopularRankingProps {
    popular?: boolean;
    ranking?: number;
}

export const RankingBadge = ({ popular, ranking }: PopularRankingProps) => {
    return (
        <>
            {popular && (
                <div className="w-5 h-5 ml-[6px] bg-white rounded-md border border-solid border-neutral-100 flex-col justify-center items-center inline-flex">
                    <div className="text-neutral-800 text-[11px] font-bold leading-[11px]">
                        {ranking}
                    </div>
                </div>
            )}
        </>
    );
};
