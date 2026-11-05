# DESIGN.md — Sistema de Design & Diretrizes de Marca: Nexa Brasil

Este documento define os padrões visuais, tokens de design, regras de tipografia, paleta de cores, acessibilidade e tom de voz do **Nexa Brasil** (Núcleo de ex-achievers da Junior Achievement no Brasil). Ele deve ser seguido rigorosamente na construção de interfaces (UI), páginas web, aplicativos e componentes visuais gerados pelo Stitch.

---

## 1. Visão Geral e Identidade da Marca

* **Nome da Marca:** Nexa (ou Nexa Brasil / Nexa [Nome do Estado] por extenso).
* **Natureza do Nome:** "Nexa" é um nome próprio (wordmark), não uma sigla. Deve ser grafado com apenas a inicial maiúscula (**Nexa**), exceto quando todo o bloco de texto estiver em CAIXA ALTA.
* **Gênero Gramatical:** Masculino. Sempre utilize o artigo "o" (*"O Nexa Brasil"*, *"no Nexa"*).
* **Propósito:** Rede de jovens inquietos dedicada ao desenvolvimento e potencialização de habilidades pessoais, promovendo experiências imersivas e conexão com o ecossistema empreendedor.
* **Pilares Visuais e Conceituais:** Conexão, Desenvolvimento e Inspiração.
* **Valores:** Empatia, Transparência, Humildade, Entusiasmo, Energia e Ousadia.

---

## 2. Tom de Voz e Microcopy (UX Writing)

Ao redigir textos para botões, modais, estados vazios (empty states), páginas institucionais ou mensagens de erro:

1. **Convidativa (Protagonista) vs. Complicada (Antagonista):**
   * Use linguagem clara, acessível, cuidadosa e acolhedora. Evite jargões técnicos sem explicação. Equilibre o formal e o informal (próximo, porém sem ser debochado).
2. **Confiável (Protagonista) vs. Autoritária (Antagonista):**
   * Estabeleça diálogos horizontais. Nunca use tons de obrigação, ameaça, sarcasmo ou rispidez (Ex: Em vez de *"Você não pode perder sua única chance!"*, use *"Esta é uma oportunidade incrível! Participe e aproveite \o/"*).
3. **Inquieta (Protagonista) vs. Apática (Antagonista):**
   * Textos dinâmicos, enérgicos e focados em transformação e ação.
4. **Posicionamento Institucional:** O Nexa é **laico e apartidário**. Interfaces não devem conter referências político-partidárias ou comemorações de feriados religiosos.

---

## 3. Paleta de Cores e Tokens

Uma das cores primárias deve desempenhar um **papel dominante** em qualquer tela ou componente. 
> **Recomendação Oficial do Guia:** Utilizar o **Verde Corajoso (`#BBD153`)** como cor de papel dominante nas comunicações, e o **Azul-Escuro Imersivo (`#22404D`)** como substituto do preto para textos principais e fundos escuros.

### 3.1. Cores Primárias
| Nome da Cor | HEX | RGB | CMYK | Papel no UI / Design System |
| :--- | :--- | :--- | :--- | :--- |
| **Verde Corajoso** | `#BBD153` | `187, 209, 83` | `34, 0, 99, 0` | Primária Dominante / Destaque Principal |
| **Água** | `#00C0CA` | `0, 192, 202` | `81, 0, 27, 0` | Primária de Marca / Acentos / Links / Cards |
| **Azul-Escuro Imersivo**| `#22404D` | `34, 64, 77` | `91, 64, 51, 40`| Cor de Texto Principal / Fundos Escuros (Dark Mode) |
| **Branco Startup** | `#FFFFFF` | `255, 255, 255`| `0, 0, 0, 0` | Fundo Principal (Light Mode) / Texto sobre fundo escuro |

### 3.2. Cores Secundárias
Devem ser usadas sempre em conjunto com pelo menos uma cor primária dominante.

| Nome da Cor | HEX | RGB | CMYK | Categoria de Tom |
| :--- | :--- | :--- | :--- | :--- |
| **Turquesa Resiliente** | `#00A0AF` | `0, 160, 175` | `89, 11, 31, 0` | Tom Médio (Apoio primário) |
| **Amarelo Empoderado** | `#E3E24F` | `227, 226, 79` | `15, 0, 99, 0` | Cor de Destaque (Badges, Alertas, Acentos) |
| **Gelo Otimista** | `#C3EDEF` | `195, 237, 239`| `25, 0, 8, 0` | Tom Suave (Fundos secundários, Hover states) |
| **Azul Pálido** | `#99D9DF` | `153, 217, 223`| `43, 0, 15, 0` | Tom Suave (Bordas, Fundos de cards) |
| **Verde Limão** | `#8FC440` | `143, 196, 64` | `55, 0, 100, 0` | Cor de Destaque / Sucesso |
| **Verde Grama** | `#009424` | `0, 148, 36` | `96, 10, 100, 2`| Tom Médio / Indicadores de confirmação |

### 3.3. Variáveis CSS Sugeridas (Design Tokens)
```css
:root {
  /* Primárias */
  --nexa-brave-green: #BBD153;
  --nexa-aqua: #00C0CA;
  --nexa-immersive-dark-blue: #22404D;
  --nexa-startup-white: #FFFFFF;

  /* Secundárias - Tons Suaves */
  --nexa-optimistic-ice: #C3EDEF;
  --nexa-pale-blue: #99D9DF;

  /* Secundárias - Destaques */
  --nexa-empowered-yellow: #E3E24F;
  --nexa-lime-green: #8FC440;

  /* Secundárias - Tons Médios */
  --nexa-resilient-turquoise: #00A0AF;
  --nexa-grass-green: #009424;

  /* Semânticas Padrão para UI */
  --bg-primary: var(--nexa-startup-white);
  --bg-secondary: var(--nexa-optimistic-ice);
  --bg-dark: var(--nexa-immersive-dark-blue);
  --text-primary: var(--nexa-immersive-dark-blue);
  --text-inverse: var(--nexa-startup-white);
  --brand-accent: var(--nexa-brave-green);
  --brand-secondary: var(--nexa-aqua);
}
```

### 3.4. Gradientes Oficiais
* **Regra:** Ângulo fixo de `45deg`, combinando 2 ou 3 cores da paleta. Gradientes apenas com cores secundárias devem ter papel menor.
* **Exemplos de Gradientes Recomendados:**
  * `linear-gradient(45deg, #22404D, #00C0CA)` *(Azul-Escuro Imersivo + Água)*
  * `linear-gradient(45deg, #00C0CA, #BBD153)` *(Água + Verde Corajoso)*
  * `linear-gradient(45deg, #00A0AF, #E3E24F)` *(Turquesa Resiliente + Amarelo Empoderado)*
  * `linear-gradient(45deg, #22404D, #00A0AF)` *(Azul-Escuro Imersivo + Turquesa Resiliente)*
  * `linear-gradient(45deg, #99D9DF, #BBD153)` *(Azul Pálido + Verde Corajoso)*
  * `linear-gradient(45deg, #22404D, #C3EDEF)` *(Azul-Escuro Imersivo + Gelo Otimista)*

---

## 4. Tipografia

A identidade tipográfica é liderada pela fonte **Montserrat**, apoiada por **Work Sans** (ou **Roboto**) para garantir alta legibilidade em blocos de texto corrido na web e mobile.

### 4.1. Famílias Tipográficas
* **Títulos e Cabeçalhos (Obrigatório):** `'Montserrat', sans-serif`
* **Corpo de Texto / UI / Parágrafos Longos:** `'Work Sans', 'Roboto', 'Montserrat', sans-serif`
* **Fontes Decorativas / Especiais (Uso pontual em banners/campanhas):** *JA Textura*, *JA Juvenil*, *JA Multicor*, *JA Contorno*, *JA Stencil*, *Allura*, *Yesteryear*, *Quick Snack*.

### 4.2. Hierarquia e Escala Tipográfica
* **Regra de Ouro:** Limite o design de uma página a no máximo **3 ou 4 tamanhos de fonte**. Quanto maior o tamanho da fonte, menor deve ser o `line-height` (entrelinha).
* **Pesos Principais:**
  * **Título Principal (H1 / Display):** `Montserrat ExtraBold (800)` — Proporção grande, `line-height: 1.1` a `1.2`.
  * **Subtítulos (H2 / H3):** `Montserrat SemiBold (600)` — `line-height: 1.25` a `1.35`.
  * **Parágrafo de Introdução (Lead) / Citações:** `Montserrat SemiBold (600)` — `line-height: 1.4` a `1.5`.
  * **Corpo de Texto (Body Copy):** `Work Sans Regular (400)` ou `Montserrat Regular (400)` / `SemiBold (600)` — `line-height: 1.5` a `1.6`.

---

## 5. Acessibilidade e Contraste (WCAG)

O Nexa é para todas as pessoas. Todo componente gerado no Stitch deve obedecer às seguintes regras:

1. **Tamanhos Mínimos de Fonte na Web:**
   * Texto normal (sem negrito): mínimo de **18pt** (`24px`) ou altamente legível em telas menores (nunca inferior a `16px` em parágrafos padrão de UI, priorizando `18px+`).
   * Texto em negrito (Bold/SemiBold): mínimo de **14pt** (`~18.6px` / `1.125rem`).
2. **Hifenização:** Evite hifenização automática em textos grandes ou títulos (`hyphens: none`).
3. **Espaço em Branco (Whitespace):** Mantenha respiro generoso ao redor de textos, imagens e botões (especialmente em mobile). **Nunca sobreponha textos a outros textos** ou a padrões gráficos ruidosos.
4. **Texto Alternativo (`alt`):** Todas as tags `<img>` devem conter atributos `alt` descritivos (Ex: `"Jovens associados do Nexa sorrindo e colaborando em oficina com post-its"`).

### 5.1. Matriz de Contraste (Fundo vs. Texto/Ícone)
* **Sobre Fundo `#FFFFFF` (Branco Startup) ou `#C3EDEF` (Gelo Otimista):**
  * ✅ **Permitido:** Texto em `#22404D` (Azul-Escuro Imersivo).
  * ⚠️ **Apenas Texto Grande/Negrito:** `#009424` (Verde Grama), `#00A0AF` (Turquesa Resiliente).
  * ❌ **Proibido para Texto:** `#E3E24F` (Amarelo Empoderado), `#BBD153` (Verde Corajoso), `#99D9DF` (Azul Pálido), `#00C0CA` (Água).
* **Sobre Fundo `#22404D` (Azul-Escuro Imersivo):**
  * ✅ **Permitido:** `#FFFFFF` (Branco Startup), `#C3EDEF` (Gelo Otimista), `#99D9DF` (Azul Pálido), `#E3E24F` (Amarelo Empoderado), `#BBD153` (Verde Corajoso), `#00C0CA` (Água).
* **Sobre Fundo `#BBD153` (Verde Corajoso) ou `#E3E24F` (Amarelo Empoderado) ou `#00C0CA` (Água):**
  * ✅ **Permitido:** `#22404D` (Azul-Escuro Imersivo).
  * ⚠️ **Atenção:** Evite texto branco (`#FFFFFF`) em tamanhos pequenos sobre `#00C0CA` ou `#BBD153` por baixo contraste; prefira sempre `#22404D` para textos de leitura ou use `#FFFFFF` apenas em títulos grandes/negrito sobre `#00C0CA` / `#00A0AF`.

---

## 6. Logotipo e Símbolo

O símbolo do Nexa (herdado do alinhamento global com a JA Alumni) é composto por três formas geométricas triangulares (aves/deltas) que apontam para a direita/cima, combinando **Água (`#00C0CA`)** e **Verde Corajoso (`#BBD153`)**.

### 6.1. Regras de Aplicação na Interface
* **Fundo Preferencial:** Sempre priorizar a aplicação do logotipo colorido sobre fundo **Branco Startup (`#FFFFFF`)**.
* **Variações de Cores Permitidas para o Símbolo:**
  * Sobre fundo `#FFFFFF` ou `#22404D`: Símbolo em `#00C0CA` (esquerdo) + `#BBD153` (direito).
  * Sobre fundo `#00C0CA`: Metade esquerda em `#FFFFFF` + metade direita em `#BBD153`.
  * Sobre fundo `#BBD153`: Metade esquerda em `#00C0CA` + metade direita em `#FFFFFF`.
  * **Monocromático (Positivo/Negativo):** Em fundos diversos ou imagens, usar versão monocromática em `#22404D` ou `#FFFFFF` (onde a metade direita de cada ave é 100% sólida e a metade esquerda tem **50% de opacidade**).
* **Favicon e Avatar:** O símbolo isolado em fundo branco é o padrão obrigatório para Favicon de sites e avatares.
* **Posicionamento em Layouts:**
  * **Retrato / Mobile:** Centralizado na parte inferior.
  * **Paisagem (16:9 / Desktop):** Canto inferior direito.
  * **Paisagem Ampla (Banners largos):** Alinhado à direita, centralizado verticalmente.
* **Cobranding (Parcerias):**
  * Separar o logo do Nexa e o logo do parceiro com uma linha vertical de `1px` (`#FFFFFF` em fundos escuros ou `#22404D` em fundos claros), mantendo área de proteção equivalente à largura da palavra "Nexa".
  * Se o Nexa for o **líder**, fica à **esquerda**. Se for **apoiador**, fica à **direita**.
* **Restrições Estritas (O que NUNCA fazer):**
  * Não esticar, achatar, rotacionar ou inverter o símbolo.
  * Não aplicar sombras (`drop-shadow`), brilhos ou efeitos 3D no logo.
  * Não alterar as cores oficiais do símbolo nem usar logos antigos (anteriores a 2023).

---

## 7. Fotografia, Imagens e Estilo Visual de Componentes

### 7.1. Diretrizes de Fotografia
1. **Categorias:**
   * **Retratos:** Foco em expressões faciais autênticas de jovens (alegria, concentração, confiança) com fundo desfocado ou fundo sólido nas cores da marca.
   * **Ação:** Jovens em movimento, dinâmicas de grupo, oficinas, colando post-its, pulando ou comemorando.
   * **Grupos:** Foco em diversidade (etnia, gênero, região, acessibilidade), colaboração e inclusão.
2. **Efeito Duotone (Dois Tons):**
   * Permitido e encorajado para backgrounds ou cards estilizados, combinando duas cores da paleta (ex: *Água + Turquesa*, *Turquesa + Azul-Escuro*, *Verde Corajoso + Azul*, *Amarelo + Azul*).
3. **Créditos Obrigatórios:**
   * Fotografias reais da rede devem exibir legenda/crédito sutil (ex: `"Foto: Nexa Brasil"` ou `"Foto: Nexa [Estado]"`).

### 7.2. Geometria de UI e Componentes (Stitch Guidelines)
* **Bordas Arredondadas (Border Radius):** O guia visual utiliza cantos generosamente arredondados para contêineres, cards e molduras de fotos (`border-radius: 16px` a `24px` para cards e imagens; `8px` a `12px` para botões e inputs).
* **Padrões de Fundo (Background Patterns):** Uso sutil da malha geométrica inspirada no símbolo (linhas finas formando os triângulos/hexágonos do símbolo da JA/Nexa) sobre fundos `#BBD153`, `#00C0CA` ou `#22404D`.
* **Iconografia:**
  * Usar ícones **apenas em pequenos contextos** (menus, listas de recursos, tabelas, indicadores numéricos de impacto como *"231 jovens"*, *"10 turmas"*).
  * Estilo dos ícones: **Abstratos, simples, modernos e geométricos**, utilizando preenchimentos sólidos que combinam 2 ou 3 cores da paleta (ex: `#22404D` + `#00C0CA` + `#BBD153`).
  * **Regra:** Se sentir vontade de usar um ícone muito grande para preencher espaço, **substitua-o por uma fotografia**.