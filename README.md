# MirWon Chain — 대한민국 원화 기반 스테이블코인 체인

**Cosmos SDK + Ethermint 기반 하이브리드 체인**

MirWon Chain은 대한민국 원화(KRW)를 1:1로 뒷받침하는 **기관 중심 스테이블코인 체인**입니다.  
델타중립 전략과 RWA(Real World Asset) 연동을 통해 안정성과 실물 경제 연결성을 동시에 추구합니다.

## 🚀 핵심 특징
- **KRW 1:1 Peg** — 기관 예치금을 기반으로 한 안정적 페그
- **Cosmos SDK + Ethermint** — IBC 호환성과 EVM 호환성을 동시에 제공
- **델타중립 전략** — 시장 변동성에 강한 스테이블코인 운영
- **RWA 연동** — 국채, 회사채, 부동산 등 실물 자산 토큰화 지원
- **기관 중심 거버넌스** — 검증된 기관 밸리데이터 참여

## 🛠 Tech Stack
- **Framework**: Cosmos SDK + Ethermint
- **언어**: Go
- **EVM 호환**: Ethermint
- **IBC**: Cosmos IBC
- **프론트엔드**: Next.js + Wagmi (mirwon-chain-frontend)

## 📁 프로젝트 구조
x/mirwon/          # MirWon 체인 핵심 모듈
├── keeper/        # 상태 관리
├── types/         # 타입 정의
├── proto/         # 프로토콜 버퍼
├── client/        # CLI
scripts/           # 배포 및 유틸리티 스크립트
docs/              # 아키텍처 및 운영 문서
text## 🏗 현재 상태
- Cosmos SDK 기반 체인 기본 구조 완성
- MirWon 스테이블코인 모듈 설계 완료
- Ethermint EVM 호환성 적용
- IBC 연동 준비 완료

## 🔮 Roadmap
**Phase 1** — 체인 Genesis + 기본 스테이블코인 모듈  
**Phase 2** — RWA 연동 + 델타중립 전략 구현  
**Phase 3** — 기관 밸리데이터 온보딩 + 거버넌스  
**Phase 4** — 크로스체인 브릿지 + DeFi 생태계 확장

## 📜 Whitepaper & 문서
- [MirWon Whitepaper](docs/whitepaper.md)
- [아키텍처 다이어그램](docs/architecture.md)

---
