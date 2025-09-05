# Dual.Infodose · Mobile UNO (Starter Final)

**Data:** 2025-09-05

Starter PWA **mobile-only (vertical)** com três conectores prontos:

- **Local (WASM)**: simulado (TTS via SpeechSynthesis). Futuro: Pyodide/PyScript.
- **Nuvem (n8n)**: orquestra TTS, RAG leve, Missão 78K. Endpoint configurável.
- **Neural (Servidor Python)**: TTS neural e RAG grande.

## Como usar
1. Abra `index.html` no navegador (iOS/Android/desktop).
2. Instale como App (Adicionar à Tela de Início) para experiência PWA.
3. No app, toque **Conectores** e escolha o modo:
   - **Local**: teste imediato, offline (fala simples).
   - **Nuvem**: cole a URL base do seu **n8n** (ex.: `https://n8n.seudominio/dual`) e `Testar`.
   - **Neural**: cole a URL base do seu servidor (ex.: `https://api.seuservidor`) e `Testar`.

### Execuções (◉)
- **TTS Nova**: toca voz local/simulada ou via n8n/servidor.
- **RAG Elysha**: anexa um PDF com **⧉ PDF** e peça “Elysha RAG: …”.
- **Missão 78K**: gera uma missão curta com haptics/ritual.

> Se o endpoint não estiver configurado, o app **simula** respostas para você validar a UX de ponta a ponta.

## Segurança
- Loader de componentes remotos usa **iframe sandbox**.
- Em produção, mantenha chaves/credenciais no **servidor** (n8n/neural) e use **tokens efêmeros** no PWA.

## Offline
- `sw.js` faz cache-first dos arquivos estáticos.
- Partículas são internas (sem CDN). Use **Performance: Low** em aparelhos fracos.

## Próximos passos sugeridos
- Conectar **n8n** com rotas `/intent` para TTS/RAG/Missão.
- Incluir Pyodide/PyScript quando quiser Local (WASM) **de verdade**.
- Expandir “Pulsos” com export JSON e tags UNO/DUAL/TRINITY.
