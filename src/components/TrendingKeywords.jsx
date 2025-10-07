import { TrendingUp } from "lucide-react";

const leftKeywords = [
  { rank: 1, keyword: "여아운 17", subtitle: "관련 채널" },
  { rank: 2, keyword: "자금거스", subtitle: "실시간검색" },
  { rank: 3, keyword: "게이스테이션", subtitle: "관련검색대형마켓" },
  { rank: 4, keyword: "부서마", subtitle: "실시간검색" },
  { rank: 5, keyword: "원더스", subtitle: "순위추정" },
  { rank: 6, keyword: "정보샵", subtitle: "실시간검색" },
  { rank: 7, keyword: "올백패션", subtitle: "프리미엄특정픔" },
  { rank: 8, keyword: "슈서샵프롬로", subtitle: "특정텍스" },
  { rank: 9, keyword: "젠타부스25", subtitle: "관련그룹" },
  { rank: 10, keyword: "유이면조성", subtitle: "새로이르게" },
];

const rightKeywords = [
  { rank: 1, keyword: "여아운 17", subtitle: "관련 채널" },
  { rank: 2, keyword: "자금거스", subtitle: "실시간검색" },
  { rank: 3, keyword: "게이스테이션", subtitle: "관련검색대형마켓" },
  { rank: 4, keyword: "부서마", subtitle: "실시간검색" },
  { rank: 5, keyword: "원더스", subtitle: "순위추정" },
  { rank: 6, keyword: "정보샵", subtitle: "실시간검색" },
  { rank: 7, keyword: "올백패션", subtitle: "프리미엄특정픔" },
  { rank: 8, keyword: "슈서샵프롬로", subtitle: "특정텍스" },
  { rank: 9, keyword: "젠타부스25", subtitle: "관련그룹" },
  { rank: 10, keyword: "유이면조성", subtitle: "새로이르게" },
];

export const TrendingKeywords = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-12">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-primary" />
          인기 키워드
        </h2>
      </div>

      <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-1">인기 쇼핑 키워드</h3>
          <p className="text-sm text-muted-foreground">
            쇼핑몰 소비자들이 관심을 많이 가지는 물품 순위 입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">최근 트렌드</h4>
            <div className="space-y-3">
              {leftKeywords.map((item) => (
                <div
                  key={`left-${item.rank}`}
                  className="flex items-start gap-3 hover:bg-muted/50 p-2 rounded-lg transition-colors cursor-pointer"
                >
                  <span className="text-sm font-bold text-muted-foreground min-w-[20px]">
                    {item.rank}
                  </span>
                  <div className="flex-1">
                    <div className="font-medium text-foreground">
                      {item.keyword}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {item.subtitle}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">추천 트렌드</h4>
            <div className="space-y-3">
              {rightKeywords.map((item) => (
                <div
                  key={`right-${item.rank}`}
                  className="flex items-start gap-3 hover:bg-muted/50 p-2 rounded-lg transition-colors cursor-pointer"
                >
                  <span className="text-sm font-bold text-muted-foreground min-w-[20px]">
                    {item.rank}
                  </span>
                  <div className="flex-1">
                    <div className="font-medium text-foreground">
                      {item.keyword}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {item.subtitle}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
