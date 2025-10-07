import { useSearchParams, useNavigate } from "react-router-dom";
import { Search, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const keyword = searchParams.get("q") || "";
  const [searchTerm, setSearchTerm] = useState(keyword);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4 mb-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/")}
              className="rounded-full"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <h1 className="text-xl font-bold">오늘의 상품 - 검색</h1>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-6 mb-4">
            <button className="text-primary font-semibold pb-2 border-b-2 border-primary">
              키워드 분석
            </button>
            <button className="text-muted-foreground pb-2">수수료 계산기</button>
            <button className="text-muted-foreground pb-2">문의함</button>
          </div>

          {/* Category and Search */}
          <div className="flex gap-2">
            <select className="px-4 py-2 rounded-lg border border-input bg-background text-sm">
              <option>경제 카테고리</option>
            </select>
            <div className="flex-1 flex gap-2">
              <Input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                placeholder="검색어를 입력하세요"
                className="flex-1"
              />
              <Button onClick={handleSearch} className="bg-primary">
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 max-w-4xl">
        {/* 검색 결과 판단 */}
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-3">검색 결과 판단</h2>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-12 h-12 bg-foreground rounded flex items-center justify-center text-background font-bold">
                랭킹
              </div>
              <div>
                <div className="font-bold">블로그 명칭</div>
                <div className="text-sm text-muted-foreground">검색 개수: 1,234</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="border border-border rounded-lg p-3">
                <div className="text-xs text-muted-foreground mb-1">날 수 분석</div>
                <div className="font-bold">날 상단함</div>
              </div>
              <div className="border border-border rounded-lg p-3">
                <div className="text-xs text-muted-foreground mb-1">업종 분석</div>
                <div className="font-bold">업종 ▼</div>
              </div>
              <div className="border border-border rounded-lg p-3">
                <div className="text-xs text-muted-foreground mb-1">업종 분석</div>
                <div className="font-bold">업종 판매</div>
              </div>
              <div className="border border-border rounded-lg p-3">
                <div className="text-xs text-muted-foreground mb-1">수검형 상세 판단</div>
                <div className="font-bold">수검형 판매경</div>
              </div>
              <div className="border border-border rounded-lg p-3">
                <div className="text-xs text-muted-foreground mb-1">수검형 사제 검색</div>
                <div className="font-bold">수검형 사제 검색</div>
              </div>
            </div>
          </div>
        </section>

        {/* 발고 키려드 업계 */}
        <Button variant="secondary" className="w-full mb-6 h-12">
          발고 키려드 업계
        </Button>

        {/* 상품 분석 */}
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-3">상품 분석</h2>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="grid grid-cols-2 gap-3">
              <div className="border border-border rounded-lg p-3">
                <div className="text-xs text-muted-foreground mb-1">TOP 10 상품 목록가</div>
                <div className="font-bold">TOP 10 상품 목록가</div>
              </div>
              <div className="border border-border rounded-lg p-3">
                <div className="text-xs text-muted-foreground mb-1">TOP 10 목표 해료</div>
                <div className="font-bold">TOP 10 목표 해료</div>
              </div>
              <div className="border border-border rounded-lg p-3">
                <div className="text-xs text-muted-foreground mb-1">날 수 목록가</div>
                <div className="font-bold">날 수 목록가</div>
              </div>
              <div className="border border-border rounded-lg p-3">
                <div className="text-xs text-muted-foreground mb-1">목표 관리 목표라스트</div>
                <div className="font-bold">목표 관리 목표라스트</div>
              </div>
            </div>
          </div>
        </section>

        {/* 지검 검색 분석 */}
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-3">지검 검색 분석</h2>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="grid grid-cols-2 gap-3">
              <div className="border border-border rounded-lg p-3">
                <div className="text-xs text-muted-foreground mb-1">수검형 태테밈</div>
                <div className="font-bold">수검형 태테밈</div>
              </div>
              <div className="border border-border rounded-lg p-3">
                <div className="text-xs text-muted-foreground mb-1">수검형 대로 분석</div>
                <div className="font-bold">수검형 대로 분석</div>
              </div>
              <div className="border border-border rounded-lg p-3">
                <div className="text-xs text-muted-foreground mb-1">가저 분석 발리 분석</div>
                <div className="font-bold">가저 분석 발리 분석</div>
              </div>
              <div className="border border-border rounded-lg p-3">
                <div className="text-xs text-muted-foreground mb-1">가저 대려 발리 분석</div>
                <div className="font-bold">가저 대려 발리 분석</div>
              </div>
              <div className="border border-border rounded-lg p-3 col-span-2">
                <div className="text-xs text-muted-foreground mb-1">검색어 가저 검색 발고</div>
                <div className="font-bold">검색어 가저 검색 발고</div>
              </div>
            </div>
          </div>
        </section>

        {/* 카테고 분석 */}
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-3">카테고 분석</h2>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="grid grid-cols-2 gap-3">
              <div className="border border-border rounded-lg p-3">
                <div className="text-xs text-muted-foreground mb-1">날 상단함</div>
                <div className="font-bold">날 상단함</div>
              </div>
              <div className="border border-border rounded-lg p-3">
                <div className="text-xs text-muted-foreground mb-1">상품 ∙구▷</div>
                <div className="font-bold">상품 ∙구▷</div>
              </div>
              <div className="border border-border rounded-lg p-3">
                <div className="text-xs text-muted-foreground mb-1">날구 판단</div>
                <div className="font-bold">상품 판고</div>
              </div>
              <div className="border border-border rounded-lg p-3">
                <div className="text-xs text-muted-foreground mb-1">날구 대략 상품</div>
                <div className="font-bold">날구 대략 상품</div>
              </div>
            </div>
          </div>
        </section>

        {/* 구매 */}
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-3">구매</h2>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="grid grid-cols-2 gap-3">
              <div className="border border-border rounded-lg p-3">
                <div className="text-xs text-muted-foreground mb-1">날 수 목록가</div>
                <div className="font-bold">날 수 목록가</div>
              </div>
              <div className="border border-border rounded-lg p-3">
                <div className="text-xs text-muted-foreground mb-1">프루 상단 목록</div>
                <div className="font-bold">프루 상단 목록</div>
              </div>
              <div className="border border-border rounded-lg p-3">
                <div className="text-xs text-muted-foreground mb-1">포루 판단</div>
                <div className="font-bold">포루경금음 따음</div>
              </div>
              <div className="border border-border rounded-lg p-3">
                <div className="text-xs text-muted-foreground mb-1">포루 검정금드</div>
                <div className="font-bold">오경경금드 따음</div>
              </div>
              <div className="border border-border rounded-lg p-3">
                <div className="text-xs text-muted-foreground mb-1">포검리검 상품</div>
                <div className="font-bold">포검리검 따음</div>
              </div>
              <div className="border border-border rounded-lg p-3">
                <div className="text-xs text-muted-foreground mb-1">히러떠디스픔</div>
                <div className="font-bold">히러떠디스픔 따음</div>
              </div>
            </div>
          </div>
        </section>

        {/* 경정 상품 */}
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-3">경정 상품</h2>
          <div className="border border-border rounded-lg p-4 bg-card">
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="flex items-center justify-between border border-border rounded-lg p-3">
                  <div>
                    <div className="text-xs text-muted-foreground">상품명 및 상품</div>
                    <div className="font-bold">상품명</div>
                  </div>
                  <Button variant="outline" size="sm">
                    매입가이
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SearchResults;
