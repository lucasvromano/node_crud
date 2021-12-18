# node_crud

1 - Instalar docker
2 - Instalar o yarn
3 - Rodar o comando 'yarn' na raíz do projeto
4 - Rodar o comando 'docker-compose up -d' para subir o container do docker
5 - Criar um banco de dados de acordo com as configurações do arquivo .env (neste caso usamos o postgres. O nome do banco é 'postgres' e senha '123456')
6 - Rodar o comando 'yarn typeorm migration:run' para criar o schema do banco de dados
7 - Rodar o comando 'yarn dev' para subir a aplicação