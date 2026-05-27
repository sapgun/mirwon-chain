# MirWon Chain

MirWon Chain is an institution-grade KRW stablecoin chain designed for regulated digital finance, real-world asset settlement, and liquidity infrastructure connected to the Korean won.

The project presents a Cosmos SDK + Ethermint hybrid architecture: Cosmos-native interoperability and governance with EVM-compatible execution for builders, institutions, and liquidity applications.

## Vision

MirWon Chain aims to become trusted KRW-denominated settlement infrastructure for Web3 and institutional finance.

Korean won liquidity is deeply important in Asian financial markets, but onchain KRW infrastructure remains fragmented. MirWon Chain is designed to provide a compliant, transparent, and extensible foundation for KRW stablecoin issuance, delta-neutral liquidity strategies, RWA integration, staking, validator operations, and developer access.

## Core Thesis

MirWon Chain combines three product pillars:

- KRW stablecoin settlement
- Delta-neutral liquidity and treasury strategy
- RWA-backed institutional finance

The chain is designed for environments where price stability, capital efficiency, operational transparency, and institutional-grade controls matter.

## Architecture

### Cosmos SDK

MirWon Chain is positioned as a modular app-chain built around Cosmos SDK principles:

- Sovereign chain architecture
- Validator and staking modules
- Governance-controlled protocol upgrades
- IBC-ready interoperability
- Purpose-built modules for KRW settlement and asset operations

### Ethermint

Ethermint compatibility enables EVM-based applications to deploy on MirWon without abandoning familiar tooling.

This supports:

- Solidity smart contracts
- EVM wallets and developer tooling
- DeFi integrations
- Stablecoin liquidity applications
- Bridge and cross-chain settlement flows

### Hybrid Design

The Cosmos SDK + Ethermint model allows MirWon Chain to serve both institutional infrastructure and developer ecosystems.

Cosmos provides sovereignty and interoperability. Ethermint provides EVM compatibility and faster application adoption.

## Product Modules

### KRW Stablecoin Layer

MirWon Chain is centered on KRW-denominated stablecoin infrastructure.

The stablecoin layer is designed around:

- KRW reserve alignment
- Institutional issuance and redemption flows
- Transparent supply monitoring
- Settlement-ready token mechanics
- Compliance-aware operating models

### Delta-Neutral Strategy Layer

MirWon emphasizes delta-neutral strategy as a core mechanism for liquidity resilience.

The application experience includes dashboards and simulators for:

- Market-neutral treasury positioning
- Risk-adjusted yield strategy
- Exposure balancing
- Liquidity deployment
- Strategy performance monitoring

### RWA Integration

MirWon Chain is designed to connect tokenized real-world assets with KRW-based liquidity.

Potential RWA categories include:

- Government bonds
- Corporate bonds
- Real estate assets
- Institutional credit products
- Treasury and money-market instruments

RWA integration is a key part of MirWon's long-term stablecoin reserve and liquidity strategy.

### Validator and Staking Layer

The validator console and staking dashboard represent the operational layer of the network.

The validator model is intended for verified institutions and professional operators that support:

- Network security
- Governance participation
- Delegation and staking
- Operational transparency
- Institutional-grade infrastructure standards

## Current Application Scope

This repository currently contains the MirWon frontend MVP.

Implemented application areas include:

- Public landing page
- Liquidity dashboard
- Delta-neutral strategy page
- Staking dashboard
- Validator console
- Developer portal
- Explorer interface
- Community and events pages
- MirWon Labs section
- About page
- Deposit and swap modal flows
- KRW stablecoin visual identity
- Dragon-themed MirWon brand assets
- shadcn/ui-based interface system

The deployed reference build is available at:

```txt
https://mirwon-chain-x5mu.vercel.app/
```

## Tech Stack

Frontend:

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Recharts
- Sonner
- Lucide React

Protocol direction:

- Cosmos SDK
- Ethermint
- IBC
- EVM-compatible smart contracts
- KRW stablecoin modules
- RWA and treasury strategy modules

## Project Structure

```txt
app/
  about/                    MirWon overview and narrative
  community/                Community, forum, and events routes
  delta-neutral-strategy/   Strategy dashboard and simulation
  developer-portal/         Docs and explorer entry points
  liquidity-dashboard/      KRW liquidity and market dashboard
  mirwon-labs/              Research and innovation section
  staking-dashboard/        Staking and validator participation
  validator-console/        Validator operations interface
  globals.css               Global app styles
  layout.tsx                Root app layout
  page.tsx                  Landing page

components/
  landing/                  Landing page sections
  layout/                   Shared dashboard and transition layout
  modals/                   Deposit, swap, and token selector modals
  ui/                       shadcn/ui primitives
  liquidity-dashboard.tsx   Dashboard component
  delta-neutral-simulator.tsx
  strategy-chart.tsx
  mini-chart.tsx

public/
  images/                   MirWon logo and dragon assets

styles/
  globals.css               Shared global styles
```

## Development

Install dependencies:

```bash
pnpm install
```

Run the local development server:

```bash
pnpm dev
```

Build for production:

```bash
pnpm build
```

Start production mode:

```bash
pnpm start
```

## Roadmap

Near-term development direction:

- Formalize KRW stablecoin module requirements
- Add Cosmos SDK module architecture documentation
- Define Ethermint/EVM deployment model
- Expand liquidity and delta-neutral strategy simulation
- Add RWA reserve and asset reporting pages
- Connect validator console to live chain data
- Add explorer integrations
- Prepare institutional onboarding documentation

## Status

MirWon Chain is currently represented by a frontend MVP and product architecture direction.

The zip base code defines the official application structure and visual identity for the current MirWon project. Future development should preserve the KRW stablecoin, institutional finance, Cosmos SDK + Ethermint, delta-neutral strategy, and RWA integration narrative.
