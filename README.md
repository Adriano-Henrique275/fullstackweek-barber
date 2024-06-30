# Barbearia Next.js: Agendamento Online com Prisma e Tailwind CSS

**Descrição:**

Este projeto oferece uma solução completa para gerenciamento de agendamentos em barbearias, utilizando as seguintes tecnologias:

- **Next.js:** Framework React para renderização do lado do servidor e do cliente, permitindo uma experiência de usuário rápida e responsiva.
- **Prisma:** ORM (Object-Relational Mapping) para interação eficiente com o banco de dados PostgreSQL, facilitando a manipulação de dados e a definição de schema.
- **Tailwind CSS:** Framework CSS utilitário para criar interfaces elegantes e personalizáveis com rapidez e facilidade.

## Explicação das configurações do Docker Compose

- **services:**
- app:
  build: Instrui o Docker Compose a construir a imagem da aplicação a partir do diretório atual (.).
  ports: Exibe a porta 3000 do container da aplicação para a porta 3000 da sua máquina.
  depends_on: Indica que o container da aplicação depende do container do banco de dados (db) para iniciar.
- db:
  image: Utiliza a imagem oficial do PostgreSQL 14.0.
  environment: Define as variáveis de ambiente POSTGRES_PASSWORD e POSTGRES_DB para o banco de dados.
- volumes: Monta o volume postgres-data no diretório /var/lib/postgresql/data dentro do container, persistindo os dados do banco de dados.
- volumes:
- postgres-data: Define um volume nomeado postgres-data para armazenar os dados do banco de dados de forma persistente.

**Funcionalidades:**

- **Agendamento online:** Clientes podem visualizar horários disponíveis, selecionar serviços desejados e agendar seus atendimentos diretamente no site.
- **Gerenciamento de clientes:** Crie e gerencie perfis de clientes, incluindo informações de contato, histórico de agendamentos e preferências.
- **Gerenciamento de serviços:** Defina e gerencie os serviços oferecidos pela barbearia, incluindo preços, tempo de duração e descrição.
- **Painel administrativo:** Acesse um painel administrativo completo para visualizar e gerenciar agendamentos, clientes, serviços e configurações da barbearia.
- **Design responsivo:** O aplicativo é responsivo e se adapta perfeitamente a diferentes dispositivos, desde desktops até smartphones.

**Instalação:**

**1. Clone o repositório:**

```bash
git clone https://github.com/Adriano-Henrique275/fullstackweek-barber.git
```

**2. Instale as dependências:**

```bash
npm install
```

**3. Configure o banco de dados:**

Crie um arquivo `.env` na raiz do projeto e defina as variáveis de ambiente para conexão com o banco de dados PostgreSQL. Por exemplo:

```bash
DATABASE_URL=postgres://usuario:senha@localhost:5432/barbearia
```

**4. Rode a aplicação:**

```bash
npm run dev
```

**Acesse a aplicação:**

Abra seu navegador e acesse `http://localhost:3000` para visualizar a aplicação.

**Observações:**

Certifique-se de substituir password por uma senha forte para o seu banco de dados no arquivo docker-compose.yml.
Você pode personalizar as configurações do Docker Compose de acordo com suas necessidades.
Para mais informações sobre o Docker Compose, consulte a documentação oficial: `https://docs.docker.com/compose/`

**Contribuição:**

Sinta-se à vontade para contribuir com este projeto! Envie suas sugestões, pull requests e issues no GitHub.

**Licença:**

Este projeto está licenciado sob a licença MIT.
