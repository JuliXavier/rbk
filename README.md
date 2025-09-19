# 🏗️ RBK Escavadeiras - Website

Site oficial da **RBK Escavadeiras**, empresa especializada em mini escavadeiras e implementos hidráulicos em Gaspar, SC.

## 📋 Sobre o Projeto

Website responsivo desenvolvido em HTML5, CSS3 e JavaScript vanilla, apresentando os produtos e serviços da empresa de forma moderna e profissional.

### ✨ Recursos Implementados

- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Hero Section**: Seção principal impactante com call-to-action
- **Carrossel de Produtos**: Navegação interativa com imagens dos equipamentos
- **Menu Mobile**: Navegação hambúrguer para dispositivos móveis
- **WhatsApp Integration**: Botão flutuante para contato direto
- **Smooth Scrolling**: Navegação suave entre seções
- **Animações**: Efeitos visuais nas transições e scroll
- **SEO Otimizado**: Meta tags e estrutura semântica
- **Performance**: Lazy loading e otimizações de carregamento

### 🎨 Design

- **Tema Escuro**: Fundo #0f1720 para destaque visual
- **Cor de Destaque**: Amarelo #ffd700 para botões e elementos importantes
- **Tipografia**: System fonts para melhor performance
- **Layout**: Grid moderno e clean

## 📁 Estrutura de Arquivos

```
/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidades JavaScript
└── README.md           # Documentação
```

## 🚀 Como Usar

### Hospedagem Local
1. Baixe todos os arquivos
2. Abra `index.html` em qualquer navegador moderno
3. O site funcionará completamente offline

### Upload para Hospedagem
1. Faça upload de todos os arquivos para o diretório raiz do seu servidor
2. Configure o domínio para apontar para o arquivo `index.html`
3. Pronto! O site estará online

## 🛠️ Personalização

### Trocar Imagens
Para substituir as imagens, edite as URLs no arquivo `index.html` e `script.js`:

**Hero Section (Linha ~26):**
```html
<img src="SUA_IMAGEM_AQUI" alt="Escavadeira RBK trabalhando">
```

**Carrossel de Produtos (Linhas ~67, ~91, ~115, ~139):**
```html
<img src="SUA_IMAGEM_PRODUTO_1" alt="Produto - Imagem 1">
<img src="SUA_IMAGEM_PRODUTO_2" alt="Produto - Imagem 2">
```

### Alterar Contatos
Edite as informações de contato no arquivo `index.html` (seção Contact):

```html
<!-- Linha ~180 -->
<p class="info-text">R. Augusto Zimmermann, 55 – Gaspar, SC, 89111-455</p>
<p class="info-text">WhatsApp: (47) 3513-0720</p>
<p class="info-text">E-mail: comercialrbmak@gmail.com</p>
```

### Configurar WhatsApp
No arquivo `script.js`, altere o número do WhatsApp (linha ~95):

```javascript
const phoneNumber = '5547351307202'; // Seu número aqui
```

## 🌐 Recursos Adicionais

### SEO
- Meta tags otimizadas
- Open Graph para redes sociais
- Schema.org structured data
- Sitemap ready

### Performance
- Lazy loading de imagens
- CSS e JS minificados
- Preload de recursos críticos
- Otimização de animações

### Acessibilidade
- Navegação por teclado
- Alt texts em imagens
- Contraste adequado
- Labels semânticos

## 📱 Compatibilidade

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers

## 📞 Suporte

Para dúvidas ou suporte técnico:
- **Email**: comercialrbmak@gmail.com
- **WhatsApp**: (47) 3513-0720

---

© 2025 RBK Escavadeiras. Todos os direitos reservados.