# Antigos de Pouso

Experiência digital premium e acervo histórico da comunidade Antigos de Pouso, em Pouso Redondo — Santa Catarina.

## Stack
- Next.js 15, React 19 e TypeScript
- Tailwind CSS
- GSAP + ScrollTrigger
- Lucide React
- Neon PostgreSQL (integração pendente)
- S3-compatible object storage (integração pendente)
- Sharp (pipeline de imagens pendente)

## Desenvolvimento
A aplicação utiliza a porta **3333** por padrão.

```bash
npm install
npm run dev
```

Acesse: http://localhost:3333

## Build e produção
```bash
npm run typecheck
npm run build
npm run start
```

O servidor de produção também utiliza a porta 3333.

## Configuração
Copie `.env.example` para `.env.local` e preencha as credenciais dos serviços. Nunca envie segredos ao Git.

## Estado atual
A primeira etapa entrega a fundação visual pública responsiva, navegação mobile e animações GSAP com limpeza de contexto. O acervo ainda não possui fotografias cadastradas; por isso, a interface apresenta um estado vazio real em vez de inventar imagens ou encontros.

Próximas etapas: modelagem PostgreSQL, autenticação administrativa, armazenamento de objetos, processamento de uploads com Sharp, APIs CRUD e integração do conteúdo dinâmico.
