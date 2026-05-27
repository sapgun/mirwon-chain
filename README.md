# MirWon Chain

**대한민국 원화(KRW) 기반 기관급 스테이블코인 체인**

Cosmos SDK + Ethermint 하이브리드 체인으로, **안정성**과 **EVM 호환성**을 동시에 제공하는 차세대 스테이블코인 인프라입니다.

![MirWon](https://github.com/sapgun/mirwon-chain/blob/main/public/images/mirwon-logo.png)

## 🚀 핵심 가치

- **KRW 1:1 Peg** — 기관 예치금을 기반으로 한 강력한 페그 메커니즘
- **델타중립 전략** — 시장 변동성에 강한 안정적 가치 보전
- **RWA 연동** — 국채, 회사채, 부동산 등 실물 자산 토큰화 지원
- **기관 중심 거버넌스** — 검증된 금융기관이 참여하는 신뢰 중심 체인
- **EVM + Cosmos IBC** — 이더리움 생태계와 코스모스 생태계를 동시에 연결

## 🛠 기술 스택

- **Blockchain Framework**: Cosmos SDK + Ethermint
- **언어**: Go
- **EVM 호환**: Ethermint (Solidity 스마트 컨트랙트 지원)
- **인터체인**: IBC (Inter-Blockchain Communication)
- **프론트엔드**: Next.js 15 + TypeScript + Tailwind + shadcn/ui
- **지갑**: Privy + Wagmi + Viem
- **오라클**: Chainlink / Pyth (예정)

## 📁 프로젝트 구조

```bash
mirwon-chain/
├── x/mirwon/              # MirWon 체인 핵심 모듈
│   ├── keeper/            # 상태 관리 및 로직
│   ├── types/             # 타입 및 메시지 정의
│   ├── proto/             # Protocol Buffers
│   └── module.go
├── app/                   # Cosmos 앱 설정
├── cmd/mirwond/           # 체인 실행 바이너리
├── scripts/               # 배포 및 테스트 스크립트
├── frontend/              # Next.js 대시보드 (mirwon-chain-frontend)
├── docs/                  # 아키텍처 및 백서
└── Makefile
✨ 현재 구현 현황

Cosmos SDK 기반 체인 Genesis 및 기본 모듈 완료
MirWon 스테이블코인 mint/burn 로직 설계 완료
Ethermint EVM 호환 레이어 적용
Next.js 기반 현대적인 대시보드 UI (유동성, 스왑, RWA 대시보드)
MirWon Labs 연구 프로젝트 연동 준비 완료

🗺 Roadmap
Phase 1 — Foundation (진행 중)

체인 Genesis 및 안정적 노드 운영
KRW Peg 스테이블코인 기본 모듈
기관 밸리데이터 온보딩

Phase 2 — Stability & RWA

델타중립 전략 엔진
RWA (국채/회사채) 토큰화
AI 기반 리스크 관리 시스템

Phase 3 — Ecosystem Expansion

IBC 브릿지 및 크로스체인 자산 이동
DeFi 프로토콜 (Lending, DEX, Yield)
규제 준수 KYC/DID 연동

Phase 4 — Global Leadership

글로벌 기관 파트너십
양자 내성 보안 강화
한국 디지털 원화 인프라 표준화

📊 MirWon Labs 연계 프로젝트

RWA-KRW Bond Tokens — 토큰화된 한국 국채/회사채
AI Quant Hedging Engine — 자동 리스크 헤징
Institutional Credit Protocol — 기관 신용 대출

🛠 로컬 개발 환경 설정
Bash# 의존성 설치
make install

# 체인 빌드
make build

# 체인 초기화
make init

# 노드 실행
make start
📄 문서

Whitepaper
아키텍처 다이어그램
개발자 가이드

🤝 기여하기
MirWon Chain은 대한민국 디지털 금융의 미래를 함께 만들어가는 오픈 프로젝트입니다.
버그 리포트, 코드 기여, 아이디어 제안 모두 환영합니다.
