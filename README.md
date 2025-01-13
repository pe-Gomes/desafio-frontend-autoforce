# Desafio Frontend

## Rodando a aplicação

### Backend

Versão utilizada: **Ruby 3.3.5**

1. Instale as dependências `bundle install --gemfile Gemfile`
2. Rode as migrations `rails db:migrate`
3. Faça o seed do DB `rails db:seed`
4. Inicie o servidor `rails server`
5. A aplicação estará disponível em `localhost:3000`

### Frontend

1. Instale as dependências `npm install`
2. Rode a aplicação `npm run dev`
3. Acesse a aplicaçao em `localhost:5173`

## Estrutura do projeto

```plaintext
src/
├── components/         # Componentes reutilizáveis
├── hooks/              # Hooks customizados
├── pages/              # Páginas principais da aplicação
├── services/           # Integração com APIs usando Ky
├── models/             # Esquemas de validação com Zod
├── utils/              # Funções utilitárias
```

## Escolha de Bibliotecas

### TailwindCSS

- Motivo da escolha: TailwindCSS é um framework de utilitários que permite criar designs modernos e responsivos de forma rápida e eficiente, diretamente no HTML ou JSX.
- Benefícios:
  - Facilita a criação de estilos consistentes sem a necessidade de escrever CSS manualmente.
  - Promove uma abordagem de design altamente customizável, permitindo ajustes precisos através de classes utilitárias.
  - Melhora a produtividade do desenvolvimento ao reduzir o tempo gasto com a estilização de elementos.
  - Integração simples com React e excelente suporte para temas responsivos e dinâmicos.

### Radix

- Motivo da escolha: Radix oferece componentes acessíveis, modulares e altamente personalizáveis, ajudando a construir interfaces amigáveis para todos os usuários.
- Benefícios:
  - Compatível com padrões de acessibilidade (WAI-ARIA).
  - Oferece componentes base, permitindo personalização total para atender às necessidades do design do projeto.
  - Elimina a necessidade de construir componentes básicos manualmente.

### React Query

- Motivo da escolha: React Query simplifica o gerenciamento de estados assíncronos,
  especialmente aqueles relacionados a chamadas de API.
- Benefícios:
  - Manipula cache de dados de forma automática e eficiente.
  - Revalida dados em segundo plano, mantendo a interface sempre atualizada.
  - Reduz a complexidade do código ao gerenciar estados de carregamento e erro.

### Zod

- Motivo da escolha: Zod é uma biblioteca poderosa para validação e parsing de dados. Ele se integra perfeitamente com TypeScript, proporcionando segurança de tipos e validação no mesmo local.
- Benefícios:
  - Define esquemas de validação com sintaxe simples.
  - Garante que os dados manipulados no front-end estão no formato esperado.
  - Ideal para validação de formulários e respostas de APIs.

### ky

- Motivo da escolha: Ky é um cliente HTTP baseado em Fetch, com uma API simples e poderosa.
- Benefícios:
  - Pequeno e otimizado para performance.
  - Suporte a recursos avançados como retries e interceptores.
  - Integração perfeita com TypeScript, oferecendo segurança de tipos para chamadas de API.
