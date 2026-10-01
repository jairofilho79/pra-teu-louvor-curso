# Pra Teu Louvor — Curso e Apostila Digital de Técnica Vocal

> **Igreja Cristã Maranata**  
> *Ministrado pela Prof.ª Paula Santana*

Ambiente de aprendizado digital e interativo desenvolvido a partir da playlist oficial de técnica vocal **Pra Teu Louvor**, transmitida pela Igreja Cristã Maranata (YouTube e TV Manaim).

---

## 🌟 Destaques do Projeto

- **58 Aulas Estruturadas em 8 Módulos:** Do entendimento do corpo como instrumento à aplicação prática em hinos do repertório da igreja.
- **Sincronização de Vídeo e Texto:** Player oficial do YouTube com botões que pulam diretamente para os segundos exatos de cada explicação anatômica ou exercício.
- **Apostila Completa de 144 Páginas em PDF:** Livro didático oficial com ilustrações anatômicas de alta fidelidade, tabelas de respiração e notas pedagógicas, disponível para download direto.
- **Zero Backend e Privacidade Total:**
  - Marcação de aulas concluídas e aulas favoritas salvas no `localStorage`.
  - **Sincronização via Link Pessoal (`#sync=...`):** Troque de celular, computador ou tablet sem criar login ou senha; basta gerar o link de sincronização com timestamp e enviar via AirDrop, QuickShare ou WhatsApp.
- **Design de Alta Performance:** Desenvolvido com Astro 5 e Starlight, com busca instantânea via Pagefind, modo escuro/claro e suporte completo a dispositivos móveis.

---

## 📚 Estrutura Curricular (8 Módulos)

1. **Módulo 1:** O Instrumento é Você: Fundamentos da Voz e da Produção Vocal (6 aulas)
2. **Módulo 2:** Respiração, Apoio e Sustentação da Voz (8 aulas)
3. **Módulo 3:** Energia, Fonte e Filtro: Os Três Subsistemas da Produção Vocal (5 aulas)
4. **Módulo 4:** Registros, Modos de Fonação e Extensão Vocal (5 aulas)
5. **Módulo 5:** Articuladores e Musculatura do Trato Vocal (6 aulas)
6. **Módulo 6:** Vogais e Consoantes: O Texto Cantado (7 aulas)
7. **Módulo 7:** Rotina do Cantor: Aquecimento, Condicionamento, Saúde e Individualidade (8 aulas)
8. **Módulo 8:** Do Estudo ao Culto: Teoria Musical e Repertório de Louvor (13 aulas)

---

## 🛠️ Tecnologias Utilizadas

- [Astro 5](https://astro.build/)
- [Starlight](https://starlight.astro.build/)
- [Pagefind](https://pagefind.app/)
- [Cloudflare Pages](https://pages.cloudflare.com/)

---

## 🚀 Como Executar Localmente

### 1. Clonar o repositório e instalar dependências
```bash
git clone https://github.com/jairofilho79/pra-teu-louvor-curso.git
cd pra-teu-louvor-curso
npm install
```

### 2. Rodar o servidor de desenvolvimento
```bash
npm run dev
```
Acesse `http://localhost:4321` no seu navegador.

### 3. Gerar a build de produção
```bash
npm run build
```
Os arquivos estáticos otimizados serão gerados na pasta `dist/`.

---

## ☁️ Deploy no Cloudflare Pages

O projeto pode ser implantado no Cloudflare Pages via Git (conectando este repositório do GitHub) ou via Wrangler CLI:

```bash
npx wrangler pages deploy dist --project-name=pra-teu-louvor
```

**Configurações recomendadas no painel do Cloudflare Pages:**
- **Framework preset:** `Astro`
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Node.js version:** `20` ou superior

---

## 📄 Créditos e Licença
Conteúdo pedagógico e ministrações: **Prof.ª Paula Santana** / **Igreja Cristã Maranata**.
Desenvolvimento da plataforma e curadoria: Projeto voluntário dedicado à edificação dos irmãos e grupos de louvor.
