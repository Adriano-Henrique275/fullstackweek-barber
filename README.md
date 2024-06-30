# Adriano Henrique

<img src="https://raw.githubusercontent.com/MicaelliMedeiros/micaellimedeiros/master/image/computer-illustration.png" min-width="400px" max-width="400px" width="400px" align="right">

<p align="left"> 
  Minha jornada no desenvolvimento começou há 7 anos, e desde então tenho me dedicado intensamente ao ecossistema Javascript, explorando suas possibilidades e contribuindo para projetos inovadores.

Ao longo da minha carreira, tive a oportunidade de trabalhar em uma variedade de projetos desafiadores, desde APIs RESTful até aplicações de tempo real, sempre buscando utilizar as melhores práticas e ferramentas disponíveis.

</p>

## **Midias Sociais**

<p align="center">
<a href="https://www.facebook.com/profile.php?id=100087976275538" alt="Facebook" target="_blank"><img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white&link=https://www.facebook.com/profile.php?id=100087976275538" /></a>
<a href="https://www.instagram.com/dri3801/" alt="Instagram" target="_blank"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" /></a>
<a href="https://www.linkedin.com/in/adriano-henrique-7601b9203/" alt="Linkedin" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" /></a>
<a href="https://github.com/Adriano-Henrique275" alt="Github" target="_blank"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" /></a>
</p>

---

## Projeto - Barbearia Next.js: Agendamento Online com Prisma e Tailwind CSS

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

### Minhas skills

<div style="display: flex; gap: 10px">
<p align="left">

![Git](https://img.shields.io/badge/-Git-333333?style=flat&logo=git)
![GitHub](https://img.shields.io/badge/-GitHub-333333?style=flat&logo=github)
![Bitbucket](https://img.shields.io/badge/-Bitbucket-333333?style=flat&logo=bitbucket)
![Docker](https://img.shields.io/badge/-Docker-333333?style=flat&logo=docker)

</p>

<p align="center">

![Insomnia](https://img.shields.io/badge/-Insomnia-333333?style=flat&logo=insomnia)
![Postman](https://img.shields.io/badge/-Postman-333333?style=flat&logo=postman)

</p>

<p align="right">

![JavaScript](https://img.shields.io/badge/-JavaScript-333333?style=flat&logo=javascript)
![HTML5](https://img.shields.io/badge/-HTML5-333333?style=flat&logo=HTML5)
![CSS](https://img.shields.io/badge/-CSS-333333?style=flat&logo=CSS3&logoColor=1572B6)

![React](https://img.shields.io/badge/-React-333333?style=flat&logo=react)
![React Native](https://img.shields.io/badge/-React%20Native-333333?style=flat&logo=react)
![Jest](https://img.shields.io/badge/-Jest-333333?style=flat&logo=jest)
![MySQL](https://img.shields.io/badge/-MySQL-333333?style=flat&logo=mysql)

</p>

</div>

---

### Onde me encontrar

[![Linkedin](https://img.shields.io/badge/-Adriano_Henrique-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/adriano-henrique-7601b9203/)](https://www.linkedin.com/in/adriano-henrique-7601b9203/)
[![Gmail Badge](https://img.shields.io/badge/-adriano.henrique275@gmail.com-006bed?style=flat-square&logo=Gmail&logoColor=white&link=mailto:Sadriano.henrique275@gmail.com)](mailto:adriano.henrique275@gmail.com)
[![GitHub](https://img.shields.io/github/followers/iuricode?label=follow&style=social)](https://github.com/Adriano-Henrique275)
