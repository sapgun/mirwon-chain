## **MirWon Chain: `README.md`**

-----

다음은 미르원 프로젝트의 GitHub 리포지토리(`mirwon-chain`)에 최적화된 `README.md` 파일의 내용입니다. 프로젝트의 비전, 기술적 깊이, 투명성을 한눈에 보여주어 개발자와 기관 투자자 모두에게 강력한 신뢰를 전달하도록 설계되었습니다.

````markdown
# 미르원 체인 (MirWon Chain)

[cite_start]![MirWon Logo](https://raw.githubusercontent.com/your-org/mirwon-chain/main/docs/assets/mirwon-logo.png) 대한민국 디지털 금융의 새로운 비전: 기관 친화형 합성 원화(KRW) 스테이블코인 생태계 [cite: 617, 621, 1574]

[![Build Status](https://github.com/your-org/mirwon-chain/actions/workflows/ci.yml/badge.svg)](https://github.com/your-org/mirwon-chain/actions/workflows/ci.yml)
[![Go Report Card](https://goreportcard.com/badge/github.com/your-org/mirwon-chain)](https://goreportcard.com/report/github.com/your-org/mirwon-chain)
[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Discord](https://img.shields.io/discord/your-discord-id?logo=discord)](https://discord.gg/your-invite-link)
[![Twitter](https://img.shields.io/twitter/follow/mirwon_official?style=social)](https://twitter.com/mirwon_official)

> **[공식 문서](https://docs.mirwon.io) | [백서 v2.3](https://mirwon.io/whitepaper) | [웹사이트](https://mirwon.io)

---

미르원(MirWon)은 단순한 원화 스테이블코인이 아닙니다. [cite_start]우리는 대한민국 금융의 신뢰성과 Web3 기술의 무한한 가능성을 융합하여, 국내외 자본 흐름을 위한 새로운 디지털 금융 동맥(Digital Financial Artery)을 구축하는 것을 목표로 합니다[cite: 530, 531].

[cite_start]본 리포지토리는 코스모스(Cosmos) SDK 기반의 독립적인 고성능 메인넷 '미르원 체인'의 공식 구현체입니다[cite: 58, 531].

## ✨ 핵심 원칙 및 기능

미르원은 **안정성, 투명성, 확장성, 그리고 공공 기여**라는 네 가지 핵심 가치를 기술적으로 구현합니다.

| 원칙 | 핵심 기능 | 설명 |
| :--- | :--- | :--- |
| 견고한 안정성 | **AI 기반 델타 뉴트럴 헤징** | [cite_start]ETH, BTC 등 변동성 자산을 담보로 사용하되 [cite: 65, 1707, 1708][cite_start], AI 엔진이 파생상품 숏 포지션을 자동 관리하여 담보 가치 변동 리스크를 원천 제거합니다[cite: 65, 582, 691]. |
| **극대화된 투명성** | **실시간 준비금 증명 (PoR)** | [cite_start]모든 담보 자산과 부채 현황, 헤징 포지션을 누구나 실시간으로 검증할 수 있는 온체인 대시보드를 제공합니다[cite: 70, 513]. |
| **Web3 대중화** | **가스리스(Gasless) 결제** | [cite_start]수수료 대납(Meta-transaction) 기술을 통해 사용자가 블록체인의 복잡성 없이 기존 간편결제와 동일한 UX를 경험하게 합니다[cite: 67, 515, 634]. |
| **기관 중심 신뢰** | **허가형 밸리데이터 네트워크** | [cite_start]국내 주요 금융기관(은행, 증권사)이 직접 검증인(Validator)으로 참여하여 전통 금융 수준의 보안과 신뢰를 보장합니다[cite: 60, 63, 633, 1618]. |
| **지속 가능한 국가 기여**| **국채 소각 메커니즘** | [cite_start]세계 최초로 프로토콜 운영 수익의 일부(30%)를 대한민국 국채 매입 및 소각에 사용하여 국가 재정 건전성에 직접 기여합니다[cite: 61, 73, 339, 751]. |

## 🏗️ 기술 아키텍처

[cite_start]미르원 체인은 성능, 보안, 상호운용성의 균형을 맞춘 다층적 하이브리드 아키텍처를 채택합니다[cite: 156].

```mermaid
graph TD
    subgraph Application Layer (L-2)
        A[Ethermint EVM<br/>(Solidity DApps)]
        B[CosmWasm VM<br/>(Rust DApps)]
    end

    subgraph Core Layer (L-1)
        C[MirWon Custom Modules<br/>(x/mirwon, x/hedging, x/governance)]
        D[Cosmos SDK<br/>(Auth, Bank, Staking)]
        E[Tendermint Core<br/>(DPoS + BFT Consensus)]
    end

    subgraph Interoperability Layer (L-0)
        F[IBC Protocol]
    end

    subgraph Off-chain Services
        G[AI Hedging Engine<br/>(CEX/DEX Integration)]
        H[Institutional Validators<br/>(Banks, Securities)]
    end

    A & B --> C & D
    C & D --> E
    E --> F
    C -.-> G
    E -.-> H
    F <--> I[Other Cosmos Chains<br/>(dYdX, Injective)]

    style A fill:#cde4ff
    style B fill:#cde4ff
    style G fill:#fff2cc
````

  * [cite\_start]**Consensus & Core (L-1)**: Tendermint Core의 DPoS 합의 알고리즘을 통해 **10,000 TPS**와 **3초의 블록 생성 시간**을 달성합니다[cite: 157, 676, 677].
  * [cite\_start]**Application (L-2)**: Ethermint EVM을 탑재하여 이더리움 DApp과의 완벽한 호환성을 제공합니다[cite: 157, 1682].
  * [cite\_start]**Interoperability (L-0)**: IBC 프로토콜을 통해 다른 코스모스 생태계 체인과 안전하게 자산을 이전합니다[cite: 157].

## 🚀 프로젝트 현황

**현재 `Phase 1: 기반 구축 (Foundation)` 단계가 진행 중입니다.**

  * ✅ 미르원 체인 메인넷 v1.0 출시
  * ✅ 5개 이상의 핵심 금융기관 밸리데이터 온보딩
  * ✅ 실시간 Proof of Reserve v1.0 대시보드 공개

[cite\_start]자세한 내용은 [전체 로드맵](https://www.google.com/search?q=https://docs.mirwon.io/roadmap)을 참고하십시오[cite: 420, 790].

## ⚡ Quick Start (시작하기)

미르원 체인 노드를 로컬 환경에서 실행하고 테스트하는 방법입니다.

### 전제 조건

  - [Go](https://golang.org/doc/install) 버전 1.19+ 설치
  - [Git](https://git-scm.com/downloads) 설치
  - C 컴파일러 (e.g., `gcc`)

### 설치 및 실행

```bash
# 1. 리포지토리 복제
git clone [https://github.com/your-org/mirwon-chain.git](https://github.com/your-org/mirwon-chain.git)
cd mirwon-chain

# 2. 바이너리 설치
make install

# 3. 노드 초기화 (my-node-name을 원하는 이름으로 변경)
mirwond init my-node-name --chain-id mirwon-1

# 4. 제네시스 파일 다운로드 (테스트넷 또는 메인넷)
# 예: wget [https://raw.githubusercontent.com/your-org/networks/main/mirwon-1/genesis.json](https://raw.githubusercontent.com/your-org/networks/main/mirwon-1/genesis.json) -O $HOME/.mirwond/config/genesis.json

# 5. 노드 시작
mirwond start
```

이제 로컬에서 미르원 체인 노드가 실행됩니다. 더 자세한 내용은 [개발자 가이드](https://www.google.com/search?q=https://docs.mirwon.io/developers)를 확인하십시오.

## 🧩 핵심 모듈 (Custom Modules)

미르원의 고유 기능은 `x/` 디렉토리의 커스텀 모듈을 통해 구현됩니다.

  * **`x/mirwon`**: MRW 스테이블코인의 발행(mint) 및 소각(burn) 로직을 관장합니다.
  * [cite\_start]**`x/hedging`**: 다수의 파생상품 거래소와 연동하여 델타 뉴트럴 포지션을 관리하는 특수 모듈입니다[cite: 157].
  * [cite\_start]**`x/gasless`**: 사용자의 가스비 부담을 제거하는 메타 트랜잭션(meta-transaction)을 처리합니다[cite: 304].
  * [cite\_start]**`x/governance`**: 기관의 전문성을 반영하는 차등 투표 시스템(Multi-Tier Voting)을 구현합니다[cite: 370].
  * [cite\_start]**`x/kyc`**: 온체인 주소와 DID를 연계하여 트래블룰을 지원하고 허가된 주소만 특정 기능에 접근하도록 제어합니다[cite: 157].

## 🧪 테스트

프로젝트의 안정성을 보장하기 위해 포괄적인 테스트 스위트를 운영하고 있습니다.

```bash
# 모든 유닛 및 통합 테스트 실행
make test
```

## 📚 문서

  - **[종합 백서 v2.3](https://www.google.com/url?sa=E&source=gmail&q=https://mirwon.io/whitepaper)**: 미르원의 비전, 경제 모델, 기술 아키텍처에 대한 모든 것을 담고 있습니다.
  - **[기술 문서](https://www.google.com/url?sa=E&source=gmail&q=https://docs.mirwon.io)**: 개발자 가이드, API 명세, 모듈별 상세 설명을 제공합니다.
  - **[PRD (제품 요구사항 정의서)](https://www.google.com/search?q=https://docs.mirwon.io/prd)**: 프로젝트의 기능별 요구사항을 상세히 정의합니다.

## 🤝 기여하기 (Contributing)

미르원은 오픈소스 프로젝트이며, 여러분의 기여를 언제나 환영합니다. 버그 리포트, 기능 제안, 코드 기여 등 어떤 형태의 참여도 좋습니다.

기여를 시작하기 전에 `CONTRIBUTING.md` 파일을 반드시 읽어주십시오. 모든 참여자는 `CODE_OF_CONDUCT.md`를 준수해야 합니다.

## 🌐 커뮤니티

  - **Discord**: [discord.gg/mirwon](https://www.google.com/url?sa=E&source=gmail&q=https://discord.gg/your-invite-link) (개발자 및 기술 토론)
  - **Twitter**: [@mirwon\_official](https://www.google.com/url?sa=E&source=gmail&q=https://twitter.com/mirwon_official) (공식 업데이트 및 뉴스)
  - **Telegram**: [t.me/mirwon\_announcements](https://www.google.com/search?q=https://t.me/mirwon_announcements) (공지 채널)

## 📄 라이선스

MirWon Chain은 Apache 2.0 라이선스에 따라 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참고하십시오.

```
```
